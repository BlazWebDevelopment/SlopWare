<div align="center">

<img src="docs/icon.png" alt="SlopWare app icon" width="148">

# SlopWare

### Games for a more productive tomorrow™

**The next-gen game platform where every game is coming soon.**<br>
Browse it. Wishlist it. Create an account. Download… absolutely nothing. Yet.

<br>

![Status](https://img.shields.io/badge/status-coming%20soon-b8f03a?style=for-the-badge&labelColor=111318)
![Downloads](https://img.shields.io/badge/downloads-0-f3e600?style=for-the-badge&labelColor=111318)
![Servers](https://img.shields.io/badge/servers-being%20fed-ff5d9e?style=for-the-badge&labelColor=111318)

![Vanilla JS](https://img.shields.io/badge/vanilla-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=111318)
![Firebase Auth](https://img.shields.io/badge/auth-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=FFCA28&labelColor=111318)
![No build step](https://img.shields.io/badge/build%20step-none-3fe0f0?style=flat-square&labelColor=111318)
![Responsive](https://img.shields.io/badge/mobile-ready-9d7bff?style=flat-square&labelColor=111318)

<br>

<img src="docs/banner.png" alt="SlopWare — Cyberpunk 77 coming soon" width="100%">

<sub>

[What is this?](#-whats-the-point) ·
[Tour](#-take-the-tour) ·
[How it works](#-how-it-works) ·
[Quick start](#-quick-start) ·
[Sign-in setup](#-turn-on-sign-in-google--email) ·
[Add a game](#-add-your-own-game) ·
[FAQ](#-faq)

</sub>

</div>

<br>

## 🖥️ One look, two places

SlopWare started life as a desktop launcher. This repo is its home on the web: the same logo, the same sidebar, the same moody Cyberpunk 77 banner, and the same sleepy cat in the corner. The website is designed to feel like you've opened the app itself.

<div align="center">
  <img src="docs/desktop-app.png" alt="The SlopWare desktop app running on Windows 11" width="88%">
  <br>
  <sub><b>The SlopWare desktop app on Windows 11.</b> The website below is built to match it.</sub>
</div>

<br>

<div align="center">
  <img src="docs/screenshots/home.png" alt="SlopWare website home page" width="88%">
  <br>
  <sub><b>The SlopWare website.</b> Same games. More slop.</sub>
</div>

<br>

## 🤔 What's the point?

Every big game launch has the same ritual: a gorgeous store page, a countdown, a spinner that says the servers are *almost* ready, and a "Download" button you can't press. SlopWare is that ritual turned into an entire platform.

- 🎮 **It looks like a real next-gen game store.** Polished storefront, game pages, screenshots, system requirements, wishlists, a community feed, accounts. Nothing about it looks like a joke at first glance.
- ⏳ **But everything is coming soon.** Every game, every download button, even the desktop app installer. Click "Download" and you get a progress bar that confidently reaches 3% and then politely pauses.
- 📅 **And there's always more coming.** A new game is announced *every single day*, with a live countdown to the next drop. The hype never stops. The downloads never start.
- 🔐 **Accounts are real, though.** Sign in with Google or sign up with email, so SlopWare doubles as a working pre-launch waitlist: people can browse, wishlist and register before anything ships.

It's part parody of launch-day hype culture and part production-quality template for a pre-launch storefront. Use it to laugh, or to build hype for your own thing.

<br>

## 📸 Take the tour

### 🌆 Cyberpunk 77, greyed out until the servers are full

The flagship title. On the home page it's the full-colour featured banner, just like in the desktop app. In the store and on its own page, its art is **greyed out with a big "COMING SOON" stamp**, because it isn't available to download yet. Every button is there: Coming Soon (locked), Add to Wishlist, Notify me.

<img src="docs/screenshots/game.png" alt="Cyberpunk 77 game page, greyed out with a Coming Soon stamp" width="100%">

<br>

### ⬇️ The download that never finishes

Every download button opens this. Contacting servers… feeding the servers… **3%… Paused.** Waiting to go online — coming soon.

<img src="docs/screenshots/download.png" alt="Coming soon download modal with a progress bar stuck at 3%" width="100%">

<br>

### 🛒 The Store

Eight upcoming games, genre filters, sorting and live search. All "Coming Soon". All wishlistable.

<img src="docs/screenshots/store.png" alt="SlopWare store page with game grid and genre filters" width="100%">

<table>
  <tr>
    <td align="center"><img src="assets/cp77-cover.jpg" width="120"><br><sub><b>Cyberpunk 77</b></sub></td>
    <td align="center"><img src="assets/cover-gta.jpg" width="120"><br><sub><b>Grand Theft Avocado</b></sub></td>
    <td align="center"><img src="assets/cover-elden.jpg" width="120"><br><sub><b>Elden Ring Doorbell</b></sub></td>
    <td align="center"><img src="assets/cover-halflife.jpg" width="120"><br><sub><b>Half-Life 2.5</b></sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/cover-goose.jpg" width="120"><br><sub><b>Goose Simulator: Office Edition</b></sub></td>
    <td align="center"><img src="assets/cover-starfield.jpg" width="120"><br><sub><b>Starfield of Spreadsheets</b></sub></td>
    <td align="center"><img src="assets/cover-minecrumb.jpg" width="120"><br><sub><b>Minecrumb</b></sub></td>
    <td align="center"><img src="assets/cover-laundry.jpg" width="120"><br><sub><b>Dark Souls of Laundry</b></sub></td>
  </tr>
</table>

<br>

### 📅 More games coming every day…

A new title is announced every day at midnight (your local time). Today's and tomorrow's drops are revealed, and the rest of the week is blurred and locked. A live countdown ticks down to the next one.

<img src="docs/screenshots/daily.png" alt="Daily drops section with countdown and upcoming locked games" width="100%">

<br>

### 🔐 Sign in with Google or email

Real authentication powered by **Firebase Auth**: one-click Google sign-in, email sign-up with verification, password reset, and a proper account menu once you're in.

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/signin.png" alt="Sign in modal with Continue with Google"></td>
    <td width="50%"><img src="docs/screenshots/signup.png" alt="Create account modal with email sign-up"></td>
  </tr>
  <tr>
    <td align="center"><sub><b>Sign in</b> · Google or email + password</sub></td>
    <td align="center"><sub><b>Create account</b> · verification email sent automatically</sub></td>
  </tr>
</table>

<br>

### 📱 Fits in your pocket

Fully responsive. On phones the sidebar becomes a bottom tab bar, just like a native app.

<img src="docs/screenshots/mobile.png" alt="SlopWare on mobile: home, Cyberpunk 77 and store" width="100%">

<br>

## ✨ Feature list

| | Feature | Details |
|---|---|---|
| 🏠 | **Home** | Featured Cyberpunk 77 banner, "Coming Online…" status with rotating server messages, screenshot lightbox, live stats |
| 🛒 | **Store** | Genre chips, sorting (upcoming, A–Z, wishlisted first), live search with keyboard navigation |
| 🎮 | **Game pages** | Media gallery, cover, release info, about, system requirements, features, reviews ("nobody can play it yet") |
| ⬇️ | **Downloads** | Every download is intentionally disabled and opens the "coming soon" modal with a stalled progress bar |
| 📅 | **Daily drops** | Deterministic daily rotation from a pool of 30 titles, midnight countdown, auto-refresh when a new day starts |
| ❤️ | **Wishlist & notify** | Saved per browser; wishlisted games show up in your Library |
| 💬 | **Community** | Feed with likes, friends list, trending tags; posting requires an account |
| 🔐 | **Auth** | Google sign-in, email sign-up with verification, password reset, account menu, sign out |
| ⚙️ | **Settings** | Account section plus toggles that actually persist (including hiding the sleepy cat, if you're a monster) |
| ⌨️ | **Keyboard** | `/` focuses search · `↑` `↓` `Enter` in results · `Esc` closes dialogs |
| 📱 | **Responsive** | Desktop sidebar → mobile bottom tab bar; respects `prefers-reduced-motion` |

<br>

## 🔧 How it works

SlopWare is a **zero-build, single-page app**: plain HTML, CSS and JavaScript. No framework, no bundler, no `node_modules`. Open it with any static file server and it just runs.

```mermaid
flowchart LR
    HTML["index.html<br/>app shell: top bar, sidebar, modal"] --> APP["js/app.js<br/>router · views · state"]
    HTML --> AUTH["js/auth.js<br/>ES module"]
    AUTH -->|"lazy import"| FB[("Firebase Auth 13<br/>gstatic CDN")]
    AUTH -->|"window.SlopAuth"| APP
    AUTH -->|"slop:auth event"| APP
    APP --> LS[("localStorage<br/>slopware:*")]
    CFG["js/firebase-config.js"] --> AUTH
```

### 🧭 Routing

A tiny hash router in `app.js` maps URLs to view functions that return HTML strings:

| Route | View |
|---|---|
| `#/` | Home |
| `#/store` · `#/store?q=goose&genre=RPG` | Store (with search & filter) |
| `#/game/:id` | Game page, e.g. `#/game/cyberpunk-77` |
| `#/library` | Library & wishlist |
| `#/community` | Community feed |
| `#/settings` | Account & preferences |

All interaction runs through **one delegated click handler** keyed on `data-action` attributes (`download`, `wishlist`, `notify`, `open-auth`, `sign-out`, …), so views can be re-rendered freely without re-binding events.

### ⬇️ The download "pipeline"

```mermaid
sequenceDiagram
    actor You
    participant SW as SlopWare
    participant S as The Servers
    You->>SW: Click "Download"
    SW->>S: Contacting servers...
    S-->>SW: *chewing*
    SW-->>You: Feeding the servers... 3%
    SW-->>You: Paused · Waiting to go online — coming soon
    You->>SW: Notify me when it's live
    SW-->>You: We'll ping you. Eventually.
```

### 📅 Daily drops

No server, no cron job. Each day gets a stable number (days since 1970 in your local timezone), and the title is `DROP_POOL[(day + offset) % DROP_POOL.length]`. Everyone sees the same game on the same day, it changes at midnight, and the "games announced" counter grows by one every day since launch.

### 🔐 Authentication

`js/auth.js` is an ES module that **lazily imports the Firebase Auth SDK from Google's CDN** only when a config is present. It exposes a small API on `window.SlopAuth` and broadcasts every sign-in state change as a `slop:auth` event, which `app.js` listens to in order to update the top bar, account menu, Settings and Community.

```js
SlopAuth.signInWithGoogle()                   // popup, auto-fallback to redirect
SlopAuth.signUpWithEmail(name, email, pass)   // + sends a verification email
SlopAuth.signInWithEmail(email, pass)
SlopAuth.resetPassword(email)
SlopAuth.resendVerification()
SlopAuth.signOut()
```

Because auth lives in its own module, the rest of the site keeps working even if Firebase is offline or not configured yet. Users just see a friendly message in the sign-in dialog.

### 💾 What's stored where

| Data | Where |
|---|---|
| Accounts, sessions, email verification | Firebase Authentication |
| Wishlist, notify list, likes, community posts, settings | Browser `localStorage` under `slopware:*` keys |

<br>

## 🚀 Quick start

```bash
git clone <your-repo-url> SlopWare
cd SlopWare
npx http-server -p 5173 -c-1
```

Open **http://localhost:5173**. That's it.

> [!NOTE]
> Serve the folder over http rather than double-clicking `index.html`. Browsing works either way, but sign-in (ES modules + Google popups) needs a real origin.

<br>

## 🔑 Turn on sign-in (Google + email)

Out of the box, sign-in shows a "not connected yet" notice. To make it live:

1. Create a project in the [Firebase console](https://console.firebase.google.com) and add a **Web app**.
2. Paste its config into [`js/firebase-config.js`](js/firebase-config.js):

   ```js
   export const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project",
     appId: "1:1234567890:web:abc123",
   };
   ```

3. In **Authentication → Sign-in method**, enable **Google** and **Email/Password**.
4. When you deploy, add your domain under **Authentication → Settings → Authorized domains** (`localhost` is allowed by default).

> [!TIP]
> The Firebase `apiKey` is designed to be public. It identifies your project and isn't a secret, so committing it is fine.

<br>

## 🎮 Add your own game

Games live in the `GAMES` array at the top of [`js/app.js`](js/app.js). Drop a cover into `assets/` and add an entry:

```js
{
  id: "my-cool-game",                 // used in the URL: #/game/my-cool-game
  title: "My Cool Game",
  dev: "Slop Studios",
  publisher: "SlopWare Publishing",
  cover: "assets/cover-my-cool-game.jpg",   // 3:4 portrait art
  genres: ["Action", "Comedy"],
  release: "Q3 2027",
  blurb: "One-line pitch shown on the game page.",
  about: ["Paragraph one.", "Paragraph two."],
  features: ["Single-player", "Controller support"],

  // optional
  hero: "assets/my-hero.jpg",               // wide art for banners
  shots: ["assets/shot1.jpg", "assets/shot2.jpg"],
  grey: true,                               // greyscale art + COMING SOON stamp
  reqs: { min: { OS: "…" }, rec: { OS: "…" } },
}
```

It instantly shows up on the home page, in the store, in search and in genre filters. To add more **daily drop** titles, append `["Title", "Genre"]` pairs to `DROP_POOL`.

<br>

## 🗂️ Project structure

```
SlopWare/
├── index.html              App shell: top bar, sidebar, modal, toast
├── css/
│   └── styles.css          The whole look: dark panels, lime accent, responsive layout
├── js/
│   ├── app.js              Game data, router, views, search, modals, daily drops
│   ├── auth.js             Firebase Auth wrapper → window.SlopAuth + slop:auth events
│   └── firebase-config.js  Your Firebase project config
├── assets/                 Mascot, Cyberpunk 77 art, game covers, screenshots
└── docs/                   Images used in this README
```

<br>

## 🌍 Deploy

It's a static site, so it runs anywhere:

- **GitHub Pages**: Settings → Pages → deploy from branch, root folder.
- **Netlify / Cloudflare Pages / Vercel**: point at the repo, no build command, publish directory `/`.

Then add the domain to Firebase's authorized domains and you're live.

<br>

## 🗺️ Roadmap

- [x] Storefront, game pages and search
- [x] Cyberpunk 77 "coming soon" experience
- [x] More games coming every day
- [x] Sign in with Google and email
- [x] Mobile layout
- [ ] Sync wishlists to your account
- [ ] SlopWare desktop app downloads
- [ ] Actual games
- [ ] Finish feeding the servers

<br>

## ❓ FAQ

<details>
<summary><b>Can I download Cyberpunk 77?</b></summary>
<br>
No. The servers are being fed. Wishlist it and hit "Notify me".
</details>

<details>
<summary><b>Can I download anything?</b></summary>
<br>
Also no. Every download is coming soon. That's the whole point.
</details>

<details>
<summary><b>Then why can I create an account?</b></summary>
<br>
Because the account part is real. SlopWare works as a pre-launch waitlist: you're signed up and ready for the day things go online.
</details>

<details>
<summary><b>Is a new game really announced every day?</b></summary>
<br>
Yes. A fresh title rotates in every midnight, and the countdown on the home page tells you exactly when.
</details>

<details>
<summary><b>Why is the progress bar stuck at 3%?</b></summary>
<br>
The servers asked for seconds.
</details>

<br>

## ⚖️ Legal-ish

SlopWare is a **parody**. All games, studios and titles shown are fictional jokes, and nothing is actually for sale or download. SlopWare is not affiliated with any real game company, platform or publisher, who are probably confused.

<br>

<div align="center">

<img src="assets/sleepy-cat.jpg" alt="Sleeping cat" width="200">

**Same games. More slop.**

<sub>Made with neon, nonsense and a cat who refuses to wake up.</sub>

</div>
