# copper-kettle

Landingspagina voor **Copper Kettle**, een theemerk voor mensen die hun dagelijkse theemoment koesteren als pauze in een drukke dag. *Take a moment.*

Gemaakt met [Claude Code](https://claude.com/claude-code) voor het vak **Creative Automation** (periodeopdracht, 2e jaar).

## Over de site

- Statische site in HTML en CSS, met een klein stukje vanilla JavaScript voor de fade-in bij scrollen.
- Huisstijl: groen `#2F6A4D`, crème `#E0D8C4`, koper `#D4804A` en donker `#1F2A24`.
- Lettertypes: Bodoni Moda (titels) en DM Sans (tekst), lokaal geladen uit `assets/fonts`.
- Beelden en video zijn met AI gemaakt en voor het web omgezet naar WebP en een lichte MP4.
- Inschrijven op de nieuwsbrief loopt via een MailerLite-formulier.

## Bestanden

| Bestand | Inhoud |
|---|---|
| `index.html` | de landingspagina |
| `style.css` | alle eigen stijlen |
| `mailerlite.css` | originele CSS van het MailerLite-formulier |
| `script.js` | fade-in en reduced-motion |
| `assets/` | fonts, beelden en video |
| `CLAUDE.md` | projectcontext en afspraken voor Claude Code |

## Lokaal bekijken

Open `index.html` via een lokale webserver, bijvoorbeeld met het meegeleverde PowerShell-script:

```powershell
powershell -ExecutionPolicy Bypass -File .claude/serve.ps1
```

en ga naar <http://localhost:8080>.
