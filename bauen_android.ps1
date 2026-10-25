# Baut die Android-App. Werkzeuge liegen gemeinsam für alle Benutzerkonten unter C:\Development (Android\Sdk, Gradle); das JDK kommt von Android Studio.
# Aufruf:  powershell -File bauen_android.ps1 [assembleDebug | assembleRelease] [-Signierdatei <Pfad>] [-Online]
# Ohne -Online läuft der Bau offline aus dem Zwischenspeicher in C:\Development\Gradle (-Online erlaubt das Nachladen fehlender Teile).
# Für eine signierte Release-APK genügt eine Datei außerhalb des Projekts mit den Zeilen
#   LFD_KEYSTORE=<Pfad mit / statt \>   LFD_KEYSTORE_PASSWORD=...   LFD_KEY_ALIAS=...   LFD_KEY_PASSWORD=...
# Der Pfad kann auch in der Umgebungsvariablen LFD_SIGNIERDATEI stehen; ohne Angabe gilt ..\schluessel\signierdaten.properties, falls vorhanden.
param([string]$Aufgabe = "assembleDebug", [string]$Signierdatei = $env:LFD_SIGNIERDATEI, [switch]$Online)
# Ohne Angabe wird die Datei im Ordner schluessel/ des Projekts verwendet, sofern sie existiert (nicht ins Versionsverwaltungssystem aufnehmen)
if (-not $Signierdatei) { $std = Join-Path $PSScriptRoot "..\schluessel\signierdaten.properties"; if (Test-Path $std) { $Signierdatei = $std } }
$hier = $PSScriptRoot
$entw = "C:\Development"
$work = Join-Path $hier ".bauen"          # Android-Benutzerverzeichnis des Baus (im Projekt, nicht im Profil)
New-Item -ItemType Directory -Force "$work\androidhome" | Out-Null
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "$entw\Android\Sdk"
$env:GRADLE_USER_HOME = "$entw\Gradle"
$env:ANDROID_USER_HOME = "$work\androidhome"
# Temp-Ordner ohne 8.3-Kurznamen (z. B. CLAUDE~1): Javas interne Verbindung (Unix-Domain-Socket) scheitert sonst mit "Unable to establish loopback connection"
New-Item -ItemType Directory -Force "$entw\Temp" | Out-Null
$env:TEMP = "$entw\Temp"; $env:TMP = "$entw\Temp"
$env:JAVA_TOOL_OPTIONS = "-Djdk.net.unixdomain.tmpdir=$entw\Temp"
$gradle = Get-ChildItem "$env:GRADLE_USER_HOME\wrapper\dists\gradle-9.6.0-bin" -Recurse -Filter gradle.bat | Select-Object -First 1
if (-not $gradle) { throw "Gradle 9.6.0 nicht gefunden unter $env:GRADLE_USER_HOME\wrapper\dists" }
$gArgs = @($Aufgabe, "--console=plain", "--no-daemon")
if (-not $Online) { $gArgs += "--offline" }
if ($Signierdatei -and (Test-Path $Signierdatei)) {
    Get-Content $Signierdatei | Where-Object { $_ -match '^LFD_[A-Z_]+=' } | ForEach-Object { $gArgs += "-P$_" }
}
Set-Location $hier
& $gradle.FullName @gArgs 2>&1
# Die Release-APK kommt als LFD-Koop-<Version>-release.apk in den Projektordner (eine Ebene über app/)
if ($Aufgabe -eq "assembleRelease" -and $LASTEXITCODE -eq 0) {
    $apk = Join-Path $hier "app\build\outputs\apk\release\app-release.apk"
    $version = (Select-String -Path (Join-Path $hier "app\build.gradle") -Pattern "versionName '([^']+)'").Matches[0].Groups[1].Value
    $ziel = Join-Path (Split-Path $hier -Parent) "LFD-Koop-$version-release.apk"
    Copy-Item $apk $ziel -Force
    Write-Host "Release-APK: $ziel"
}
