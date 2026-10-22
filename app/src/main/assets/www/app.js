'use strict';
/* Living Forest Duel – kooperative Fassung: Ereignisstapel-Begleiter.
   Spielregeln: REGELWERK.md, Abschnitt 6 (Ereigniskarten, Intensität, Rundentracker).
   Texte: i18n.js (Deutsch, Englisch, Koreanisch). */

const $ = (s, r = document) => r.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
const IMG = 'img/';
const CARD_RATIO = 630 / 880;

/* ====================== Zustand ====================== */
let S = null;       // Spielstand
let G = null;       // Geometrie der Spielfläche
let busy = false;   // eine Animation oder ein Zug läuft
let audioCtx = null;
let aktuellesZiel = null;   // für die Trackerwahl

/* ====================== Hilfsfunktionen ====================== */
function zufall(n) {   // gleichverteilt 0..n-1
  if (window.crypto && crypto.getRandomValues) {
    const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n;
  }
  return Math.floor(Math.random() * n);
}
function mischen(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = zufall(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function baueStapel() {
  const karten = [];
  let id = 0;
  for (const [bild, art, p, anzahl] of STAPEL_DEF)
    for (let i = 0; i < anzahl; i++) karten.push({ id: id++, bild, art, p });
  return mischen(karten);
}
function intensitaet(runde) {
  const t = S.tracker;
  return runde >= t.drei ? 3 : runde >= t.zwei ? 2 : 1;
}
function hochformat() { return innerHeight > innerWidth * 1.05; }

/* ====================== Ton: „Oh-Oh“ ====================== */
function initAudio() {
  if (audioCtx) { if (audioCtx.state === 'suspended') audioCtx.resume(); return; }
  const C = window.AudioContext || window.webkitAudioContext;
  if (C) { try { audioCtx = new C(); } catch (e) { audioCtx = null; } }
}
function ohoh() {
  if (!audioCtx) return;
  const t0 = audioCtx.currentTime + 0.02;
  const silbe = (start, f1, f2, dauer) => {
    const out = audioCtx.createGain();
    const filt = audioCtx.createBiquadFilter();
    filt.type = 'bandpass'; filt.frequency.value = 900; filt.Q.value = 0.9;
    out.gain.setValueAtTime(0.0001, start);
    out.gain.exponentialRampToValueAtTime(0.55, start + 0.04);
    out.gain.setValueAtTime(0.55, start + dauer * 0.55);
    out.gain.exponentialRampToValueAtTime(0.0001, start + dauer);
    filt.connect(out); out.connect(audioCtx.destination);
    for (const [typ, mul, pegel] of [['triangle', 1, 1], ['sine', 2, 0.35]]) {
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = typ;
      o.frequency.setValueAtTime(f1 * mul, start);
      o.frequency.exponentialRampToValueAtTime(f2 * mul, start + dauer);
      g.gain.value = pegel;
      o.connect(g); g.connect(filt);
      o.start(start); o.stop(start + dauer + 0.05);
    }
  };
  silbe(t0, 560, 500, 0.30);          // „Oh“
  silbe(t0 + 0.36, 420, 300, 0.46);   // „-oh“, tiefer und fallend
}

/* ====================== Sprache ====================== */
function wendeTexteAn() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i]').forEach(n => { n.innerHTML = tr(n.dataset.i); });
  $('#langBtn').innerHTML = `<span class="mini">${FLAGGEN[LANG]}</span><span>${tr('langBtn')}</span>`;
  $('#restartBtn').textContent = tr('restart');
  $('#nextBtn').textContent = tr('next');
  $('#lastBanner').textContent = tr('last');
  $('#roundLbl').textContent = tr('round');
  $('#dropHint').textContent = tr('drop');
  baueHilfeLeisten();
  $('#mTitle').textContent = tr('restartTitle');
  $('#mText').textContent = tr('restartText');
  $('#modalNo').textContent = tr('cancel');
  $('#modalYes').textContent = tr('restartYes');
}
function waehleSprache(code) {
  LANG = code;
  wendeTexteAn();
  bauZielwahl();
  zeigeBildschirm('screenGoal');
}
function bauSprachwahl() {
  const row = $('#langRow');
  row.innerHTML = '';
  [['de', 'Deutsch'], ['en', 'English'], ['ko', '한국어']].forEach(([code, name]) => {
    const b = el('button', 'flag');
    b.innerHTML = `<span class="flagimg">${FLAGGEN[code]}</span><span class="flagname">${name}</span>`;
    b.addEventListener('click', () => { initAudio(); waehleSprache(code); });
    row.appendChild(b);
  });
}

/* ====================== Bildschirme ====================== */
function zeigeBildschirm(id) {
  const alt = document.querySelector('.screen.active');
  const neu = document.getElementById(id);
  if (alt === neu) return;
  if (alt) {
    alt.classList.remove('show');
    setTimeout(() => alt.classList.remove('active'), 400);
  }
  setTimeout(() => {
    neu.classList.add('active');
    setTimeout(() => neu.classList.add('show'), 40);
  }, alt ? 380 : 0);
}

