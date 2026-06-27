/* ============================================================
   AKOSUA CREATES — main.js
   ============================================================ */

/* ── Page routing ── */
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  closeDrawer();
}

/* ── Hamburger / drawer ── */
const menuBtn = document.getElementById('menu-btn');
const drawer  = document.getElementById('nav-drawer');
const overlay = document.getElementById('overlay');

function openDrawer() {
  menuBtn.classList.add('open');
  drawer.classList.add('open');
  overlay.classList.add('visible');
  menuBtn.setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  menuBtn.classList.remove('open');
  drawer.classList.remove('open');
  overlay.classList.remove('visible');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', () =>
  drawer.classList.contains('open') ? closeDrawer() : openDrawer()
);
overlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* Drawer links */
document.querySelectorAll('#nav-drawer a[data-page]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(a.dataset.page);
  });
});

/* ── Hotspots ── */
document.querySelectorAll('.hotspot[data-page]').forEach(el => {
  el.addEventListener('click', () => navigateTo(el.dataset.page));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateTo(el.dataset.page);
    }
  });
});

/* ── Back buttons ── */
document.querySelectorAll('.back-btn').forEach(btn =>
  btn.addEventListener('click', () => navigateTo('home'))
);


/* ============================================================
   GALLERY DATA
   ──────────────────────────────────────────────────────────────
   TO ADD YOUR OWN WORK:
   Replace the placeholder objects below with your real data.

   For images:    { type: 'image', src: 'your-file.jpg', ... }
   For video/gif: { type: 'video', src: 'your-file.mp4', ... }
   ============================================================ */

const physicalArt = [
  {
    type: 'placeholder',
    title: 'Artwork Title',
    year: '2024',
    statement: 'Replace this with your artist statement for this piece. Click the plaque to expand.'
  },
  {
    type: 'placeholder',
    title: 'Artwork Title',
    year: '2023',
    statement: 'Artist statement for your second piece goes here.'
  },
  {
    type: 'placeholder',
    title: 'Artwork Title',
    year: '2023',
    statement: 'Artist statement for your third piece goes here.'
  },
  /* Example when you have files ready:
  {
    type: 'image',
    src: 'art/painting1.jpg',
    title: 'Untitled I',
    year: '2024',
    statement: 'This piece explores...'
  },
  */
];

const digitalArt = [
  {
    type: 'placeholder',
    title: 'Digital Piece Title',
    year: '2024',
    statement: 'Artist statement for this digital piece.'
  },
  {
    type: 'placeholder',
    title: 'Digital Piece Title',
    year: '2024',
    statement: 'Artist statement for your second digital piece.'
  },
  /* Example for animated pieces (mp4):
  {
    type: 'video',
    src: 'art/animation1.mp4',
    title: 'Animated Study',
    year: '2024',
    statement: 'This animation explores...'
  },
  */
];

const poems = [
  {
    title: 'Poem Title',
    year: '2024',
    body: `Your poem text goes here.
Each line break is preserved.

Add stanza breaks with a blank line.
Replace this with your actual poem.`
  },
  {
    title: 'Another Poem',
    year: '2023',
    body: `Second poem text here.
Line two.

Stanza two.`
  },
  {
    title: 'Third Poem',
    year: '2023',
    body: `Third poem text.
Your words.

More stanzas.`
  },
];


/* ============================================================
   GALLERY ENGINE (shared by Physical + Digital)
   ============================================================ */
