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
    type: 'image',
    src: 'portfolio/physical/untitled_and_unfinished.jpg',
    title: 'Untitled and Unfinished',
    year: '2018',
    medium: 'Graphite, charcoal, color pencil, chalk pastel, oil pastel, and acrylic on drawing paper',
    dimensions: '9 × 9.5 in',
    statement: '<i>Untitled and Unfinished</i> began as a realistic portrait of British singer and songwriter FKA Twigs, realistically rendered in graphite and charcoal from a photograph by David Burton. Drawn to her otherworldly aesthetic and the visual power of the reference image, the work was conceived as an exercise in likeness. The single Phalaenopsis orchid, rendered in color pencil, served as the sole departure from an otherwise monochromatic composition. That is until the piece turned into a study of color and medium, in which the artist opted for a vivid blue chalk pastel to serve as the background. Purple and pink chalk pastel were dusted onto her cheeks as blush to match the orchid in hand. White acrylic paint and oil pastel were used to add highlights on the flower and the subject, respectively. Yet the piece remained incomplete. The undrawn braid and unfinished ponytail became details deferred, and eventually released. Years later, rather than returning to finish what was left, yellow chalk pastel was added to the open, unrendered areas of the composition, allowing the work to feel whole without pretending to be complete.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/womanhood.jpg',
    title: 'Womanhood',
    year: '2022',
    medium: 'Watercolor on canvas paper',
    dimensions: '9 × 12 in',
    statement: '<i>Womanhood</i> depicts a nude figure levitating at the center of the composition, face tilted skyward, limbs loosely hinged, neither falling nor fully ascending. From the body, concentric lines radiate outward in warm earth tones and muted reds, simultaneously evoking an aura, a topographic contour, and the reverberation of sound through a medium. The figure is not a specific woman but an archetype: a generalized feminine form that carries within it the fullness of embodied experience—physical, energetic, and spiritual at once. By refusing individuation or corporeal specificity, the work positions the abstracted female nude as a universal representation of femininity. The feminine body as a site of active emanation. A source of energy whose interiority visibly shapes the space around it.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/sad_self_portrait.jpg',
    title: 'Sad Self-Portrait',
    year: '2022',
    medium: 'Watercolor on canvas paper',
    dimensions: '9 × 12 in',
    statement: 'Painted during a period of intense depression, <i>Sad Self-Portrait</i> resists the impulse toward resolution or catharsis. The artist is depicted in three-quarter view, eyes red and puffy, cheek resting heavily in hand, gaze lowered and inward—a posture that speaks less of rest than of the particular exhaustion associated with carrying some emotional weight. The swirling blue arabesque patterns that populate the background were not planned. They emerged from the compulsive need to keep painting after the portrait itself was complete, to fill the silence that the face alone could not. In this way, the background is not decorative but symptomatic; the visible overflow of an interior noise that could not be contained within the mind. The work documents not only the appearance of depression but its movement, specifically the way it continues to flow when everything else has stopped.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/green.jpg',
    title: 'Green',
    year: '2024',
    medium: 'Marker on drawing paper',
    dimensions: '11 × 14 in',
    statement: '<i>Green</i> interrogates the conventions of portraiture by refusing its completeness. The face is rendered as a discrete collection of floating features—brows, nostrils, lips, ears—each legible in isolation although structurally estranged from one another. Freed from the obligation of likeness, the drawing asks what portraiture actually requires: recognition, explicit detail, or merely the suggestion of a subject. The figure is entirely invented from the artist’s imagination, yet the face reads as particular. An uncanny effect that exposes how readily the viewer assembles selfhood from fragmentary information. The colors within the portrait transition from black through various shades of green. Is the subject green with tranquility? Green with jealousy? Green with naivety? The vagueness of the figure’s facial structure attributes to the wide variety of interpretations that can be gleaned from its appearance. In these ways, the work turns the act of perceiving back on itself, implicating the eye of the viewer in the construction of identity.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/quentin_torpedo_presents_bang.jpg',
    title: 'Quentin Torpedo Presents: BANG!',
    year: '2025',
    medium: 'Acrylic on canvas',
    dimensions: '5 × 7 in',
    statement: '<i>BANG!</i>, for short, began as a formal paint study before surrendering to its own subject matter. Appropriating the visual language of exploitation cinema—specifically the violently hypersexualized aesthetic that defines much of Quentin Tarantino’s filmography—the work condenses that tradition into a more intimate field of view. The inverted contextual onomatopoeia, the matching bullet and seductive passenger, the disembodied hand reaching into the disembodied vulva, the siren licking the lollipop enticingly, and the vague hanged man all function as cinematic stills collapsed into a single frame. The viewer is engrossed in the voyeuristic nature that the genre both offers and critiques. At miniature scale, the grandiosity of exploitation is made absurd, and its graphic lewdness operates as compositional choice rather than necessity.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/9.jpg',
    title: '9',
    year: '2025',
    medium: 'Acrylic on canvas',
    dimensions: '16 × 20 in',
    statement: '<i>9</i> is a figurative address of an imaginary rowhome rendered with architectural precision and narrative density—the brick facade acting as an overlaying surface to the complexity found inside. It belongs to Baltimore Ave, Maryland 21222, a multi-sensory series documenting life in a historically Black neighborhood through interconnected paintings, poems, and projected sound installation. Each panel in the series functions as a different viewpoint of the block—domestic windows transform into frames-within-frames, showcasing miniature worlds. The characters in this frame are a man sitting somberly on a porch with his guitar, and a woman peering longingly at him from the window of that same home. The golden house light glows upon the man, somehow casting him in a blue light. Through the window of the home next door, you can see a kitchen with its checkered backsplash and matching clock, dark wood cabinets, and dated white refrigerator. Looking closely at the refrigerator door, you can see a ripped family portrait, a downturned smiley face sticker, and magnets that spell “# … DAD”. Each of these details unfurls the tangled visual narrative of a broken home with our sad guitarist, and his neighboring mistress, at the helm. The accompanying song, “Inner City Blues” by Marvin Gaye, and the eponymous, nine-verse poem below finalize the threshold crossing between interior life and neighborhood space.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/reflections.jpg',
    title: 'Reflections',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '6 × 6 in',
    statement: '<i>Reflections</i> was painted outdoors, in the backyard of the family home that the artist had reluctantly returned to after five years of living independently, and four years of pursuing former dreams of higher academia. What began as a peaceful and atmospheric seascape became something more personal—a visual reckoning with a chapter closing before it felt ready to close. The composition is divided between a smooth, expansive sky and a turbulent, heavily textured sea. Three clouds gather around the sun while below, a small burst of gold light floats on the churning waters. The title works on both planes simultaneously. The water mirrors the sky. The painting mirrors a moment of meditation. These reflections highlight the emotional core of the piece. A beacon of hope emanating in a single point of light. Faith breaking through the depths below. And surrender in the midst of uncertainty. To reflect is to look back and trust that every part of your journey happened, and is happening, for your good.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/the_surge.jpg',
    title: 'The Surge',
    year: '2026',
    medium: 'Watercolor on canvas paper',
    dimensions: '9 × 12 in',
    statement: '<i>The Surge</i> began in 2022 as a portrait of a woman at peace, her expression serene and inward. She was never meant to be in danger, but something simply would not allow her to be. Two years and some sorrows later, the watercolor seeped into the background and a hand emerged from beneath the surface. Two more years and additional sorrows later, a second hand followed and the painting finally became what it had been quietly moving toward. Yet she remains calm at the center of it all—eyes closed, expression soft—while hands rise and reach around her. That dissonance was unintentional, and perhaps more honest for it. A moment of tranquility, interrupted by some disturbance. Feelings that surface from within and forces that press in from without, surging and swelling until they seem to consume you, the boundary between the two long dissolved. How then, do you respond? Fighting a wave only causes you to drown quicker, but a placid surrender allows you to stay afloat. The artist once resonated deeply with this idea of being consumed by feelings and forces that seemed so much greater than her. Now, much like the woman in the painting, she no longer grants her emotions or external circumstances the agency to disturb her peace.'
  },
  {
    type: 'image',
    src: 'portfolio/physical/tre.jpg',
    title: 'Tre',
    year: '2026',
    medium: 'Watercolor and acrylic on canvas',
    dimensions: '11 × 14 in',
    statement: 'The title of this piece functions as a double entendre. <i>Tre</i> is both the Italian word for three, and a name commonly found within the Black community. What began as a sketch and a technical study of overlapping line art, became something else entirely. One black man, fractured across the canvas, his gaze held in three directions simultaneously. Frantz Fanon once said that “a member of a colonised people must be constantly aware of his position, his image; he is being threatened from all sides; impossible to forget for an instant the need to keep up one’s defenses.” This symptomatic hypervigilance causes an unintentional fragmentation of self. The natural result of a marginalized identity shaped under constant surveillance is the compulsory need to constantly perform, constantly suppress, and constantly translate. In this manner we see that code-switching and other politics of respectability aren’t skills, they are generational curses. The underlying question thus becomes, what could we—the descendants of colonized people—be if none of this were necessary? If the circumstances of colonization and imperialism that fractured us had never existed at all, what might have remained whole?'
  },
];

