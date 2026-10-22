# Builds the Android app. The tools live in a shared folder (default C:\Development: Android\Sdk, Gradle, Temp);
# the JDK comes from Android Studio.
# Usage:  powershell -File bauen_android.ps1 [-Task assembleDebug | assembleRelease] [-SigningFile <path>] [-Online]
# Without -Online the build runs offline from the Gradle cache in <tools>\Gradle (-Online allows downloading missing parts).
# A signed release APK needs a properties file outside the repository with the lines
#   LFD_KEYSTORE=<path with / instead of \>   LFD_KEYSTORE_PASSWORD=...   LFD_KEY_ALIAS=...   LFD_KEY_PASSWORD=...
# The path can also be given in the environment variable LFD_SIGNIERDATEI. Never commit keys or passwords.
param([string]$Task = "assembleDebug", [string]$SigningFile = $env:LFD_SIGNIERDATEI, [switch]$Online,
      [string]$Tools = "C:\Development", [string]$Jdk = "C:\Program Files\Android\Android Studio\jbr")
$here = $PSScriptRoot
$work = Join-Path $here ".bauen"          # Android user directory of the build (inside the project, not in the profile)
New-Item -ItemType Directory -Force "$work\androidhome" | Out-Null
$env:JAVA_HOME = $Jdk
$env:ANDROID_HOME = "$Tools\Android\Sdk"
$env:GRADLE_USER_HOME = "$Tools\Gradle"
$env:ANDROID_USER_HOME = "$work\androidhome"
# Temp folder without 8.3 short names (for example CLAUDE~1): Java's internal connection (Unix domain socket)
# otherwise fails with "Unable to establish loopback connection"
New-Item -ItemType Directory -Force "$Tools\Temp" | Out-Null
$env:TEMP = "$Tools\Temp"; $env:TMP = "$Tools\Temp"
$env:JAVA_TOOL_OPTIONS = "-Djdk.net.unixdomain.tmpdir=$Tools\Temp"
$gradle = Get-ChildItem "$env:GRADLE_USER_HOME\wrapper\dists\gradle-9.6.0-bin" -Recurse -Filter gradle.bat | Select-Object -First 1
if (-not $gradle) { throw "Gradle 9.6.0 not found under $env:GRADLE_USER_HOME\wrapper\dists" }
$gArgs = @($Task, "--console=plain", "--no-daemon")
if (-not $Online) { $gArgs += "--offline" }
if ($SigningFile -and (Test-Path $SigningFile)) {
    Get-Content $SigningFile | Where-Object { $_ -match '^LFD_[A-Z_]+=' } | ForEach-Object { $gArgs += "-P$_" }
}
Set-Location $here
& $gradle.FullName @gArgs 2>&1
if ($Task -eq "assembleRelease" -and $LASTEXITCODE -eq 0) {
    $apk = Join-Path $here "app\build\outputs\apk\release\app-release.apk"
    $version = (Select-String -Path (Join-Path $here "app\build.gradle") -Pattern "versionName '([^']+)'").Matches[0].Groups[1].Value
    $target = Join-Path $here "LFD-Koop-$version-release.apk"
    Copy-Item $apk $target -Force
    Write-Host "Release APK: $target"
}