function bauZielwahl() {
  const row = $('#goalRow');
  row.innerHTML = '';
  ZIELE.forEach((z) => {
    const b = el('button', 'goal');
    const kunst = z.kunst.map(k => `<div style="background-image:url(${IMG}${k}.webp);background-position:center ${z.pos || '22%'}"></div>`).join('');
    b.innerHTML = `<div class="art">${kunst}</div>
      <div class="txt"><h2>${tr('goal_' + z.id)}</h2><p>${tr('goaltext_' + z.id)}</p></div>`;
    b.addEventListener('click', () => { initAudio(); waehleZiel(z); });
    row.appendChild(b);
  });
}

function waehleZiel(z) {
  aktuellesZiel = z;
  $('#trackerGoalName').textContent = tr('goal_' + z.id);
  const row = $('#trackerRow');
  row.innerHTML = '';
  z.gruppen.forEach(g => {
    const box = el('div', 'tgroup');
    box.appendChild(el('div', 'gt ' + g.art, tr('grp_' + g.art)));
    const items = el('div', 'titems');
    g.items.forEach(item => {
      const t = TRACKER[item.t];
      const ende = item.ende || t.ende;
      const b = el('button', 'tchoice');
      const zeile2 = tr('twoThree', t.zwei, t.drei);
      b.innerHTML = `<div class="cardimg"><img src="${IMG}${t.bild}.webp" alt=""></div>
        <div class="cap">${tr('trackerName', item.t, t.name)}<small>${tr('roundsN', ende)}</small><small>${zeile2}</small></div>`;
      b.addEventListener('click', () => starteSpiel(z, item.t, ende, g.art));
      items.appendChild(b);
    });
    box.appendChild(items);
    row.appendChild(box);
  });
  layoutTrackerwahl();
  zeigeBildschirm('screenTracker');
}

/* Größe der Trackerkarten in der Wahl, für Quer- und Hochformat */
function layoutTrackerwahl() {
  const z = aktuellesZiel;
  if (!z) return;
  const row = $('#trackerRow');
  const hoch = hochformat();
  const u = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--u')) || 1;
  const n = z.gruppen.reduce((a, g) => a + g.items.length, 0);
  let th;
  if (!hoch) {
    const verfuegbar = innerWidth - 60 * u - (z.gruppen.length - 1) * 34 * u - (n - z.gruppen.length) * 22 * u;
    const maxH = innerHeight - 118 * u - 24 * u - 150 * u;
    th = Math.min(maxH, verfuegbar / n / CARD_RATIO, 440 * u);
  } else {
    const zeilen = Math.ceil(z.gruppen.length / 2);
    const zellenB = (innerWidth - 60 * u - 40 * u) / 2;
    const maxItems = Math.max(...z.gruppen.map(g => g.items.length));
    const maxH = (innerHeight - 190 * u) / zeilen - 150 * u;
    th = Math.min(maxH, (zellenB - (maxItems - 1) * 20 * u) / maxItems / CARD_RATIO, 460 * u);
  }
  row.style.setProperty('--th', th + 'px');
}

/* ====================== Spielstart ====================== */
function starteSpiel(ziel, trackerId, ende, gruppe) {
  initAudio();
  const t = Object.assign({}, TRACKER[trackerId], { id: trackerId, ende });
  S = {
    ziel, tracker: t, gruppe,
    runde: 1,
    stapel: baueStapel(),
    ablage: [],
    auslage: [null, null, null],
    anzeigeSlots: 0,
    trackerHinten: false
  };
  busy = false;
  $('#cardLayer').innerHTML = '';
  $('#slotLayer').innerHTML = '';
  $('#tflip').classList.remove('back');
  $('#trackerImg').src = IMG + t.bild + '.webp';
  $('#infoGoal').textContent = tr('goal_' + ziel.id);
  $('#infoTracker').textContent = tr('trackerName', t.id, t.name);
  $('#infoHint').textContent = tr('infoHint', ende, t.partner) + ' ' + tr('twoThree', t.zwei, t.drei) + '.' + (t.einWald ? ' ' + tr('oneForest') : '');
  $('#roundOf').textContent = '/ ' + ende;
  $('#lastBanner').classList.remove('show');
  $('#msg').className = 'msg';
  S.slotEls = [];
  for (let i = 0; i < 3; i++) {
    const ph = el('div', 'slotph gone', String(i + 1));
    const lb = el('div', 'slotlbl');
    $('#slotLayer').appendChild(ph);
    $('#slotLayer').appendChild(lb);
    S.slotEls.push({ ph, lb });
  }
  zeigeBildschirm('screenGame');
  setTimeout(() => {
    berechneGeometrie();
    setzeSlots(intensitaet(1), true);
    zeichneStapel();
    markerSetzen(1, false);
    $('#marker').classList.add('appear');
    setTimeout(() => $('#marker').classList.remove('appear'), 900);
    aktualisiere();
  }, 60);
}

/* ====================== Geometrie ====================== */
function setzeMass() {
  const hoch = hochformat();
  const u = hoch ? Math.min(innerWidth / 800, innerHeight / 1280)
                 : Math.min(innerWidth / 1280, innerHeight / 800);
  document.documentElement.style.setProperty('--u', u + 'px');
  document.body.classList.toggle('portrait', hoch);
  return u;
}