const digitalArt = [
  {
    type: 'video',
    src: 'portfolio/digital/born_under_the_son.mp4',
    title: 'Born Under the Son',
    year: '2026',
    statement: '<i>Born Under the Son</i> is a self-portrait that simutaneously operates as a visual devotional and literary wordplay. The artist is positioned before a luminous solar disc that consciously echoes the halos of Byzantine and Renaissance iconography traditionally reserved for saints and biblical figures. The deep ochre background paying homage to the historic color of imperial royalty. The title operates on two levels at once: “born under the sun” references the Akan name Akosua, meaning one born on a Sunday. While “born under the Son” declares the artist’s identity as a child of God the Father, and a believer of God the Son. The doubling of cultural heritage and divine spirituality refuses any easy separation between the secular and the sacred. The self is not represented here as a physical subject, but as a dignified soul—radiant and situated with an inherited grammar of glory. This specific version is a digital rendering of an 11 x 14 inch acrylic painting on canvas. In the digital animation, the portrait can be seen blinking, as the solar shaped earring illuminates both the artist’s body, and the gold jewel necklace that lays across her bare chest. This second frame further signifies the outward manifestation of an inward celestial state.'
  },
  {
    type: 'video',
    src: 'portfolio/digital/release.mp4',
    title: 'Release (Eldest Daughter)',
    year: '2026',
    statement: '<i>Release</i> is a meditation on surrender and the sacred act of returning to oneself after carrying something that was never meant to be held. The alternate title, <i>Eldest Daughter</i>, speaks to the familiar experience within many families of color where the first born daughter becomes a substitute caregiver—expected to nurture, protect, and sustain the needs of others before fully understanding her own. Here, she rests in stillness, surrounded by waves of color emanating from her crown and root chakras. Blockages in these energetic areas can be spurred by unresolved trauma, chronic stress, fear of failure, rigid belief systems, and prioritizing endurance through struggle. All of which are symptoms of early adultification. These waves represent the many things being released: inherited expectations, misplaced projections, societal ideals, and the invisible labor attached to womanhood. The weight of being useful often becomes intertwined with identity, leaving little room to exist beyond service. Through this release, she is reclaiming her wholeness beyond this responsibility. The work honors the interior lives of Black women and women of color, asking what remains when we are finally allowed to exist outside of what we can provide.'
  },
  {
    type: 'video',
    src: 'portfolio/digital/used_and_discarded.mp4',
    title: 'Used and Discarded',
    year: '2026',
    statement: '<i>Used and Discarded</i> is a commentary on twenty-first century relationships. In an era where boundary-setting and mental health breaks have become cultural currency, leaving has never been easier or more socially sanctioned. We have grown accustomed to exiting at the first sign of friction, not recognizing that healthy friction is a natural part of growth, and that inconvenience is often the price of close relationships. We want friends and community without accountability. “We are collectors of people and places. We fill in blank spaces with experiences that shape us. Learning and growing, then withdrawing and ghosting...” In this animated piece, we see a man’s fragmented body suspended by strings, being pulled in various directions by someone unseen. His head rests on the floor—detached, untethered, still operating on his own volition. Although his mind and emotions are the only extremities free of manipulation, there exists a quiet, pervasive logic that dictates that his submission might be mistaken for devotion, and that allowing himself to be puppeteered might make someone stay. Yet he knows that it doesn’t work that way. So he waits, hoping to find a sense of closure in their absence.'
  },
];

