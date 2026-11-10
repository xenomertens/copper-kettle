# CLAUDE.md – Copper Kettle landingspagina

## Project
Landingspagina voor het theemerk **Copper Kettle** (schoolopdracht Creative Automation, periodeopdracht).
Statische site in **HTML en CSS**, gehost op **GitHub Pages**. Geen build-stap, geen framework, geen server-side code. JavaScript alleen als het echt nodig is (bv. kleine interactie), en dan vanilla.

## Doelgroep en sfeer
- **Doelgroep:** mensen die hun dagelijkse theemoment koesteren als pauze in een drukke dag.
- **Sfeer:** gezellig, huiselijk en ontspannen. Rustig ritme, veel ademruimte, geen drukke animaties.
- **Tagline:** *Take a moment.* (blijft Engels, zoals op de verpakking)

## Taal en toon
- Taal: **Nederlands** (`<html lang="nl">`).
- Toon: **warm en rustig**. Spreek de lezer aan met "je". Korte zinnen, geen haast, niet in elke zin een uitroepteken.
- Smaaknamen blijven **Engels** (zoals op het doosje), beschrijvingen in het Nederlands:
  Green Tea & Lemongrass · Ginger & Turmeric · Rooibos & Forest Berries · Chamomile & Honey.
- **Niet verzinnen:** geen gezondheidsclaims, prijzen of keurmerken (niet aangeleverd).

## Copy
Alle teksten staan in [CK_copy_v01.md](CK_copy_v01.md), sectie **3. Landingspagina**. Gebruik die copy letterlijk; pas niets inhoudelijk aan zonder het te melden.
Paginaopbouw volgens de copy: Hero → Intro → Onze smaken → Waarom Copper Kettle → Nieuwsbrief → Veelgestelde vragen → Footer.

## Huisstijl
### Kleuren
| Rol | Kleur | Waarde |
|---|---|---|
| Hoofdkleur | Groen | `hsl(150, 38%, 30%)` / `#2F6A4D` |
| Achtergrond | Crème | `#E0D8C4` |
| Accent (knoppen, lijntjes) | Koper | `#D4804A` |
| Tekst | Donker | `#1F2A24` |

Leg ze vast als CSS custom properties op `:root` en gebruik overal de variabelen, nooit losse hexwaarden:
```css
:root {
  --color-green: hsl(150, 38%, 30%); /* #2F6A4D */
  --color-cream: #E0D8C4;
  --color-copper: #D4804A;
  --color-dark: #1F2A24;
}
```

**Contrast (WCAG AA):**
- Donker op crème (~10:1) en wit op groen (~6,4:1): prima voor alle tekst.
- Crème op groen (~4,5:1): net op de grens, liefst alleen voor grotere tekst.
- Knoppen in koper: gebruik **donkere tekst** (~4,9:1), geen witte (~3:1).
- Koper op crème (~2,1:1): **niet voor tekst**, alleen voor decoratieve lijntjes en accenten.

### Typografie
- **Titels:** Bodoni Moda
- **Lopende tekst:** DM Sans
- Lokaal laden via `@font-face` uit `assets/fonts/` (variable fonts, `font-display: swap`):
  - `BodoniModa-VariableFont_opsz,wght.ttf` + `BodoniModa-Italic-VariableFont_opsz,wght.ttf`
  - `DMSans-VariableFont_opsz,wght.ttf` + `DMSans-Italic-VariableFont_opsz,wght.ttf`
- Bestandsnamen bevatten een komma: zet de URL tussen aanhalingstekens in `src: url("...")`.
- Geen Google Fonts of andere externe font-CDN's.
- Titels: geen `letter-spacing`, wel `font-kerning: normal` en `font-optical-sizing: auto`.
- **Bodoni Moda mist kerning voor W en V** (gat in "W aarom", "V ier"). Zet een titel die met W of V begint zo: `<span class="kern-w">W</span>aarom`, `<span class="kern-v">V</span>ier`.

## Assets
Webversies (gebruik deze in de site):
- `assets/img/` – WebP, 1184×864 (groepsbeeld 1200×896): `ck-alle-smaken.webp` (groepsbeeld), `ck-greentea.webp`, `ck-ginger.webp`, `ck-rooibos.webp`, `ck-chamomile.webp`
- `assets/video/` – `ck-take-a-moment.mp4` (720×1280, 9:16, H.264, zonder geluid, ~18 s) en poster `ck-take-a-moment-poster.webp` (eerste frame). Staat in de hero (desktop rechts in afgerond kader, gsm onder de tekst); het groepsbeeld staat bij het verhaal.
- `assets/_origineel/` – originele PNG's en video. Staat in `.gitignore`; nooit naar verwijzen vanuit de site.
- Elke afbeelding krijgt een betekenisvolle Nederlandse `alt` plus `width`/`height`. Video: `autoplay muted loop playsinline` met `poster`.

## Technische afspraken (GitHub Pages)
- Startpagina is `index.html` in de root van deze map, stijlen in `style.css` en een klein `script.js` (fade-in via `data-reveal`, video pauzeren bij reduced motion), allemaal in de root.
- Lokaal testen: `.claude/serve.ps1` (server op http://localhost:8080, config in `.claude/launch.json`).
- Gebruik **relatieve paden** (`assets/...`, niet `/assets/...`), zodat de site werkt onder `gebruiker.github.io/repo/`.
- Bestandsnamen zijn hoofdlettergevoelig op GitHub Pages: paden exact zoals op schijf schrijven.
- Mobile first en responsive; semantische HTML (`header`, `main`, `section`, `footer`), één `h1`.
- Nieuwsbriefformulier: MailerLite-embed (formulier `48304479`) in de nieuwsbriefsectie van `index.html`.
  - `mailerlite.css` = de originele CSS van MailerLite, **niet bewerken**. Eigen stijl in `style.css` (sectie "MailerLite-formulier"), selectors beginnen met `.newsletter #mlb2-48304479.ml-form-embedContainer`.
  - **Niet wijzigen:** de action-URL, `name`-attributen, verborgen velden (`ml-submit`, `anticsrf`), de functie `ml_webform_success_48304479` en de MailerLite-scripts.
  - Eigen toevoegingen in de markup: zichtbare labels (+ `id` op de inputs) en knoptekst "Schrijf me in". De intro-tekst van MailerLite wordt met CSS verborgen.
  - Niet echt inschrijven om te testen; het succesbericht tonen kan met `ml_webform_success_48304479()` in de console.
- Respecteer `prefers-reduced-motion`.
