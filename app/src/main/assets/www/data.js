'use strict';
/* Daten gemäß REGELWERK.md (Fassung 2.28), Abschnitt 6.
   Texte der Karten stehen in i18n.js; hier nur Bild, Art und Merkmale. Die Kategorie (für die Kollisionsregel) steht in kategorie(). */

/* [Bilddatei, Art, Merkmale, Anzahl im Stapel] – zusammen 47 Karten
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

  ['verdunkelung_mond', 'dunkel', { m: 'dunkel' }, 3],
  ['erhellung_sonne',   'dunkel', { m: 'erhell' }, 3],

  ['funkenflug_1', 'funken', { n: 1 }, 2],
  ['funkenflug_2', 'funken', { n: 2 }, 2],
  ['funkenflug_3', 'funken', { n: 3 }, 1],

  ['einsamkeit_1', 'einsam', { n: 1 }, 2],
  ['einsamkeit_2', 'einsam', { n: 2 }, 1],

  ['entfremdung', 'entfremd', {}, 2],

  ['besessenheit_sommer', 'besessen', { s: 'S' }, 1],
  ['besessenheit_winter', 'besessen', { s: 'W' }, 1],

  ['hirschlosung_sommer', 'hirsch', { s: 'S' }, 1],
  ['hirschlosung_winter', 'hirsch', { s: 'W' }, 1],

  ['ruhe', 'ruhe', {}, 4],
  ['waran_lockruf', 'lockruf', {}, 2]
];

/* Kategorie einer Karte: Onibi-Marsch und Onibi-Besessenheit bilden gemeinsam eine Kategorie (Regelwerk 2.27). */
function kategorie(art) { return (art === 'marsch' || art === 'besessen') ? 'onibi' : art; }

/* Rundentracker (Bildmaße 630 × 880). Feldmitten aus dem Bild gemessen.
   Fassung 2.28: Training, Standard, Hardcore für alle Ziele; Kurzspiel nur fürs Schützende Dickicht. */
const SPALTEN3 = [126, 250, 375, 500];
const ZEILEN3 = [231, 450, 669];
const TRACKER = {
  '1': { bild: 'rundentracker_1', name: 'training',  ende: 12, zwei: 5,  drei: 9,  partner: 1, spalten: SPALTEN3, zeilen: ZEILEN3 },
  '2': { bild: 'rundentracker_2', name: 'standard',  ende: 12, zwei: 3,  drei: 7,  partner: 5, spalten: SPALTEN3, zeilen: ZEILEN3 },
  '3': { bild: 'rundentracker_3', name: 'hardcore',  ende: 12, zwei: 2,  drei: 5,  partner: 6, spalten: SPALTEN3, zeilen: ZEILEN3 },
  '4': { bild: 'rundentracker_4', name: 'kurzspiel', ende: 6,  zwei: 2,  drei: 4,  partner: 5, spalten: [160, 313, 466], zeilen: [319, 585], einWald: true }
};

/* Spielziele. Gruppe: empf = Standard, leicht = Training, schwer = Hardcore, kurz = Kurzspiel */
const ZIELE = [
  { id: 'harmonie', kunst: ['ziel_harmonie'], pos: '19%',
    gruppen: [
      { art: 'leicht', items: [{ t: '1' }] },
      { art: 'empf',   items: [{ t: '2' }] },
      { art: 'schwer', items: [{ t: '3' }] }
    ] },
  { id: 'dickicht', kunst: ['ziel_dickicht'], pos: '28%',
    gruppen: [
      { art: 'leicht', items: [{ t: '1' }] },
      { art: 'empf',   items: [{ t: '2' }] },
      { art: 'schwer', items: [{ t: '3' }] },
      { art: 'kurz',   items: [{ t: '4' }] }
    ] },
  { id: 'unbeugsam', kunst: ['ziel_unbeugsam'], pos: '52%',
    gruppen: [
      { art: 'leicht', items: [{ t: '1' }] },
      { art: 'empf',   items: [{ t: '2' }] },
      { art: 'schwer', items: [{ t: '3' }] }
    ] }
];