const poems = [
  {
    title: 'John 14:6',
    year: '2023',
    body: `He met me at this fork in the road
sense of direction was never a strength of mine
“which path do i take?” i asked
“choose The way,” He answered
He sat with me at this fork in the road

He met me in the depths of my despair
overcoming obstacles was never my forte
“how am i to conquer?” i asked
“with The truth,” He answered
He sat with me in the depths of my despair

He met me as i laid sick and tired
taking respite was never my specialty
“where is my healing?” i asked
“in The life,” He answered
He sat with me as i laid sick and tired

He met me where i was
i was weak and He was strong
... i asked
... He answered
He saved me`
  },
  {
    title: 'feelings',
    year: '2024',
    body: `they start by your feet
slowly surging and swelling
you let them take you`
  },
  {
    title: '9',
    year: '2025',
    body: `Have you truly lived if you haven’t experienced the full range of human emotion?
Could you tell me what color they are?
Can you describe the intensity of each hue?
If love is pink and anger is red, do these values exist on the same scale?
Can you stop those colors from mixing?
Would you tell me if they begin to bleed?
What if all sensations were merely a half-step from the next?
Would each chroma strike a chord?
Or could you only thrum in blue?`
  },
  {
    title: 'poiēma',
    year: '2026',
    body: `Of greek or latin origin,
meaning handiwork or something made
from which we derive poetry and prose

as literary works of linguistic art,
and an intentional process of creation
is core to the spiritual being

in communion with the saints,
altering the furled fabric of reality
For the inundation of divine authorship`
  },
  {
    title: 'then God spoke to me',
    year: '2026',
    body: `there is a thin line
between delusion and faith
cross it anyway`
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

    titleEl.innerHTML = `<i>${item.title}</i>, ${item.year}`;
    yearEl.textContent = item.medium ? `${item.medium}, ${item.dimensions}` : '';
    stmtEl.innerHTML = item.statement;
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
      plaque.classList.toggle('zoomed');
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