function berechneGeometrie() {
  const W = innerWidth, H = innerHeight;
  const hoch = hochformat();
  const u = setzeMass();
  const pad = Math.round(18 * u);
  const lab = 0.14;
  let tracker, info, area;
  if (!hoch) {
    const innerH = H - 2 * pad;
    const th = innerH * 0.70, tw = th * CARD_RATIO;
    tracker = { x: pad, y: pad, w: tw, h: th };
    info = { x: pad, y: pad + th + pad, w: tw, h: innerH - th - pad };
    const rx = pad + tw + pad * 1.6;
    area = { x: rx, y: pad, w: W - rx - pad, h: innerH };
  } else {
    // Hochformat: Tracker links oben, Infobereich rechts oben, zusammen etwa ein Drittel der Höhe
    const band = (H - 2 * pad) * 0.33;
    const th = Math.min(band, (W - 3 * pad) * 0.5 / CARD_RATIO), tw = th * CARD_RATIO;
    tracker = { x: pad, y: pad, w: tw, h: th };
    info = { x: pad * 2 + tw, y: pad, w: W - tw - pad * 3, h: th };
    const ay = pad + th + pad;
    area = { x: pad, y: ay, w: W - 2 * pad, h: H - ay - pad };
  }
  const gap = pad;
  let ch = (area.h - gap) / (2 + 2 * lab), cw = ch * CARD_RATIO;
  const maxW = (area.w - 2 * gap) / 3;
  if (cw > maxW) { cw = maxW; ch = cw / CARD_RATIO; }
  const labH = ch * lab;
  const total = 2 * ch + 2 * labH + gap;
  const y0 = area.y + (area.h - total) / 2;
  const y1 = y0 + ch + labH + gap;
  const rx = area.x, rw = area.w;
  G = {
    W, H, u, pad, cw, ch, labH, gap, rx, rw, hoch,
    tracker, info,
    deck: { x: rx, y: y0 },
    discard: { x: rx + rw - cw, y: y0 },
    center: { x: rx + cw + gap * 1.4, y: y0, w: rw - 2 * cw - gap * 2.8, h: ch },
    rowY: y1
  };
  const st = $('#stage').style;
  st.setProperty('--cw', cw + 'px');
  st.setProperty('--ch', ch + 'px');
  document.documentElement.style.setProperty('--cw', cw + 'px');
  document.documentElement.style.setProperty('--ch', ch + 'px');
  platziere($('#trackerBox'), G.tracker, true);
  platziere($('#infoPanel'), G.info, true);
  platziere($('#center'), G.center, true);
  const mg = $('#msg');
  mg.style.left = G.center.x + 'px'; mg.style.width = G.center.w + 'px';
  mg.style.top = (G.deck.y + ch + labH * 0.08) + 'px';
  platziere($('#deckSlot'), G.deck);
  platziere($('#discardSlot'), G.discard);
  platziere($('#deckPile'), G.deck);
  platziere($('#discardPile'), G.discard);
  const dl = $('#deckLbl'), al = $('#discardLbl');
  dl.style.left = G.deck.x + 'px'; dl.style.top = (G.deck.y + ch + labH * 0.1) + 'px';
  al.style.left = G.discard.x + 'px'; al.style.top = (G.discard.y + ch + labH * 0.1) + 'px';
  const dh = $('#dropHint');
  dh.style.left = (rx + (rw - cw * 3) / 2) + 'px';
  dh.style.top = (y1 - 36 * u) + 'px';
}
function platziere(node, r, mitMass) {
  node.style.left = r.x + 'px';
  node.style.top = r.y + 'px';
  if (mitMass) { node.style.width = r.w + 'px'; node.style.height = r.h + 'px'; }
}
function slotPos(i, n) {
  const breite = n * G.cw + (n - 1) * G.gap;
  const x0 = G.rx + (G.rw - breite) / 2;
  return { x: x0 + i * (G.cw + G.gap), y: G.rowY };
}

/* Kartenplätze der Auslage (1–3 je nach Intensität) */
function setzeSlots(n, sofort) {
  S.anzeigeSlots = n;
  S.slotEls.forEach((s, i) => {
    const aktiv = i < n;
    const p = slotPos(i, n);
    s.ph.style.left = p.x + 'px'; s.ph.style.top = p.y + 'px';
    s.lb.style.left = p.x + 'px'; s.lb.style.top = (p.y + G.ch + G.labH * 0.08) + 'px';
    const warGone = s.ph.classList.contains('gone');
    s.ph.classList.toggle('gone', !aktiv);
    if (aktiv && warGone && !sofort) {
      s.ph.classList.remove('enter'); void s.ph.offsetWidth; s.ph.classList.add('enter');
    }
  });
  // vorhandene Auslagekarten an ihre Plätze setzen
  S.auslage.forEach((k, i) => { if (k && k.el) setzePos(k.el, slotPos(i, n), 0); });
}

