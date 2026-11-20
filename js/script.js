/* ---------- 1. Génération des cartes PDF (E5 et E6) ---------- */
function creerCartes(liste, idConteneur) {
  const conteneur = document.getElementById(idConteneur);
  if (!conteneur) return;
  conteneur.innerHTML = liste.map(d => `
    <article class="carte">
      <span class="tag">${d.tag}</span>
      <h3>${d.titre}</h3>
      <p>${d.texte}</p>
      <div class="pdf-liens">
        <a href="${d.pdf}" target="_blank" rel="noopener">Ouvrir le PDF</a>
        <a href="${d.pdf}" download>Télécharger</a>
      </div>
    </article>`).join("");
}
creerCartes(E6, "grille-e6");

/* E5 : tableau de synthèse séparé + projets en liste avec boutons */
function lienBoutons(pdf) {
  return `<div class="pdf-liens">
        <a href="${pdf}" target="_blank" rel="noopener">Ouvrir</a>
        <a href="${pdf}" download>Télécharger</a>
      </div>`;
}
const blocSynthese = document.getElementById("synthese-e5");
if (blocSynthese) {
  blocSynthese.innerHTML = `
    <article class="carte carte-synthese">
      <div class="ligne-texte">
        <span class="tag">${E5_SYNTHESE.tag}</span>
        <h3>${E5_SYNTHESE.titre}</h3>
        <p>${E5_SYNTHESE.texte}</p>
      </div>
      ${lienBoutons(E5_SYNTHESE.pdf)}
    </article>`;
}
const listeE5 = document.getElementById("liste-e5");
if (listeE5) {
  listeE5.innerHTML = E5.map(d => `
    <li class="ligne-projet">
      <div class="ligne-texte">
        <span class="tag">${d.tag}</span>
        <h3>${d.titre}</h3>
      </div>
      ${lienBoutons(d.pdf)}
    </li>`).join("");
}

/* ---------- 2. Veille technologique : méthode + sujets ---------- */
const barre = document.getElementById("onglets-veille");
const panneau = document.getElementById("panneau-veille");

function afficherVeille(id) {
  const v = VEILLE.find(x => x.id === id) || VEILLE[0];
  document.title = `${v.onglet} — Veille technologique`;
  panneau.innerHTML = `
    <article class="sujet">
      <h3>${v.titre}</h3>
      <p class="resume">${v.resume}</p>

      <h4>Pourquoi ce sujet</h4>
      <p>${v.pourquoi}</p>

      <h4>Mes sources</h4>
      <div class="sources">${v.sources.map(x => `
        <a class="source" href="${x.url}" target="_blank" rel="noopener">
          <strong>${x.nom}</strong>
          <span>${x.type} · ${x.frequence}</span>
        </a>`).join("")}
      </div>

      <h4>Résultats de ma veille</h4>
      <div class="frise">${v.resultats.map(r => `
        <div class="evenement">
          <time>${r.date}</time>
          <h5>${r.titre}</h5>
          <p>${r.texte}</p>
          <a href="${r.lien}" target="_blank" rel="noopener">Source : ${r.source}</a>
        </div>`).join("")}
      </div>

      <div class="duo">
        <div class="carte"><h3>Ce que j'en retiens</h3><ul>${v.retenir.map(x => `<li>${x}</li>`).join("")}</ul></div>
        <div class="carte"><h3>Lien avec mes projets</h3><ul>${v.liens.map(x => `<li>${x}</li>`).join("")}</ul></div>
      </div>
    </article>`;
}

if (barre && panneau) {
  document.getElementById("methode-veille").innerHTML = METHODE.map((m, i) =>
    `<div class="etape"><span class="num">${i + 1}</span><h4>${m.etape}</h4><p>${m.texte}</p></div>`).join("");

  // Chaque sujet de veille = une vraie page : veille.html?sujet=...
  const choisi = new URLSearchParams(location.search).get("sujet") || VEILLE[0].id;
  barre.innerHTML = VEILLE.map(v =>
    `<a href="veille.html?sujet=${v.id}" class="${v.id === choisi ? "actif" : ""}"${v.id === choisi ? ' aria-current="page"' : ""}>${v.onglet}</a>`).join("");
  afficherVeille(choisi);
}

/* ---------- 4. Apparition des sections au défilement ---------- */
const obs = new IntersectionObserver(entrees => {
  entrees.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

/* ---------- 5. Transition entre les pages ---------- */
const reduit = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || reduit) return;
  const url = new URL(a.href, location.href);
  const interne = url.origin === location.origin && !a.target && !a.hasAttribute("download");
  const memePage = url.pathname === location.pathname && url.search === location.search;
  if (!interne || memePage || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  document.body.classList.add("sortie");
  setTimeout(() => { location.href = a.href; }, 250);
});
// Retour arrière du navigateur : on enlève l'état "sortie"
addEventListener("pageshow", () => document.body.classList.remove("sortie"));

/* ---------- 6. Fond animé : réseau de points bleus (canvas) ---------- */
const canvas = document.getElementById("reseau");
const ctx = canvas.getContext("2d");
let points = [];
const souris = { x: -999, y: -999 };

function redimensionner() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const nb = Math.min(90, Math.floor(innerWidth * innerHeight / 18000));
  points = Array.from({ length: nb }, () => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
    vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4
  }));
}
addEventListener("resize", redimensionner);
addEventListener("mousemove", e => { souris.x = e.clientX; souris.y = e.clientY; });
redimensionner();

function dessiner() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of points) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = "#2f6bff";
    ctx.fill();
  }
  const tous = [...points, souris];
  for (let i = 0; i < tous.length; i++) {
    for (let j = i + 1; j < tous.length; j++) {
      const d = Math.hypot(tous[i].x - tous[j].x, tous[i].y - tous[j].y);
      if (d < 130) {
        ctx.strokeStyle = `rgba(47,107,255,${(1 - d / 130) * .45})`;
        ctx.beginPath();
        ctx.moveTo(tous[i].x, tous[i].y);
        ctx.lineTo(tous[j].x, tous[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(dessiner);
}
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) dessiner();
