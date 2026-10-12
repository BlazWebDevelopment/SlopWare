(() => {
  "use strict";

  /* ================= Data ================= */

  const LAUNCH_DATE = new Date(2026, 5, 12);

  const DEFAULT_REQS = {
    min: { OS: "Windows 10 (64-bit)", CPU: "Any potato with ambition", RAM: "8 GB", GPU: "Something with a fan", Storage: "40 GB" },
    rec: { OS: "Windows 11 (64-bit)", CPU: "A slightly larger potato", RAM: "16 GB", GPU: "Something with two fans", Storage: "40 GB SSD" },
  };

  const GAMES = [
    {
      id: "cyberpunk-77",
      title: "Cyberpunk 77",
      dev: "CD Projekt Slop",
      publisher: "SlopWare Originals",
      cover: "assets/cp77-cover.jpg",
      hero: "assets/cp77-hero.jpg",
      shots: ["assets/cp77-hero.jpg", "assets/cp77-shot1.jpg", "assets/cp77-shot2.jpg", "assets/cp77-shot3.jpg"],
      genres: ["Open World", "RPG", "Cyberpunk"],
      release: "TBA",
      grey: true,
      blurb: "Night City, but everyone is a cat. An open-world action RPG with more neon and more nothing.",
      about: [
        "Cyberpunk 77 drops you into Slop City, a megacity obsessed with power, glamour and body modification. You play as V, a mercenary cat with a cigarette, a bad attitude and a jacket that glows for no reason.",
        "Explore a vast city where every billboard promises a better tomorrow and every alley delivers a worse today. Hack, sneak, nap and knock things off tables in a story shaped entirely by your choices — or by whichever choice the servers decide to load.",
        "The servers are currently being fed. Once they're full, the city goes online.",
      ],
      features: ["Single-player", "Open world", "Controller support", "Cloud saves", "Achievements", "4K & HDR"],
      reqs: {
        min: { OS: "Windows 10 (64-bit)", CPU: "Intel Core i5-8400 / Ryzen 5 2600", RAM: "12 GB", GPU: "GTX 1060 6 GB / RX 580", Storage: "77 GB SSD" },
        rec: { OS: "Windows 11 (64-bit)", CPU: "Intel Core i7-12700 / Ryzen 7 7800X3D", RAM: "16 GB", GPU: "RTX 3070 / RX 6800 XT", Storage: "77 GB NVMe SSD" },
      },
    },
    {
      id: "grand-theft-avocado",
      title: "Grand Theft Avocado",
      dev: "Tropical Mischief Games",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-gta.jpg",
      genres: ["Open World", "Action", "Driving"],
      release: "Q1 2027",
      blurb: "Palm trees. Crimes. Guacamole. Cruise Vice City in a pink convertible and become the most wanted fruit on the coast.",
      about: [
        "Rise from humble pit to criminal kingpin in a sun-soaked city of sunsets, synthwave and questionable toast-based business ventures.",
        "Steal cars, run a smoothie empire, and try not to get mashed.",
      ],
      features: ["Single-player", "Online co-op", "Open world", "Controller support"],
    },
    {
      id: "elden-ring-doorbell",
      title: "Elden Ring Doorbell",
      dev: "FromSlop Software",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-elden.jpg",
      genres: ["Souls-like", "RPG", "Fantasy"],
      release: "Q2 2027",
      blurb: "Rise, Tarnished, and ring the bell. Nobody answers. You will die trying anyway.",
      about: [
        "A vast dark fantasy world waits behind one enormous door. All you have to do is ring the doorbell. The doorbell is guarded by everything.",
        "Features 140 bosses, 1 doorbell and an optional delivery-driver questline.",
      ],
      features: ["Single-player", "Online co-op", "Achievements", "Controller support"],
    },
    {
      id: "half-life-2-5",
      title: "Half-Life 2.5",
      dev: "Halve Corporation",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-halflife.jpg",
      genres: ["Shooter", "Sci-Fi", "Cats"],
      release: "When it's ready",
      blurb: "A cat-science adventure. Grab the crowbar, mind the portal, and finally get half of what you were promised.",
      about: [
        "Dr. Whiskers wakes up in a research facility that has once again opened a portal it really shouldn't have.",
        "Physics puzzles, alien invaders and an unhealthy relationship with cardboard boxes.",
      ],
      features: ["Single-player", "Physics-based puzzles", "Mod support", "Controller support"],
    },
    {
      id: "goose-simulator-office",
      title: "Goose Simulator: Office Edition",
      dev: "QuackSoft Games",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-goose.jpg",
      genres: ["Simulation", "Comedy"],
      release: "Spring 2027",
      blurb: "Be the honk. Ruin the day. Wreak havoc in an open-plan office and clock out never.",
      about: [
        "It's Monday at Synergy Corp, and you are a horrible goose in a necktie. Steal staplers, interrupt meetings and reply-all to everything.",
        "Includes a full to-do list of crimes and a surprisingly emotional printer subplot.",
      ],
      features: ["Single-player", "Local co-op", "Achievements"],
    },
    {
      id: "starfield-of-spreadsheets",
      title: "Starfield of Spreadsheets",
      dev: "Quasar Interactive",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-starfield.jpg",
      genres: ["Space", "Simulation", "Productivity"],
      release: "Summer 2027",
      blurb: "Explore. Calculate. Procrastinate. A thousand planets and every single one needs a pivot table.",
      about: [
        "Pilot your ship across a galaxy of procedurally generated planets and procedurally generated budget reviews.",
        "Outfit your vessel, recruit a crew and balance the most dangerous ledger in the known universe.",
      ],
      features: ["Single-player", "Open world", "Mod support", "Ultrawide support"],
    },
    {
      id: "minecrumb",
      title: "Minecrumb",
      dev: "Crumbjang Studios",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-minecrumb.jpg",
      genres: ["Sandbox", "Survival"],
      release: "Fall 2027",
      blurb: "Dig. Craft. Spread. A blocky world made entirely of bread — and you brought a butter-knife pickaxe.",
      about: [
        "Mine sourdough, craft baguette armor and build a toast castle before the night falls and the pigeons come out.",
        "Endless procedurally generated loaves. Gluten-free mode included.",
      ],
      features: ["Single-player", "Online multiplayer", "Mod support", "Cross-play"],
    },
    {
      id: "dark-souls-of-laundry",
      title: "Dark Souls of Laundry",
      dev: "FromSoftener",
      publisher: "SlopWare Publishing",
      cover: "assets/cover-laundry.jpg",
      genres: ["Souls-like", "Action", "Chores"],
      release: "2027",
      blurb: "In a land of stain and shadow, every load is a curse. Face the pile. Separate your colors. Die.",
      about: [
        "The pile has grown. It has eyes now. Armed with a sword and a single bonfire, you must sort, wash and fold your way through a gothic laundromat.",
        "Notoriously difficult. The sock boss has never been beaten.",
      ],
      features: ["Single-player", "Online invasions", "Achievements", "Controller support"],
    },
  ];

  const DROP_POOL = [
    ["Call of Duty: Jury Duty", "Shooter"],
    ["Portal to Monday", "Puzzle"],
    ["Hollow Kneecap", "Metroidvania"],
    ["The Elder Scrolls VI: Still Loading", "RPG"],
    ["God of Warranty", "Action"],
    ["Stardew Valley Parking", "Simulation"],
    ["Microsoft Flight Delay Simulator", "Simulation"],
    ["Silent Hill: Quiet Quitting", "Horror"],
    ["Among Us (In Accounting)", "Party"],
    ["Overcooked Pasta", "Co-op"],
    ["Baldur's Gate 4: Gatekept", "RPG"],
    ["Red Dead Retirement", "Open World"],
    ["Hades: Customer Service", "Roguelike"],
    ["Animal Crossing the Street", "Life Sim"],
    ["Resident Evil: HOA", "Horror"],
    ["Rocket League of Legends", "Sports"],
    ["Death Stranding in Line at the DMV", "Adventure"],
    ["Doom Scroll Eternal", "Shooter"],
    ["The Sims 5: Rent Edition", "Life Sim"],
    ["No Man's Sky Lease", "Space"],
    ["It Takes Two Meetings", "Co-op"],
    ["Disco Elysium: Tax Season", "RPG"],
    ["Lethal Compliance", "Horror"],
    ["Palworld of Paperwork", "Survival"],
    ["Mario Kart: Commute", "Racing"],
    ["Terraria Mortgage", "Sandbox"],
    ["Sea of Thieves (Office Snacks)", "Adventure"],
    ["Fall Guys Who Actually Fell", "Party"],
    ["Untitled Sock Game", "Puzzle"],
    ["Super Smash Dishes", "Fighting"],
  ];

  const DROP_GRADIENTS = [
    "linear-gradient(135deg,#b8f03a,#1d2027 70%)",
    "linear-gradient(135deg,#3fe0f0,#1d2027 70%)",
    "linear-gradient(135deg,#f3e600,#1d2027 70%)",
    "linear-gradient(135deg,#ff5d9e,#1d2027 70%)",
    "linear-gradient(135deg,#9d7bff,#1d2027 70%)",
    "linear-gradient(135deg,#ff8a3d,#1d2027 70%)",
  ];

  const FEED_SEED = [
    { user: "nightcity_kitty", color: "#f3e600", time: "4 min ago", text: "Refreshed the Cyberpunk 77 page 41 times today. Servers still being fed. Respect the process.", likes: 128 },
    { user: "honk.exe", color: "#b8f03a", time: "22 min ago", text: "Goose Simulator Office Edition is the only game that accurately simulates my Monday.", likes: 87 },
    { user: "tarnished_but_tidy", color: "#3fe0f0", time: "1 hour ago", text: "Confirmed: the Dark Souls of Laundry sock boss is based on a real sock. Nobody has found its pair.", likes: 203 },
    { user: "avo_kingpin", color: "#ff5d9e", time: "3 hours ago", text: "A new game gets announced here every single day. I have never been this excited to download absolutely nothing.", likes: 342 },
  ];

  const FRIENDS = [
    { name: "nightcity_kitty", status: "Waiting for Cyberpunk 77", color: "#f3e600", dot: "#3ddc84" },
    { name: "honk.exe", status: "Browsing the store", color: "#b8f03a", dot: "#3ddc84" },
    { name: "crumb_lord", status: "Wishlisting Minecrumb", color: "#ff8a3d", dot: "#3ddc84" },
    { name: "dr.whiskers", status: "Away", color: "#9d7bff", dot: "#f3b33d" },
    { name: "spreadsheet_sam", status: "Offline", color: "#3fe0f0", dot: "#5f6570" },
  ];

  const SERVER_LINES = [
    "Servers are being fed...",
    "Servers asked for seconds...",
    "Servers are chewing slowly...",
    "Servers are taking a nap...",
    "Servers want a snack first...",
  ];

  /* ================= Helpers ================= */

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const byId = (id) => GAMES.find((g) => g.id === id);

  const storage = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem("slopware:" + key);
        return v === null ? fallback : JSON.parse(v);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem("slopware:" + key, JSON.stringify(value));
      } catch {}
    },
  };

  const wishlist = new Set(storage.get("wishlist", []));
  const notifyList = new Set(storage.get("notify", []));
  const likedPosts = new Set(storage.get("liked", []));
  const userPosts = storage.get("posts", []);

  const dayNumber = (d = new Date()) => Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 86400000);
  const daysSinceLaunch = () => Math.max(0, dayNumber() - dayNumber(LAUNCH_DATE));
  const announcedCount = () => GAMES.length + daysSinceLaunch();

  const ICON = {
    download: '<svg viewBox="0 0 24 24"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/></svg>',
    share: '<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
    windows: '<svg viewBox="0 0 24 24"><path d="M3 5.5 10.5 4.5v7H3zM12 4.3 21 3v8.5h-9zM3 12.5h7.5v7L3 18.5zM12 12.5h9V21l-9-1.3z"/></svg>',
    apple: '<svg viewBox="0 0 24 24"><path d="M16.5 12.6c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.5-1-2.5-3.6zM14.2 5.5c.6-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>',
    linux: '<svg viewBox="0 0 24 24"><path d="M12 2c-2 0-3.5 1.7-3.5 4.5 0 1.6.3 2.6-.8 4.3C6.2 13 5 15 5.5 17.5 6 20 8 21.5 12 21.5s6-1.5 6.5-4c.5-2.5-.7-4.5-2.2-6.7-1.1-1.7-.8-2.7-.8-4.3C15.5 3.7 14 2 12 2z"/><circle cx="10.5" cy="7" r=".6"/><circle cx="13.5" cy="7" r=".6"/><path d="M10.5 9.5 12 10.5l1.5-1"/></svg>',
  };

  /* ================= Shared UI ================= */

  const tag = (t) => `<span class="tag">${esc(t)}</span>`;

  const capsule = (g) => `
    <a class="capsule ${g.grey ? "is-grey" : ""}" href="#/game/${g.id}">
      <div class="capsule-art">
        <img src="${g.cover}" alt="${esc(g.title)} cover art" loading="lazy">
        <span class="ribbon">Coming soon</span>
        ${g.grey ? '<span class="stamp">Coming Soon</span>' : ""}
      </div>
      <div class="capsule-body">
        <h3>${esc(g.title)}</h3>
        <p class="dev">${esc(g.dev)}</p>
        <div class="tags">${g.genres.slice(0, 2).map(tag).join("")}</div>
        <div class="capsule-foot">
          <span class="release">${esc(g.release)}</span>
          <span class="price-soon">Coming Soon</span>
        </div>
      </div>
    </a>`;

  const footer = () => `
    <footer class="footer">
      <div class="footer-brand">
        <img src="assets/mascot.jpg" alt="">
        <div>
          <b>SLOP<span>WARE</span></b>
          <div>Games for a more productive tomorrow™</div>
        </div>
      </div>
      <div class="footer-links">
        <div>
          <h4>SlopWare</h4>
          <a href="#/store">Store</a>
          <a href="#/community">Community</a>
          <a href="#/" data-action="client" data-os="Windows">Get the app</a>
        </div>
        <div>
          <h4>Developers</h4>
          <a href="#/" data-action="soon" data-msg="Developer portal is coming soon.">Publish on SlopWare</a>
          <a href="#/" data-action="soon" data-msg="Docs are coming soon. They're being written by the servers.">Documentation</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#/" data-action="soon" data-msg="Support is coming soon. Try turning it off and on again.">Help center</a>
          <a href="#/" data-action="soon" data-msg="Refunds will be available once there's something to refund.">Refunds</a>
        </div>
      </div>
      <div class="footer-legal">
        © ${new Date().getFullYear()} SlopWare. All games shown are parodies and are coming soon. Downloads are not available yet.
        All trademarks are property of their respective owners, who are probably confused.
      </div>
    </footer>`;

  /* ================= Views ================= */

  function viewHome() {
    const cp = byId("cyberpunk-77");
    const soon = GAMES;
    return `
      <section class="hero">
        <a class="hero-art" href="#/game/${cp.id}" aria-label="Open Cyberpunk 77">
          <div class="hero-content">
            <span class="pill pill-featured">Featured</span>
            <h1 class="cp-logo"><span class="word">Cyberpunk</span><span class="num">77</span></h1>
            <div class="hero-tagline">More neon. More nothing.</div>
          </div>
        </a>
        <div class="hero-panel">
          <div>
            <h3>Coming Online...</h3>
            <p>Cyberpunk 77 is currently in final server preparation.<br>Get ready for a bigger, sloppier future.</p>
          </div>
          <div class="status-box" data-action="download" data-id="${cp.id}" role="button" tabindex="0">
            <span class="spinner"></span>
            <div>
              <strong>Waiting to go online</strong>
              <span data-server-line>${SERVER_LINES[0]}</span>
            </div>
          </div>
        </div>
        <div class="hero-shots">
          ${cp.shots.map((s, i) => `<button class="shot" data-action="lightbox" data-src="${s}" aria-label="Screenshot ${i + 1}"><img src="${s}" alt="" loading="lazy"></button>`).join("")}
        </div>
      </section>

      <div class="stats">
        <div class="stat"><b>0</b><span>Games available to download</span></div>
        <div class="stat"><b class="lime">${announcedCount()}</b><span>Games announced &amp; coming soon</span></div>
        <div class="stat"><b>+1</b><span>New game announced every day</span></div>
        <div class="stat"><b>∞</b><span>Slop per second</span></div>
      </div>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Coming Soon to SlopWare</h2>
            <p>Wishlist them now. Download them… later.</p>
          </div>
          <a class="link" href="#/store">Browse all</a>
        </div>
        <div class="row-scroll">${soon.map(capsule).join("")}</div>
      </section>

      <section class="section">${dailyBlock()}</section>

      <section class="section">
        <div class="client">
          <div class="client-left">
            <img src="assets/mascot.jpg" alt="">
            <div>
              <h2>Get the SlopWare desktop app</h2>
              <p>One launcher for all your games, friends and slop. Automatic updates, cloud saves and a cat that sleeps in the corner. The app is coming soon for every platform.</p>
            </div>
          </div>
          <div class="client-buttons">
            ${["Windows", "macOS", "Linux"].map((os) => `
              <button class="btn btn-soon btn-lg os-btn" data-action="client" data-os="${os}">
                ${os === "Windows" ? ICON.windows : os === "macOS" ? ICON.apple : ICON.linux}
                <span>${os}</span><small>Soon</small>
              </button>`).join("")}
          </div>
        </div>
      </section>
      ${footer()}`;
  }

  function dailyBlock() {
    const today = dayNumber();
    const drops = [];
    for (let i = 0; i < 8; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const [name, genre] = DROP_POOL[(today + i) % DROP_POOL.length];
      const when = i === 0 ? "Today" : i === 1 ? "Tomorrow" : date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
      drops.push({ name, genre, when, locked: i >= 2, today: i === 0, g: DROP_GRADIENTS[(today + i) % DROP_GRADIENTS.length] });
    }
    return `
      <div class="daily">
        <div class="daily-intro">
          <span class="pill pill-soon">Daily drops</span>
          <h2>More games coming <em>every day</em>...</h2>
          <p>A brand-new game is announced on SlopWare every single day. Come back tomorrow for the next one, and the day after that. And the day after that.</p>
          <div class="countdown" aria-label="Time until the next game is announced">
            <div><b data-cd="h">00</b><small>Hours</small></div>
            <div><b data-cd="m">00</b><small>Mins</small></div>
            <div><b data-cd="s">00</b><small>Secs</small></div>
          </div>
          <button class="btn btn-accent" data-action="notify-daily">${ICON.bell}<span>Notify me of new drops</span></button>
        </div>
        <div class="drops">
          ${drops.map((d) => `
            <div class="drop ${d.today ? "today" : ""} ${d.locked ? "locked" : ""}" style="--g:${d.g}">
              ${d.locked ? `<span class="lock">${ICON.lock}</span>` : ""}
              <span class="when">${esc(d.when)}</span>
              <span class="name">${esc(d.name)}</span>
              <span class="genre">${d.locked ? "Unannounced" : esc(d.genre) + " · Coming soon"}</span>
            </div>`).join("")}
        </div>
      </div>`;
  }

  function viewStore(params) {
    const genres = ["All", ...new Set(GAMES.flatMap((g) => g.genres))];
    const active = genres.includes(params.genre) ? params.genre : "All";
    return `
      <div class="store-head">
        <div>
          <h1 class="page-title">Store</h1>
          <p class="page-sub">${GAMES.length} games coming soon · 0 available · new games every day</p>
        </div>
        <select class="select" id="sortSelect" aria-label="Sort">
          <option value="release">Sort: Upcoming</option>
          <option value="name">Sort: Name A–Z</option>
          <option value="wish">Sort: Wishlisted first</option>
        </select>
      </div>
      <div class="chips" id="chips">
        ${genres.map((g) => `<button class="chip ${g === active ? "active" : ""}" data-genre="${esc(g)}">${esc(g)}</button>`).join("")}
      </div>
      <div id="storeGrid" data-q="${esc(params.q || "")}" data-genre="${esc(active)}"></div>
      <section class="section">${dailyBlock()}</section>
      ${footer()}`;
  }

  function renderStoreGrid() {
    const grid = $("#storeGrid");
    if (!grid) return;
    const q = (grid.dataset.q || "").toLowerCase();
    const genre = grid.dataset.genre;
    const sort = $("#sortSelect")?.value || "release";
    let list = GAMES.filter((g) => (genre === "All" || g.genres.includes(genre)) && (!q || matches(g, q)));
    if (sort === "name") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "wish") list = [...list].sort((a, b) => wishlist.has(b.id) - wishlist.has(a.id));

    grid.innerHTML = list.length
      ? (q ? `<p class="page-sub" style="margin:-8px 0 16px">Results for “${esc(q)}”</p>` : "") + `<div class="grid">${list.map(capsule).join("")}</div>`
      : `<div class="empty">
           <img src="assets/sleepy-cat.jpg" alt="">
           <h3>No slop found for “${esc(q)}”</h3>
           <p>That game isn't announced yet. Give it a day — new games are added every day.</p>
           <a class="btn btn-ghost" href="#/store">Clear search</a>
         </div>`;
  }

  function viewGame(id) {
    const g = byId(id);
    if (!g) return viewNotFound();
    const shots = g.shots || [g.cover];
    const portrait = !g.shots;
    const reqs = g.reqs || DEFAULT_REQS;
    const others = GAMES.filter((o) => o.id !== g.id).slice(0, 4);
    const reqList = (r) => `<dl>${Object.entries(r).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>`;

    return `
      <div class="crumbs"><a href="#/store">Store</a><span>›</span><span>${esc(g.genres[0])}</span><span>›</span><span>${esc(g.title)}</span></div>
      <div class="game-title-row">
        <h1>${esc(g.title)}</h1>
        <span class="pill pill-soon">Coming soon</span>
      </div>

      <div class="game-top">
        <div>
          <div class="media-main ${g.grey ? "is-grey" : ""} ${portrait ? "portrait" : ""}" id="mediaMain" ${portrait ? `style="background-image:url('${shots[0]}')"` : ""}>
            <img src="${shots[0]}" alt="${esc(g.title)} screenshot">
            ${g.grey ? '<span class="stamp big">Coming Soon</span>' : ""}
          </div>
          ${shots.length > 1 ? `
            <div class="media-thumbs ${g.grey ? "is-grey" : ""}">
              ${shots.map((s, i) => `<button class="media-thumb ${i === 0 ? "active" : ""}" data-action="media" data-src="${s}" aria-label="Show screenshot ${i + 1}"><img src="${s}" alt="" loading="lazy"></button>`).join("")}
            </div>` : ""}
        </div>
        <aside class="game-side">
          <div class="game-cover ${g.grey ? "is-grey" : ""}">
            <img class="${g.grey ? "is-grey" : ""}" src="${g.cover}" alt="${esc(g.title)} cover art" style="object-position:50% 12%">
            ${g.grey ? '<span class="stamp">Coming Soon</span>' : ""}
          </div>
          <p class="blurb">${esc(g.blurb)}</p>
          <dl class="meta">
            <dt>Release</dt><dd>${esc(g.release)}</dd>
            <dt>Developer</dt><dd>${esc(g.dev)}</dd>
            <dt>Publisher</dt><dd>${esc(g.publisher)}</dd>
            <dt>Tags</dt><dd><div class="tags">${g.genres.map(tag).join("")}</div></dd>
          </dl>
        </aside>
      </div>

      <div class="buy-box">
        <div>
          <h3>Download ${esc(g.title)}</h3>
          <p>${g.id === "cyberpunk-77" ? "Not available yet — the servers are still being fed." : "Not available yet. This game is coming soon to SlopWare."}</p>
        </div>
        <div class="buy-actions">
          <button class="btn btn-soon btn-lg" data-action="download" data-id="${g.id}">${ICON.lock}<span>Coming Soon</span></button>
          <button class="btn btn-ghost btn-lg ${wishlist.has(g.id) ? "on" : ""}" data-action="wishlist" data-id="${g.id}">${ICON.heart}<span>${wishlist.has(g.id) ? "Wishlisted" : "Add to Wishlist"}</span></button>
          <button class="btn btn-ghost btn-lg ${notifyList.has(g.id) ? "on" : ""}" data-action="notify" data-id="${g.id}">${ICON.bell}<span>${notifyList.has(g.id) ? "We'll notify you" : "Notify me"}</span></button>
        </div>
      </div>

      <div class="game-body">
        <div>
          <div class="card">
            <h3>About this game</h3>
            ${g.about.map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>
          <div class="card">
            <h3>System requirements</h3>
            <div class="reqs">
              <div><h4>Minimum</h4>${reqList(reqs.min)}</div>
              <div><h4>Recommended</h4>${reqList(reqs.rec)}</div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <h3>Reviews</h3>
            <div class="review-empty">
              <img src="assets/sleepy-cat.jpg" alt="">
              <span>No reviews yet. Nobody has played it. Nobody can. Yet.</span>
            </div>
          </div>
          <div class="card">
            <h3>Features</h3>
            <div class="feature-list">${g.features.map((f) => `<div class="feature">${ICON.check}<span>${esc(f)}</span></div>`).join("")}</div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="section-head">
          <div><h2>Also coming soon</h2><p>More games are announced every day.</p></div>
          <a class="link" href="#/store">See all</a>
        </div>
        <div class="grid">${others.map(capsule).join("")}</div>
      </section>
      ${footer()}`;
  }

  function viewLibrary() {
    const wished = GAMES.filter((g) => wishlist.has(g.id));
    return `
      <h1 class="page-title">Library</h1>
      <p class="page-sub">Installed: 0 · Wishlisted: ${wished.length}</p>
      <section class="section" style="margin-top:22px">
        <div class="empty">
          <img src="assets/sleepy-cat.jpg" alt="">
          <h3>Your library is empty</h3>
          <p>Nothing to install yet — every game on SlopWare is coming soon. Wishlist a few and they'll show up here the moment they go online.</p>
          <a class="btn btn-accent" href="#/store">Browse upcoming games</a>
        </div>
      </section>
      ${wished.length ? `
        <section class="section">
          <div class="section-head"><div><h2>Your wishlist</h2><p>Ready when the servers are.</p></div></div>
          <div class="grid">${wished.map(capsule).join("")}</div>
        </section>` : ""}
      ${footer()}`;
  }

  function viewCommunity() {
    const posts = [...userPosts, ...FEED_SEED];
    const avatar = (name, color) => `<span class="post-avatar" style="background:${color}">${esc(name[0].toUpperCase())}</span>`;
    return `
      <h1 class="page-title">Community</h1>
      <p class="page-sub">${(48211 + daysSinceLaunch() * 137).toLocaleString()} people waiting for something to download</p>
      <div class="feed">
        <div class="card">
          <form class="composer" id="composer">
            <span class="avatar"></span>
            <input id="composerInput" maxlength="280" placeholder="Share your slop with the community..." aria-label="Write a post">
            <button class="btn btn-accent" type="submit">Post</button>
          </form>
          <div id="posts">
            ${posts.map((p, i) => {
              const key = p.id || "seed-" + i;
              const liked = likedPosts.has(key);
              return `
                <article class="post">
                  ${avatar(p.user, p.color)}
                  <div style="flex:1;min-width:0">
                    <div class="post-head"><strong>${esc(p.user)}</strong><small>${esc(p.time)}</small></div>
                    <p>${esc(p.text)}</p>
                    <div class="post-actions">
                      <button class="${liked ? "on" : ""}" data-action="like" data-key="${key}" data-base="${p.likes}">${ICON.heart}<span>${p.likes + (liked ? 1 : 0)}</span></button>
                      <button data-action="soon" data-msg="Replies are coming soon.">${ICON.chat}<span>Reply</span></button>
                      <button data-action="soon" data-msg="Sharing is coming soon. Caring is available now.">${ICON.share}<span>Share</span></button>
                    </div>
                  </div>
                </article>`;
            }).join("")}
          </div>
        </div>
        <div>
          <div class="card">
            <h3>Friends</h3>
            <div class="online-list">
              ${FRIENDS.map((f) => `
                <div class="friend">
                  <span class="post-avatar" style="background:${f.color}">${esc(f.name[0].toUpperCase())}<span class="status-dot" style="background:${f.dot}"></span></span>
                  <div><strong>${esc(f.name)}</strong><small>${esc(f.status)}</small></div>
                </div>`).join("")}
            </div>
          </div>
          <div class="card">
            <h3>Trending</h3>
            <div class="feature-list">
              <a class="feature" href="#/game/cyberpunk-77">${ICON.check}<span>#ServersBeingFed</span></a>
              <a class="feature" href="#/game/goose-simulator-office">${ICON.check}<span>#HonkIfYoureWaiting</span></a>
              <a class="feature" href="#/game/dark-souls-of-laundry">${ICON.check}<span>#SockBoss</span></a>
            </div>
          </div>
        </div>
      </div>
      ${footer()}`;
  }

  const SETTINGS = [
    ["autoUpdate", "Automatic updates", "Keep games up to date. When there are games.", true],
    ["notifyDaily", "Daily drop notifications", "Get pinged when a new game is announced every day.", true],
    ["startup", "Launch SlopWare on startup", "Takes effect once the desktop app is out.", false],
    ["sleepyCat", "Show sleepy cat", "The cat in the sidebar. Highly recommended.", true],
    ["slopMode", "Extra slop mode", "Adds 30% more slop to everything.", false],
  ];

  function viewSettings() {
    const saved = storage.get("settings", {});
    return `
      <h1 class="page-title">Settings</h1>
      <p class="page-sub">Tune SlopWare to your liking.</p>
      <div class="card settings">
        ${SETTINGS.map(([key, title, desc, def]) => `
          <div class="setting">
            <div><strong>${title}</strong><small>${desc}</small></div>
            <label class="switch"><input type="checkbox" data-setting="${key}" ${(saved[key] ?? def) ? "checked" : ""}><span></span></label>
          </div>`).join("")}
        <div class="setting">
          <div><strong>Download location</strong><small>C:\\SlopWare\\Games (currently 0 bytes, very tidy)</small></div>
          <button class="btn btn-ghost" data-action="soon" data-msg="Changing download location is coming soon.">Change</button>
        </div>
        <div class="setting">
          <div><strong>Language</strong><small>Interface language</small></div>
          <select class="select" data-setting-select="lang">
            ${["English", "Slovenščina", "Deutsch", "Español", "Meow"].map((l) => `<option ${saved.lang === l ? "selected" : ""}>${l}</option>`).join("")}
          </select>
        </div>
      </div>
      ${footer()}`;
  }

  function viewNotFound() {
    return `
      <div class="empty" style="margin-top:20px">
        <img src="assets/sleepy-cat.jpg" alt="">
        <h3>This page is coming soon</h3>
        <p>Or it never existed. Hard to tell around here.</p>
        <a class="btn btn-accent" href="#/">Back home</a>
      </div>
      ${footer()}`;
  }

  /* ================= Router ================= */

  const view = $("#view");

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    const [path, query = ""] = raw.split("?");
    const parts = path.split("/").filter(Boolean);
    return { parts, params: Object.fromEntries(new URLSearchParams(query)) };
  }

  function render() {
    const { parts, params } = parseHash();
    const route = parts[0] || "home";
    let html;
    let title = "SlopWare — Games for a more productive tomorrow™";

    switch (route) {
      case "home": html = viewHome(); break;
      case "store": html = viewStore(params); title = "Store · SlopWare"; break;
      case "library": html = viewLibrary(); title = "Library · SlopWare"; break;
      case "community": html = viewCommunity(); title = "Community · SlopWare"; break;
      case "settings": html = viewSettings(); title = "Settings · SlopWare"; break;
      case "game": {
        const g = byId(parts[1]);
        html = viewGame(parts[1]);
        if (g) title = `${g.title} — Coming Soon · SlopWare`;
        break;
      }
      default: html = viewNotFound();
    }

    view.innerHTML = html;
    view.style.animation = "none";
    void view.offsetWidth;
    view.style.animation = "";
    document.title = title;

    const navRoute = route === "game" ? "store" : route;
    $$(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === navRoute));

    if (route === "store") {
      renderStoreGrid();
      $("#search").value = params.q || "";
    }
    tickCountdown();
    window.scrollTo({ top: 0 });
    closeSearch();
  }

  window.addEventListener("hashchange", render);

  /* ================= Search ================= */

  const searchInput = $("#search");
  const searchResults = $("#searchResults");
  let searchIndex = -1;

  const matches = (g, q) => [g.title, g.dev, ...g.genres].join(" ").toLowerCase().includes(q);

  function openSearch() {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) return closeSearch();
    const hits = GAMES.filter((g) => matches(g, q)).slice(0, 6);
    searchIndex = -1;
    searchResults.innerHTML = hits.length
      ? hits.map((g) => `
          <a class="search-item" href="#/game/${g.id}">
            <img class="${g.grey ? "grey" : ""}" src="${g.cover}" alt="">
            <div><strong>${esc(g.title)}</strong><small>${esc(g.genres.join(" · "))} · Coming soon</small></div>
          </a>`).join("")
      : `<div class="search-empty">No games match “${esc(searchInput.value.trim())}” yet.<br>Check back tomorrow — new games every day.</div>`;
    searchResults.classList.add("open");
  }

  function closeSearch() {
    searchResults.classList.remove("open");
    searchIndex = -1;
  }

  searchInput.addEventListener("input", () => {
    openSearch();
    const grid = $("#storeGrid");
    if (grid) {
      grid.dataset.q = searchInput.value.trim();
      renderStoreGrid();
    }
  });
  searchInput.addEventListener("focus", openSearch);
  searchInput.addEventListener("keydown", (e) => {
    const items = $$(".search-item", searchResults);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!items.length) return;
      searchIndex = (searchIndex + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle("active", i === searchIndex));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (searchIndex >= 0 && items[searchIndex]) {
        location.hash = items[searchIndex].getAttribute("href");
      } else {
        const q = searchInput.value.trim();
        location.hash = "#/store" + (q ? "?q=" + encodeURIComponent(q) : "");
      }
      searchInput.blur();
      closeSearch();
    } else if (e.key === "Escape") {
      closeSearch();
      searchInput.blur();
    }
  });

  /* ================= Modal & toast ================= */

  const modal = $("#modal");
  const modalCard = $("#modalCard");
  let lastFocus = null;
  let progressTimer = null;

  function openModal(html, wide = false) {
    lastFocus = document.activeElement;
    modalCard.className = "modal-card" + (wide ? " wide" : "");
    modalCard.innerHTML = `<button class="modal-close" data-action="close-modal" aria-label="Close">${ICON.close}</button>` + html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => $(".modal-close", modalCard)?.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    clearTimeout(progressTimer);
    lastFocus?.focus?.();
  }

  function openDownloadModal(g) {
    openModal(`
      <div class="modal-banner"><img class="${g.grey ? "is-grey" : ""}" src="${g.hero || g.cover}" alt=""></div>
      <div class="modal-body">
        <h3>${esc(g.title)} is coming soon</h3>
        <p>Downloads aren't available yet. ${g.id === "cyberpunk-77" ? "The servers are still being fed" : "This game is still on its way to SlopWare"} — wishlist it and we'll let you know the moment it goes online.</p>
        <div class="fake-progress">
          <div class="bar"><i id="fakeBar"></i></div>
          <div class="labels"><span id="fakeLabel">Contacting servers...</span><span id="fakePct">0%</span></div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-accent" data-action="notify" data-id="${g.id}">${ICON.bell}<span>${notifyList.has(g.id) ? "We'll notify you" : "Notify me when it's live"}</span></button>
          <button class="btn btn-ghost" data-action="close-modal">Got it</button>
        </div>
      </div>`);

    const bar = $("#fakeBar");
    const label = $("#fakeLabel");
    const pct = $("#fakePct");
    progressTimer = setTimeout(() => {
      bar.style.width = "3%";
      pct.textContent = "3%";
      label.textContent = "Feeding the servers...";
      progressTimer = setTimeout(() => {
        label.textContent = "Waiting to go online — coming soon";
        pct.textContent = "Paused";
      }, 1500);
    }, 400);
  }

  function openClientModal(os) {
    openModal(`
      <div class="modal-body">
        <img class="mascot" src="assets/mascot.jpg" alt="">
        <h3>SlopWare for ${esc(os)} is coming soon</h3>
        <p>The desktop app is in final preparation. We'll ship it as soon as the cat wakes up. Until then, enjoy browsing the store right here.</p>
        <div class="modal-actions">
          <button class="btn btn-accent" data-action="notify-client">${ICON.bell}<span>Notify me</span></button>
          <button class="btn btn-ghost" data-action="close-modal">Close</button>
        </div>
      </div>`);
  }

  const toastEl = $("#toast");
  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }

  /* ================= Actions ================= */

  function toggleSet(set, key, id) {
    set.has(id) ? set.delete(id) : set.add(id);
    storage.set(key, [...set]);
    return set.has(id);
  }

  function refreshButtons(action, id, on, onLabel, offLabel) {
    $$(`[data-action="${action}"][data-id="${id}"]`).forEach((btn) => {
      btn.classList.toggle("on", on);
      const span = $("span", btn);
      if (span) span.textContent = on ? onLabel : offLabel(btn);
    });
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) {
      if (!e.target.closest("#searchWrap")) closeSearch();
      if (!e.target.closest(".bell-wrap")) $("#notifPanel").classList.remove("open");
      return;
    }
    const { action, id } = el.dataset;

    switch (action) {
      case "download": {
        e.preventDefault();
        const g = byId(id);
        if (g) openDownloadModal(g);
        break;
      }
      case "wishlist": {
        const on = toggleSet(wishlist, "wishlist", id);
        refreshButtons("wishlist", id, on, "Wishlisted", () => "Add to Wishlist");
        toast(on ? `${byId(id).title} added to your wishlist.` : `${byId(id).title} removed from your wishlist.`);
        break;
      }
      case "notify": {
        const on = toggleSet(notifyList, "notify", id);
        refreshButtons("notify", id, on, "We'll notify you", (btn) => (btn.closest(".modal") ? "Notify me when it's live" : "Notify me"));
        toast(on ? `We'll ping you when ${byId(id).title} goes online.` : "Notification removed.");
        break;
      }
      case "notify-daily":
        toast("You're on the list. One new game, every day.");
        break;
      case "notify-client":
        toast("We'll let you know when the SlopWare app is ready.");
        closeModal();
        break;
      case "client":
        e.preventDefault();
        openClientModal(el.dataset.os || "Windows");
        break;
      case "lightbox":
        openModal(`<img src="${el.dataset.src}" alt="Screenshot">`, true);
        break;
      case "media": {
        const main = $("#mediaMain img");
        if (main) main.src = el.dataset.src;
        $$(".media-thumb").forEach((t) => t.classList.toggle("active", t === el));
        break;
      }
      case "close-modal":
        closeModal();
        break;
      case "heart":
        el.classList.toggle("on");
        if (el.classList.contains("on")) toast("Same games. More slop. More love.");
        break;
      case "profile":
        toast("Profiles are coming soon too, slop.zip.");
        break;
      case "like": {
        const key = el.dataset.key;
        const on = toggleSet(likedPosts, "liked", key);
        el.classList.toggle("on", on);
        $("span", el).textContent = Number(el.dataset.base) + (on ? 1 : 0);
        break;
      }
      case "soon":
        e.preventDefault();
        toast(el.dataset.msg || "Coming soon.");
        break;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    if ((e.key === "Enter" || e.key === " ") && e.target.matches('[role="button"][data-action]')) {
      e.preventDefault();
      e.target.click();
    }
    if (e.key === "/" && document.activeElement !== searchInput && !e.target.matches("input, textarea, select")) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  $("#bellBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    $("#notifPanel").classList.toggle("open");
    $(".bell-dot").classList.add("seen");
  });

  document.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    $$(".chip").forEach((c) => c.classList.toggle("active", c === chip));
    $("#storeGrid").dataset.genre = chip.dataset.genre;
    renderStoreGrid();
  });

  document.addEventListener("change", (e) => {
    if (e.target.id === "sortSelect") renderStoreGrid();
    if (e.target.dataset.setting || e.target.dataset.settingSelect) {
      const saved = storage.get("settings", {});
      if (e.target.dataset.setting) saved[e.target.dataset.setting] = e.target.checked;
      else saved[e.target.dataset.settingSelect] = e.target.value;
      storage.set("settings", saved);
      applySettings();
      toast(e.target.dataset.settingSelect === "lang" && e.target.value !== "English" ? "Translations are coming soon. Saved anyway." : "Settings saved.");
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.id !== "composer") return;
    e.preventDefault();
    const input = $("#composerInput");
    const text = input.value.trim();
    if (!text) return;
    userPosts.unshift({ id: "u-" + Date.now(), user: "slop.zip", color: "#b8f03a", time: "Just now", text, likes: 0 });
    storage.set("posts", userPosts.slice(0, 30));
    render();
    toast("Posted to the community.");
  });

  function applySettings() {
    const saved = storage.get("settings", {});
    $(".promo-card").style.display = saved.sleepyCat === false ? "none" : "";
  }

  /* ================= Timers ================= */

  const pad = (n) => String(n).padStart(2, "0");
  let lastDay = dayNumber();

  function tickCountdown() {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = Math.max(0, next - now);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    $$('[data-cd="h"]').forEach((el) => (el.textContent = pad(h)));
    $$('[data-cd="m"]').forEach((el) => (el.textContent = pad(m)));
    $$('[data-cd="s"]').forEach((el) => (el.textContent = pad(s)));

    if (dayNumber() !== lastDay) {
      lastDay = dayNumber();
      if (!modal.classList.contains("open")) render();
      toast("A new game was just announced. More tomorrow.");
    }
  }

  let serverLine = 0;
  setInterval(tickCountdown, 1000);
  setInterval(() => {
    serverLine = (serverLine + 1) % SERVER_LINES.length;
    $$("[data-server-line]").forEach((el) => (el.textContent = SERVER_LINES[serverLine]));
  }, 3200);

  applySettings();
  render();
})();
