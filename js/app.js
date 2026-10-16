/* LullaDream — responsive demo web app (desktop · tablet/iPad/foldable · mobile)
   All data lives in this browser (localStorage). Nothing is sent to the real LullaDream service. */
(function () {
  "use strict";
  if (window.LD_NO_APP) return;
  var D = window.LD_DATA, IMG = D.IMG;

  /* ================= Icons ================= */
  var P = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    library: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    mystory: '<path d="M4 4h4v16H4zM10 4h4v16h-4zM16.5 4.5l3.5 1-3.8 15-3.4-1z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
    bell: '<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10.3 20a2 2 0 0 0 3.4 0"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    play: '<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke-linejoin="round"/>',
    pause: '<path d="M7 4h3.5v16H7zM13.5 4H17v16h-3.5z" fill="currentColor"/>',
    heart: '<path d="M12 20s-8-4.6-8-10.2A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 2.8C20 15.4 12 20 12 20z"/>',
    heartf: '<path d="M12 20s-8-4.6-8-10.2A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 2.8C20 15.4 12 20 12 20z" fill="currentColor"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    next: '<path d="m9 6 6 6-6 6"/>', down: '<path d="m6 9 6 6 6-6"/>', prev: '<path d="m15 6-6 6 6 6"/>',
    spark: '<path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z" fill="currentColor"/><path d="M19 15.5c.2 1.4.9 2.1 2.3 2.3-1.4.2-2.1.9-2.3 2.3-.2-1.4-.9-2.1-2.3-2.3 1.4-.2 2.1-.9 2.3-2.3z" fill="currentColor"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    doc: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    logout: '<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l-5-5 5-5M5 12h11"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7L20 8.5M20 4v4.5h-4.5"/>',
    topup: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 15l6-6M10 9h5v5"/>',
    rew: '<path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.5M4 4v4.5h4.5"/><text x="12" y="15.5" font-size="7" font-weight="700" text-anchor="middle" fill="currentColor" stroke="none" font-family="Inter,sans-serif">15</text>',
    fwd: '<path d="M20 12a8 8 0 1 1-2.3-5.7L20 8.5M20 4v4.5h-4.5"/><text x="12" y="15.5" font-size="7" font-weight="700" text-anchor="middle" fill="currentColor" stroke="none" font-family="Inter,sans-serif">15</text>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>', check: '<path d="M5 12l5 5L20 7"/>',
    book: '<path d="M3 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2H3zM21 5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v16a2 2 0 0 1 2-2h7z"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    eyeoff: '<path d="M3 3l18 18M10.6 5.1A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2.2.6 3.5 2.3 3.5 5.2"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/>'
  };
  function ic(n, s) { s = s || 20; return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || "") + "</svg>"; }

  /* ================= Utils ================= */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function num(n) { return Number(n).toLocaleString("en-US"); }
  function short(n) { return n >= 1000 ? (n / 1000).toFixed(1) + "K" : String(n); }
  function uid(p) { return (p || "id") + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function mmss(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function ago(t) {
    var s = (Date.now() - t) / 1000;
    if (s < 60) return "just now"; if (s < 3600) return Math.floor(s / 60) + " min ago";
    if (s < 86400) return Math.floor(s / 3600) + " h ago"; if (s < 172800) return "yesterday";
    return Math.floor(s / 86400) + " days ago";
  }
  function go(h) { if (location.hash === "#/" + h) render(); else location.hash = "#/" + h; }

  /* ================= State ================= */
  var KEY = "lulladream-demo-v1";
  function seed() {
    var now = Date.now(), H = 3600e3, DAY = 864e5;
    var m1 = { id: "m1", title: "The Girl Seeking A Beautiful Sky", name: "Tessa", age: 6, about: "A brave little girl who goes on a journey to find the most beautiful sky, and makes friends with a squirrel on the way.", listener: "4–5", style: "adventurous", type: "adventure", m: 6, voice: "wanda", setting: "", moral: "", cover: "jessica", public: false, createdAt: now - 3 * DAY, updatedAt: now - 3 * DAY };
    m1.text = D.genText(m1);
    return {
      v: 2, authed: false, onboarded: false,
      user: { name: "Super Premium User", child: "Tessa", email: "demo@lulladream.app", plan: "super", lang: "EN" },
      coins: 98985,
      favs: ["aladdin", "beauty", "cinderella"],
      progress: { aladdin: 150, alibaba: 84, m1: 250 },
      recent: [{ id: "aladdin", at: now - 2 * H }, { id: "m1", at: now - 20 * H }, { id: "alibaba", at: now - 2 * DAY }],
      voices: [{ id: "v1", name: "Test", at: now - 6 * DAY }, { id: "v2", name: "yg", at: now - 5 * DAY }, { id: "v3", name: "aa", at: now - 4 * DAY }],
      voice: "wanda", sound: "Off", timer: 0,
      mine: [m1],
      notifs: [
        { id: "n1", title: "Your story is ready", body: "\"The Girl Seeking A Beautiful Sky\" is waiting in My Story.", at: now - 3 * DAY, read: false, go: "story/m1" },
        { id: "n2", title: "New tale in the Library", body: "Anansi the Spider has just been added.", at: now - 4 * DAY, read: false, go: "story/anansi" },
        { id: "n3", title: "Bedtime reminder", body: "It's almost 8 pm — time for a sweet story.", at: now - 5 * DAY, read: true, go: "home" }
      ]
    };
  }
  var st;
  try { st = JSON.parse(localStorage.getItem(KEY)); } catch (e) { st = null; }
  if (!st || st.v !== 2) st = seed();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { } }

  /* i18n (EN / ID) for navigation and main headings */
  var TX = {
    EN: { home: "Home", library: "Library", mystory: "My Story", profile: "Profile", menu: "Menu", space: "Your space", favorites: "Favorites", voices: "Voice Recordings", recent: "Recent Activity", generate: "Generate Story", create1: "Create your", create2: "magical story", hi: "Hi", special: "Special for Your", dreamer: "Little Dreamer", search: "Pick a tale for sweet dreams...", cont: "Continue last night's story", foryou: "For you, based on history", liked: "Also liked by other kids", all: "All Stories", seeall: "See all", read: "Read the Story", notifs: "Notifications", create: "Create" },
    ID: { home: "Beranda", library: "Perpustakaan", mystory: "Ceritaku", profile: "Profil", menu: "Menu", space: "Ruang kamu", favorites: "Favorit", voices: "Rekaman Suara", recent: "Aktivitas Terbaru", generate: "Buat Cerita", create1: "Buat", create2: "cerita ajaibmu", hi: "Hai", special: "Spesial untuk", dreamer: "Si Kecil", search: "Pilih dongeng untuk mimpi indah...", cont: "Lanjutkan cerita semalam", foryou: "Untukmu, berdasarkan riwayat", liked: "Juga disukai anak lain", all: "Semua Cerita", seeall: "Lihat semua", read: "Baca Ceritanya", notifs: "Notifikasi", create: "Buat" }
  };
  function T(k) { return (TX[st.user.lang] || TX.EN)[k] || TX.EN[k] || k; }

  /* ================= Story model ================= */
  function fromMine(m) { return { id: m.id, t: m.title, c: D.CAT_FOR_TYPE[m.type] || "Bravery & Adventure", m: m.m, cover: m.cover, text: m.text, country: "LullaDream Original", age: m.listener, mine: true, pub: m.public, src: m, pop: 0 }; }
  function getStory(id) {
    for (var i = 0; i < D.CATALOG.length; i++) if (D.CATALOG[i].id === id) return D.CATALOG[i];
    var m = st.mine.filter(function (x) { return x.id === id; })[0];
    return m ? fromMine(m) : null;
  }
  function allStories() { return D.CATALOG.concat(st.mine.filter(function (m) { return m.public; }).map(fromMine)); }
  function isFav(id) { return st.favs.indexOf(id) > -1; }
  function pct(s) { return Math.min(100, Math.round(((st.progress[s.id] || 0) / (s.m * 60)) * 100)); }
  function voiceName(id) {
    var b = D.VOICES_BUILTIN.filter(function (v) { return v[0] === id; })[0]; if (b) return b[1];
    var u = st.voices.filter(function (v) { return v.id === id; })[0]; return u ? u.name : "Wanda";
  }
  function unread() { return st.notifs.filter(function (n) { return !n.read; }).length; }
  function notify(title, body, to) { st.notifs.unshift({ id: uid("n"), title: title, body: body, at: Date.now(), read: false, go: to || "home" }); }
  function touchRecent(id) { st.recent = st.recent.filter(function (r) { return r.id !== id; }); st.recent.unshift({ id: id, at: Date.now() }); st.recent = st.recent.slice(0, 30); }

  /* ================= Components ================= */
  function tile(s, extra) {
    var f = isFav(s.id);
    return '<article class="ld-tile" data-go="story/' + s.id + '"><div class="ld-cover"><img src="' + IMG[s.cover] + '" alt="" loading="lazy">' +
      '<span class="ld-dur">' + ic("play", 12) + " " + s.m + " Min</span>" +
      '<button class="ld-fav' + (f ? " on" : "") + '" data-act="fav" data-id="' + s.id + '" aria-label="' + (f ? "Remove from favorites" : "Add to favorites") + '">' + ic(f ? "heartf" : "heart", 16) + "</button>" +
      '<span class="ld-hoverplay">' + ic("play", 16) + "</span></div>" +
      '<div class="ld-meta"><span class="ld-cat">' + esc(s.c) + '</span><h3 class="ld-ttl">' + esc(s.t) + "</h3></div>" + (extra || "") + "</article>";
  }
  function cont(s) {
    var p = pct(s), left = Math.max(0, s.m * 60 - (st.progress[s.id] || 0));
    return '<article class="ld-cont" data-go="story/' + s.id + '"><div class="ld-cover"><img src="' + IMG[s.cover] + '" alt=""></div><div class="ld-body">' +
      '<span class="ld-cat">' + esc(s.c) + '</span><h3 class="ld-ttl" style="min-height:0">' + esc(s.t) + "</h3>" +
      '<div class="ld-progress"><i style="width:' + p + '%"></i></div><small>' + mmss(left) + " left</small></div>" +
      '<span class="ld-play sm">' + ic("play", 18) + "</span></article>";
  }
  function row(s) {
    return '<article class="ld-row" data-go="story/' + s.id + '"><div class="ld-cover"><img src="' + IMG[s.cover] + '" alt="" loading="lazy"></div><div class="ld-body">' +
      '<span class="ld-cat">' + esc(s.c) + '</span><h3 class="ld-ttl">' + esc(s.t) + '</h3><span class="ld-pillplay">' + ic("play", 14) + " " + s.m + " Min</span></div>" +
      '<button class="ld-iconbtn" style="width:36px;height:36px;border:0;color:' + (isFav(s.id) ? "var(--danger-600)" : "var(--ink-800)") + '" data-act="fav" data-id="' + s.id + '" aria-label="Favorite">' + ic(isFav(s.id) ? "heartf" : "heart", 16) + "</button></article>";
  }
  function track(id, list) {
    return '<div class="track" id="' + id + '">' + list.map(function (s) { return tile(s); }).join("") + "</div>";
  }
  function head(title, right) { return '<div class="ld-section-head"><h2>' + title + "</h2>" + (right || "") + "</div>"; }
  function arrows(id) { return '<div class="ld-arrows hide-mobile" style="margin-left:auto"><button class="ld-iconbtn" data-act="scroll" data-t="' + id + '" data-d="-1" aria-label="Previous">' + ic("prev", 18) + '</button><button class="ld-iconbtn" data-act="scroll" data-t="' + id + '" data-d="1" aria-label="Next">' + ic("next", 18) + "</button></div>"; }
  function empty(icn, title, text, btn) {
    return '<div class="ld-panel ld-empty"><div class="art">' + ic(icn, 48) + '</div><h3 style="font-size:20px;font-weight:600;color:var(--ink-800)">' + title + '</h3><p class="ld-muted" style="max-width:420px">' + text + "</p>" + (btn || "") + "</div>";
  }
  function opt(f, v, label, emo, on, sub) {
    return '<button class="ld-option' + (emo ? " col" : "") + (on ? " is-on" : "") + '" data-act="opt" data-f="' + f + '" data-v="' + esc(v) + '">' + (emo ? '<span class="emo">' + emo + "</span>" : "") + "<span>" + label + (sub ? "<small>" + sub + "</small>" : "") + "</span></button>";
  }

  /* ================= Shell ================= */
  var NAV = [["home", "home", "home"], ["library", "library", "library"], ["mystory", "mystory", "mystory"], ["profile", "profile", "user"]];
  function sidebar(a) {
    var h = '<aside class="ld-sidebar"><a data-go="home"><img class="ld-logo" src="' + IMG.logo + '" alt="LullaDream"></a><nav class="ld-navlist"><div class="ld-navlabel">' + T("menu") + "</div>";
    NAV.forEach(function (n) { h += '<a class="ld-navitem' + (n[0] === a ? " is-active" : "") + '" data-go="' + n[0] + '">' + ic(n[2], 22) + T(n[1]) + (n[0] === "mystory" ? '<span class="count">' + st.mine.length + "</span>" : "") + "</a>"; });
    h += '<div class="ld-navlabel" style="margin-top:20px">' + T("space") + "</div>";
    [["favorites", "favorites", "heart", st.favs.length], ["voices", "voices", "mic", st.voices.length], ["recent", "recent", "clock", 0]].forEach(function (n) {
      h += '<a class="ld-navitem' + (n[0] === a ? " is-active" : "") + '" data-go="' + n[0] + '">' + ic(n[2], 22) + T(n[1]) + (n[3] ? '<span class="count">' + n[3] + "</span>" : "") + "</a>";
    });
    h += '</nav><div class="ld-sidebar-foot"><div class="ld-mini-create"><img src="' + IMG.orb + '" alt=""><b>' + T("create1") + " <span>" + T("create2") + "</span></b>" +
      '<a class="ld-btn primary sm block" data-go="create"><span class="spark">' + ic("spark", 16) + "</span>" + T("generate") + "</a></div></div></aside>";
    return h;
  }
  function rail(a) {
    var h = '<aside class="ld-rail"><a class="ld-mark" data-go="home"><img src="' + IMG.mark + '" alt="LullaDream"></a>';
    NAV.forEach(function (n) { h += '<a class="ld-railitem' + (n[0] === a ? " is-active" : "") + '" data-go="' + n[0] + '"><i>' + ic(n[2], 22) + "</i>" + T(n[1]) + "</a>"; });
    h += '<a class="ld-railitem' + (a === "favorites" ? " is-active" : "") + '" data-go="favorites"><i>' + ic("heart", 22) + "</i>" + T("favorites") + "</a>";
    return h + '<a class="ld-rail-fab" data-go="create" title="' + T("generate") + '">' + ic("spark", 26) + "</a></aside>";
  }
  function bnav(a) {
    var items = [["home", "home", "home"], ["library", "library", "library"], ["create", "create", "spark"], ["mystory", "mystory", "mystory"], ["profile", "profile", "user"]];
    return '<nav class="ld-bnav">' + items.map(function (n) { return '<a class="' + (n[0] === a ? "is-active" : "") + (n[0] === "create" ? " fab" : "") + '" data-go="' + n[0] + '"><i>' + ic(n[2], 22) + "</i>" + T(n[1]) + "</a>"; }).join("") + "</nav>";
  }
  function topbar(o) {
    var h = '<header class="ld-topbar">';
    if (!o.back && !o.title) h += '<a class="only-mobile" data-go="home"><img src="' + IMG.logo + '" alt="LullaDream" style="height:40px;width:auto"></a>';
    if (o.back) h += '<button class="ld-iconbtn" data-act="back" aria-label="Back">' + ic("back", 20) + "</button>";
    if (o.title) h += "<h1>" + esc(o.title) + "</h1>";
    if (o.search !== false) h += '<form class="ld-search" data-form="tsearch">' + ic("search", 20) + '<input id="tsearch" type="search" placeholder="' + T("search") + '" aria-label="Search stories"><kbd>⌘K</kbd></form>';
    h += '<div class="ld-spacer"></div>';
    if (o.search !== false) h += '<button class="ld-iconbtn only-mobile" data-go="library" aria-label="Search">' + ic("search", 20) + "</button>";
    var u = unread();
    h += '<button class="ld-iconbtn" data-go="notifications" aria-label="Notifications">' + ic("bell", 20) + (u ? '<span class="ld-dot">' + u + "</span>" : "") + "</button>";
    h += '<button class="ld-coin" data-act="topup" aria-label="Coins">' + "<i></i>" + short(st.coins) + "</button>";
    h += '<span class="ld-userchip" data-go="profile"><span class="ld-avatar" style="width:40px;height:40px"><img src="' + IMG.avatar + '" alt=""></span><span><b>' + esc(st.user.name) + "</b><small>" + planName(st.user.plan) + "</small></span></span>";
    return h + "</header>";
  }
  function planName(p) { return { free: "Free", premium: "Premium", super: "Super Premium" }[p] || "Super Premium"; }

  /* ================= Router ================= */
  function route() {
    var h = location.hash.replace(/^#\/?/, ""), qi = h.indexOf("?");
    var path = qi > -1 ? h.slice(0, qi) : h, q = new URLSearchParams(qi > -1 ? h.slice(qi + 1) : "");
    return { parts: path.split("/").filter(Boolean), q: q };
  }
  var app = document.getElementById("app");
  var lastPath = null;

  function render() {
    var r = route(), p = r.parts, name = p[0] || "home";
    clearAuthTimers();
    var isAuth = AUTH.indexOf(name) > -1;
    if (!st.authed && !isAuth) { location.replace(st.onboarded ? "#/login" : "#/welcome"); return; }
    if (st.authed && isAuth) { location.replace("#/home"); return; }
    if (name !== "story") stopPlayer();
    var v;
    switch (name) {
      case "home": v = vHome(); break;
      case "library": v = vLibrary(r.q); break;
      case "story": v = vStory(p[1]); break;
      case "create": v = vCreate(p[1]); break;
      case "mystory": v = vMyStory(); break;
      case "profile": v = p[1] === "edit" ? vProfileEdit() : vProfile(); break;
      case "favorites": v = vFavorites(); break;
      case "voices": v = vVoices(); break;
      case "recent": v = vRecent(); break;
      case "notifications": v = vNotifs(); break;
      case "plans": v = vPlans(); break;
      case "help": v = vHelp(p[1]); break;
      case "soon": v = vSoon(p[1]); break;
      case "topup": v = vTopup(); break;
      case "welcome": case "login": case "signup": case "forgot": case "otp": case "reset": v = vAuth(name); break;
      default: v = vNotFound();
    }
    if (v.bare) { app.innerHTML = v.html; }
    else {
      app.innerHTML = '<div class="ld-app">' + sidebar(v.active) + rail(v.active) + '<div class="ld-main">' + topbar(v) +
        '<main class="ld-content" id="view">' + v.html + "</main></div></div>" + bnav(v.active);
    }
    document.title = (v.doc || v.title || "Home") + " · LullaDream";
    var key = p.join("/");
    if (key !== lastPath) window.scrollTo(0, 0);
    lastPath = key;
    if (v.after) v.after();
  }
  window.addEventListener("hashchange", render);

  /* ================= Views ================= */
  var homeCat = "All";
  function vHome() {
    var all = D.CATALOG;
    var contList = st.recent.map(function (r) { return getStory(r.id); }).filter(function (s) { return s && pct(s) > 0 && pct(s) < 100; }).slice(0, 3);
    var favCats = st.favs.map(getStory).filter(Boolean).map(function (s) { return s.c; });
    var forYou = all.slice().sort(function (a, b) { return (favCats.indexOf(b.c) > -1) - (favCats.indexOf(a.c) > -1) || b.pop - a.pop; });
    var liked = all.slice().sort(function (a, b) { return b.pop - a.pop; });
    var filtered = homeCat === "All" ? all : all.filter(function (s) { return s.c === homeCat; });
    var h = '<section class="home-hero"><div class="ld-greet"><span class="ld-moon"></span><span class="ld-moon b"></span>' +
      '<div class="hi" style="position:relative">👋 ' + T("hi") + " <b>" + esc(st.user.name) + "</b></div>" +
      '<h1 style="position:relative">' + T("special") + " <em>" + T("dreamer") + "</em></h1>" +
      '<form class="ld-search" data-form="tsearch">' + ic("search", 20) + '<input type="search" placeholder="' + T("search") + '" aria-label="Search stories"></form></div>' +
      '<div class="ld-create"><span class="ld-stars"></span><img class="orb" src="' + IMG.orb + '" alt=""><div style="position:relative"><h2>' + T("create1") + " <span>" + T("create2") + "</span></h2>" +
      "<p>Turn " + esc(st.user.child || "your little dreamer") + "'s idea into a bedtime story in your own voice.</p>" +
      '<a class="ld-btn primary" data-go="create"><span class="spark">' + ic("spark", 18) + "</span>" + T("generate") + "</a></div></div></section>";
    if (contList.length) h += '<section class="ld-section">' + head(T("cont"), '<a class="ld-link" data-go="recent">' + T("seeall") + ic("next", 16) + "</a>") + '<div class="cont-grid">' + contList.map(cont).join("") + "</div></section>";
    h += '<section class="ld-section">' + head(T("foryou"), arrows("t1")) + track("t1", forYou) + "</section>";
    h += '<section class="ld-section">' + head(T("liked"), arrows("t2")) + track("t2", liked.slice().reverse()) + "</section>";
    h += '<section class="ld-section">' + head(T("all"), '<a class="ld-link" data-go="library">' + T("seeall") + ic("next", 16) + "</a>") +
      '<div class="ld-chips" style="overflow-x:auto;flex-wrap:nowrap;scrollbar-width:none">' + ["All"].concat(D.CATS).map(function (c) { return '<button class="ld-chip' + (c === homeCat ? " is-on" : "") + '" data-act="homecat" data-v="' + esc(c) + '">' + esc(c) + "</button>"; }).join("") + "</div>" +
      '<div class="ld-grid">' + filtered.map(function (s) { return tile(s); }).join("") + "</div></section>";
    return { active: "home", html: h, doc: "Home" };
  }

  /* ---- Library ---- */
  var lib = { q: "", cats: [], countries: [], durs: [], ages: [], sort: "popular", view: "grid" };
  var DURF = [["short", "Short (≤ 4 min)"], ["medium", "Medium (5–6 min)"], ["long", "Long (7+ min)"]];
  function durKey(m) { return m <= 4 ? "short" : m <= 6 ? "medium" : "long"; }
  function libResults() {
    var q = lib.q.trim().toLowerCase();
    var r = allStories().filter(function (s) {
      return (!q || (s.t + " " + s.c + " " + s.country).toLowerCase().indexOf(q) > -1) &&
        (!lib.cats.length || lib.cats.indexOf(s.c) > -1) && (!lib.countries.length || lib.countries.indexOf(s.country) > -1) &&
        (!lib.durs.length || lib.durs.indexOf(durKey(s.m)) > -1) && (!lib.ages.length || lib.ages.indexOf(s.age) > -1);
    });
    var srt = { popular: function (a, b) { return b.pop - a.pop; }, az: function (a, b) { return a.t.localeCompare(b.t); }, short: function (a, b) { return a.m - b.m; }, long: function (a, b) { return b.m - a.m; } }[lib.sort];
    return r.sort(srt);
  }
  function filterPanel() {
    function grp(title, k, items) {
      return "<div><h4>" + title + "</h4>" + items.map(function (it) {
        var v = Array.isArray(it) ? it[0] : it, l = Array.isArray(it) ? it[1] : it;
        return '<label class="check"><input type="checkbox" data-act="lf" data-k="' + k + '" value="' + esc(v) + '"' + (lib[k].indexOf(v) > -1 ? " checked" : "") + "> " + esc(l) + "</label>";
      }).join("") + "</div>";
    }
    return '<div class="ld-section-head"><h2 style="font-size:17px">Filter</h2><a class="ld-link" data-act="lclear">Clear all</a></div>' +
      grp("Categories", "cats", D.CATS) + grp("Country of Origin", "countries", D.COUNTRIES) + grp("Story Duration", "durs", DURF) + grp("Age Group", "ages", D.AGES);
  }
  function activeChips() {
    var c = [];
    ["cats", "countries", "durs", "ages"].forEach(function (k) {
      lib[k].forEach(function (v) { var l = k === "durs" ? DURF.filter(function (d) { return d[0] === v; })[0][1] : v; c.push('<button class="ld-chip" data-act="lrm" data-k="' + k + '" data-v="' + esc(v) + '">' + esc(l) + '<span class="x">' + ic("x", 14) + "</span></button>"); });
    });
    return c.join("");
  }
  function libBody() {
    var r = libResults(), n = lib.cats.length + lib.countries.length + lib.durs.length + lib.ages.length;
    var res = r.length ? (lib.view === "grid" ? '<div class="ld-grid">' + r.map(function (s) { return tile(s); }).join("") + "</div>" : '<div class="lib-rows">' + r.map(row).join("") + "</div>")
      : empty("search", "No stories found", "Try a different word or clear some filters.", '<button class="ld-btn secondary" data-act="lclear">Clear filters</button>');
    return '<div class="ld-chips" style="align-items:center"><span class="ld-muted" style="font-size:14px;margin-right:6px"><b style="color:var(--ink-800)">' + r.length + "</b> stories</span>" + activeChips() + (n ? '<a class="ld-link" style="color:var(--brand-500);font-weight:600;font-size:14px" data-act="lclear">Clear all</a>' : "") + "</div>" + res;
  }
  function vLibrary(q) {
    if (q.get("q") != null) lib.q = q.get("q");
    if (q.get("cat")) lib.cats = [q.get("cat")];
    var h = '<section class="lib"><aside class="ld-panel lib-filter">' + filterPanel() + "</aside>" +
      '<div class="ld-section" style="gap:20px"><div class="lib-head"><h1 class="ld-h-page hide-mobile" style="margin-right:8px">' + T("library") + "</h1>" +
      '<div class="ld-search">' + ic("search", 20) + '<input id="lq" type="search" placeholder="' + T("search") + '" value="' + esc(lib.q) + '" aria-label="Search library"></div>' +
      '<select class="ld-input" style="width:auto" data-act="lsort" aria-label="Sort">' + [["popular", "Most popular"], ["az", "A – Z"], ["short", "Shortest first"], ["long", "Longest first"]].map(function (o) { return '<option value="' + o[0] + '"' + (lib.sort === o[0] ? " selected" : "") + ">" + o[1] + "</option>"; }).join("") + "</select>" +
      '<div class="ld-seg"><span class="' + (lib.view === "grid" ? "on" : "") + '" data-act="lview" data-v="grid" title="Grid">' + ic("grid", 16) + '</span><span class="' + (lib.view === "list" ? "on" : "") + '" data-act="lview" data-v="list" title="List">' + ic("list", 16) + "</span></div>" +
      '<button class="ld-filterbtn filter-open" data-act="lsheet" aria-label="Filter">' + ic("sliders", 20) + "</button></div>" +
      '<div id="libbody" class="ld-section" style="gap:20px">' + libBody() + "</div></div></section>";
    return { active: "library", title: T("library"), search: false, html: h, after: function () {
      var i = $("#lq"); if (q.get("q")) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
    } };
  }
  function refreshLib() { var b = $("#libbody"); if (b) b.innerHTML = libBody(); $$(".lib-filter").forEach(function (p) { p.innerHTML = filterPanel(); }); var sp = $("#sheetfilter"); if (sp) sp.innerHTML = filterPanel(); }

  /* ---- Story player ---- */
  var pl = { id: null, playing: false, t: null, last: 0, tick: 0 };
  function vStory(id) {
    var s = getStory(id);
    if (!s) return vNotFound();
    pl.id = id;
    var dur = s.m * 60, pos = Math.min(st.progress[id] || 0, dur), f = isFav(id);
    var more = D.CATALOG.filter(function (x) { return x.id !== id && x.c === s.c; }).concat(D.CATALOG.filter(function (x) { return x.id !== id && x.c !== s.c; })).slice(0, 8);
    var mineBtns = s.mine ? '<div style="display:flex;gap:10px"><a class="ld-btn secondary sm" style="flex:1" data-go="create/' + s.id + '">' + ic("edit", 16) + 'Edit story</a><button class="ld-btn sm" style="flex:1;background:var(--danger-100);color:var(--danger-600)" data-act="mdel" data-id="' + s.id + '">' + ic("trash", 16) + "Delete</button></div>" : "";
    var h = '<section class="player"><div class="ld-panel ld-player left">' +
      '<div class="ld-cover"><img src="' + IMG[s.cover] + '" alt=""><span class="ld-narr">' + ic("mic", 14) + '<span id="pvoice">' + esc(voiceName(st.voice)) + "</span></span></div>" +
      '<div class="ld-player" style="gap:18px"><div><span class="ld-cat">' + esc(s.c) + (s.mine ? " · " + (s.pub ? "Public" : "Private") : "") + '</span><h1 style="font-size:24px;line-height:32px;font-weight:600;color:var(--ink-800);margin-top:2px">' + esc(s.t) + "</h1></div>" +
      '<div><div class="scrub" data-act="seek"><i id="pfill" style="width:' + (pos / dur * 100) + '%"></i><b id="pknob" style="left:' + (pos / dur * 100) + '%"></b></div><div class="ld-time"><span id="pcur">' + mmss(pos) + "</span><span>" + mmss(dur) + "</span></div></div>" +
      '<div class="ld-controls"><button class="ld-iconbtn" data-act="fav" data-id="' + id + '" style="color:' + (f ? "var(--danger-600)" : "var(--ink-800)") + '" aria-label="Favorite">' + ic(f ? "heartf" : "heart", 20) + '</button><button class="ld-iconbtn" data-act="skip" data-d="-15" aria-label="Back 15 seconds">' + ic("rew", 22) + '</button>' +
      '<button class="ld-play" id="pbtn" data-act="play" aria-label="Play">' + ic(pl.playing ? "pause" : "play", 26) + '</button><button class="ld-iconbtn" data-act="skip" data-d="15" aria-label="Forward 15 seconds">' + ic("fwd", 22) + '</button><button class="ld-iconbtn" data-act="share" data-id="' + id + '" aria-label="Share">' + ic("share", 20) + "</button></div>" +
      '<div class="pl-set"><button data-act="pvoice">' + ic("mic", 20) + "Voice<small>" + esc(voiceName(st.voice)) + '</small></button><button data-act="psound">' + ic("music", 20) + "Sounds<small>Soon" + '</small></button><button data-act="ptimer">' + ic("moon", 20) + 'Sleep timer<small id="ptimer">' + (st.timer ? st.timer + " min" : "Off") + "</small></button></div>" + mineBtns + "</div></div>" +
      '<div class="ld-section" style="gap:var(--gap)"><div class="ld-panel"><div class="ld-section-head" style="margin-bottom:18px"><h2>' + T("read") + '</h2><span class="ld-badge" style="margin-left:auto">' + ic("book", 14) + " " + s.m + " Min</span></div>" +
      '<div class="ld-reader" id="reader">' + s.text.map(function (t, i) { return '<p data-act="seekp" data-i="' + i + '">' + esc(t) + "</p>"; }).join("") + "</div></div>" +
      '<div class="ld-section">' + head("More like this", arrows("t3")) + track("t3", more) + "</div></div></section>";
    return { active: s.mine ? "mystory" : "library", title: "Story", back: true, search: false, html: h, doc: s.t, after: updPlayer };
  }
  function updPlayer() {
    var s = getStory(pl.id); if (!s || !$("#pfill")) return;
    var dur = s.m * 60, pos = Math.min(st.progress[s.id] || 0, dur), r = pos / dur * 100;
    $("#pfill").style.width = r + "%"; $("#pknob").style.left = r + "%"; $("#pcur").textContent = mmss(pos);
    $("#pbtn").innerHTML = ic(pl.playing ? "pause" : "play", 26);
    var n = s.text.length, idx = pos > 0 ? Math.min(n - 1, Math.floor(pos / dur * n)) : -1;
    $$("#reader p").forEach(function (p, i) { p.classList.toggle("hl", i === idx); });
    var tm = $("#ptimer"); if (tm) tm.textContent = st.timerEnd ? mmss((st.timerEnd - Date.now()) / 1000) + " left" : (st.timer ? st.timer + " min" : "Off");
  }
  function play() {
    var s = getStory(pl.id); if (!s) return;
    if ((st.progress[s.id] || 0) >= s.m * 60) st.progress[s.id] = 0;
    pl.playing = true; pl.last = Date.now(); clearInterval(pl.t); pl.t = setInterval(tick, 250);
    if (st.timer && !st.timerEnd) st.timerEnd = Date.now() + st.timer * 60e3;
    touchRecent(s.id); save(); updPlayer();
  }
  function pause() { pl.playing = false; clearInterval(pl.t); save(); updPlayer(); }
  function stopPlayer() { if (pl.playing) { pl.playing = false; clearInterval(pl.t); save(); } }
  function tick() {
    var s = getStory(pl.id); if (!s) return stopPlayer();
    var now = Date.now(), dur = s.m * 60, p = (st.progress[s.id] || 0) + (now - pl.last) / 1000; pl.last = now;
    if (p >= dur) { st.progress[s.id] = dur; pause(); toast("Story finished. Sweet dreams!"); return; }
    st.progress[s.id] = p;
    if (st.timerEnd && now >= st.timerEnd) { st.timerEnd = 0; pause(); toast("Sleep timer ended — goodnight!"); return; }
    if (++pl.tick % 8 === 0) save();
    updPlayer();
  }
  function seekTo(sec) { var s = getStory(pl.id); st.progress[s.id] = Math.max(0, Math.min(s.m * 60, sec)); save(); updPlayer(); }

  /* ---- Generate / edit story ---- */
  var STEPS = [["Character", "Name and idea"], ["Listener's age", "Who is listening"], ["Writing style", "How it sounds"], ["Story type", "What kind of tale"], ["Duration & voice", "Length and narrator"], ["Optional details", "Title, setting, lesson"]];
  var gen = { step: 0, d: null, editId: null, err: {} };
  function newDraft() { return { name: st.user.child || "", age: 6, about: "", listener: "4–5", style: "calm", type: "bedtime", m: 5, voice: st.voice, title: "", setting: "", moral: "", cover: "jessica", public: false }; }
  function stepSub(i) {
    var d = gen.d;
    return [d.name || "Name and idea", d.listener + " years", (D.STYLES.filter(function (x) { return x[0] === d.style; })[0] || [])[1], (D.TYPES.filter(function (x) { return x[0] === d.type; })[0] || [])[1], d.m + " min · " + voiceName(d.voice), d.title || "Optional"][i];
  }
  function stepBody(i) {
    var d = gen.d, e = gen.err;
    if (i === 0) return '<div class="gen-grid">' +
      '<div class="ld-field"><label for="f-name">Main character\'s name <em>*</em></label><input id="f-name" class="ld-input' + (e.name ? " err" : "") + '" data-f="name" maxlength="50" value="' + esc(d.name) + '" placeholder="e.g. Tessa"><span class="ld-count" data-count="name">' + d.name.length + "/50</span>" + (e.name ? '<span class="error">' + e.name + "</span>" : "") + "</div>" +
      '<div class="ld-field"><label for="f-age">How old is the character?</label><div style="display:flex;align-items:center;gap:16px;height:48px"><input id="f-age" type="range" class="range" min="1" max="12" data-f="age" value="' + d.age + '"><span class="ld-badge" style="height:32px;white-space:nowrap" data-count="age">' + d.age + " years old</span></div></div>" +
      '<div class="ld-field full"><label for="f-about">What\'s your story about? <span class="ld-muted" style="font-weight:500">Short or detailed — your imagination leads the way!</span> <em>*</em></label><div class="ta-wrap"><textarea id="f-about" class="ld-input' + (e.about ? " err" : "") + '" data-f="about" maxlength="500" placeholder="A brave little girl who goes on a journey to find the most beautiful sky...">' + esc(d.about) + '</textarea><button class="mic" data-act="dictate" title="Dictate">' + ic("mic", 18) + '</button></div><span class="ld-count" data-count="about">' + d.about.length + "/500</span>" + (e.about ? '<span class="error">' + e.about + "</span>" : "") + "</div>" +
      '<div class="full ld-chips" style="align-items:center"><span class="ld-muted" style="font-size:13px;margin-right:4px">Need an idea?</span>' + D.IDEAS.map(function (t) { return '<button class="ld-chip" data-act="idea" data-v="' + esc(t) + '">' + esc(t) + "</button>"; }).join("") + "</div></div>";
    if (i === 1) return '<p class="ld-muted">Pick the age of the child who will listen — we\'ll adjust words and length.</p><div class="opts four">' + D.AGES.map(function (a) { return opt("listener", a, a + " years", "", d.listener === a, { "2–3": "Toddler", "4–5": "Preschool", "6–8": "Early reader", "9–12": "Big kid" }[a]); }).join("") + "</div>";
    if (i === 2) return '<div class="opts">' + D.STYLES.map(function (x) { return opt("style", x[0], x[1], x[2], d.style === x[0]); }).join("") + "</div>";
    if (i === 3) return '<div class="opts">' + D.TYPES.map(function (x) { return opt("type", x[0], x[1], x[2], d.type === x[0]); }).join("") + "</div>";
    if (i === 4) return '<div class="ld-field"><label>Story duration</label><div class="opts four">' + D.DURS.map(function (m) { return opt("m", String(m), m + " Min", "", d.m === m); }).join("") + "</div></div>" +
      '<div class="ld-field"><label>Narrator voice</label><div class="opts">' + D.VOICES_BUILTIN.map(function (v) { return opt("voice", v[0], v[1], "", d.voice === v[0], "LullaDream voice"); }).join("") +
      st.voices.map(function (v) { return opt("voice", v.id, esc(v.name), "", d.voice === v.id, "Your recording"); }).join("") + "</div></div>";
    return '<div class="gen-grid"><div class="ld-field"><label for="f-title">Story title</label><input id="f-title" class="ld-input" data-f="title" maxlength="80" value="' + esc(d.title) + '" placeholder="We\'ll name it for you if empty"></div>' +
      '<div class="ld-field"><label for="f-set">Where does it happen?</label><input id="f-set" class="ld-input" data-f="setting" maxlength="80" value="' + esc(d.setting) + '" placeholder="e.g. a forest of glowing mushrooms"></div>' +
      '<div class="ld-field full"><label for="f-moral">Lesson to learn</label><input id="f-moral" class="ld-input" data-f="moral" maxlength="120" value="' + esc(d.moral) + '" placeholder="e.g. sharing makes us happy"></div>' +
      '</div>';
  }
  function summary() {
    var d = gen.d, left = st.coins - (gen.editId ? 0 : 1);
    return '<div class="ld-panel sum" style="display:flex;flex-direction:column;gap:16px"><div style="display:flex;gap:12px;align-items:center"><img src="' + IMG[d.cover] + '" alt="" style="width:56px;height:56px;border-radius:12px;object-fit:cover"><div><span class="ld-cat">Your story so far</span><b style="display:block;color:var(--ink-800)">' + esc(d.title || autoTitle(d)) + "</b></div></div>" +
      "<dl><dt>Character</dt><dd>" + esc(d.name || "—") + (d.name ? ", " + d.age : "") + "</dd><dt>Listener</dt><dd>" + d.listener + " yrs</dd><dt>Style</dt><dd>" + stepSub(2) + "</dd><dt>Type</dt><dd>" + stepSub(3) + "</dd><dt>Duration</dt><dd>" + d.m + " Min</dd><dt>Voice</dt><dd>" + esc(voiceName(d.voice)) + "</dd></dl>" +
      '<div class="ld-divider"></div><div style="display:flex;gap:10px;align-items:center"><span class="ld-coin" style="height:36px;padding:0 12px;background:var(--brand-050);border:0"><i></i>' + (gen.editId ? "Free" : "1 coin") + '</span><span class="ld-muted" style="font-size:13px">' + num(left) + " coins left after this</span></div></div>";
  }
  function autoTitle(d) { return d.name ? d.name + "'s " + (stepSub(3) || "Story") : "Untitled story"; }
  function vCreate(editId) {
    if (editId) {
      if (gen.editId !== editId || !gen.d) {
        var m = st.mine.filter(function (x) { return x.id === editId; })[0]; if (!m) return vNotFound();
        gen = { step: 0, editId: editId, err: {}, d: { name: m.name, age: m.age, about: m.about, listener: m.listener, style: m.style, type: m.type, m: m.m, voice: m.voice, title: m.title, setting: m.setting, moral: m.moral, cover: m.cover, public: m.public } };
      }
    } else if (!gen.d || gen.editId) { gen = { step: 0, editId: null, err: {}, d: newDraft() }; }
    var i = gen.step, last = i === STEPS.length - 1, title = gen.editId ? "Edit Your Story" : "Generate Your Story";
    var stepper = '<aside class="side ld-panel" style="padding:12px"><div class="ld-steps">' + STEPS.map(function (s, k) {
      return '<div class="ld-step ' + (k < i ? "done" : k === i ? "now" : "") + '" data-act="gostep" data-i="' + k + '"><i>' + (k < i ? ic("check", 14) : k + 1) + "</i><div><b>" + s[0] + "</b><small>" + esc(k <= i ? stepSub(k) : s[1]) + "</small></div></div>";
    }).join("") + "</div></aside>";
    var h = '<section class="gen">' + stepper + '<div class="gen-form">' +
      '<div class="gen-head"><div style="display:flex;align-items:center;gap:10px"><span style="color:var(--accent-400)">' + ic("spark", 24) + '</span><h1 style="font-size:22px;line-height:28px;font-weight:700">' + title + '</h1><span style="margin-left:auto;font-size:13px;font-weight:600;opacity:.9">Step ' + (i + 1) + " of 6</span></div>" +
      '<div class="ld-stepbar">' + STEPS.map(function (s, k) { return '<i class="' + (k <= i ? "on" : "") + '"></i>'; }).join("") + '</div><b style="font-size:15px">' + STEPS[i][0] + "</b></div>" +
      '<div class="ld-panel" style="display:flex;flex-direction:column;gap:20px"><div class="hide-tablet"><span class="ld-cat" style="color:var(--brand-500)">Step ' + (i + 1) + ' of 6</span><h2 style="font-size:24px;line-height:32px;font-weight:600;color:var(--ink-800)">' + STEPS[i][0] + "</h2></div>" + stepBody(i) + "</div>" +
      '<div class="ld-panel actionbar">' + (i > 0 ? '<button class="ld-btn secondary" data-act="prevstep">' + ic("prev", 18) + "Back</button>" : '<button class="ld-btn ghost" data-act="cancelgen">Cancel</button>') +
      '<span class="grow ld-muted" style="font-size:13px">' + (gen.editId ? "Editing is free — no coins used." : "Uses 1 coin · " + num(st.coins - 1) + " left after") + "</span>" +
      (last ? '<button class="ld-btn primary" data-act="finish" style="min-width:180px"><span class="spark">' + ic("spark", 18) + "</span>" + (gen.editId ? "Save changes" : "Create Story") + "</button>"
        : '<button class="ld-btn primary" data-act="nextstep" style="min-width:160px">Next ' + ic("next", 18) + "</button>") + "</div></div>" +
      '<aside class="side" id="sum">' + summary() + "</aside></section>";
    return { active: "create", title: gen.editId ? "Edit Story" : T("create"), back: true, search: false, html: h, doc: title };
  }
  function validate(i) {
    gen.err = {};
    if (i === 0) {
      if (!gen.d.name.trim()) gen.err.name = "Please enter a name.";
      if (gen.d.about.trim().length < 10) gen.err.about = "Tell us a little more (at least 10 characters).";
    }
    return !Object.keys(gen.err).length;
  }
  function finishGen() {
    if (!validate(0)) { gen.step = 0; render(); return; }
    var d = gen.d;
    if (gen.editId) {
      var m = st.mine.filter(function (x) { return x.id === gen.editId; })[0];
      Object.keys(d).forEach(function (k) { m[k] = typeof d[k] === "string" ? d[k].trim() : d[k]; });
      m.title = m.title || autoTitle(d); m.text = D.genText(m); m.updatedAt = Date.now();
      var id = m.id; gen = { step: 0, d: null, editId: null, err: {} }; save(); toast("Story updated"); go("story/" + id); return;
    }
    if (st.coins < 1) { toast("Not enough coins — top up first"); return; }
    dialog({ icon: "spark", title: "Create this story?", text: "This story uses 1 coin. You'll have " + num(st.coins - 1) + " coins left.", ok: "Create Story", onOk: function () {
      overlay('<div class="dlg"><div class="loader"><img src="' + IMG.orb + '" alt=""></div><h3>Writing your story…</h3><p>Sit tight! Your bedtime story voice is being prepared.</p><div class="bar"><i id="genbar"></i></div></div>', true);
      var k = 0, iv = setInterval(function () {
        k += 1; var b = $("#genbar"); if (b) b.style.width = Math.min(100, k * 9) + "%";
        if (k >= 12) {
          clearInterval(iv); closeOverlay();
          var m = { id: uid("m") }; Object.keys(d).forEach(function (x) { m[x] = typeof d[x] === "string" ? d[x].trim() : d[x]; });
          m.title = m.title || autoTitle(d); m.text = D.genText(m); m.createdAt = m.updatedAt = Date.now();
          st.mine.unshift(m); st.coins -= 1; notify("Your story is ready", "\"" + m.title + "\" is waiting in My Story.", "story/" + m.id);
          gen = { step: 0, d: null, editId: null, err: {} }; save(); toast("Story created — enjoy!"); go("story/" + m.id);
        }
      }, 200);
    } });
  }

  /* ---- My Story ---- */
  var myf = { tab: "all", q: "" };
  function myList() {
    var q = myf.q.trim().toLowerCase();
    return st.mine.filter(function (m) { return (myf.tab === "all" || (myf.tab === "public") === !!m.public) && (!q || (m.title + " " + m.about).toLowerCase().indexOf(q) > -1); });
  }
  function myGrid() {
    var l = myList();
    if (!st.mine.length) return empty("spark", "Let's create your first magical tale!", "Stories you create appear here. You can listen, edit, share or delete them anytime.", '<a class="ld-btn primary" data-go="create"><span class="spark">' + ic("spark", 18) + "</span>" + T("generate") + "</a>");
    return '<div class="ld-grid"><div class="ld-newtile" data-go="create"><span>' + ic("plus", 26) + "</span>New story<small class=\"ld-muted\" style=\"font-weight:500\">1 coin</small></div>" +
      l.map(function (m) {
        var s = fromMine(m);
        return tile(s, '<div class="my-actions"><button data-act="medit" data-id="' + m.id + '" title="Edit">' + ic("edit", 14) + 'Edit</button><button data-act="mpub" data-id="' + m.id + '" title="Visibility">' + ic(m.public ? "globe" : "lock", 14) + (m.public ? "Public" : "Private") + '</button><button class="del" data-act="mdel" data-id="' + m.id + '" title="Delete">' + ic("trash", 14) + "</button></div>");
      }).join("") + "</div>" + (l.length ? "" : '<p class="ld-muted">No stories match this filter.</p>');
  }
  function vMyStory() {
    var pubN = st.mine.filter(function (m) { return m.public; }).length;
    var h = '<section class="page-head"><div class="grow"><h1 class="ld-h-page">' + T("mystory") + "</h1><p>" + st.mine.length + " stories · " + pubN + " shared publicly</p></div>" +
      '<a class="ld-btn primary" data-go="create"><span class="spark">' + ic("spark", 18) + "</span>" + T("generate") + "</a></section>" +
      (st.mine.length ? '<section class="lib-head"><div class="ld-seg">' + [["all", "All"], ["public", "Public"], ["private", "Private"]].map(function (t) { return '<span class="' + (myf.tab === t[0] ? "on" : "") + '" data-act="mytab" data-v="' + t[0] + '">' + t[1] + "</span>"; }).join("") + '</div><div class="ld-search" style="max-width:420px">' + ic("search", 20) + '<input id="myq" type="search" placeholder="Search your stories" value="' + esc(myf.q) + '"></div></section>' : "") +
      '<section id="mygrid" style="margin-top:calc(var(--sect) * -0.5)">' + myGrid() + "</section>";
    return { active: "mystory", title: T("mystory"), search: false, html: h };
  }

  /* ---- Profile ---- */
  function li(icn, text, val, to, cls, act) {
    return '<div class="ld-li ' + (cls || "") + '" ' + (act ? 'data-act="' + act + '"' : 'data-go="' + to + '"') + '><span class="ic">' + ic(icn, 18) + '</span><span class="tx">' + text + "</span>" + (val != null ? '<span class="val">' + val + "</span>" : "") + '<span class="ld-muted">' + ic("next", 18) + "</span></div>";
  }
  function voicesGrid() {
    return '<div class="ld-voices">' + st.voices.map(function (v) {
      return '<div class="ld-voice' + (st.voice === v.id ? " on" : "") + '" data-act="vsel" data-id="' + v.id + '"><span class="v">' + ic("user", 28) + '<button class="vx" data-act="vdel" data-id="' + v.id + '" aria-label="Delete voice">' + ic("x", 12) + "</button></span>" + esc(v.name) + '<span class="pv" data-act="vplay" data-id="' + v.id + '">' + ic("play", 10) + "Preview</span></div>";
    }).join("") + '<div class="ld-voice" data-act="vnew"><span class="v" style="background:var(--brand-050);border:2px dashed var(--brand-200)">' + ic("plus", 26) + "</span>New Voice<small>100 coins</small></div></div>";
  }
  function vProfile() {
    var h = '<section class="two" style="align-items:stretch"><div class="ld-panel" style="background:var(--peach-100);box-shadow:none;display:flex;align-items:center;gap:16px;flex-wrap:wrap">' +
      '<span class="ld-avatar" style="width:72px;height:72px;border:3px solid #fff"><img src="' + IMG.avatar + '" alt=""></span><div style="flex:1;min-width:160px"><h2 style="font-size:20px;font-weight:600">' + esc(st.user.name) + '</h2><p class="ld-muted" style="font-size:14px">' + esc(st.user.email) + '</p><span class="ld-badge" style="background:#fff;margin-top:6px"><em>' + planName(st.user.plan) + "</em></span></div>" +
      '<a class="ld-btn secondary sm" data-go="profile/edit">' + ic("edit", 16) + "Edit</a></div>" +
      '<div class="ld-coincard"><div><small>Your Coins</small><strong><i style="width:20px;height:20px;border-radius:50%;background:var(--coin-300);box-shadow:inset 0 0 0 4px #f5b800"></i>' + num(st.coins) + "</strong><em>" + planName(st.user.plan) + '</em></div><div class="top" data-act="topup"><span>' + ic("topup", 22) + "</span>Top Up</div></div></section>" +
      '<section class="two" style="margin-top:calc(var(--sect) * -0.5)"><div class="ld-panel" style="padding:20px"><h3 style="font-size:15px;font-weight:600;color:var(--ink-800);margin-bottom:4px">User Information</h3><div class="ld-list">' +
      li("user", "Settings Profile", null, "profile/edit") + li("mic", T("voices"), st.voices.length, "voices") + li("card", "Subscription Plans", planName(st.user.plan), "plans") +
      li("globe", "Language", st.user.lang, null, "", "lang") + li("clock", T("recent"), null, "recent") + li("heart", T("favorites"), st.favs.length, "favorites") + li("bell", T("notifs"), unread() || null, "notifications") + "</div></div>" +
      '<div class="ld-panel" style="padding:20px"><h3 style="font-size:15px;font-weight:600;color:var(--ink-800);margin-bottom:4px">Help &amp; Support</h3><div class="ld-list">' +
      li("help", "FAQs", null, "help/faq") + li("headset", "Customer Support", null, "help/support") + li("gear", "Troubleshooting", null, "help/troubleshooting") + li("doc", "Terms &amp; Conditions", null, "help/terms") + li("shield", "Privacy Policy", null, "help/privacy") +
      li("trash", "Delete Account", null, null, "danger", "delacc") + "</div></div></section>" +
      '<section class="ld-panel" style="margin-top:calc(var(--sect) * -0.5)"><div class="ld-section-head" style="margin-bottom:16px"><h2 style="font-size:17px">Your ' + T("voices") + '</h2><a class="ld-link" data-go="voices">Manage' + ic("next", 16) + "</a></div>" + voicesGrid() + "</section>" +
      '<button class="ld-btn secondary block" data-act="signout" style="margin-top:calc(var(--sect) * -0.5)">' + ic("logout", 18) + "Sign Out</button>";
    return { active: "profile", title: T("profile"), search: false, html: h };
  }
  function vProfileEdit() {
    var u = st.user;
    var h = '<section class="two"><form class="ld-panel" data-form="profile" style="display:flex;flex-direction:column;gap:20px" novalidate><h2 style="font-size:20px;font-weight:600;color:var(--ink-800)">Settings Profile</h2>' +
      '<div style="display:flex;align-items:center;gap:16px"><span class="ld-avatar" style="width:72px;height:72px"><img src="' + IMG.avatar + '" alt=""></span><div><b>' + esc(u.name) + '</b><p class="ld-muted" style="font-size:13px">' + planName(u.plan) + "</p></div></div>" +
      '<div class="ld-field"><label for="p-name">Full name <em>*</em></label><input id="p-name" name="name" class="ld-input" maxlength="40" value="' + esc(u.name) + '" required></div>' +
      '<div class="ld-field"><label for="p-child">Little dreamer\'s name</label><input id="p-child" name="child" class="ld-input" maxlength="30" value="' + esc(u.child) + '"><span class="hint">Used to pre-fill new stories.</span></div>' +
      '<div class="ld-field"><label for="p-mail">Email <em>*</em></label><input id="p-mail" name="email" type="email" class="ld-input" value="' + esc(u.email) + '" required></div>' +
      '<div class="ld-field"><label for="p-lang">Language</label><select id="p-lang" name="lang" class="ld-input"><option value="EN"' + (u.lang === "EN" ? " selected" : "") + '>English</option><option value="ID"' + (u.lang === "ID" ? " selected" : "") + ">Bahasa Indonesia</option></select></div>" +
      '<div id="perr" class="error" style="color:var(--danger-600);font-size:13px"></div><div style="display:flex;gap:12px"><a class="ld-btn secondary" data-act="back" style="flex:1">Cancel</a><button class="ld-btn primary" type="submit" style="flex:1">Save changes</button></div></form>' +
      '<div class="ld-panel"><h3 style="font-size:15px;font-weight:600;color:var(--ink-800);margin-bottom:8px">About this demo</h3><p class="ld-muted">Changes are saved in this browser only, so you can try everything freely. Nothing is sent to the real LullaDream account.</p></div></section>';
    return { active: "profile", title: "Settings Profile", back: true, search: false, html: h };
  }
  function vVoices() {
    var h = '<section class="page-head"><div class="grow"><h1 class="ld-h-page">' + T("voices") + "</h1><p>Record your voice once and every story can be narrated by you.</p></div>" +
      '<button class="ld-btn primary" data-act="vnew">' + ic("plus", 18) + "New Voice</button></section>";
    h += st.voices.length ? '<section class="ld-panel vlist"><div class="ld-list">' + st.voices.map(function (v) {
      return '<div class="ld-li' + (st.voice === v.id ? " is-on" : "") + '" style="cursor:default"><span class="ic">' + ic("mic", 18) + '</span><span class="tx">' + esc(v.name) + (st.voice === v.id ? ' <span class="ld-badge">Default</span>' : "") + "<small>Recorded " + ago(v.at) + (v.audio ? " · with audio" : "") + '</small></span><span class="acts">' +
        '<button class="ld-iconbtn" data-act="vplay" data-id="' + v.id + '" title="Preview">' + ic("play", 14) + '</button><button class="ld-iconbtn" data-act="vsel" data-id="' + v.id + '" title="Use as default">' + ic("check", 16) + '</button><button class="ld-iconbtn" data-act="vren" data-id="' + v.id + '" title="Rename">' + ic("edit", 16) + '</button><button class="ld-iconbtn" style="color:var(--danger-600)" data-act="vdel" data-id="' + v.id + '" title="Delete">' + ic("trash", 16) + "</button></span></div>";
    }).join("") + "</div></section>" : empty("mic", "No recordings yet", "Add a voice recording so stories can be told in your own voice.", '<button class="ld-btn primary" data-act="vnew">' + ic("plus", 18) + "New Voice</button>");
    h += '<section class="ld-section">' + head("LullaDream voices") + '<div class="ld-voices">' + D.VOICES_BUILTIN.map(function (v) { return '<div class="ld-voice' + (st.voice === v[0] ? " on" : "") + '" data-act="vsel" data-id="' + v[0] + '"><span class="v">' + ic("user", 28) + "</span>" + v[1] + '<span class="pv" data-act="vplay" data-id="' + v[0] + '">' + ic("play", 10) + "Preview</span></div>"; }).join("") + "</div></section>";
    return { active: "voices", title: T("voices"), back: true, search: false, html: h };
  }
  function vFavorites() {
    var l = st.favs.map(getStory).filter(Boolean);
    var h = '<section class="page-head"><div class="grow"><h1 class="ld-h-page">' + T("favorites") + "</h1><p>" + l.length + " saved stories</p></div>" + (l.length ? '<button class="ld-btn secondary" data-act="favclear">' + ic("trash", 16) + "Clear all</button>" : "") + "</section>" +
      (l.length ? '<div class="ld-grid">' + l.map(function (s) { return tile(s); }).join("") + "</div>" : empty("heart", "No favorites yet", "Tap the heart on any story to keep it here.", '<a class="ld-btn primary" data-go="library">Browse the Library</a>'));
    return { active: "favorites", title: T("favorites"), html: h };
  }
  function vRecent() {
    var l = st.recent.map(function (r) { var s = getStory(r.id); return s ? { s: s, at: r.at } : null; }).filter(Boolean);
    var h = '<section class="page-head"><div class="grow"><h1 class="ld-h-page">' + T("recent") + "</h1><p>Stories you listened to recently</p></div>" + (l.length ? '<button class="ld-btn secondary" data-act="recclear">' + ic("trash", 16) + "Clear history</button>" : "") + "</section>";
    h += l.length ? '<section class="ld-panel"><div class="ld-list">' + l.map(function (x) {
      return '<div class="ld-li" data-go="story/' + x.s.id + '"><img src="' + IMG[x.s.cover] + '" alt="" style="width:56px;height:56px;border-radius:10px;object-fit:cover"><span class="tx">' + esc(x.s.t) + "<small>" + ago(x.at) + " · " + pct(x.s) + '% listened</small></span><button class="ld-iconbtn" style="width:36px;height:36px" data-act="recrm" data-id="' + x.s.id + '" aria-label="Remove">' + ic("x", 16) + "</button></div>";
    }).join("") + "</div></section>" : empty("clock", "No activity yet", "Start a story and it will show up here.", '<a class="ld-btn primary" data-go="library">Find a story</a>');
    return { active: "recent", title: T("recent"), html: h };
  }
  function vNotifs() {
    var h = '<section class="page-head"><div class="grow"><h1 class="ld-h-page">' + T("notifs") + "</h1><p>" + unread() + " unread</p></div>" +
      (st.notifs.length ? '<button class="ld-btn secondary" data-act="nall">' + ic("check", 16) + 'Mark all read</button><button class="ld-btn ghost" data-act="nclear">Clear all</button>' : "") + "</section>";
    h += st.notifs.length ? '<section class="ld-panel" style="padding:12px">' + st.notifs.map(function (n) {
      return '<div class="notif' + (n.read ? "" : " unread") + '" data-act="nopen" data-id="' + n.id + '" style="cursor:pointer">' + (n.read ? '<span style="width:8px;flex:none"></span>' : '<span class="dot"></span>') + '<div style="flex:1;min-width:0"><b style="color:var(--ink-800)">' + esc(n.title) + '</b><p class="ld-muted" style="font-size:14px">' + esc(n.body) + '</p><small class="ld-muted">' + ago(n.at) + '</small></div><button class="ld-iconbtn" data-act="ndel" data-id="' + n.id + '" aria-label="Delete">' + ic("trash", 16) + "</button></div>";
    }).join("") + "</section>" : empty("bell", "You're all caught up", "New stories and reminders will appear here.");
    return { active: "", title: T("notifs"), back: true, html: h };
  }
  var PLANS = [["free", "Free", "0", ["3 library stories a week", "LullaDream voices", "10 coins / month"]], ["premium", "Premium", "59K", ["Full library", "1 voice recording", "300 coins / month"]], ["super", "Super Premium", "99K", ["Full library + new releases", "Unlimited voice recordings", "100,000 coins / month"]]];
  function vPlans() {
    var h = '<section class="page-head"><div class="grow"><h1 class="ld-h-page">Subscription Plans</h1><p>Demo only — switching plans here does not charge anything.</p></div></section><section class="plans">' + PLANS.map(function (p) {
      var on = st.user.plan === p[0];
      return '<div class="ld-panel plan' + (on ? " is-on" : "") + '"><span class="ld-badge' + (p[0] === "super" ? " orange" : "") + '" style="align-self:flex-start">' + p[1] + '</span><h2 style="font-size:30px;font-weight:700;color:var(--ink-800)">Rp ' + p[2] + '<small class="ld-muted" style="font-size:14px;font-weight:500"> / month</small></h2><ul>' + p[3].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" +
        (on ? '<span class="ld-btn soft" style="margin-top:auto">' + ic("check", 18) + "Current plan</span>" : '<button class="ld-btn primary" style="margin-top:auto" data-act="plan" data-v="' + p[0] + '">Choose ' + p[1] + "</button>") + "</div>";
    }).join("") + "</section>";
    return { active: "profile", title: "Subscription Plans", back: true, search: false, html: h };
  }
  var HELP = {
    faq: ["FAQs", [["How do coins work?", "Each new story uses 1 coin. Editing a story you made is free. A new voice recording uses 100 coins."], ["Can I use my own voice?", "Yes. Go to Voice Recordings, tap New Voice and record a short sample. Pick it in Duration & voice when creating a story."], ["Who can see my stories?", "Stories are private unless you switch on “Share publicly”. Public stories appear in the Library."], ["Does it work on iPad and foldables?", "Yes — the layout switches to a navigation rail and two-pane screens from 768px, and to the full sidebar from 1200px."]]],
    troubleshooting: ["Troubleshooting", [["The story doesn't play", "Check that your device isn't muted, then tap play again. If the sleep timer ended, set it to Off."], ["My microphone isn't detected", "Allow microphone access in your browser settings. Without it, the demo saves the voice name only."], ["I want to start over", "Profile → Reset demo data restores the sample content in this browser."]]],
    terms: ["Terms & Conditions", [["Demo use", "This is a design prototype of LullaDream for tablet, foldable and desktop. It is provided for review only."], ["Content", "Stories here are sample texts written for the demo."]]],
    privacy: ["Privacy Policy", [["Your data stays here", "Everything you type is stored in this browser's local storage and never leaves your device."], ["Clearing data", "Use Reset demo data or clear your browser storage to remove it."]]]
  };
  function vHelp(t) {
    if (t !== "support") return vSoon(t);
    var h = '<section class="cs2"><p class="cs2-intro">At <b>LullaDreams</b>, we\'re dedicated to helping little ones drift off peacefully—and giving parents one less thing to worry about. If something isn\'t working quite right, our support team is here to help with care and calm.</p>' +
      '<div class="cs2-grid"><div class="ld-panel cs2-card"><h2>Contact Us</h2><p>Email: <a href="mailto:support@lulladream.app">support@lulladream.app</a></p><p>Support Hours: Every day | 8:00 AM – 10:00 PM</p><p>Response Time: Within 24 hours (usually sooner!)</p></div>' +
      '<div class="ld-panel cs2-card"><h2>Whether you need help with:</h2><ul><li>Playing or loading a bedtime story</li><li>Accessing premium features</li><li>Using narration or setting a sleep timer</li></ul><p class="cs2-end">We\'ll walk you through it step by gentle step 🌙💤</p></div></div></section>';
    return { active: "profile", title: "Customer Support", back: true, search: false, html: h };
  }
  /* ---- Coming soon (same design as the app) ---- */
  function vSoon(k) {
    var on = (st.notifyMe || []).indexOf(k || "x") > -1;
    var h = '<section class="soon2"><img src="' + IMG.fairy + '" alt=""><h1>Coming Soon</h1><p>This enchanting feature is on its way. Stay tuned!</p>' +
      '<div class="soon2-btns">' + (on ? '<button class="ld-btn soft lg pill" data-act="notify" data-k="' + esc(k || "x") + '">' + ic("check", 18) + "We'll notify you</button>" : '<button class="ld-btn primary lg pill" data-act="notify" data-k="' + esc(k || "x") + '">Notify Me when Available</button>') +
      '<a class="ld-btn secondary lg pill" data-go="home">Back to Home</a></div></section>';
    return { active: "profile", title: "", back: true, search: false, html: h, doc: "Coming Soon" };
  }
  /* ---- Top up (same design as the app) ---- */
  var PACKS = [[100, 2.52], [300, 5.32], [500, 9.80], [800, 15.40], [1000, 1.00], [1500, 0.59]];
  var topSel = 500;
  function usd(n) { return "USD " + n.toFixed(2); }
  function vTopup() {
    var p = PACKS.filter(function (x) { return x[0] === topSel; })[0];
    var h = '<section class="tu2"><div class="tu2-main">' +
      '<div class="tu2-card"><small>Your Coins</small><strong><i class="coin"></i>' + st.coins + ' Coins<button data-act="refreshcoins" aria-label="Refresh">' + ic("refresh", 22) + '</button></strong><em>' + planName(st.user.plan) + "</em></div>" +
      '<h2 class="tu2-h">Select Number Of Coins</h2><div class="tu2-grid">' +
      PACKS.map(function (x) { return '<button class="tu2-pack' + (x[0] === topSel ? " is-on" : "") + '" data-act="pack" data-v="' + x[0] + '"><b><i class="coin sm"></i>' + x[0] + " Coins</b><span>" + usd(x[1]) + "</span></button>"; }).join("") + "</div></div>" +
      '<aside class="tu2-pay"><div class="tu2-total"><span>Total:</span><b>' + usd(p[1]) + '</b></div><button class="ld-btn primary lg block pill" data-act="buy">Select Payment</button></aside></section>';
    return { active: "profile", title: "Top Up Coins", back: true, search: false, html: h };
  }
  /* ================= Auth: welcome · sign in · sign up · forgot · OTP · new password ================= */
  var AUTH = ["welcome", "login", "signup", "forgot", "otp", "reset"];
  var auth = { mode: "signup", email: "", name: "", phone: "", slide: 0, slideT: null, otpT: null, left: 0 };
  var SLIDES = [
    ["moon", "Welcome to LullaDream", "Create magical bed time story with your voice!"],
    ["orb", "Your Voice, Their Dreams", "Record your voice once — every bedtime story can be told by you, even when you're away."],
    ["covers", "Stories Made for Your Little One", "Pick a classic tale or create a brand-new one with your child as the hero."]
  ];
  function clearAuthTimers() { clearInterval(auth.slideT); clearInterval(auth.otpT); auth.slideT = auth.otpT = null; }
  function slideArt(k) {
    if (k === "moon") return '<img class="auth-ill" src="' + IMG.moon + '" alt="">';
    if (k === "orb") return '<img class="auth-ill orb" src="' + IMG.orb + '" alt="">';
    return '<div class="auth-covers">' + ["aladdin", "beauty", "anansi", "cinderella"].map(function (c) { return '<img src="' + IMG[c] + '" alt="">'; }).join("") + "</div>";
  }
  function eyeField(id, name, label, ph, ac) {
    return '<div class="ld-field"><label for="' + id + '">' + label + ' <em>*</em></label><div class="pw"><input id="' + id + '" name="' + name + '" type="password" class="ld-input" placeholder="' + ph + '" autocomplete="' + ac + '"><button type="button" class="eye" data-act="eye" aria-label="Show password">' + ic("eye", 20) + "</button></div></div>";
  }
  function authShell(o) {
    // o: tone ("peach"|"lav"), art (html), title, sub, body, foot, back
    return { bare: true, doc: o.doc, html: '<div class="auth tone-' + (o.tone || "peach") + '">' +
      '<aside class="auth-art"><a class="auth-logo" data-go="welcome"><img src="' + IMG.logo + '" alt="LullaDream"></a><div class="auth-artbody">' + (o.art || slideArt("moon")) + "</div>" + (o.artText || "") + "</aside>" +
      '<main class="auth-main"><div class="auth-col">' +
      (o.back ? '<button class="ld-iconbtn auth-back" data-act="back" aria-label="Back">' + ic("back", 20) + "</button>" : "") +
      '<div class="auth-head"><h1>' + o.title + "</h1>" + (o.sub ? "<p>" + o.sub + "</p>" : "") + "</div>" + o.body + "</div></main></div>" };
  }
  function vWelcome() {
    var s = SLIDES[auth.slide];
    var dots = '<div class="auth-dots">' + SLIDES.map(function (x, i) { return '<button class="' + (i === auth.slide ? "on" : "") + '" data-act="slide" data-i="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>'; }).join("") + "</div>";
    var v = authShell({ doc: "Welcome", art: '<div id="slideart">' + slideArt(s[0]) + "</div>", title: '<span id="slidet">' + s[1] + "</span>", sub: '<span id="slides">' + s[2] + "</span>",
      body: dots + '<div class="auth-actions"><a class="ld-btn primary lg block pill" data-act="tryfree">Try For Free</a><p class="auth-alt">Already have an account? <a data-act="tologin">Sign In</a></p></div>' });
    v.html = v.html.replace('class="auth tone-peach"', 'class="auth tone-peach is-welcome"');
    v.after = function () {
      auth.slideT = setInterval(function () { auth.slide = (auth.slide + 1) % SLIDES.length; paintSlide(); }, 4500);
      var art = $(".auth"), x0 = null;
      art.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      art.addEventListener("touchend", function (e) { if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { auth.slide = (auth.slide + (dx < 0 ? 1 : SLIDES.length - 1)) % SLIDES.length; paintSlide(); } x0 = null; });
    };
    return v;
  }
  function paintSlide() {
    var s = SLIDES[auth.slide], a = $("#slideart"); if (!a) return;
    a.innerHTML = slideArt(s[0]); $("#slidet").textContent = s[1]; $("#slides").textContent = s[2];
    $$(".auth-dots button").forEach(function (b, i) { b.classList.toggle("on", i === auth.slide); });
  }
  function vSignIn() {
    return authShell({ doc: "Sign In", title: "Welcome Back!", sub: "Let's pick up where your story left off, Dreamers! 🔮",
      body: '<form class="auth-form" data-form="login" data-need="email,pw" novalidate>' +
        '<div class="ld-field"><label for="l-mail">Email <em>*</em></label><input id="l-mail" name="email" type="email" class="ld-input" placeholder="Input your email" autocomplete="email" value="' + esc(auth.email) + '"></div>' +
        eyeField("l-pw", "pw", "Password", "Input your password", "current-password") +
        '<a class="auth-link right" data-go="forgot">Forgot Password?</a>' +
        '<div class="auth-or"><span>OR LOG IN WITH</span></div>' +
        '<button type="button" class="ld-btn block google" data-act="google"><svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>Log In With Google</button>' +
        '<div class="auth-foot"><div class="auth-err" id="aerr"></div><button class="ld-btn primary lg block pill" type="submit" disabled>Sign In</button><p class="auth-alt">Don\'t have an account? <a data-go="signup">Sign Up</a></p></div></form>' });
  }
  function vSignUp() {
    return authShell({ doc: "Sign Up", title: "Let's Get Started", sub: "Start creating magical bedtime moments here 💭",
      art: slideArt("orb"),
      body: '<form class="auth-form" data-form="signup" data-need="name,email,phone,pw,pw2" novalidate><div class="auth-grid">' +
        '<div class="ld-field full"><label for="s-name">Full Name <em>*</em></label><input id="s-name" name="name" class="ld-input" placeholder="Input your full name" autocomplete="name" maxlength="40"></div>' +
        '<div class="ld-field"><label for="s-mail">Email <em>*</em></label><input id="s-mail" name="email" type="email" class="ld-input" placeholder="Input your email" autocomplete="email"></div>' +
        '<div class="ld-field"><label for="s-phone">Phone Number <em>*</em></label><div class="phone"><select name="cc" aria-label="Country code"><option value="+62">🇮🇩 +62</option><option value="+60">🇲🇾 +60</option><option value="+65">🇸🇬 +65</option><option value="+1">🇺🇸 +1</option></select><input id="s-phone" name="phone" type="tel" inputmode="numeric" placeholder="812 3456 7890" autocomplete="tel-national" maxlength="14"></div></div>' +
        eyeField("s-pw", "pw", "Password", "Min. 8 characters", "new-password") + eyeField("s-pw2", "pw2", "Confirm Password", "Repeat your password", "new-password") +
        '</div><div class="auth-foot"><div class="auth-err" id="aerr"></div><button class="ld-btn primary lg block pill" type="submit" disabled>Continue</button><p class="auth-alt">Already have an account? <a data-go="login">Sign In</a></p></div></form>' });
  }
  function vForgot() {
    return authShell({ doc: "Forgot Password", tone: "lav", back: true, title: "Forgot Password", art: '<div class="auth-badge">' + ic("lock", 64) + "</div>",
      sub: "Please enter your email and we will send an OTP code in the next step to reset your password",
      body: '<form class="auth-form" data-form="forgot" data-need="email" novalidate><div class="ld-field"><label for="f-mail">Email <em>*</em></label><input id="f-mail" name="email" type="email" class="ld-input" placeholder="Enter your email" autocomplete="email" value="' + esc(auth.email) + '"></div>' +
        '<div class="auth-foot"><div class="auth-err" id="aerr"></div><button class="ld-btn primary lg block pill" type="submit" disabled>Continue</button><p class="auth-alt">Remember your password? <a data-go="login">Back to Login</a></p></div></form>' });
  }
  function vOtp() {
    if (!auth.email) { location.replace("#/" + (auth.mode === "forgot" ? "forgot" : "signup")); return { bare: true, html: "" }; }
    var v = authShell({ doc: "OTP Verification", tone: "lav", back: true, title: "OTP Code Verification", art: '<div class="auth-badge">' + ic("shield", 64) + "</div>",
      sub: "We have sent an OTP code to your email <b class=\"auth-mail\">" + esc(auth.email) + "</b>. Enter the OTP code below to verify.",
      body: '<form class="auth-form" data-form="otp" novalidate><div class="otp" role="group" aria-label="OTP code">' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<input inputmode="numeric" maxlength="1" autocomplete="' + (i ? "off" : "one-time-code") + '" aria-label="Digit ' + (i + 1) + '" data-otp="' + i + '">'; }).join("") + "</div>" +
        '<div class="otp-re"><p>Didn\'t receive email?</p><p id="otpre"></p></div><p class="demo-note">Demo: no email is sent — type any 6 digits.</p>' +
        '<div class="auth-foot"><div class="auth-err" id="aerr"></div><button class="ld-btn primary lg block pill" type="submit" disabled>Continue</button></div></form>' });
    v.after = function () { startOtpTimer(); var f = $('[data-otp="0"]'); if (f) f.focus(); };
    return v;
  }
  function startOtpTimer() {
    clearInterval(auth.otpT); auth.left = 60;
    function paint() { var e = $("#otpre"); if (!e) return clearInterval(auth.otpT); e.innerHTML = auth.left > 0 ? "You can resend code in <b>" + auth.left + " s</b>" : '<a data-act="resend">Resend code</a>'; }
    paint(); auth.otpT = setInterval(function () { auth.left--; paint(); if (auth.left <= 0) clearInterval(auth.otpT); }, 1000);
  }
  function vReset() {
    if (!auth.email) { location.replace("#/forgot"); return { bare: true, html: "" }; }
    return authShell({ doc: "New Password", tone: "lav", back: true, title: "Create New Password", art: '<div class="auth-badge">' + ic("lock", 64) + "</div>", sub: "Your new password must be different from the previous one.",
      body: '<form class="auth-form" data-form="reset" data-need="pw,pw2" novalidate>' + eyeField("r-pw", "pw", "New Password", "Min. 8 characters", "new-password") + eyeField("r-pw2", "pw2", "Confirm Password", "Repeat your password", "new-password") +
        '<div class="auth-foot"><div class="auth-err" id="aerr"></div><button class="ld-btn primary lg block pill" type="submit" disabled>Save Password</button></div></form>' });
  }
  function vAuth(name) { return { welcome: vWelcome, login: vSignIn, signup: vSignUp, forgot: vForgot, otp: vOtp, reset: vReset }[name](); }
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function authCheck(f) {
    var need = (f.getAttribute("data-need") || "").split(",").filter(Boolean), ok = true;
    need.forEach(function (n) {
      var el = f.elements[n]; if (!el) return; var v = el.value.trim();
      if (!v) ok = false;
      if (n === "email" && !EMAIL.test(v)) ok = false;
      if ((n === "pw" || n === "pw2") && f.getAttribute("data-form") !== "login" && v.length < 8) ok = false;
      if (n === "phone" && v.replace(/\D/g, "").length < 8) ok = false;
    });
    if (f.getAttribute("data-form") === "otp") ok = $$("[data-otp]", f).every(function (i) { return /^\d$/.test(i.value); });
    var b = f.querySelector('button[type="submit"]'); if (b) b.disabled = !ok;
    return ok;
  }
  function authErr(t) { var e = $("#aerr"); if (e) e.textContent = t || ""; }
  function finishSignIn(name, email) {
    if (name) st.user.name = name; if (email) st.user.email = email;
    st.authed = true; st.onboarded = true; save(); clearAuthTimers(); go("home"); toast("Welcome, " + st.user.name + "!");
  }
  function authSubmit(k, f) {
    var fd = new FormData(f), g = function (n) { return (fd.get(n) || "").toString().trim(); };
    if (!authCheck(f)) return;
    if (k === "login") { auth.email = g("email"); finishSignIn(null, g("email")); }
    if (k === "signup") {
      if (g("pw") !== g("pw2")) return authErr("Passwords don't match.");
      auth.mode = "signup"; auth.email = g("email"); auth.name = g("name"); auth.phone = g("cc") + g("phone"); go("otp");
    }
    if (k === "forgot") { auth.mode = "forgot"; auth.email = g("email"); go("otp"); }
    if (k === "otp") {
      clearInterval(auth.otpT);
      if (auth.mode === "signup") finishSignIn(auth.name, auth.email);
      else go("reset");
    }
    if (k === "reset") {
      if (g("pw") !== g("pw2")) return authErr("Passwords don't match.");
      toast("Password updated — please sign in"); go("login");
    }
  }
  document.addEventListener("input", function (e) {
    var t = e.target, f = t.closest && t.closest(".auth-form"); if (!f) return;
    if (t.hasAttribute("data-otp")) {
      t.value = t.value.replace(/\D/g, "").slice(-1);
      if (t.value) { var n = $('[data-otp="' + (+t.getAttribute("data-otp") + 1) + '"]'); if (n) n.focus(); }
    }
    if (t.name === "phone") t.value = t.value.replace(/[^\d ]/g, "");
    authErr(""); authCheck(f);
  });
  document.addEventListener("keydown", function (e) {
    var t = e.target; if (!t.hasAttribute || !t.hasAttribute("data-otp")) return;
    if (e.key === "Backspace" && !t.value) { var p = $('[data-otp="' + (+t.getAttribute("data-otp") - 1) + '"]'); if (p) { p.focus(); p.value = ""; e.preventDefault(); authCheck(t.form); } }
  });
  document.addEventListener("paste", function (e) {
    var t = e.target; if (!t.hasAttribute || !t.hasAttribute("data-otp")) return;
    var d = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6); if (!d) return; e.preventDefault();
    $$("[data-otp]").forEach(function (i, k) { if (d[k]) i.value = d[k]; }); var last = $('[data-otp="' + Math.min(5, d.length) + '"]'); if (last) last.focus(); authCheck(t.form);
  });
  function vNotFound() { return { active: "", title: "Not found", back: true, html: empty("search", "Page not found", "This page doesn't exist or the story was deleted.", '<a class="ld-btn primary" data-go="home">Back to Home</a>') }; }

  /* ================= Overlays ================= */
  var ovEl = null;
  function overlay(inner, locked, sheet) {
    closeOverlay();
    ovEl = document.createElement("div"); ovEl.className = "ov ld" + (sheet ? " sheet" : ""); ovEl.style.minHeight = "0"; ovEl.innerHTML = inner;
    if (!locked) ovEl.addEventListener("click", function (e) { if (e.target === ovEl) closeOverlay(); });
    document.body.appendChild(ovEl); document.body.style.overflow = "hidden";
    var f = ovEl.querySelector("input,button"); if (f) setTimeout(function () { f.focus(); }, 30);
    return ovEl;
  }
  function closeOverlay() { if (ovEl) { ovEl.remove(); ovEl = null; document.body.style.overflow = ""; } if (rec.stream) stopRec(true); }
  function dialog(o) {
    var el = overlay('<div class="dlg" role="dialog" aria-modal="true"><div class="ic' + (o.danger ? " danger" : "") + '">' + ic(o.icon || "help", 30) + "</div><h3>" + o.title + "</h3>" + (o.text ? "<p>" + o.text + "</p>" : "") + (o.body || "") +
      '<div class="btns"><button class="ld-btn secondary" data-x="cancel">' + (o.cancel || "Cancel") + '</button><button class="ld-btn ' + (o.danger ? "danger" : "primary") + '" data-x="ok">' + (o.ok || "OK") + "</button></div></div>");
    el.querySelector('[data-x="cancel"]').onclick = closeOverlay;
    el.querySelector('[data-x="ok"]').onclick = function () { if (o.onOk && o.onOk(el) === false) return; if (ovEl === el) closeOverlay(); };
    var inp = el.querySelector("input"); if (inp) inp.addEventListener("keydown", function (e) { if (e.key === "Enter") el.querySelector('[data-x="ok"]').click(); });
  }
  function choose(title, items, cur, cb) {
    var el = overlay('<div class="dlg"><h3 style="text-align:left">' + title + '</h3><div class="ld-list">' + items.map(function (it) {
      return '<div class="ld-li' + (String(it[0]) === String(cur) ? " is-on" : "") + '" data-v="' + esc(it[0]) + '"><span class="tx">' + esc(it[1]) + (it[2] ? "<small>" + esc(it[2]) + "</small>" : "") + "</span>" + (String(it[0]) === String(cur) ? '<span style="color:var(--brand-500)">' + ic("check", 18) + "</span>" : "") + "</div>";
    }).join("") + '</div><button class="ld-btn secondary" data-x="c">Close</button></div>', false, true);
    el.querySelector('[data-x="c"]').onclick = closeOverlay;
    $$(".ld-li", el).forEach(function (n) { n.onclick = function () { cb(n.getAttribute("data-v")); closeOverlay(); }; });
  }
  var toastBox;
  function toast(msg, undo) {
    if (!toastBox) { toastBox = document.createElement("div"); toastBox.className = "toasts ld"; toastBox.style.minHeight = "0"; toastBox.style.background = "none"; document.body.appendChild(toastBox); }
    var t = document.createElement("div"); t.className = "ld-toast"; t.setAttribute("role", "status");
    t.innerHTML = '<span class="ck">' + ic("check", 12) + "</span><span>" + esc(msg) + "</span>" + (undo ? '<button class="ld-btn soft sm" style="margin-left:8px">Undo</button>' : "");
    if (undo) t.querySelector("button").onclick = function () { undo(); t.remove(); };
    toastBox.appendChild(t); setTimeout(function () { t.remove(); }, undo ? 6000 : 3000);
  }

  /* ================= Voice recording (real mic when allowed, otherwise name-only) ================= */
  var rec = { stream: null, mr: null, chunks: [], data: null, t: null, sec: 0 };
  function stopRec(discard) {
    try { if (rec.mr && rec.mr.state !== "inactive") rec.mr.stop(); } catch (e) { }
    if (rec.stream) rec.stream.getTracks().forEach(function (t) { t.stop(); });
    clearInterval(rec.t); rec.stream = null; if (discard) rec.data = null;
  }
  function newVoice() {
    if (st.coins < 100) { toast("You need 100 coins for a new voice"); return; }
    rec.data = null;
    var el = overlay('<div class="dlg"><div class="ic">' + ic("mic", 30) + '</div><h3>New Voice</h3><p>Read a short sentence aloud, like "Once upon a time, in a cozy little village…". Uses 100 coins.</p>' +
      '<div class="ld-field" style="text-align:left"><label for="v-name">Voice name <em>*</em></label><input id="v-name" class="ld-input" maxlength="20" placeholder="e.g. Mom"></div>' +
      '<button class="ld-btn soft" id="v-rec">' + ic("mic", 18) + '<span>Start recording</span></button><small class="ld-muted" id="v-st">Optional — max 10 seconds</small>' +
      '<div class="btns"><button class="ld-btn secondary" data-x="c">Cancel</button><button class="ld-btn primary" data-x="ok">Save voice</button></div></div>', true);
    var btn = $("#v-rec", el), stt = $("#v-st", el);
    btn.onclick = function () {
      if (rec.stream) { stopRec(); return; }
      if (!navigator.mediaDevices || !window.MediaRecorder) { stt.textContent = "Recording isn't supported here — the voice will be saved by name."; return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        rec.stream = s; rec.chunks = []; rec.sec = 0; rec.mr = new MediaRecorder(s);
        rec.mr.ondataavailable = function (e) { rec.chunks.push(e.data); };
        rec.mr.onstop = function () { var b = new Blob(rec.chunks, { type: rec.mr.mimeType || "audio/webm" }); var fr = new FileReader(); fr.onload = function () { rec.data = fr.result; stt.textContent = "Recorded " + rec.sec + "s ✓"; }; fr.readAsDataURL(b); btn.innerHTML = ic("refresh", 18) + "<span>Record again</span>"; };
        rec.mr.start(); btn.innerHTML = ic("stop", 18) + "<span>Stop</span>";
        rec.t = setInterval(function () { rec.sec++; stt.textContent = "Recording… " + rec.sec + "s"; if (rec.sec >= 10) stopRec(); }, 1000);
      }).catch(function () { stt.textContent = "Microphone not available — the voice will be saved by name."; });
    };
    el.querySelector('[data-x="c"]').onclick = function () { stopRec(true); closeOverlay(); };
    el.querySelector('[data-x="ok"]').onclick = function () {
      var n = $("#v-name", el).value.trim(); if (!n) { $("#v-name", el).classList.add("err"); $("#v-name", el).focus(); return; }
      stopRec();
      setTimeout(function () {
        var v = { id: uid("v"), name: n, at: Date.now() }; if (rec.data && rec.data.length < 1.5e6) v.audio = rec.data;
        st.voices.push(v); st.coins -= 100; save(); closeOverlay(); render(); toast("Voice \"" + n + "\" saved");
      }, rec.mr && rec.mr.state === "recording" ? 400 : 0);
    };
  }
  function previewVoice(id) {
    var v = st.voices.filter(function (x) { return x.id === id; })[0];
    if (v && v.audio) { new Audio(v.audio).play().catch(function () { }); return; }
    if ("speechSynthesis" in window) { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance("Once upon a time, in a cozy little village, lived a little dreamer."); u.rate = .9; speechSynthesis.speak(u); toast("Previewing " + voiceName(id)); }
    else toast("Preview: " + voiceName(id));
  }

  /* ================= Actions ================= */
  var A = {
    eye: function (el) { var i = el.parentNode.querySelector("input"); var show = i.type === "password"; i.type = show ? "text" : "password"; el.innerHTML = ic(show ? "eyeoff" : "eye", 20); el.setAttribute("aria-label", show ? "Hide password" : "Show password"); },
    slide: function (el) { auth.slide = +el.getAttribute("data-i"); paintSlide(); clearInterval(auth.slideT); },
    tryfree: function () { st.onboarded = true; save(); go("signup"); },
    tologin: function () { st.onboarded = true; save(); go("login"); },
    google: function () { finishSignIn(null, null); },
    resend: function () { startOtpTimer(); toast("A new code has been sent (demo)"); },
    back: function () { if (history.length > 1) history.back(); else go("home"); },
    fav: function (el) {
      var id = el.getAttribute("data-id"), i = st.favs.indexOf(id);
      if (i > -1) st.favs.splice(i, 1); else st.favs.unshift(id);
      save(); toast(i > -1 ? "Removed from favorites" : "Added to favorites"); keepScroll(render);
    },
    scroll: function (el) { var t = document.getElementById(el.getAttribute("data-t")); t.scrollBy({ left: +el.getAttribute("data-d") * t.clientWidth * 0.8, behavior: "smooth" }); },
    homecat: function (el) { homeCat = el.getAttribute("data-v"); keepScroll(render); },
    lf: function (el) { var k = el.getAttribute("data-k"), v = el.value, a = lib[k], i = a.indexOf(v); if (el.checked && i < 0) a.push(v); if (!el.checked && i > -1) a.splice(i, 1); refreshLib(); },
    lrm: function (el) { var a = lib[el.getAttribute("data-k")], i = a.indexOf(el.getAttribute("data-v")); if (i > -1) a.splice(i, 1); refreshLib(); },
    lclear: function () { lib.cats = []; lib.countries = []; lib.durs = []; lib.ages = []; lib.q = ""; var q = $("#lq"); if (q) q.value = ""; refreshLib(); },
    lview: function (el) { lib.view = el.getAttribute("data-v"); keepScroll(render); },
    lsheet: function () {
      var el = overlay('<div class="dlg"><div id="sheetfilter" style="display:flex;flex-direction:column;gap:20px">' + filterPanel() + '</div><button class="ld-btn primary" data-x="ok">Apply</button></div>', false, true);
      el.querySelector('[data-x="ok"]').onclick = closeOverlay;
    },
    play: function () { if (pl.playing) pause(); else play(); },
    skip: function (el) { seekTo((st.progress[pl.id] || 0) + +el.getAttribute("data-d")); },
    seek: function (el, e) { var r = el.getBoundingClientRect(), s = getStory(pl.id); seekTo((e.clientX - r.left) / r.width * s.m * 60); },
    seekp: function (el) { var s = getStory(pl.id); seekTo(+el.getAttribute("data-i") / s.text.length * s.m * 60 + 0.5); if (!pl.playing) play(); },
    share: function (el) {
      var s = getStory(el.getAttribute("data-id"));
      var link = location.href.split("#")[0] + "#/story/" + s.id;
      function copy() { (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject()).then(function () { toast("Link copied"); }, function () { toast("Share link: " + link); }); }
      if (s.mine && !s.pub) dialog({ icon: "globe", title: "Share publicly?", text: "Other families will be able to find \"" + esc(s.t) + "\" in the Library.", ok: "Share", onOk: function () { s.src.public = true; save(); copy(); keepScroll(render); } });
      else if (navigator.share) navigator.share({ title: s.t, url: link }).catch(function () { });
      else copy();
    },
    pvoice: function () {
      choose("Narrator voice", D.VOICES_BUILTIN.map(function (v) { return [v[0], v[1], "LullaDream voice"]; }).concat(st.voices.map(function (v) { return [v.id, v.name, "Your recording"]; })), st.voice, function (v) { st.voice = v; save(); keepScroll(render); toast("Narrator: " + voiceName(v)); });
    },
    psound: function () { go("soon/sounds"); },
    ptimer: function () { choose("Sleep timer", D.TIMERS.map(function (t) { return [t, t ? t + " minutes" : "Off"]; }), st.timer, function (v) { st.timer = +v; st.timerEnd = st.timer && pl.playing ? Date.now() + st.timer * 60e3 : 0; save(); updPlayer(); toast(st.timer ? "Sleep timer set to " + st.timer + " min" : "Sleep timer off"); }); },
    // generate
    opt: function (el) {
      var f = el.getAttribute("data-f"), v = el.getAttribute("data-v");
      gen.d[f] = f === "m" ? +v : f === "public" ? v === "true" : v; keepScroll(render);
    },
    idea: function (el) { gen.d.about = el.getAttribute("data-v") + "."; keepScroll(render); },
    dictate: function () {
      var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) { toast("Voice typing isn't supported in this browser"); return; }
      var r = new SR(); r.lang = st.user.lang === "ID" ? "id-ID" : "en-US"; toast("Listening…");
      r.onresult = function (e) { var t = e.results[0][0].transcript; gen.d.about = (gen.d.about + " " + t).trim().slice(0, 500); keepScroll(render); };
      r.start();
    },
    nextstep: function () { if (!validate(gen.step)) { keepScroll(render); return; } gen.step = Math.min(5, gen.step + 1); render(); window.scrollTo(0, 0); },
    prevstep: function () { gen.step = Math.max(0, gen.step - 1); render(); window.scrollTo(0, 0); },
    gostep: function (el) { var k = +el.getAttribute("data-i"); if (k > gen.step && !validate(0)) { gen.step = 0; render(); return; } gen.step = k; render(); },
    cancelgen: function () { var e = gen.editId; gen = { step: 0, d: null, editId: null, err: {} }; go(e ? "story/" + e : "home"); },
    finish: finishGen,
    // my story
    mytab: function (el) { myf.tab = el.getAttribute("data-v"); keepScroll(render); },
    medit: function (el) { go("create/" + el.getAttribute("data-id")); },
    mpub: function (el) { var m = st.mine.filter(function (x) { return x.id === el.getAttribute("data-id"); })[0]; m.public = !m.public; m.updatedAt = Date.now(); save(); keepScroll(render); toast(m.public ? "Now public in the Library" : "Now private"); },
    mdel: function (el) {
      var id = el.getAttribute("data-id"), m = st.mine.filter(function (x) { return x.id === id; })[0];
      dialog({ icon: "trash", danger: true, title: "Delete this story?", text: "\"" + esc(m.title) + "\" will be removed from My Story.", ok: "Delete", onOk: function () {
        var idx = st.mine.indexOf(m), snap = JSON.stringify({ favs: st.favs, recent: st.recent, p: st.progress[id] });
        st.mine.splice(idx, 1); st.favs = st.favs.filter(function (f) { return f !== id; }); st.recent = st.recent.filter(function (r) { return r.id !== id; }); delete st.progress[id];
        save(); if (route().parts[0] === "story") go("mystory"); else keepScroll(render);
        toast("Story deleted", function () { var s = JSON.parse(snap); st.mine.splice(idx, 0, m); st.favs = s.favs; st.recent = s.recent; if (s.p) st.progress[id] = s.p; save(); render(); });
      } });
    },
    // voices
    vnew: newVoice,
    vsel: function (el) { st.voice = el.getAttribute("data-id"); save(); keepScroll(render); toast("Default voice: " + voiceName(st.voice)); },
    vplay: function (el) { previewVoice(el.getAttribute("data-id")); },
    vren: function (el) {
      var v = st.voices.filter(function (x) { return x.id === el.getAttribute("data-id"); })[0];
      dialog({ icon: "edit", title: "Rename voice", body: '<input class="ld-input" id="vr" maxlength="20" value="' + esc(v.name) + '">', ok: "Save", onOk: function (d) { var n = $("#vr", d).value.trim(); if (!n) { $("#vr", d).classList.add("err"); return false; } v.name = n; save(); setTimeout(function () { keepScroll(render); }); toast("Voice renamed"); } });
    },
    vdel: function (el) {
      var id = el.getAttribute("data-id"), v = st.voices.filter(function (x) { return x.id === id; })[0];
      dialog({ icon: "trash", danger: true, title: "Delete voice?", text: "\"" + esc(v.name) + "\" will be deleted permanently. Stories using it will switch to Wanda.", ok: "Delete", onOk: function () {
        st.voices = st.voices.filter(function (x) { return x.id !== id; }); if (st.voice === id) st.voice = "wanda";
        st.mine.forEach(function (m) { if (m.voice === id) m.voice = "wanda"; }); save(); setTimeout(function () { keepScroll(render); }); toast("Voice deleted");
      } });
    },
    // profile
    topup: function () { go("topup"); },
    pack: function (el) { topSel = +el.getAttribute("data-v"); keepScroll(render); },
    refreshcoins: function () { toast("Balance is up to date"); },
    buy: function () { var p = PACKS.filter(function (x) { return x[0] === topSel; })[0]; dialog({ icon: "topup", title: "Select Payment", text: p[0] + " Coins · Total " + usd(p[1]) + ". Demo: no payment is processed.", ok: "Pay " + usd(p[1]), onOk: function () { st.coins += p[0]; save(); setTimeout(function () { keepScroll(render); }); toast("+" + p[0] + " coins added"); } }); },
    notify: function (el) { var k = el.getAttribute("data-k"); st.notifyMe = st.notifyMe || []; var i = st.notifyMe.indexOf(k); if (i > -1) st.notifyMe.splice(i, 1); else st.notifyMe.push(k); save(); keepScroll(render); toast(i > -1 ? "Notification turned off" : "We'll let you know when it's ready"); },
    lang: function () { choose("Language", [["EN", "English"], ["ID", "Bahasa Indonesia"]], st.user.lang, function (v) { st.user.lang = v; save(); keepScroll(render); toast(v === "ID" ? "Bahasa diubah ke Indonesia" : "Language set to English"); }); },
    plan: function (el) { var v = el.getAttribute("data-v"); dialog({ icon: "card", title: "Switch plan?", text: "Switch to " + planName(v) + ". This is a demo — nothing will be charged.", ok: "Switch", onOk: function () { st.user.plan = v; save(); setTimeout(render); toast("Plan changed to " + planName(v)); } }); },
    signout: function () { dialog({ icon: "logout", title: "Sign out?", text: "Your demo data stays saved in this browser.", ok: "Sign Out", onOk: function () { st.authed = false; stopPlayer(); save(); setTimeout(function () { go("login"); }); } }); },
    reset: function () { dialog({ icon: "refresh", title: "Reset demo data?", text: "All stories, voices and settings go back to the sample content.", ok: "Reset", danger: true, onOk: function () { st = seed(); save(); lib.cats = []; lib.countries = []; lib.durs = []; lib.ages = []; lib.q = ""; setTimeout(function () { go("home"); }); toast("Demo data reset"); } }); },
    delacc: function () {
      dialog({ icon: "trash", danger: true, title: "Delete account?", text: "In this demo, all local data is erased and you are signed out. Type DELETE to confirm.", body: '<input class="ld-input" id="dc" placeholder="DELETE">', ok: "Delete Account", onOk: function (d) {
        if ($("#dc", d).value.trim().toUpperCase() !== "DELETE") { $("#dc", d).classList.add("err"); return false; }
        st = seed(); save(); setTimeout(function () { go("welcome"); });
      } });
    },
    favclear: function () { dialog({ icon: "heart", title: "Clear all favorites?", ok: "Clear", danger: true, onOk: function () { var old = st.favs.slice(); st.favs = []; save(); setTimeout(render); toast("Favorites cleared", function () { st.favs = old; save(); render(); }); } }); },
    recclear: function () { var old = st.recent.slice(); st.recent = []; save(); render(); toast("History cleared", function () { st.recent = old; save(); render(); }); },
    recrm: function (el) { var id = el.getAttribute("data-id"); st.recent = st.recent.filter(function (r) { return r.id !== id; }); save(); keepScroll(render); },
    nopen: function (el) { var n = st.notifs.filter(function (x) { return x.id === el.getAttribute("data-id"); })[0]; n.read = true; save(); go(n.go || "home"); },
    ndel: function (el) { st.notifs = st.notifs.filter(function (x) { return x.id !== el.getAttribute("data-id"); }); save(); keepScroll(render); },
    nall: function () { st.notifs.forEach(function (n) { n.read = true; }); save(); render(); },
    nclear: function () { var old = st.notifs.slice(); st.notifs = []; save(); render(); toast("Notifications cleared", function () { st.notifs = old; save(); render(); }); }
  };
  function keepScroll(fn) { var y = window.scrollY, tr = $$(".track").map(function (t) { return t.scrollLeft; }); fn(); window.scrollTo(0, y); $$(".track").forEach(function (t, i) { t.scrollLeft = tr[i] || 0; }); }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-act]");
    if (a && a.tagName === "INPUT") return; // checkboxes handled on change
    if (a && a.tagName === "SELECT") return;
    if (a && A[a.getAttribute("data-act")]) { e.preventDefault(); e.stopPropagation(); A[a.getAttribute("data-act")](a, e); return; }
    var g = e.target.closest("[data-go]");
    if (g) { e.preventDefault(); if (ovEl && ovEl.contains(g)) closeOverlay(); go(g.getAttribute("data-go")); }
  });
  document.addEventListener("change", function (e) {
    var a = e.target.closest("[data-act]");
    if (a && a.getAttribute("data-act") === "lf") A.lf(a);
    if (a && a.getAttribute("data-act") === "lsort") { lib.sort = a.value; refreshLib(); }
  });
  document.addEventListener("input", function (e) {
    var t = e.target, f = t.getAttribute("data-f");
    if (f && gen.d) {
      gen.d[f] = f === "age" ? +t.value : t.value;
      var c = $('[data-count="' + f + '"]'); if (c) c.textContent = f === "age" ? t.value + " years old" : t.value.length + "/" + t.maxLength;
      if (gen.err[f] && t.value.trim()) { delete gen.err[f]; t.classList.remove("err"); var er = t.closest(".ld-field").querySelector(".error"); if (er) er.remove(); }
      var s = $("#sum"); if (s) s.innerHTML = summary();
    }
    if (t.id === "lq") { lib.q = t.value; var b = $("#libbody"); if (b) b.innerHTML = libBody(); }
    if (t.id === "myq") { myf.q = t.value; $("#mygrid").innerHTML = myGrid(); }
  });
  document.addEventListener("submit", function (e) {
    var f = e.target, k = f.getAttribute("data-form"); if (!k) return; e.preventDefault();
    if (AUTH.indexOf(k) > -1) { authSubmit(k, f); return; }
    var fd = new FormData(f);
    if (k === "tsearch") { var q = f.querySelector("input").value.trim(); go("library" + (q ? "?q=" + encodeURIComponent(q) : "")); }
    if (k === "profile") {
      var n = (fd.get("name") || "").trim(), m = (fd.get("email") || "").trim();
      if (!n) return void ($("#perr").textContent = "Please enter your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) return void ($("#perr").textContent = "Please enter a valid email.");
      st.user.name = n; st.user.child = (fd.get("child") || "").trim(); st.user.email = m; st.user.lang = fd.get("lang"); save(); toast("Profile saved"); go("profile");
    }
    if (k === "support") {
      var s = (fd.get("subject") || "").trim(), msg = (fd.get("msg") || "").trim();
      if (!s || !msg) return void ($("#serr").textContent = "Please fill in both fields.");
      st.tickets = st.tickets || []; st.tickets.unshift({ subject: s, msg: msg, at: Date.now() }); save(); toast("Message saved (demo)"); render();
    }
  });
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { var i = $("#tsearch") || $("#lq"); if (i) { e.preventDefault(); i.focus(); } }
    if (e.key === "Escape" && ovEl) closeOverlay();
    if (e.key === " " && route().parts[0] === "story" && !/INPUT|TEXTAREA|BUTTON/.test(document.activeElement.tagName)) { e.preventDefault(); A.play(); }
  });

  app.classList.add("ld");
  if (!location.hash) location.replace("#/home");
  render();
})();
