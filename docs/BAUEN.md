# Bauen und Veröffentlichen

## Oberfläche ansehen und ändern

Die ganze App steckt in `app/src/main/assets/www/`. Zum Ansehen genügt es, `index.html` in einem Browser zu öffnen. Nach einer Änderung (zum Beispiel an `data.js`, `i18n.js`, `anleitung.js` oder `glossar.js`) mit `node --check <Datei>` die Syntax prüfen.

## APK bauen

Mit Android Studio: den Ordner öffnen und „Build → Generate Signed App Bundle / APK“ wählen. Voraussetzungen: Android-Gradle-Plugin 9.4.1, Gradle 9.6.0, Plattform 37 (`compileSdk` und `targetSdk` 37, `minSdk` 26), JDK 17 oder neuer.

Mit Skript (Windows, PowerShell): `bauen_android.ps1` baut Debug- oder Release-Fassung. Es erwartet die Werkzeuge unter `C:\Development` (`Android\Sdk`, `Gradle`) und das JDK von Android Studio; die Pfade stehen am Anfang des Skripts und lassen sich anpassen.

```powershell
powershell -File bauen_android.ps1 assembleDebug
powershell -File bauen_android.ps1 assembleRelease -Signierdatei <Pfad>\signierdaten.properties
```

Die Datei `signierdaten.properties` enthält die vier Zeilen `LFD_KEYSTORE`, `LFD_KEYSTORE_PASSWORD`, `LFD_KEY_ALIAS` und `LFD_KEY_PASSWORD`. Schlüssel und Kennwörter gehören **nie** in dieses Repositorium. Wer eine bereits installierte Release-Fassung aktualisieren will, braucht denselben Schlüssel wie bei der Installation. Die Release-APK dieses Projekts trägt das Zertifikat `CN=LFD Koop` (SHA-256 `738e9da8a1355cbefaaa8f7971a6ab3cf8ad91d08be81e8d524c2fe7b9f37651`).

Die Version steht in `app/build.gradle` (`versionName`, `versionCode`).

## Webseite über GitHub Pages

Die App läuft ohne Server, deshalb lässt sie sich als statische Webseite veröffentlichen. Dafür liegt die Vorlage `docs/pages.yml.vorlage` bereit: ein Arbeitsablauf, der den Ordner `app/src/main/assets/www` veröffentlicht und nur von Hand startbar ist. Sie liegt bewusst nicht unter `.github/workflows/`, damit nichts veröffentlicht wird, solange das Projekt privat bleiben soll.

**Wichtig:** Eine GitHub-Pages-Webseite ist öffentlich erreichbar, auch wenn das Repositorium privat ist (Ausnahme: GitHub Enterprise Cloud mit Zugriffssteuerung).

Aktivieren: Die Vorlage nach `.github/workflows/pages.yml` kopieren und einchecken (das Ablegen eines Arbeitsablaufs verlangt bei der GitHub-Befehlszeile die Berechtigung „workflow“), in den Einstellungen des Repositoriums unter *Pages* die Quelle „GitHub Actions“ wählen und unter *Actions* den Ablauf „Webseite veröffentlichen“ starten. Die Adresse lautet `https://<Benutzer>.github.io/<Repositorium>/`.
