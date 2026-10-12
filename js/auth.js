import { firebaseConfig } from "./firebase-config.js";

const SDK = "https://www.gstatic.com/firebasejs/13.0.0";
const configured = Boolean(firebaseConfig.apiKey) && !firebaseConfig.apiKey.startsWith("YOUR_");

const MESSAGES = {
  "slop/not-configured": "Sign-in isn't set up yet. Add your Firebase config to js/firebase-config.js.",
  "slop/unavailable": "Sign-in couldn't load. Check your connection and refresh.",
  "auth/invalid-email": "That email doesn't look right.",
  "auth/missing-email": "Enter your email first.",
  "auth/missing-password": "Enter your password.",
  "auth/weak-password": "Password needs at least 6 characters.",
  "auth/email-already-in-use": "An account with this email already exists. Try signing in instead.",
  "auth/invalid-credential": "Wrong email or password.",
  "auth/invalid-login-credentials": "Wrong email or password.",
  "auth/wrong-password": "Wrong email or password.",
  "auth/user-not-found": "Wrong email or password.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/too-many-requests": "Too many attempts. Take a nap and try again in a bit.",
  "auth/network-request-failed": "Network error. Check your connection and try again.",
  "auth/popup-blocked": "Your browser blocked the Google popup. Allow popups and try again.",
  "auth/unauthorized-domain": "This domain isn't authorized in Firebase (Authentication → Settings → Authorized domains).",
  "auth/operation-not-allowed": "This sign-in method isn't enabled in the Firebase console.",
  "auth/account-exists-with-different-credential": "This email is already registered with a different sign-in method.",
};

const SILENT = new Set(["auth/popup-closed-by-user", "auth/cancelled-popup-request", "auth/user-cancelled"]);

let state = { known: false, user: null };

function toUser(u) {
  if (!u) return null;
  return {
    uid: u.uid,
    name: u.displayName || (u.email ? u.email.split("@")[0] : "Player"),
    email: u.email || "",
    photo: u.photoURL || "",
    verified: u.emailVerified,
    provider: u.providerData[0]?.providerId || "password",
  };
}

function emit(user) {
  state = { known: true, user: toUser(user) };
  window.dispatchEvent(new CustomEvent("slop:auth", { detail: state.user }));
}

const ready = configured
  ? (async () => {
      const [{ initializeApp }, mod] = await Promise.all([import(`${SDK}/firebase-app.js`), import(`${SDK}/firebase-auth.js`)]);
      const auth = mod.getAuth(initializeApp(firebaseConfig));
      auth.useDeviceLanguage();
      mod.onAuthStateChanged(auth, emit);
      mod.getRedirectResult(auth).catch((err) => console.warn("Redirect sign-in failed", err));
      return { auth, mod };
    })().catch((err) => {
      console.error("Firebase Auth failed to load", err);
      emit(null);
      return null;
    })
  : Promise.resolve(null);

async function need() {
  const fb = await ready;
  if (!fb) throw Object.assign(new Error("Auth unavailable"), { code: configured ? "slop/unavailable" : "slop/not-configured" });
  return fb;
}

async function signInWithGoogle() {
  const { auth, mod } = await need();
  const provider = new mod.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    return toUser((await mod.signInWithPopup(auth, provider)).user);
  } catch (err) {
    if (err.code === "auth/popup-blocked" || err.code === "auth/operation-not-supported-in-this-environment") {
      await mod.signInWithRedirect(auth, provider);
      return null;
    }
    throw err;
  }
}

async function signUpWithEmail(name, email, password) {
  const { auth, mod } = await need();
  const { user } = await mod.createUserWithEmailAndPassword(auth, email, password);
  if (name) await mod.updateProfile(user, { displayName: name });
  mod.sendEmailVerification(user).catch((err) => console.warn("Verification email failed", err));
  emit(auth.currentUser);
  return toUser(auth.currentUser);
}

async function signInWithEmail(email, password) {
  const { auth, mod } = await need();
  return toUser((await mod.signInWithEmailAndPassword(auth, email, password)).user);
}

async function resetPassword(email) {
  const { auth, mod } = await need();
  await mod.sendPasswordResetEmail(auth, email);
}

async function resendVerification() {
  const { auth, mod } = await need();
  if (auth.currentUser) await mod.sendEmailVerification(auth.currentUser);
}

async function signOut() {
  const { auth, mod } = await need();
  await mod.signOut(auth);
}

function describeError(err) {
  if (SILENT.has(err?.code)) return null;
  return MESSAGES[err?.code] || "Something went wrong. Please try again.";
}

window.SlopAuth = {
  configured,
  get state() { return state; },
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmail,
  resetPassword,
  resendVerification,
  signOut,
  describeError,
};
if (!configured) emit(null);
