# LFD Koop – companion app for a cooperative variant of Living Forest Duel

**Download the Android app:** [Releases](../../releases) · **Desktop browser:** open `app/src/main/assets/www/index.html` from a download of this repository (a hosted web link will follow once the repository is public).

> **Unofficial fan expansion.** This project is not made by, and not affiliated with, the publisher of Living Forest Duel (Ludonaute). All artwork in the app is original; no artwork from the game is used. All trademarks and game names belong to their respective owners.

![Choosing a goal](screenshots/01-spielziel-de.png)

## What is this?

*Living Forest Duel* is actually a **competitive two-player game**: Summer and Winter play against each other. This project turns it into a **cooperative variant**: both players are on the same side and fight the Onibi together, whose behaviour is steered by a deck of event cards.

The app replaces that event deck. You keep playing **with the components on the table**; the app shuffles and draws the 47 event cards, shows the round tracker and keeps track of the display, the discard pile and reshuffling.

## Key features

- **Cooperative play against the Onibi** with three goals: Eternal Harmony, Protective Thicket, Unyielding to the End.
- **Four round trackers** (Training, Standard, Hardcore and the Short game for Protective Thicket) set the intensity, the start of the partner forest and the end of the game.
- **47-card event deck**, drawn by touch. Cards of the same category may not lie in the display together (“uh-oh”, the new card goes to the discard pile); the Onibi seal at the top left of each card shows its category.
- **Complete rules and glossary** inside the app, searchable, covering every difference from the base game (no player order, revealing together, Sanki, partner forest, bonus actions, …).
- **Entirely original artwork:** event cards, round trackers, reference card and goal pictures.
- **Localised in German, English and Korean** (interface, cards, rules, glossary).
- Works **offline and without a server**: plain HTML, CSS and JavaScript without libraries, shown in a WebView on Android and straight from the files in a desktop browser.

## Showcase

| Game screen (German) | Rules (English) | Glossary (Korean) |
|---|---|---|
| ![Game screen](screenshots/02-spielflaeche-de.png) | ![Rules](screenshots/03-anleitung-en.png) | ![Glossary](screenshots/04-glossar-ko.png) |

## Install and try

- **Android tablet (recommended, landscape):** download the signed APK from [Releases](../../releases), copy it to the device and open it (allow installation from unknown sources). Requires Android 8.0 or newer.
- **Desktop browser:** open `app/src/main/assets/www/index.html` from a download of this repository (a double-click is enough; about 1280 × 800 pixels looks best). A hosted web version will be available once the repository is public, see [docs/BUILD.md](docs/BUILD.md#web-version-github-pages).

## Layout

- `app/src/main/assets/www/`: the whole interface and game logic (`index.html`, `style.css`, `data.js`, `app.js`, `i18n.js`, `anleitung.js` = rules, `glossar.js` = glossary, `img/`).
- `app/src/main/java/…/MainActivity.java`: shows it in a WebView (fullscreen, screen stays on).
- `bauen_android.ps1`, `build.gradle`, `settings.gradle`: building the APK, see [docs/BUILD.md](docs/BUILD.md).
- `tools/publish_web.ps1`: updates the web version (the `gh-pages` branch).

## Status

Version **1.4.2**. Licence: not yet defined (all rights reserved). The repository is private for now.
