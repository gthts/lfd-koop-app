# Building and publishing

## Viewing and editing the interface

The whole app lives in `app/src/main/assets/www/`. To look at it, open `index.html` in a browser. After a change (for example to `data.js`, `i18n.js`, `anleitung.js` or `glossar.js`) check the syntax with `node --check <file>`.

## Building the APK

With Android Studio: open the folder and choose “Build → Generate Signed App Bundle / APK”. Requirements: Android Gradle Plugin 9.4.1, Gradle 9.6.0, platform 37 (`compileSdk` and `targetSdk` 37, `minSdk` 26), JDK 17 or newer.

With the script (Windows, PowerShell): `bauen_android.ps1` builds the debug or release version. It expects the tools under `C:\Development` (`Android\Sdk`, `Gradle`) and the JDK of Android Studio; the paths are at the top of the script and can be adapted.

```powershell
powershell -File bauen_android.ps1 assembleDebug
powershell -File bauen_android.ps1 assembleRelease -SigningFile <path>\signierdaten.properties
```

The signing properties file (outside the repository, for example `signierdaten.properties`) holds the four lines `LFD_KEYSTORE`, `LFD_KEYSTORE_PASSWORD`, `LFD_KEY_ALIAS` and `LFD_KEY_PASSWORD`. Keys and passwords must **never** be committed to this repository. To update an already installed release version you need the same key that was used for the installation. The release APK of this project carries the certificate `CN=LFD Koop` (SHA-256 `738e9da8a1355cbefaaa8f7971a6ab3cf8ad91d08be81e8d524c2fe7b9f37651`).

The version is set in `app/build.gradle` (`versionName`, `versionCode`).

## Web version (GitHub Pages)

The app needs no server, so it can be published as a static web page. The web version is served from the branch `gh-pages` (a plain copy of `app/src/main/assets/www`); `tools/publish_web.ps1` updates that branch from `main`.

**Please note:**

- GitHub Pages is **not available for private repositories on the free plan**. The link `https://<user>.github.io/<repository>/` works once the repository is public (or the account has a plan that includes Pages for private repositories).
- A GitHub Pages site is publicly reachable even if the repository is private, except with GitHub Enterprise Cloud access control.

To switch it on: repository *Settings → Pages → Build and deployment*, source “Deploy from a branch”, branch `gh-pages`, folder `/ (root)`.
