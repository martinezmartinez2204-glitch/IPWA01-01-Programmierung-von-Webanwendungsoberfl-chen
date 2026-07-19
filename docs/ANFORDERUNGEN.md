# Anforderungsdokumentation: Gender-Automat

## Projektübersicht

Das Projekt "Gender-Automat" ist eine Web-Anwendung zur Verwaltung von Kleiderspenden für Krisengebiete. Die Anwendung wird sowohl auf Desktop-Geräten als auch auf einem Tablet an der Geschäftsstelle verwendet.

## Funktionale Anforderungen

### A. Visuelle Struktur

- **Logo**: Platziert im Header (Placeholder: `assets/logo.png`)
- **Titel**: "Gender-Automat" als Hauptüberschrift
- **Header**: Enthält Navigation mit Links (Startseite, Spenden, Kontakt, Impressum)
- **Content-Bereich**: Hauptformular und Bestätigungsseite
- **Footer**: Rechtliche Hinweise, Links zu Datenschutz/Impressum/AGB

### B. Responsive Design

Die Anwendung muss auf folgenden Geräten optimal funktionieren:

1. **Desktop-Monitor** (1920px, 1440px)
   - Breite Layouts, mehrspaltiges Design möglich
   - Normale Navigationsgröße

2. **Tablet** (768px - 1024px)
   - Mittlere Fontgrößen
   - Touch-freundliche Buttons und Inputs
   - Einspaltiges Layout

3. **Smartphone** (320px - 480px)
   - Maximales 16px Fontsize bei Inputs (verhindert iOS-Zoom)
   - Vollbreite Buttons und Formularelemente
   - Kompakte Navigation

### C. Registrierungsformular

#### Grundfelder (alle Modi):

1. **Art der Kleidung** (erforderlich)
   - Frauenkleidung
   - Herrenkleidung
   - Kinderkleidung
   - Gemischte Kleidung
   - Typ: Dropdown-Select

2. **Krisengebiet** (erforderlich)
   - Ukraine
   - Syrien
   - Afghanistan
   - Jemen
   - Sonstiges
   - Typ: Dropdown-Select
   - Aktuelle Liste (bei Bedarf aktualisierbar)

#### Modus 1: Persönliche Übergabe an Geschäftsstelle

- **Verwendungskontext**: Tablet an der Geschäftsstelle
- **Sichtbare Felder**:
  - Art der Kleidung (erforderlich)
  - Krisengebiet (erforderlich)
- **Versteckte Felder**:
  - Adressfelder (nicht sichtbar)
- **Speicherort**: Geschäftsstelle (fest)
- **Verarbeitung**: Registrierung erfolgt direkt

#### Modus 2: Abholung durch Sammelfahrzeug

- **Sichtbare Felder**:
  - Art der Kleidung (erforderlich)
  - Krisengebiet (erforderlich)
  - Straße und Hausnummer (erforderlich)
  - Postleitzahl (erforderlich)
  - Stadt (erforderlich)
- **Validierung Postleitzahl**:
  - Erste zwei Ziffern müssen mit Geschäftsstelle übereinstimmen
  - Standard: "12" (konfigurierbar)
  - Fehlermeldung bei Nichtübereinstimmung

### D. Validierungslogik

#### Pflichtfelder
- Alle Formularfelder müssen gefüllt sein (abhängig vom Modus)
- Fehlermeldungen bei leeren Feldern

#### Postleitzahl-Validierung
- Prüfung: Erste zwei Ziffern = Geschäftsstellen-PLZ
- Bei Fehler: "Entschuldigung, die angegebene Adresse liegt nicht in der Nähe unserer Geschäftsstelle"
- Nur bei Abholmodus aktiv

### E. Bestätigungsseite

Nach erfolgreichem Submit werden alle Daten angezeigt:

1. **Erfolgsbestätigung**: Visuell deutliches Success-Feedback (grüne Box)
2. **Angezeigte Informationen**:
   - Art der Kleidung (Label, nicht Value)
   - Krisengebiet (Label, nicht Value)
   - Übergabetyp ("Persönliche Übergabe" oder "Abholung")
   - Ort/Adresse
   - Registrierungsdatum und -zeit im Format TT.MM.JJJJ HH:MM:SS
3. **Button**: "Weitere Spende registrieren" (Seite neu laden)

### F. Dateitypen und Umwandlung

#### Kleidungstypen-Umwandlung
| Value | Label |
|-------|-------|
| womens | Frauenkleidung |
| mens | Herrenkleidung |
| kids | Kinderkleidung |
| mixed | Gemischte Kleidung |

#### Krisengebiete-Umwandlung
| Value | Label |
|-------|-------|
| ukraine | Ukraine |
| syria | Syrien |
| afghanistan | Afghanistan |
| yemen | Jemen |
| other | Sonstiges |

## Nichtfunktionale Anforderungen

### Technologie
- HTML5 (semantisches Markup)
- CSS3 (responsive, modern)
- JavaScript Vanilla (keine schweren Frameworks erforderlich)
- Keine externe Abhängigkeiten für Core-Funktionalität

### Performance
- Schnelles Laden (< 2 Sekunden)
- Offline-Funktionalität (keine Abhängigkeit vom Server)
- Client-seitige Validierung

### Datensicherheit
- Keine Datenspeicherung im Browser (localStorage nicht erforderlich)
- Keine Datenübertragung in dieser Phase
- GDPR-konform (Datenschutzerklärung im Footer verlinkt)

### Benutzerfreundlichkeit
- Klare, intuitive Navigation
- Hilfreiche Fehlermeldungen
- Visuelles Feedback für Benutzeraktionen
- Touch-optimiert für Tablet

## Testfälle

### Test 1: Persönliche Übergabe
1. Öffne die Anwendung
2. Wähle "Persönliche Übergabe an der Geschäftsstelle"
3. Addressfelder sollten verborgen sein
4. Fülle Kleidungsart und Krisengebiet aus
5. Submit
6. Bestätigung sollte "Geschäftsstelle" als Ort anzeigen

### Test 2: Abholung - Gültige PLZ
1. Wähle "Abholung durch Sammelfahrzeug"
2. Addressfelder werden angezeigt
3. Fülle alle Felder mit PLZ "12345" aus
4. Submit
5. Bestätigung sollte Adresse enthalten

### Test 3: Abholung - Ungültige PLZ
1. Wähle "Abholung durch Sammelfahrzeug"
2. Fülle alle Felder mit PLZ "98765" aus
3. Submit
4. Fehlermeldung sollte erscheinen
5. Formular sollte nicht versendet werden

### Test 4: Responsive Design
1. Öffne auf verschiedenen Geräten/Breakpoints
2. Header und Navigation sollten sich anpassen
3. Formular sollte lesbar bleiben
4. Buttons sollten touch-freundlich sein

### Test 5: Validierung
1. Versuche Form ohne Eingaben zu submitten
2. Fehlermeldung sollte erscheinen
3. Formular sollte nicht versendet werden

## Glossar

- **Gender-Automat**: Projekt für Kleiderspenden-Verwaltung
- **Krisengebiet**: Zielregion für die gespendete Kleidung
- **Geschäftsstelle**: Zentrale Sammelstelle des Vereins
- **Sammelfahrzeug**: Mobiles Fahrzeug zur Abholung von Spenden
- **PLZ**: Postleitzahl (5-stellig in Deutschland)