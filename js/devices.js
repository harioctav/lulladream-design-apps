/* Device preview switcher — Auto / Desktop / iPad landscape / iPad-Foldable portrait / Mobile.
   Auto uses the real screen size. The other modes show the app inside a frame of that device's size. */
(function () {
  "use strict";
  var MODES = [
    ["auto", "Auto", "Ukuran layar asli", 0, 0, '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="m9 9 3 3 3-3" />'],
    ["desktop", "Desktop", "1440 × 900", 1440, 900, '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'],
    ["tabletL", "Tablet Landscape", "iPad landscape · 1180 × 820", 1180, 820, '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M18 12h.01"/>'],
    ["tablet", "Tablet Portrait / Foldable", "iPad portrait · 834 × 1112", 834, 1112, '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>'],
    ["mobile", "Mobile", "390 × 844", 390, 844, '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>']
  ];
  var KEY = "lulladream-device";
  var embedded = new URLSearchParams(location.search).has("embed");
  window.LD_EMBED = embedded;
  if (embedded) return; // inside the preview frame: just run the app

  var mode = "auto";
  try { mode = localStorage.getItem(KEY) || "auto"; } catch (e) { }
  if (!MODES.some(function (m) { return m[0] === mode; })) mode = "auto";

  function svg(p, s) { return '<svg width="' + (s || 18) + '" height="' + (s || 18) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; }
  function setMode(m) { try { localStorage.setItem(KEY, m); } catch (e) { } location.reload(); }
  function buttons() {
    return MODES.map(function (m) {
      return '<button type="button" class="dv-btn' + (m[0] === mode ? " on" : "") + '" data-dv="' + m[0] + '" title="' + m[1] + " — " + m[2] + '" aria-pressed="' + (m[0] === mode) + '">' + svg(m[5]) + "<span>" + m[1] + "</span></button>";
    }).join("");
  }
  function wire(root) {
    root.addEventListener("click", function (e) { var b = e.target.closest("[data-dv]"); if (b && b.getAttribute("data-dv") !== mode) setMode(b.getAttribute("data-dv")); });
  }

  if (mode === "auto") {
    // floating switcher on top of the real app
    window.LD_FLOATING_SWITCHER = true;
    document.addEventListener("DOMContentLoaded", function () {
      var el = document.createElement("div");
      el.className = "dv-float";
      el.innerHTML = '<button type="button" class="dv-toggle" aria-label="Ganti tampilan device" title="Ganti tampilan: Desktop / Tablet / Mobile">' + svg(MODES[3][5] + '<path d="M2 21h3"/>', 20) + "<span>Tampilan</span></button>" +
        '<div class="dv-menu" role="menu"><b>Lihat sebagai</b>' + buttons() + "</div>";
      document.body.appendChild(el);
      el.querySelector(".dv-toggle").onclick = function () { el.classList.toggle("open"); };
      document.addEventListener("click", function (e) { if (!el.contains(e.target)) el.classList.remove("open"); });
      wire(el);
    });
    return;
  }

  // Preview mode: replace the page with a device frame
  window.LD_NO_APP = true;
  var M = MODES.filter(function (m) { return m[0] === mode; })[0];
  document.addEventListener("DOMContentLoaded", function () {
    document.body.className = "dv-body";
    document.body.innerHTML = '<header class="dv-bar"><img src="assets/lulladream-mark.png" alt="" height="28"><div class="dv-seg">' + buttons() + '</div><span class="dv-size" id="dvsize"></span></header>' +
      '<main class="dv-stage" id="dvstage"><div class="dv-frame" id="dvframe"><iframe id="dvif" title="LullaDream ' + M[1] + '" src="' + location.pathname + "?embed=1" + (location.hash || "#/home") + '"></iframe></div></main>';
    wire(document.querySelector(".dv-bar"));
    var stage = document.getElementById("dvstage"), frame = document.getElementById("dvframe"), ifr = document.getElementById("dvif");
    ifr.style.width = M[3] + "px"; ifr.style.height = M[4] + "px";
    function fit() {
      var s = Math.min(1, (stage.clientWidth - 32) / M[3], (stage.clientHeight - 32) / M[4]);
      ifr.style.transform = "scale(" + s + ")";
      frame.style.width = M[3] * s + "px"; frame.style.height = M[4] * s + "px";
      document.getElementById("dvsize").textContent = M[2] + (s < 1 ? " · " + Math.round(s * 100) + "%" : "");
    }
    window.addEventListener("resize", fit); fit();
    // keep the address bar in sync with the page inside the frame
    ifr.addEventListener("load", function () {
      try { ifr.contentWindow.addEventListener("hashchange", function () { history.replaceState(null, "", ifr.contentWindow.location.hash); }); } catch (e) { }
    });
  });
})();
