'use strict';
/* Daten gemäß REGELWERK.md (Fassung 2.34), Abschnitt 6.
   Texte der Karten stehen in i18n.js; hier nur Bild, Art und Merkmale. Die Kategorie (für die Kollisionsregel) steht in kategorie(). */

/* [Bilddatei, Art, Merkmale, Anzahl im Stapel] – zusammen 47 Karten (beim Ewigen Einsiedler ohne Baumfäule und Wurzelwanderung: 34, siehe baueStapel)
   Zwei Karten gleicher Kategorie (siehe kategorie()) dürfen nicht gemeinsam in der Auslage liegen. */
const STAPEL_DEF = [
  ['baumfaeule_zahl_sommer',  'faeule', { kind: 'zahl',   s: 'S' }, 1],
  ['baumfaeule_zahl_winter',  'faeule', { kind: 'zahl',   s: 'W' }, 1],
  ['baumfaeule_licht_sommer', 'faeule', { kind: 'licht',  s: 'S' }, 1],
  ['baumfaeule_licht_winter', 'faeule', { kind: 'licht',  s: 'W' }, 1],
  ['baumfaeule_spross_sommer','faeule', { kind: 'spross', s: 'S' }, 1],
  ['baumfaeule_spross_winter','faeule', { kind: 'spross', s: 'W' }, 1],
  ['baumfaeule_wasser_sommer','faeule', { kind: 'wasser', s: 'S' }, 1],
  ['baumfaeule_wasser_winter','faeule', { kind: 'wasser', s: 'W' }, 1],
  ['baumfaeule_geist_sommer', 'faeule', { kind: 'geist',  s: 'S' }, 1],
  ['baumfaeule_geist_winter', 'faeule', { kind: 'geist',  s: 'W' }, 1],

  ['wurzelwanderung_sommer',   'wurzel', { s: 'S' }, 1],
  ['wurzelwanderung_winter',   'wurzel', { s: 'W' }, 1],
  ['wurzelwanderung_groesster','wurzel', { s: 'G' }, 1],

  ['marsch_sommer_1', 'marsch', { n: 1, s: 'S' }, 1],
  ['marsch_winter_1', 'marsch', { n: 1, s: 'W' }, 1],
  ['marsch_sommer_2', 'marsch', { n: 2, s: 'S' }, 2],
  ['marsch_winter_2', 'marsch', { n: 2, s: 'W' }, 2],
  ['marsch_sommer_3', 'marsch', { n: 3, s: 'S' }, 1],
  ['marsch_winter_3', 'marsch', { n: 3, s: 'W' }, 1],

  ['gezeitendrift_winter', 'dunkel', { s: 'W' }, 3],
  ['gezeitendrift_sommer', 'dunkel', { s: 'S' }, 3],
  ['gezeitendrift_doppelt_winter', 'dunkel', { s: 'W', doppelt: true }, 1],
  ['gezeitendrift_doppelt_sommer', 'dunkel', { s: 'S', doppelt: true }, 1],

  ['funkenflug_1', 'funken', { n: 1 }, 2],
  ['funkenflug_2', 'funken', { n: 2 }, 2],
  ['funkenflug_3', 'funken', { n: 3 }, 1],

  ['einsamkeit_1', 'einsam', { n: 1 }, 2],
  ['einsamkeit_2', 'einsam', { n: 2 }, 1],

  ['entfremdung', 'entfremd', {}, 2],

  ['besessenheit_sommer', 'besessen', { s: 'S' }, 2],
  ['besessenheit_winter', 'besessen', { s: 'W' }, 2],

  ['sehnsucht_sommer', 'hirsch', { s: 'S' }, 1],
  ['sehnsucht_winter', 'hirsch', { s: 'W' }, 1],

  ['ruhe', 'ruhe', {}, 2]
];

/* Kategorie einer Karte: Onibi-Marsch und Onibi-Besessenheit bilden gemeinsam eine Kategorie (Regelwerk 2.27). */
function kategorie(art) { return (art === 'marsch' || art === 'besessen') ? 'onibi' : art; }

/* Rundentracker (Bildmaße 630 × 880). Feldmitten aus dem Bild gemessen.
   Fassung 2.43: drei Schwierigkeitsgrade. Leicht (Karte 1, 9 Runden); Empfohlen und Schwer je als Variante a (6 Runden)
   und Variante b (9 Runden, gleiche Schwellen). Ewiger Einsiedler spielt Variante b, die übrigen Ziele Variante a.
   fluch = Runde, ab der der Onibi-Fluch gilt (0 = nie). */
const SPALTEN = [165, 315, 465];
const ZEILEN9 = [231, 450, 669];
const ZEILEN6 = [320, 580];
const TRACKER = {
  '1':  { bild: 'rundentracker_1',  name: 'leicht',    ende: 9, zwei: 3, drei: 7, partner: 5, fluch: 4, spalten: SPALTEN, zeilen: ZEILEN9 },
  '2a': { bild: 'rundentracker_2a', name: 'empfohlen', ende: 6, zwei: 2, drei: 5, partner: 6, fluch: 3, spalten: SPALTEN, zeilen: ZEILEN6 },
  '2b': { bild: 'rundentracker_2b', name: 'empfohlen', ende: 9, zwei: 2, drei: 5, partner: 6, fluch: 3, spalten: SPALTEN, zeilen: ZEILEN9 },
  '3a': { bild: 'rundentracker_3a', name: 'schwer',    ende: 6, zwei: 2, drei: 4, partner: 5, fluch: 1, spalten: SPALTEN, zeilen: ZEILEN6 },
  '3b': { bild: 'rundentracker_3b', name: 'schwer',    ende: 9, zwei: 2, drei: 4, partner: 5, fluch: 1, spalten: SPALTEN, zeilen: ZEILEN9 }
};

/* Spielziele. Gruppe: leicht, empf (empfohlen), schwer. Die Trackerkarte hängt vom Ziel ab:
   Ewiger Einsiedler immer Variante b (9 Runden), sonst Variante a (6 Runden); Leicht immer Karte 1 (9 Runden). */
const ZIELE = [
  { id: 'harmonie', kunst: ['ziel_harmonie'], pos: '19%',
    gruppen: [
      { art: 'leicht', items: [{ t: '1' }] },
      { art: 'empf',   items: [{ t: '2a' }] },
      { art: 'schwer', items: [{ t: '3a' }] }
    ] },
  { id: 'dickicht', kunst: ['ziel_dickicht'], pos: '28%',
    gruppen: [
      { art: 'leicht', items: [{ t: '1' }] },
      { art: 'empf',   items: [{ t: '2a' }] },
      { art: 'schwer', items: [{ t: '3a' }] }
    ] },
  { id: 'einsiedler', kunst: ['ziel_unbeugsam'], pos: '52%',
    gruppen: [
      { art: 'leicht', items: [{ t: '1' }] },
      { art: 'empf',   items: [{ t: '2b' }] },
      { art: 'schwer', items: [{ t: '3b' }] }
    ] }
];
