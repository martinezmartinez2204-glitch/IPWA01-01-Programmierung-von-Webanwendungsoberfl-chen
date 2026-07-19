# Design-Dokumentation: Gender-Automat

## Farbschema

### Primärfarben
- **Header/Footer Hintergrund**: #2c3e50 (Dunkelblau-Grau)
- **Erfolg/Primär-Button**: #27ae60 (Grün)
- **Sekund Button**: #3498db (Hellblau)
- **Text Standard**: #333333 (Dunkelgrau)
- **Text Sekundär**: #555555 (Mittleres Grau)

### Weitere Farben
- **Hintergrund**: #f5f5f5 (Hellgrau)
- **Content-Bereich**: #ffffff (Weiß)
- **Formulareingaben Hover**: #ecf7ff (Sehr helles Blau)
- **Erfolgs-Alert Hintergrund**: #d5f4e6 (Helles Grün)
- **Erfolgs-Alert Rahmen**: #27ae60 (Grün)

## Typografie

### Font Stack
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Schriftgrößen
- **Body**: 1rem (16px)
- **Titel Sektion (h2)**: 1.8rem (Desktop), 1.5rem (Tablet), 1.3rem (Mobile)
- **Titel Header (h1)**: 1.5rem (Desktop), 1.2rem (Mobile)
- **Labels**: 0.95rem, 600 Gewicht
- **Small Text**: 0.9rem (z.B. Footer)

### Line Height
- **Standard**: 1.6
- **Formulare**: 1.5

## Layout & Abstände

### Container
- **Max-Breite**: 1200px
- **Außenabstand**: 2rem (oben/unten), 1rem (seitwärts)
- **Innenabstand (Padding)**: 2rem (Standard-Sections)

### Abstände zwischen Elementen
- **Zwischen Formularelementen**: 1.5rem (gap)
- **Zwischen Abschnitten**: 2rem
- **Zwischen Radio-Label**: 1rem (vertikal)
- **Zwischen Links**: 2rem (horizontal Navigation)

### Responsive Abstände
- **Tablet**: 80% der Desktop-Werte
- **Mobile**: 50-70% der Desktop-Werte

## Komponenten

### Header
- **Höhe**: Flexibel (min 60px)
- **Position**: Sticky (oben)
- **Box-Shadow**: 0 2px 4px rgba(0,0,0,0.1)
- **Hintergrund**: #2c3e50
- **Text-Farbe**: Weiß

### Navigationslinks
- **Farbe Normal**: Weiß
- **Farbe Hover**: #3498db (hellblau)
- **Transition**: 0.3s ease
- **Font-Weight**: 500

### Formularelemente

#### Inputs & Selects
- **Padding**: 0.75rem
- **Border**: 2px solid #bdc3c7
- **Border-Radius**: 4px
- **Übergang bei Focus**: 0.3s ease
- **Focus-Border**: #3498db
- **Focus-Hintergrund**: #ecf7ff

#### Radio-Buttons
- **Größe**: 20px × 20px
- **Abstand zum Text**: 1rem
- **Hover-Hintergrund**: rgba(52, 152, 219, 0.1)
- **Cursor**: pointer

### Buttons

#### Submit-Button (.btn-submit)
- **Hintergrund**: #27ae60 (Grün)
- **Hover-Hintergrund**: #229954 (Dunkler Grün)
- **Text**: Weiß, bold
- **Padding**: 1rem 2rem
- **Border-Radius**: 4px
- **Transition**: 0.3s ease für Hintergrund, 0.2s ease für Transform
- **Hover-Effekt**: Transform -2px (aufgehoben), Box-Shadow

#### New Donation Button (.btn-new-donation)
- **Hintergrund**: #3498db (Hellblau)
- **Hover-Hintergrund**: #2980b9 (Dunkler Blau)
- **Padding**: 0.75rem 1.5rem
- **Display**: inline-block

### Erfolgs-Alert
- **Hintergrund**: #d5f4e6 (Helles Grün)
- **Border-Left**: 4px solid #27ae60 (Grün)
- **Padding**: 2rem
- **Border-Radius**: 8px

### Details-Box (Bestätigung)
- **Hintergrund**: #ffffff
- **Padding**: 1.5rem
- **Border-Radius**: 4px
- **Margin**: 1rem 0

### Detail-Reihen
- **Border-Bottom**: 1px solid #ecf0f1 (grau, zwischen Items)
- **Padding vertikal**: 0.5rem
- **Letzte Reihe**: Kein Border-Bottom
- **Responsive**: Auf Mobile: flex-direction column

## Breakpoints (Media Queries)

```css
/* Desktop: Standard */
max-width: 1200px

/* Tablet */
@media (max-width: 768px)
- Kleinere Abstände
- Flexiblere Layouts
- Reduzierte Fontgrößen

/* Mobile */
@media (max-width: 480px)
- Minimale Abstände
- Einspaltiges Layout
- Input-Fontsize 16px (verhindert iOS-Zoom)
- Vollbreite Buttons
```

## Animationen & Übergänge

### Hover-Effekte
- **Links**: color transition 0.3s ease
- **Buttons**: background-color 0.3s ease + transform 0.2s ease
- **Form-Eingaben**: border-color transition 0.3s ease
- **Radio-Labels**: background-color transition 0.2s ease

### Smooth Scrolling
- Bei Bestätigung: `scrollIntoView({ behavior: 'smooth' })`

## Barrierefreiheit

### Kontrast
- Alle Text-Kontraste erfüllen WCAG AA (mindestens 4.5:1 für Body)
- Fokus-Indikatoren deutlich sichtbar (blaue Border)

### Fokus-States
- **Inputs/Selects**: Blue Border + Light Blue Background
- **Buttons**: Sichtbar durch outline oder Farbänderung
- **Links**: Farbänderung bei Hover/Focus

### Semantik
- Richtige HTML-Tags (header, main, footer, form, label, etc.)
- Label-For-Verbindungen bei Formularfeldern
- Alt-Text für Bilder (Logo)

## Icons & Assets

### Logo
- **Größe**: 50px (Desktop), 40px (Mobile)
- **Format**: PNG mit transparentem Hintergrund
- **Speicherort**: `assets/logo.png`
- **Alt-Text**: "Gender-Automat Logo"

## Print-Styles (Optional)

Könnte erweitert werden für:
- Besondere Formatierung für Druckausgabe
- Ausblenden von Navigation
- Bessere Kontrastierung für Schwarzweiß-Druck