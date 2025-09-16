# Aufgabe 1: Mein erstes Modul

## Lernziele
- Node.js Module System verstehen (require/module.exports)
- Eigene Funktionen in separaten Dateien organisieren
- process.argv für Kommandozeilen-Parameter nutzen

## Aufgabenstellung

### Teil 1: Hilfsfunktionen erstellen
Erstelle eine Datei `helpers.js` mit folgenden Funktionen:

1. **getTimestamp()** - Gibt das aktuelle Datum und Uhrzeit als String zurück
   - Format: "2025-09-16 14:30:25"
   - Tipp: Nutze `new Date()` und `.toISOString()`

2. **capitalize(text)** - Macht den ersten Buchstaben eines Strings groß
   - Beispiel: "hallo" → "Hallo"
   - Denke an Fehlerbehandlung für leere Strings

### Teil 2: Hauptprogramm erstellen
Erstelle eine Datei `main.js` die:

1. Beide Funktionen aus `helpers.js` importiert
2. `getTimestamp()` aufruft und das Ergebnis ausgibt
3. Einen Testtext mit `capitalize()` formatiert und ausgibt

### Teil 3: Bonus - Kommandozeilen-Parameter
Erweitere `main.js` so, dass:
- Es einen Text von der Kommandozeile entgegennimmt (`process.argv`)
- Diesen Text mit `capitalize()` formatiert
- Das Ergebnis zusammen mit dem Timestamp ausgibt

**Aufruf:** `node main.js "mein text"`
**Ausgabe:** `[2025-09-16 14:30:25] Mein text`

## Hinweise

### Module exportieren
```javascript
// In helpers.js
function getTimestamp() {
    // Deine Implementierung
}

module.exports = {
    getTimestamp: getTimestamp,
    capitalize: capitalize
};
```

### Module importieren
```javascript
// In main.js
const helpers = require('./helpers');
// oder
const { getTimestamp, capitalize } = require('./helpers');
```

### Kommandozeilen-Parameter
```javascript
// process.argv[0] = node
// process.argv[1] = script name
// process.argv[2] = erster Parameter
const userInput = process.argv[2];
```

### Fehlerbehandlung
```javascript
if (!userInput) {
    console.log('Bitte gib einen Text als Parameter an!');
    return;
}
```

## Erwartete Dateien
- `helpers.js` - Hilfsfunktionen
- `main.js` - Hauptprogramm

## Test
```bash
node main.js
node main.js "hello world"
```

**Schwierigkeitsgrad:** ⭐⭐☆☆☆
**Konzepte:** Module System, Funktionen, process.argv