function initGallery({ stageId, prevId, nextId, indexId, totalId,
                        plaqueId, titleId, yearId, stmtId,
                        lightboxId, lbCloseId, lbImgId, data }) {

  let current = 0;

  const stage    = document.getElementById(stageId);
  const prevBtn  = document.getElementById(prevId);
  const nextBtn  = document.getElementById(nextId);
  const indexEl  = document.getElementById(indexId);
  const totalEl  = document.getElementById(totalId);
  const plaque   = document.getElementById(plaqueId);
  const titleEl  = document.getElementById(titleId);
  const yearEl   = document.getElementById(yearId);
  const stmtEl   = document.getElementById(stmtId);
  const lightbox = document.getElementById(lightboxId);
  const lbClose  = document.getElementById(lbCloseId);
  const lbImg    = document.getElementById(lbImgId);

  if (!stage) return;

  totalEl.textContent = data.length;

  function render() {
    const item = data[current];
    stage.innerHTML = '';

    if (item.type === 'placeholder') {
      stage.innerHTML = `<div class="artwork-placeholder">
        Your artwork will appear here.<br>
        Add image paths to the data array in main.js
      </div>`;
    } else if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      stage.appendChild(img);
    } else if (item.type === 'video') {
      const vid = document.createElement('video');
      vid.src = item.src;
      vid.autoplay = true;
      vid.loop = true;
      vid.muted = true;
      vid.playsInline = true;
      stage.appendChild(vid);
    }

    titleEl.textContent = item.title;
    yearEl.textContent  = item.year;
    stmtEl.textContent  = item.statement;
    indexEl.textContent = current + 1;

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === data.length - 1;
  }

  prevBtn.addEventListener('click', () => { if (current > 0) { current--; render(); } });
  nextBtn.addEventListener('click', () => { if (current < data.length - 1) { current++; render(); } });

  /* Click artwork → lightbox (images only) */
  stage.addEventListener('click', () => {
    const item = data[current];
    if (item.type === 'image') {
      lbImg.src = item.src;
      lbImg.alt = item.title;
      lightbox.classList.add('open');
    }
  });

  if (lbClose) {
    lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
  }

  /* Plaque click — expand statement (simple toggle) */
  if (plaque) {
    plaque.addEventListener('click', () => {
      stmtEl.style.webkitLineClamp = stmtEl.style.webkitLineClamp ? '' : '3';
    });
  }

  /* Keyboard arrow navigation */
  document.addEventListener('keydown', e => {
    const page = stage.closest('.page');
    if (!page || !page.classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  { if (current > 0) { current--; render(); } }
    if (e.key === 'ArrowRight') { if (current < data.length - 1) { current++; render(); } }
    if (e.key === 'Escape')     { lightbox.classList.remove('open'); }
  });

  render();
}

/* ============================================================
   POETRY ENGINE
   ============================================================ */
function initPoetry() {
  let current = 0;

  const stage    = document.getElementById('poem-stage');
  const prevBtn  = document.getElementById('poem-prev');
  const nextBtn  = document.getElementById('poem-next');
  const indexEl  = document.getElementById('poem-index');
  const totalEl  = document.getElementById('poem-total');

  if (!stage) return;

  totalEl.textContent = poems.length;

  function render() {
    const poem = poems[current];
    stage.innerHTML = `
      <p class="poem-title-display">${poem.title}</p>
      <p class="poem-year-display">${poem.year}</p>
      <p class="poem-body">${poem.body}</p>
    `;
    indexEl.textContent = current + 1;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === poems.length - 1;
  }

  prevBtn.addEventListener('click', () => { if (current > 0) { current--; render(); } });
  nextBtn.addEventListener('click', () => { if (current < poems.length - 1) { current++; render(); } });

  document.addEventListener('keydown', e => {
    const page = stage.closest('.page');
    if (!page || !page.classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  { if (current > 0) { current--; render(); } }
    if (e.key === 'ArrowRight') { if (current < poems.length - 1) { current++; render(); } }
  });

  render();
}


/* ── Init ── */
initGallery({
  stageId: 'phys-stage', prevId: 'phys-prev', nextId: 'phys-next',
  indexId: 'phys-index', totalId: 'phys-total',
  plaqueId: 'phys-plaque', titleId: 'phys-title', yearId: 'phys-year', stmtId: 'phys-stmt',
  lightboxId: 'phys-lightbox', lbCloseId: 'phys-lb-close', lbImgId: 'phys-lb-img',
  data: physicalArt
});

initGallery({
  stageId: 'dig-stage', prevId: 'dig-prev', nextId: 'dig-next',
  indexId: 'dig-index', totalId: 'dig-total',
  plaqueId: 'dig-plaque', titleId: 'dig-title', yearId: 'dig-year', stmtId: 'dig-stmt',
  lightboxId: 'dig-lightbox', lbCloseId: 'dig-lb-close', lbImgId: 'dig-lb-img',
  data: digitalArt
});

initPoetry();

navigateTo('home');