/* ====================== Stapel zeichnen ====================== */
function zeichnePile(node, anzahl, obenKarte) {
  node.innerHTML = '';
  const L = Math.min(anzahl, 12);
  for (let i = L - 1; i >= 0; i--) {
    const d = el('div', 'layer');
    d.style.transform = `translate(${i * 1.7 * G.u}px,${i * 1.7 * G.u}px)`;
    if (i > 0) d.style.filter = `brightness(${1 - i * 0.035}) drop-shadow(0 2px 2px rgba(0,0,0,.55))`;
    if (i === 0 && obenKarte) { d.style.background = 'none'; d.innerHTML = `<img src="${IMG}${obenKarte.bild}.webp" alt="">`; }
    node.appendChild(d);
  }
}
function zeichneStapel() {
  zeichnePile($('#deckPile'), S.stapel.length, null);
  zeichneAblage();
  $('#deckLbl').innerHTML = tr('deck', S.stapel.length);
}
function zeichneAblage() {
  const top = S.ablage.length ? S.ablage[S.ablage.length - 1] : null;
  zeichnePile($('#discardPile'), S.ablage.length, top);
  $('#discardLbl').innerHTML = tr('discard', S.ablage.length);
}

/* ====================== Karten-Elemente ====================== */
function erzeugeKarte(k, pos, aufgedeckt) {
  const c = el('div', 'card');
  c.innerHTML = `<div class="flip"><div class="face back"><div class="dt"><b></b><small></small><p></p></div></div>
    <div class="face front"><img src="${IMG}${k.bild}.webp" alt=""></div></div><div class="glow"></div>`;
  const dt = c.querySelector('.dt');
  dt.querySelector('b').textContent = kartenName(k);
  dt.querySelector('small').textContent = kartenZusatz(k);
  dt.querySelector('p').textContent = kartenText(k);
  c._karte = k;
  if (aufgedeckt) c.classList.add('flipped');
  setzePos(c, pos, 0);
  $('#cardLayer').appendChild(c);
  return c;
}
function setzePos(c, p, ms, rot = 0, skala = 1) {
  c.style.transition = ms ? `transform ${ms}ms cubic-bezier(.3,.75,.25,1)` : 'none';
  c.style.transform = `translate3d(${p.x}px,${p.y}px,0) rotate(${rot}deg) scale(${skala})`;
}
async function fliege(c, p, ms, rot = 0, skala = 1) {
  void c.offsetWidth;
  setzePos(c, p, ms, rot, skala);
  await sleep(ms + 30);
}

/* ====================== Spielfluss ====================== */
function freiePlaetze() {
  let n = 0;
  for (let i = 0; i < S.anzeigeSlots; i++) if (!S.auslage[i]) n++;
  return n;
}
function ersterFreier() {
  for (let i = 0; i < S.anzeigeSlots; i++) if (!S.auslage[i]) return i;
  return -1;
}
function kannZiehen() {
  return !busy && S && freiePlaetze() > 0 && S.stapel.length > 0;
}
function meldung(text, warn, ms = 2200) {
  const m = $('#msg');
  m.textContent = text;
  m.className = 'msg show' + (warn ? ' warn' : '');
  clearTimeout(meldung.t);
  if (ms) meldung.t = setTimeout(() => { m.className = 'msg'; }, ms);
}

function aktualisiere() {
  if (!S) return;
  const gefuellt = S.auslage.slice(0, S.anzeigeSlots).filter(Boolean).length;
  const voll = freiePlaetze() === 0;
  const keineKarten = S.stapel.length === 0 && S.ablage.length === 0;
  const letzte = S.runde >= S.tracker.ende;
  $('#roundNum').textContent = S.runde;
  const pips = $('#pips');
  pips.innerHTML = '';
  for (let i = 0; i < S.anzeigeSlots; i++) pips.appendChild(el('i', i < gefuellt ? 'on' : ''));
  $('#lastBanner').classList.toggle('show', letzte);
  const bereit = !busy && !letzte && (voll || (keineKarten && freiePlaetze() > 0));
  const nb = $('#nextBtn');
  nb.disabled = !bereit;
  nb.classList.toggle('ready', bereit);
  const zieh = kannZiehen();
  $('#deckPile').classList.toggle('canDraw', zieh);
  $('#deckPile').classList.toggle('blocked', !zieh && !busy && S.stapel.length > 0);
  $('#deckLbl').innerHTML = tr('deck', S.stapel.length);
  $('#dropHint').classList.toggle('show', zieh && gefuellt === 0 && S.runde === 1 && !S.schonGezogen);
  if (letzte && voll && !busy) meldung(tr('msgFinish'), false, 0);
}

/* ---------- Ziehen per Finger oder Stift ---------- */
function imDropBereich(x, y) {
  const n = S.anzeigeSlots;
  const a = slotPos(0, n), b = slotPos(n - 1, n);
  const rand = G.ch * 0.30;
  return x > a.x - rand && x < b.x + G.cw + rand && y > a.y - rand && y < a.y + G.ch + G.labH + rand;
}

