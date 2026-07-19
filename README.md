# Gender-Automat - Kleiderspende Web-Anwendung

## Übersicht

Diese Web-Anwendung ermöglicht die Registrierung von Kleiderspenden für das Projekt "Gender-Automat". Benutzer können wählen, ob sie ihre Spende persönlich an der Geschäftsstelle abgeben oder von einem Sammelfahrzeug abholen lassen möchten.

## Anforderungen erfüllt

✓ **a.** Webseite mit Titel und Logo  
✓ **b.** Header mit globaler Navigation, Content-Bereich und Footer mit rechtlichen Hinweisen  
✓ **c.** Responsive Design für Desktop, Tablet und Smartphone  
✓ **d.** Registrierungsformular für Kleiderspenden  
✓ **e.** Zwei Übergabemodi: Persönliche Übergabe oder Abholung  
✓ **f.** Tablet-Modus für persönliche Übergabe (einfache Kleidungsart + Krisengebiet)  
✓ **g.** Abholmodus mit Adressangabe, Kleidungsart und Krisengebiet  
✓ **h.** Postleitzahl-Validierung (erste zwei Ziffern müssen übereinstimmen)  
✓ **i.** Bestätigungsseite mit allen registrierten Daten (Kleidungsart, Krisengebiet, Datum, Uhrzeit, Ort)  

## Dateistruktur

```
├── index.html              HTML-Struktur der Anwendung
├── css/
│   └── styles.css          Responsive CSS-Styling
├── js/
│   └── main.js             Formularlogik und Validierung
├── assets/                 Logos und Bilder
├── README.md               Dieses Dokument
└── docs/                   Zusätzliche Dokumentation
```

## Verwendete Technologien

- **HTML5** - Semantische Struktur
- **CSS3** - Responsive Design mit Media Queries
- **JavaScript (Vanilla)** - Formularverarbeitung und Validierung
- Kein Framework - Reine HTML/CSS/JS Implementierung für maximale Kompatibilität

## Funktionsweise

### 1. Donationstyp-Auswahl
Benutzer wählen zunächst, wie sie ihre Spende übergeben möchten:
- **Persönliche Übergabe**: Vereinfachtes Formular (nur Kleidungsart + Krisengebiet)
- **Abholung**: Vollständiges Formular mit Adressangabe

### 2. Formularvalidierung
- Bei Abholung wird die Postleitzahl validiert
- Die ersten zwei Ziffern müssen "12" sein (konfigurierbar in `js/main.js`)
- Fehlgeschlagene Validierung zeigt aussagekräftige Fehlermeldung

### 3. Bestätigung
Nach erfolgreichem Submit wird eine Bestätigungsseite mit folgenden Informationen angezeigt:
- Art der Kleidung
- Zielkrisengebiet
- Übergabetyp und -ort
- Registrierungsdatum und -zeit

## Installation & Ausführung

### Lokal testen (einfachste Methode):

```bash
# Python 3.x
python -m http.server 8000

# oder Node.js
npx http-server

# Dann im Browser öffnen: http://localhost:8000
```

### Mit Git klonen:

```bash
git clone https://github.com/martinezmartinez2204-glitch/IPWA01-01-Programmierung-von-Webanwendungsoberfl-chen.git
cd IPWA01-01-Programmierung-von-Webanwendungsoberfl-chen
# Server starten (siehe oben)
```

## Konfiguration

### Postleitzahl-Präfix ändern

In `js/main.js` Zeile 6 anpassen:
```javascript
const BUSINESS_POSTAL_CODE_PREFIX = '12'; // Ändern Sie '12' in den gewünschten Präfix
```

### Krisengebiete hinzufügen/ändern

In `index.html` im `<select id="crisisZone">` Element neue Optionen hinzufügen:
```html
<option value="new_zone">Neues Krisengebiet</option>
```

Und in `js/main.js` in der `getCrisisZoneLabel()`-Funktion hinzufügen:
```javascript
'new_zone': 'Neues Krisengebiet',
```

## Responsive Design

Die Anwendung passt sich an folgende Breakpoints an:
- **Desktop**: ≥ 1200px
- **Tablet**: 768px - 1199px
- **Smartphone**: < 480px

## Browser-Kompatibilität

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Browser (iOS Safari, Chrome Mobile)

## Datenschutz

Die Anwendung speichert keine Daten persistent. Alle Eingaben werden nur im Browser verarbeitet und nach dem Neuladen gelöscht.

## Zukünftige Erweiterungen

- Backend-Integration für Datenspeicherung
- Email-Bestätigung
- Admin-Panel für Spendenverwaltung
- Mehrsprachige Unterstützung
- QR-Code für schnelle Registrierung am Tablet

## Lizenz

Dieses Projekt ist für Schulungszwecke gedacht.

## Kontakt & Support

Bei Fragen oder Problemen öffnen Sie bitte ein Issue im Repository.