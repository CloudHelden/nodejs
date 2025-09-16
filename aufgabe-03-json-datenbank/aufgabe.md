# Aufgabe 3: JSON-Datenbank

## Lernziele
- JSON Dateien als einfache Datenbank nutzen
- JavaScript Objekte in JSON umwandeln und zurück
- Daten persistent speichern und laden
- Funktionen für CRUD-Operationen schreiben

## Aufgabenstellung

### Teil 1: Datenbank erstellen
Erstelle ein Script `database.js` das:

1. Eine `users.json` Datei mit einem Array von 3 User-Objekten erstellt
2. Jeder User hat: `id`, `name`, `age`, `city`
3. Die JSON-Datei sauber formatiert speichert

### Teil 2: Datenbankfunktionen
Implementiere folgende Funktionen:

1. **loadUsers()** - Lädt alle User aus der JSON-Datei
2. **saveUsers(users)** - Speichert das User-Array in die JSON-Datei
3. **addUser(user)** - Fügt einen neuen User hinzu (mit automatischer ID)
4. **findUserById(id)** - Findet einen User anhand der ID
5. **listAllUsers()** - Zeigt alle User formatiert an

### Teil 3: Test der Funktionen
Teste deine Funktionen indem du:

1. Alle existierenden User anzeigst
2. Einen neuen User hinzufügst
3. Den neuen User anhand seiner ID suchst
4. Alle User erneut anzeigst

### Teil 4: Fehlerbehandlung
- Handle Fehler beim Lesen/Schreiben der JSON-Datei
- Prüfe ob die JSON-Datei existiert, sonst erstelle sie
- Validiere User-Daten vor dem Hinzufügen

## Hinweise

### JSON Operationen
```javascript
const fs = require('fs');

// JSON lesen
function loadUsers() {
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log('Erstelle neue Datenbank...');
        return [];
    }
}

// JSON schreiben
function saveUsers(users) {
    const jsonData = JSON.stringify(users, null, 2);
    fs.writeFileSync('users.json', jsonData, 'utf8');
}
```

### Automatische ID generieren
```javascript
function getNextId(users) {
    if (users.length === 0) return 1;
    return Math.max(...users.map(user => user.id)) + 1;
}
```

### User validieren
```javascript
function isValidUser(user) {
    return user.name &&
           typeof user.age === 'number' &&
           user.age > 0 &&
           user.city;
}
```

### Beispiel User-Objekt
```javascript
const user = {
    id: 1,
    name: "Max Mustermann",
    age: 25,
    city: "Berlin"
};
```

## Beispiel users.json
```json
[
  {
    "id": 1,
    "name": "Anna Schmidt",
    "age": 28,
    "city": "München"
  },
  {
    "id": 2,
    "name": "Tom Weber",
    "age": 32,
    "city": "Hamburg"
  },
  {
    "id": 3,
    "name": "Lisa Müller",
    "age": 24,
    "city": "Berlin"
  }
]
```

## Beispiel-Ausgabe
```
=== AKTUELLE USER ===
1: Anna Schmidt (28) aus München
2: Tom Weber (32) aus Hamburg
3: Lisa Müller (24) aus Berlin

Füge neuen User hinzu...
User erfolgreich hinzugefügt! ID: 4

Suche User mit ID 4...
Gefunden: Paul Fischer (29) aus Köln

=== ALLE USER ===
1: Anna Schmidt (28) aus München
2: Tom Weber (32) aus Hamburg
3: Lisa Müller (24) aus Berlin
4: Paul Fischer (29) aus Köln
```

## Erwartete Dateien
- `database.js` - Hauptscript mit allen Funktionen
- `users.json` - Wird automatisch erstellt

## Test
```bash
node database.js
```

**Schwierigkeitsgrad:** ⭐⭐⭐☆☆
**Konzepte:** JSON, Dateisystem, Funktionen, Fehlerbehandlung