function startZiehen(e) {
  if (e.button != null && e.button > 0) return;
  initAudio();
  if (!S || busy) return;
  if (!kannZiehen()) {
    if (freiePlaetze() === 0) meldung(tr('msgFull'));
    return;
  }
  e.preventDefault();
  busy = true;
  S.schonGezogen = true;
  $('#dropHint').classList.remove('show');
  const karte = S.stapel[S.stapel.length - 1];
  zeichnePile($('#deckPile'), S.stapel.length - 1, null);
  $('#deckLbl').innerHTML = tr('deck', S.stapel.length - 1);
  const c = erzeugeKarte(karte, G.deck, false);
  c.classList.add('dragging');
  $('#deckPile').classList.remove('canDraw');
  const sx = e.clientX, sy = e.clientY;
  const ziel = ersterFreier();
  const phZiel = S.slotEls[ziel].ph;
  let bewegt = false;
  const rect = $('#stage').getBoundingClientRect();
  const move = ev => {
    const dx = ev.clientX - sx, dy = ev.clientY - sy;
    if (Math.abs(dx) + Math.abs(dy) > 8) bewegt = true;
    setzePos(c, { x: G.deck.x + dx, y: G.deck.y + dy }, 0, Math.max(-8, Math.min(8, dx * 0.03)), 1.06);
    phZiel.classList.toggle('target', imDropBereich(ev.clientX - rect.left, ev.clientY - rect.top));
  };
  const ende = async ev => {
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', ende);
    window.removeEventListener('pointercancel', ende);
    phZiel.classList.remove('target');
    c.classList.remove('dragging');
    const drin = ev.type === 'pointerup' && bewegt && imDropBereich(ev.clientX - rect.left, ev.clientY - rect.top);
    if (!drin) {
      await fliege(c, G.deck, 320);
      c.remove();
      zeichneStapel();
      busy = false;
      aktualisiere();
      if (!bewegt && ev.type === 'pointerup') meldung(tr('msgDrag'), false, 1800);
      return;
    }
    await legeAus(karte, c, ziel);
  };
  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', ende);
  window.addEventListener('pointercancel', ende);
}

/* ---------- Karte landet in der Auslage ---------- */
async function legeAus(karte, c, platz) {
  S.stapel.pop();
  S.auslage[platz] = karte;
  karte.el = c;
  zeichneStapel();
  await fliege(c, slotPos(platz, S.anzeigeSlots), 430);
  c.classList.add('flipped');
  await sleep(700);
  const lb = S.slotEls[platz].lb;
  lb.innerHTML = `<b>${kartenName(karte)}</b><small>${kartenZusatz(karte) || '&nbsp;'}</small>`;
  lb.classList.add('show');
  aktualisiere();

  // gleiche Kategorie wie eine bereits ausliegende Karte?
  const andere = S.auslage.map((k, i) => (k && i !== platz) ? k : null).filter(Boolean);
  const klaue = andere.find(k => kategorie(k.art) === kategorie(karte.art));
  if (klaue && gibtAlternative(andere)) {
    await ohOh(karte, klaue, platz);
  }
  await sichereStapel();
  busy = false;
  aktualisiere();
}

/* Gibt es noch irgendeine Karte anderer Kategorie (Stapel oder Ablage)? Sonst gilt die gezogene Karte (Regelwerk, Intensität). */
function gibtAlternative(andere) {
  const arten = new Set(andere.map(k => kategorie(k.art)));
  return S.stapel.some(k => !arten.has(kategorie(k.art))) || S.ablage.some(k => !arten.has(kategorie(k.art)));
}

async function ohOh(karte, klaue, platz) {
  ohoh();
  meldung(tr('msgOhoh'), true, 1400);
  karte.el.classList.add('blink');
  klaue.el.classList.add('blink');
  await sleep(1050);
  karte.el.classList.remove('blink');
  klaue.el.classList.remove('blink');
  S.slotEls[platz].lb.classList.remove('show');
  S.auslage[platz] = null;
  aktualisiere();
  await fliege(karte.el, G.discard, 560, (zufall(9) - 4), 1);
  S.ablage.push(karte);
  karte.el.remove(); karte.el = null;
  zeichneAblage();
}

/* ---------- Ablage neu mischen, wenn der Stapel leer ist ---------- */
async function sichereStapel() {
  if (S.stapel.length === 0 && S.ablage.length > 0 && freiePlaetze() > 0) await mischeAblage();
}
async function mischeAblage() {
  meldung(tr('msgShuffle'), false, 0);
  const karten = S.ablage;
  S.ablage = [];
  zeichneAblage();
  const k = Math.min(karten.length, 9);
  const temp = [];
  for (let i = 0; i < k; i++) {
    const t = erzeugeKarte(karten[karten.length - 1 - i], G.discard, true);
    temp.push(t);
  }
  await sleep(40);
  for (let i = 0; i < k; i++) {
    const t = temp[i];
    setTimeout(() => {
      t.classList.remove('flipped');
      setzePos(t, { x: G.deck.x + (zufall(21) - 10), y: G.deck.y + (zufall(21) - 10) }, 520, zufall(15) - 7, 1);
    }, i * 90);
  }
  await sleep(k * 90 + 600);
  temp.forEach(t => t.classList.add('shuffle'));
  await sleep(720);
  S.stapel = mischen(karten);
  temp.forEach(t => t.remove());
  zeichneStapel();
  meldung(tr('msgNewDeck'), false, 1800);
  await sleep(200);
}

