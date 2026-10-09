(function () {
  const P = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const STATUS = { completed: "Completed", "in-progress": "In progress", planned: "Planned" };
  const imgPath = (p, f) => `assets/projects/${encodeURIComponent(p.id)}/${encodeURIComponent(f)}`;

  /* Theme */
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  function bindTheme() {
    const b = $("#themeBtn");
    if (!b) return;
    const paint = () => (b.textContent = root.dataset.theme === "light" ? "🌙" : "☀️");
    paint();
    b.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      paint();
    });
    const m = $("#menuBtn"), ul = $("#navList");
    if (m && ul) {
      m.addEventListener("click", () => ul.classList.toggle("open"));
      ul.addEventListener("click", () => ul.classList.remove("open"));
    }
  }

  function fillCommon() {
    const pr = P.profile;
    document.querySelectorAll("[data-name]").forEach((n) => (n.textContent = pr.name));
    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
    document.querySelectorAll("[data-linkedin]").forEach((a) => (a.href = pr.linkedin));
    document.querySelectorAll("[data-github]").forEach((a) => (a.href = pr.github));
  }

  function card(p) {
    const a = el("article", "card project-card");
    const shot = p.screenshots && p.screenshots[0];
    a.innerHTML = `
      <div class="thumb">${shot ? `<img loading="lazy" src="${imgPath(p, shot.file)}" alt="${esc(p.title)}" onerror="this.parentNode.innerHTML='<div class=placeholder>No preview</div>'">` : `<div class="placeholder">No preview</div>`}</div>
      <div class="body">
        <span class="status ${esc(p.status)}">${STATUS[p.status] || esc(p.status)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="tags">${(p.tools || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <a class="more" href="project.html?id=${encodeURIComponent(p.id)}">View project →</a>
      </div>`;
    return a;
  }

  function renderHome() {
    const pr = P.profile;
    $("#heroRole").textContent = pr.role;
    $("#heroTagline").textContent = pr.tagline;
    $("#heroBadges").innerHTML = [pr.school, "Networks", "Security"].map((b) => `<span class="badge">${esc(b)}</span>`).join("");
    $("#aboutText").innerHTML = pr.about.map((t) => `<p>${esc(t)}</p>`).join("");
    $("#facts").innerHTML = pr.facts.map((f) => `<li><span class="k">${esc(f.label)}</span><span class="v">${esc(f.value)}</span></li>`).join("");

    const grid = $("#projectGrid");
    P.projects.forEach((p) => grid.appendChild(card(p)));

    const sg = $("#skillGroups");
    P.skills.forEach((g) => {
      const c = el("div", "card");
      c.innerHTML = `<h3>${esc(g.category)}</h3>` + g.items.map((s) => `
        <div class="skill">
          <div class="row"><span>${esc(s.name)}</span><span class="lvl">${esc(s.level)}</span></div>
          <div class="bar"><i class="${esc(s.level)}"></i></div>
        </div>`).join("");
      sg.appendChild(c);
    });

    if (pr.email) { const m = $("#mailBtn"); m.href = "mailto:" + pr.email; m.hidden = false; }
  }

  function renderProject() {
    const id = new URLSearchParams(location.search).get("id");
    const p = P.projects.find((x) => x.id === id);
    const main = $("#projectMain");
    if (!p) {
      main.innerHTML = `<div class="nf"><h1>Project not found</h1><p><a href="index.html#projects">← Back to projects</a></p></div>`;
      return;
    }
    document.title = `${p.title} · ${P.profile.name}`;
    const list = (arr) => (arr && arr.length ? `<ul>${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "");
    const tags = (arr) => `<div class="tags">${(arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

    main.innerHTML = `
      <a class="back" href="index.html#projects">← All projects</a>
      <header class="p-head">
        <span class="status ${esc(p.status)}">${STATUS[p.status] || esc(p.status)}</span>
        <h1>${esc(p.title)}</h1>
        <div class="meta">${p.date ? `<span>${esc(p.date)}</span>` : ""}<span>${(p.tools || []).map(esc).join(" · ")}</span></div>
      </header>
      <div class="p-layout">
        <div>
          <h2>Overview</h2>${(p.description || []).map((d) => `<p>${esc(d)}</p>`).join("")}
          ${p.goals && p.goals.length ? `<h2>Objectives</h2>${list(p.goals)}` : ""}
          ${p.results && p.results.length ? `<h2>Results &amp; verification</h2>${list(p.results)}` : ""}
        </div>
        <aside class="side card">
          <div class="block"><h3>Tools</h3>${tags(p.tools)}</div>
          <div class="block"><h3>Skills used</h3>${tags(p.skills)}</div>
          ${p.addressing && p.addressing.length ? `<div class="block"><h3>Addressing plan</h3>
            <table><tr><th>Device</th><th>IP</th><th>Role</th></tr>${p.addressing.map((r) => `<tr><td>${esc(r.device)}</td><td><code>${esc(r.ip)}</code></td><td>${esc(r.role)}</td></tr>`).join("")}</table></div>` : ""}
          ${p.links && p.links.length ? `<div class="block"><h3>Links</h3>${p.links.map((l) => `<p><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></p>`).join("")}</div>` : ""}
        </aside>
      </div>
      ${p.screenshots && p.screenshots.length ? `<h2 style="margin-top:44px">Screenshots</h2><div class="gallery" id="gallery"></div>` : ""}`;

    const gal = $("#gallery");
    if (gal) {
      p.screenshots.forEach((s) => {
        const f = el("figure", "shot");
        f.innerHTML = `<img loading="lazy" src="${imgPath(p, s.file)}" alt="${esc(s.caption || s.file)}"><figcaption>${esc(s.caption || "")}</figcaption>`;
        f.querySelector("img").onerror = function () { this.outerHTML = `<div class="placeholder">Image not found: ${esc(s.file)}</div>`; };
        f.addEventListener("click", () => {
          const im = f.querySelector("img");
          if (!im) return;
          $("#lbImg").src = im.src;
          $("#lbCap").textContent = s.caption || "";
          $("#lightbox").classList.add("open");
        });
        gal.appendChild(f);
      });
      $("#lightbox").addEventListener("click", () => $("#lightbox").classList.remove("open"));
      document.addEventListener("keydown", (e) => e.key === "Escape" && $("#lightbox").classList.remove("open"));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    fillCommon();
    bindTheme();
    if ($("#projectGrid")) renderHome();
    if ($("#projectMain")) renderProject();
  });
})();
