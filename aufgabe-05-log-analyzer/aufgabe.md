# Aufgabe 5: Log-Analyzer

## Lernziele
- Textdateien zeilenweise verarbeiten
- Regular Expressions verwenden
- Kommandozeilen-Parameter verarbeiten
- Datenfilterung und -analyse
- Komplexere String-Operationen

## Aufgabenstellung

### Teil 1: Log-Datei erstellen
Erstelle eine `server.log` Datei mit verschiedenen Log-Einträgen:

- **INFO**: Normale Informationen
- **WARN**: Warnungen
- **ERROR**: Fehler

Format: `[DATUM ZEIT] LEVEL: Nachricht`

### Teil 2: Log-Analyzer Grundfunktionen
Erstelle ein Script `logAnalyzer.js` das:

1. Die `server.log` Datei einliest
2. Alle Zeilen nach Log-Level filtert
3. Eine Statistik ausgibt (Anzahl INFO/WARN/ERROR)
4. Alle ERROR-Zeilen in eine separate `errors.txt` Datei speichert

### Teil 3: Erweiterte Filterung
Erweitere den Analyzer um:

1. **Datumsfilter**: Nutze `process.argv` um nach einem bestimmten Datum zu filtern
2. **Zeitraum-Filter**: Filtere Logs zwischen zwei Zeitpunkten
3. **Keyword-Suche**: Suche nach bestimmten Begriffen in Log-Nachrichten

### Teil 4: Detaillierte Ausgabe
- Zeige die häufigsten ERROR-Typen
- Finde Zeiträume mit den meisten Fehlern
- Erstelle einen Summary-Report

## Hinweise

### Beispiel server.log
```
[2025-09-16 08:15:23] INFO: Server gestartet auf Port 3000
[2025-09-16 08:15:24] INFO: Datenbankverbindung hergestellt
[2025-09-16 08:30:45] WARN: Langsame Datenbankabfrage (5.2s)
[2025-09-16 08:31:12] ERROR: Datenbankverbindung verloren
[2025-09-16 08:31:13] ERROR: Benutzer-Login fehlgeschlagen: admin
[2025-09-16 08:45:02] INFO: Backup erfolgreich erstellt
[2025-09-16 09:15:33] WARN: Speicher fast voll (85%)
[2025-09-16 09:30:44] ERROR: API Timeout bei /users endpoint
[2025-09-16 10:12:55] INFO: Cache geleert
[2025-09-16 10:13:01] ERROR: Datei nicht gefunden: config.json
```

### Log-Datei erstellen
```javascript
const fs = require('fs');

function createSampleLog() {
    const logEntries = [
        '[2025-09-16 08:15:23] INFO: Server gestartet auf Port 3000',
        '[2025-09-16 08:15:24] INFO: Datenbankverbindung hergestellt',
        '[2025-09-16 08:30:45] WARN: Langsame Datenbankabfrage (5.2s)',
        '[2025-09-16 08:31:12] ERROR: Datenbankverbindung verloren',
        // ... weitere Einträge
    ];

    fs.writeFileSync('server.log', logEntries.join('\n'), 'utf8');
}
```

### Log-Zeile parsen
```javascript
function parseLogLine(line) {
    // Regex für: [DATUM ZEIT] LEVEL: Nachricht
    const regex = /^\[([^\]]+)\] (\w+): (.+)$/;
    const match = line.match(regex);

    if (match) {
        return {
            timestamp: match[1],
            level: match[2],
            message: match[3],
            originalLine: line
        };
    }
    return null;
}
```

### Statistik erstellen
```javascript
function analyzeLog(logEntries) {
    const stats = { INFO: 0, WARN: 0, ERROR: 0 };
    const errors = [];

    logEntries.forEach(entry => {
        if (entry) {
            stats[entry.level]++;
            if (entry.level === 'ERROR') {
                errors.push(entry);
            }
        }
    });

    return { stats, errors };
}
```

### Datumsfilter
```javascript
function filterByDate(logEntries, targetDate) {
    return logEntries.filter(entry => {
        if (!entry) return false;
        return entry.timestamp.includes(targetDate);
    });
}

// Verwendung: node logAnalyzer.js 2025-09-16
const filterDate = process.argv[2];
```

### Error-Kategorien analysieren
```javascript
function categorizeErrors(errors) {
    const categories = {};

    errors.forEach(error => {
        let category = 'Unbekannt';

        if (error.message.includes('Datenbank')) {
            category = 'Datenbank';
        } else if (error.message.includes('Login')) {
            category = 'Authentifizierung';
        } else if (error.message.includes('Datei')) {
            category = 'Dateisystem';
        } else if (error.message.includes('API') || error.message.includes('Timeout')) {
            category = 'API/Network';
        }

        categories[category] = (categories[category] || 0) + 1;
    });

    return categories;
}
```

## Beispiel-Ausgabe
```bash
$ node logAnalyzer.js

=== LOG ANALYZER ===
Datei gelesen: server.log (10 Zeilen)

=== STATISTIK ===
INFO:  4 Einträge (40%)
WARN:  2 Einträge (20%)
ERROR: 4 Einträge (40%)

=== ERROR KATEGORIEN ===
Datenbank: 2
Authentifizierung: 1
Dateisystem: 1

=== ERRORS GESPEICHERT ===
4 Fehler in errors.txt gespeichert

$ node logAnalyzer.js 2025-09-16

=== FILTER: 2025-09-16 ===
Gefunden: 10 Einträge für dieses Datum
```

## Erwartete Dateien
- `logAnalyzer.js` - Hauptscript
- `server.log` - Log-Datei (selbst erstellt oder vorgegeben)
- `errors.txt` - Wird automatisch erstellt
- `createLog.js` - Optional: Script zum Erstellen von Testdaten

## Test
```bash
node logAnalyzer.js
node logAnalyzer.js 2025-09-16
node logAnalyzer.js 2025-09-16 ERROR
```

**Schwierigkeitsgrad:** ⭐⭐⭐⭐⭐
**Konzepte:** File Processing, Regular Expressions, String Analysis, Command Line Arguments