/* ---------- Nächste Runde ---------- */
async function naechsteRunde() {
  if (busy || !S) return;
  busy = true;
  aktualisiere();
  initAudio();
  // zeigt der Tracker gerade die Rundenreferenz, dreht er sich zuerst nach vorne
  if (S.trackerHinten) { trackerWenden(false); await sleep(850); }
  S.runde++;
  markerSetzen(S.runde, true);
  $('#roundNum').textContent = S.runde;
  $('#msg').className = 'msg';
  S.slotEls.forEach(s => s.lb.classList.remove('show'));
  // Auslage animiert auf den Ablagestapel
  const vorhandene = S.auslage.map((k, i) => k ? { k, i } : null).filter(Boolean);
  await Promise.all(vorhandene.map(({ k, i }, idx) => (async () => {
    await sleep(idx * 170);
    await fliege(k.el, G.discard, 560, zufall(9) - 4, 1);
    S.ablage.push(k);
    k.el.remove(); k.el = null;
    zeichneAblage();
  })()));
  S.auslage = [null, null, null];
  await sleep(250);
  setzeSlots(intensitaet(S.runde), false);
  S.schonGezogen = true;
  await sleep(450);
  await sichereStapel();
  busy = false;
  aktualisiere();
}

/* ---------- Rundenmarker auf dem Tracker ---------- */
function markerSetzen(runde, animiert) {
  const t = S.tracker;
  const idx = runde - 1;
  const proZeile = t.spalten.length;
  const zeile = Math.floor(idx / proZeile), spalte = idx % proZeile;
  const m = $('#marker');
  if (animiert) { m.classList.remove('hop'); void m.offsetWidth; m.classList.add('hop'); setTimeout(() => m.classList.remove('hop'), 1000); }
  if (!animiert) m.style.transition = 'none';
  m.style.left = (t.spalten[spalte] / 630 * 100) + '%';
  m.style.top = (t.zeilen[zeile] / 880 * 100) + '%';
  if (!animiert) { void m.offsetWidth; m.style.transition = ''; }
}

/* ---------- Trackerkarte wenden (Wischen) ---------- */
function trackerWenden(hinten) {
  if (!S) return;
  S.trackerHinten = (hinten === undefined) ? !S.trackerHinten : hinten;
  $('#tflip').classList.toggle('back', S.trackerHinten);
}
function bindeTrackerWischen() {
  const box = $('#trackerBox');
  let start = null;
  box.addEventListener('pointerdown', e => { start = { x: e.clientX, y: e.clientY }; });
  const ende = e => {
    if (!start) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    start = null;
    if (Math.abs(dx) > 40 * (G ? G.u : 1) && Math.abs(dx) > Math.abs(dy) * 1.2) trackerWenden();
  };
  box.addEventListener('pointerup', ende);
  box.addEventListener('pointercancel', () => { start = null; });
}

/* ---------- Karte der Auslage wenden (horizontal wischen): Rückseite zeigt die Beschreibung ---------- */
function kartePassendSchreiben(c) {
  const dt = c.querySelector('.dt'), p = dt.querySelector('p');
  let fs = (G ? G.cw : 200) * 0.062;
  const min = (G ? G.cw : 200) * 0.036;
  dt.style.fontSize = fs + 'px';
  while (dt.scrollHeight > dt.clientHeight + 1 && fs > min) { fs -= 0.5; dt.style.fontSize = fs + 'px'; }
}
function karteWenden(c) {
  if (c._wendet) return;
  c._wendet = true;
  const zu = c.classList.contains('dm');
  if (!zu) {
    c.classList.add('dm', 'desc');
    kartePassendSchreiben(c);
  } else {
    c.classList.remove('desc');
    setTimeout(() => c.classList.remove('dm'), 700);
  }
  setTimeout(() => { c._wendet = false; }, 720);
}
function bindeKartenWischen() {
  let start = null;
  const layer = $('#cardLayer');
  layer.addEventListener('pointerdown', e => {
    const c = e.target.closest ? e.target.closest('.card') : null;
    start = (c && c._karte) ? { c, x: e.clientX, y: e.clientY } : null;
  });
  layer.addEventListener('pointerup', e => {
    if (!start) return;
    const s = start; start = null;
    const c = s.c;
    if (c.classList.contains('dragging') || !S || !S.auslage.includes(c._karte)) return;
    if (!c.classList.contains('flipped')) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (Math.abs(dx) > 35 * (G ? G.u : 1) && Math.abs(dx) > Math.abs(dy) * 1.2) karteWenden(c);
  });
  layer.addEventListener('pointercancel', () => { start = null; });
}

/* ====================== Anleitung und Glossar ====================== */
function offenesBlatt() { return document.querySelector('.sheet.open'); }
function blattSchliessen(blatt) {
  const suche = blatt.id === 'manual' ? sucheAnleitung : sucheGlossar;
  if (suche) suche.sichern();
  blatt.classList.remove('open');
}

