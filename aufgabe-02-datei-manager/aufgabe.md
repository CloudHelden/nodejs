# Aufgabe 2: Datei-Manager

## Lernziele
- File System Modul (fs) verwenden
- Asynchrone Dateioperationen verstehen
- Path-Modul für sichere Pfade nutzen
- Mit Textdateien arbeiten

## Aufgabenstellung

### Teil 1: Notiz-Datei erstellen
Erstelle ein Script `fileManager.js` das:

1. Eine Datei `notes.txt` erstellt (falls sie nicht existiert)
2. Eine Willkommensnachricht hineinschreibt
3. Bestätigt, dass die Datei erstellt wurde

### Teil 2: Notizen hinzufügen
Erweitere das Script um:

1. 3 verschiedene Notizen zur Datei hinzuzufügen (mit `fs.appendFile`)
2. Jede Notiz soll mit Datum/Zeit versehen werden
3. Zwischen den Notizen soll eine Pause von 1 Sekunde sein

### Teil 3: Notizen auslesen
Am Ende soll das Script:

1. Die komplette `notes.txt` auslesen
2. Jede Zeile nummeriert ausgeben
3. Die Gesamtanzahl der Zeilen anzeigen

### Teil 4: Sichere Pfade
- Verwende `path.join()` um Pfade sauber zu erstellen
- Nutze `__dirname` für relative Pfade
- Handle Fehler mit try/catch

## Hinweise

### File System Operationen
```javascript
const fs = require('fs');
const path = require('path');

// Datei schreiben
fs.writeFile(filepath, content, 'utf8', (err) => {
    if (err) throw err;
    console.log('Datei erstellt!');
});

// An Datei anhängen
fs.appendFile(filepath, content, 'utf8', (err) => {
    if (err) throw err;
    console.log('Text hinzugefügt!');
});

// Datei lesen
fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### Pfade erstellen
```javascript
const filepath = path.join(__dirname, 'notes.txt');
```

### Zeitstempel
```javascript
const timestamp = new Date().toLocaleString('de-DE');
const note = `[${timestamp}] Meine Notiz\n`;
```

### Zeilen verarbeiten
```javascript
const lines = data.split('\n').filter(line => line.trim() !== '');
lines.forEach((line, index) => {
    console.log(`${index + 1}: ${line}`);
});
```

### Verzögerung (Bonus)
```javascript
setTimeout(() => {
    // Code nach 1 Sekunde
}, 1000);
```

## Beispiel-Ausgabe
```
Erstelle notes.txt...
Datei erstellt!
Füge Notiz 1 hinzu...
Notiz hinzugefügt!
Füge Notiz 2 hinzu...
Notiz hinzugefügt!
Füge Notiz 3 hinzu...
Notiz hinzugefügt!

=== NOTIZEN AUSLESEN ===
1: Willkommen in der Notiz-App!
2: [16.9.2025, 14:30:25] Erste Notiz
3: [16.9.2025, 14:30:26] Zweite Notiz
4: [16.9.2025, 14:30:27] Dritte Notiz

Gesamt: 4 Notizen
```

## Erwartete Dateien
- `fileManager.js` - Hauptscript
- `notes.txt` - Wird automatisch erstellt

## Test
```bash
node fileManager.js
```

**Schwierigkeitsgrad:** ⭐⭐⭐☆☆
**Konzepte:** File System, Path-Modul, Asynchrone Programmierung