# Sonika FrameFinder

A free Windows app for video editors: find reference videos and images for your next edit, fast.

Type what you are making (for example "paper cutout explainer" or "luxury real estate reel"), pick a format and style, and FrameFinder opens real reference cards from Pinterest, Behance, Dribbble and 20+ other sites. Paste a screenshot to look for more like it.

**Download:** [mehulsoni000123.github.io/downloads.html](https://mehulsoni000123.github.io/downloads.html) or the latest release on this repo's **Releases** page.

Made by Mehul Soni ([@mehuledits.ai](https://instagram.com/mehuledits.ai)), a video editor who built it with Claude and Codex.

## Install
1. Download `Sonika-FrameFinder-Setup-0.1.0-x64.exe` from the latest release.
2. Run it. The app is not code-signed, so Windows SmartScreen may warn you: click **More info → Run anyway**.
3. Choose an install folder and open FrameFinder from the Start menu.

Requires Windows 10 or 11, 64-bit.

## Optional API keys
FrameFinder works without keys through browser discovery. For live YouTube search you can add your own YouTube Data API key, and for AI suggestions an OpenAI-compatible key, in **Settings**. Keys are stored on your PC, encrypted with Windows DPAPI. They are never put in this repository or sent anywhere except the API you configured.

## Build from source
Requires Node.js 20+ on Windows.
```
npm install
npm start              # build and run the desktop app
npm run package:win    # build the Windows installer into release/
```

## Licence
MIT, see LICENSE. Respect each website's terms when you use references you find.