/* Suche mit grüner Markierung und Sprungtasten; bei mehr als 50 Treffern ist sie nicht aktiv */
const MAX_TREFFER = 50;
function markiereTreffer(wurzel, f) {
  const re = new RegExp(f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const knoten = [];
  let summe = 0, n;
  const tw = document.createTreeWalker(wurzel, NodeFilter.SHOW_TEXT);
  while ((n = tw.nextNode())) {
    const m = n.nodeValue.match(re);
    if (m) { knoten.push(n); summe += m.length; }
  }
  if (summe > MAX_TREFFER) return summe;
  knoten.forEach(kn => {
    const text = kn.nodeValue, frag = document.createDocumentFragment();
    let letzte = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(text))) {
      if (!m[0].length) { re.lastIndex++; continue; }
      if (m.index > letzte) frag.appendChild(document.createTextNode(text.slice(letzte, m.index)));
      const mk = document.createElement('mark');
      mk.textContent = m[0];
      frag.appendChild(mk);
      letzte = m.index + m[0].length;
    }
    if (letzte < text.length) frag.appendChild(document.createTextNode(text.slice(letzte)));
    kn.parentNode.replaceChild(frag, kn);
  });
  return summe;
}
function richteSucheEin(p, koerper, bauen) {
  const eingabe = $('#' + p + 'Search'), zurueck = $('#' + p + 'Prev'), weiter = $('#' + p + 'Next'), zahl = $('#' + p + 'Count'), k = $(koerper);
  let treffer = [], i = -1;
  /* Lese- und Suchstand merken (Suchbegriff, aktueller Treffer, Bildlaufstellung), je Sprache */
  const schluessel = 'lfdStand_' + p;
  let laden = false, letzter = null;
  try { letzter = JSON.parse(localStorage.getItem(schluessel)); } catch (e) { letzter = null; }
  function sichern() {
    if (laden) return;
    letzter = { l: LANG, f: eingabe.value, i, s: k.scrollTop };
    try { localStorage.setItem(schluessel, JSON.stringify(letzter)); } catch (e) { /* ohne Speicher nur im Arbeitsspeicher */ }
  }
  function knoepfe(text) {
    zahl.textContent = text;
    zurueck.disabled = !treffer.length || i <= 0;
    weiter.disabled = !treffer.length || i >= treffer.length - 1;
  }
  function springe(neu) {
    i = neu;
    treffer.forEach((m, j) => m.classList.toggle('cur', j === i));
    const m = treffer[i];
    if (m) {
      const kr = k.getBoundingClientRect(), mr = m.getBoundingClientRect();
      k.scrollTop += mr.top - kr.top - kr.height / 2 + mr.height / 2;
    }
    knoepfe((i + 1) + '/' + treffer.length);
    sichern();
  }
  function neuSuchen(ziel) {
    bauen(eingabe.value);
    const f = eingabe.value.trim();
    treffer = []; i = -1;
    if (!f) { knoepfe(''); return; }
    const n = markiereTreffer(k, f);
    if (n > MAX_TREFFER) { knoepfe('>' + MAX_TREFFER); return; }
    treffer = Array.from(k.querySelectorAll('mark'));
    if (treffer.length) springe(ziel > 0 && ziel < treffer.length ? ziel : 0); else knoepfe('0');
  }
  eingabe.addEventListener('input', () => { neuSuchen(); sichern(); });
  k.addEventListener('scroll', sichern, { passive: true });
  eingabe.addEventListener('keydown', e => { if (e.key === 'Enter' && i < treffer.length - 1) springe(i + 1); });
  zurueck.addEventListener('click', () => { if (i > 0) springe(i - 1); });
  weiter.addEventListener('click', () => { if (i < treffer.length - 1) springe(i + 1); });
  return {
    sichern,
    /* Beim Öffnen: gemerkten Stand wiederherstellen (gleiche Sprache), sonst von vorn beginnen */
    neu() {
      const s = letzter && letzter.l === LANG ? letzter : null;
      laden = true;
      eingabe.value = s ? s.f : '';
      neuSuchen(s ? s.i : 0);
      const lage = s ? s.s : 0;
      k.scrollTop = lage;
      setTimeout(() => { k.scrollTop = lage; laden = false; sichern(); }, 60);
    }
  };
}
let sucheAnleitung, sucheGlossar;

function baueAnleitung() {
  const A = ANLEITUNG[LANG];
  $('#manualTitle').textContent = A.titel;
  $('#manualSearch').placeholder = A.suche;
  const b = $('#manualBody');
  b.innerHTML = '';
  const inhalt = el('div', 'doc');
  A.abschnitte.forEach((s, i) => {
    inhalt.appendChild(el('h2', null, `${i + 1}. ${s.h}`));
    s.p.forEach(t => inhalt.appendChild(el('p', null, t)));
  });
  b.appendChild(inhalt);
}
function oeffneAnleitung() {
  sucheAnleitung.neu();
  $('#manual').classList.add('open');
}

function baueGlossar(filter) {
  const Gl = GLOSSAR[LANG];
  $('#glossTitle').textContent = Gl.titel;
  $('#glossSearch').placeholder = Gl.suche;
  const f = (filter || '').trim().toLowerCase();
  const liste = Gl.eintraege.slice().sort((a, b) => a[0].localeCompare(b[0], LANG))
    .filter(([t, d]) => !f || t.toLowerCase().includes(f) || d.toLowerCase().includes(f));
  const b = $('#glossBody');
  b.innerHTML = '';
  const inhalt = el('div', 'doc');
  if (!liste.length) inhalt.appendChild(el('p', null, Gl.leer));
  liste.forEach(([t, d]) => {
    const e = el('div', 'gl');
    e.appendChild(el('h3', null, t));
    e.appendChild(el('p', null, d));
    inhalt.appendChild(e);
  });
  b.appendChild(inhalt);
}
function oeffneGlossar() {
  sucheGlossar.neu();
  $('#glossary').classList.add('open');
}

/* Doppeltippen auf ein Blatt schließt es; Wischen zum Blättern zählt nicht als Tippen */
function bindeBlatt(blatt, taste) {
  let down = null, letzter = { t: 0, x: 0, y: 0 };
  blatt.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY }; });
  blatt.addEventListener('pointerup', e => {
    if (!down) return;
    const weit = Math.hypot(e.clientX - down.x, e.clientY - down.y) > 14;
    down = null;
    if (weit || (e.target.closest && e.target.closest('input, .x'))) { letzter.t = 0; return; }
    const jetzt = Date.now();
    if (jetzt - letzter.t < 380 && Math.hypot(e.clientX - letzter.x, e.clientY - letzter.y) < 40) {
      letzter.t = 0;
      blattSchliessen(blatt);
    } else {
      letzter = { t: jetzt, x: e.clientX, y: e.clientY };
    }
  });
  blatt.addEventListener('dblclick', () => blattSchliessen(blatt));
  $(taste).addEventListener('click', () => blattSchliessen(blatt));
}

/* Symbolschaltflächen für Anleitung und Glossar (oben rechts bzw. im Infobereich) */
const SYMBOL_BUCH = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7c-3-2.2-7-2.6-11-2v18c4-.6 8-.2 11 2 3-2.200 7-2.600 11-2V5c-4-.6-8-.2-11 2z"/><path d="M16 7v18"/></svg>';
const SYMBOL_LISTE = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22 9.500 7 15 22M6 17.500h7"/><path d="M19 10h9M19 16h9M19 22h9"/></svg>';
function baueHilfeLeisten() {
  document.querySelectorAll('.helpbar').forEach(leiste => {
    leiste.innerHTML = '';
    [['btnManual', SYMBOL_BUCH, oeffneAnleitung], ['btnGloss', SYMBOL_LISTE, oeffneGlossar]].forEach(([key, svg, fn]) => {
      const b = el('button', 'ibtn');
      b.type = 'button';
      b.innerHTML = svg + '<span>' + tr(key) + '</span>';
      b.addEventListener('click', fn);
      leiste.appendChild(b);
    });
  });
}

/* ====================== Neustart ====================== */
function frageNeustart() { $('#modal').classList.add('show'); }
function neustart() {
  $('#modal').classList.remove('show');
  S = null; busy = false;
  zeigeBildschirm('screenGoal');
}

/* ====================== Start ====================== */
function baueLichter() {
  const f = $('#flies');
  for (let i = 0; i < 16; i++) {
    const d = document.createElement('i');
    d.style.left = (Math.random() * 100) + '%';
    d.style.top = (30 + Math.random() * 70) + '%';
    d.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
    d.style.setProperty('--dy', (-60 - Math.random() * 140) + 'px');
    d.style.setProperty('--d', (10 + Math.random() * 12) + 's');
    d.style.setProperty('--w', (-Math.random() * 14) + 's');
    f.appendChild(d);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setzeMass();
  baueLichter();
  wendeTexteAn();
  bauSprachwahl();
  bauZielwahl();
  zeigeBildschirm('screenLang');
  $('#langBtn').addEventListener('click', () => zeigeBildschirm('screenLang'));
  $('#backToGoal').addEventListener('click', () => zeigeBildschirm('screenGoal'));
  $('#restartBtn').addEventListener('click', frageNeustart);
  $('#modalNo').addEventListener('click', () => $('#modal').classList.remove('show'));
  $('#modalYes').addEventListener('click', neustart);
  $('#nextBtn').addEventListener('click', naechsteRunde);
  $('#deckPile').addEventListener('pointerdown', startZiehen);
  bindeTrackerWischen();
  bindeKartenWischen();
  bindeBlatt($('#manual'), '#manualX');
  bindeBlatt($('#glossary'), '#glossX');
  sucheAnleitung = richteSucheEin('manual', '#manualBody', baueAnleitung);
  sucheGlossar = richteSucheEin('gloss', '#glossBody', baueGlossar);
  // Kontextmenü und Textauswahl unterdrücken
  document.addEventListener('contextmenu', e => e.preventDefault());
});

window.addEventListener('resize', () => {
  setzeMass();
  layoutTrackerwahl();
  if (S && document.getElementById('screenGame').classList.contains('active')) {
    berechneGeometrie();
    setzeSlots(S.anzeigeSlots, true);
    zeichneStapel();
    markerSetzen(S.runde, false);
  }
});

/* Zurück-Taste von Android (siehe MainActivity) */
window.__androidBack = function () {
  const blatt = offenesBlatt();
  if (blatt) { blattSchliessen(blatt); return; }
  const modal = $('#modal');
  if (modal.classList.contains('show')) { modal.classList.remove('show'); return; }
  const aktiv = document.querySelector('.screen.active');
  if (aktiv && aktiv.id === 'screenTracker') zeigeBildschirm('screenGoal');
  else if (aktiv && aktiv.id === 'screenGoal') zeigeBildschirm('screenLang');
  else if (aktiv && aktiv.id === 'screenGame') frageNeustart();
};