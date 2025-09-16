# Aufgabe 4: Mini-CLI Calculator

## Lernziele
- NPM Package (inquirer) verwenden
- Interaktive Kommandozeilen-Anwendung erstellen
- Module für Berechnungslogik auslagern
- Daten persistent in JSON speichern

## Aufgabenstellung

### Teil 1: Calculator Modul
Erstelle eine Datei `calculator.js` mit folgenden Funktionen:

1. **add(a, b)** - Addition
2. **subtract(a, b)** - Subtraktion
3. **multiply(a, b)** - Multiplikation
4. **divide(a, b)** - Division (mit Division durch 0 prüfen)
5. **calculate(num1, operator, num2)** - Hauptfunktion die basierend auf dem Operator die richtige Funktion aufruft

### Teil 2: CLI Interface
Erstelle eine Datei `app.js` die mit inquirer:

1. Nach der ersten Zahl fragt
2. Nach der Operation fragt (+, -, *, /)
3. Nach der zweiten Zahl fragt
4. Das Ergebnis berechnet und anzeigt
5. Fragt ob der User eine weitere Rechnung machen möchte

### Teil 3: History Funktion
Erweitere die App um:

1. Jede Rechnung mit Timestamp in `history.json` zu speichern
2. Die letzten 3 Rechnungen nach jeder neuen Berechnung zu zeigen
3. Eine Option "History anzeigen" im Hauptmenü

### Teil 4: Package Installation
- Erstelle eine `package.json`
- Installiere inquirer als Dependency
- Teste die Anwendung ausführlich

## Hinweise

### Package.json erstellen
```bash
npm init -y
npm install inquirer
```

### Inquirer verwenden
```javascript
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'number1',
        message: 'Erste Zahl:',
        validate: (input) => {
            if (isNaN(input)) return 'Bitte gib eine gültige Zahl ein!';
            return true;
        }
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Operation:',
        choices: ['+', '-', '*', '/']
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
});
```

### Calculator Modul
```javascript
// calculator.js
function add(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division durch 0 ist nicht möglich!');
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: throw new Error('Unbekannte Operation!');
    }
}

module.exports = { add, subtract, multiply, divide, calculate };
```

### History speichern
```javascript
function saveCalculation(num1, operator, num2, result) {
    const calculation = {
        timestamp: new Date().toLocaleString('de-DE'),
        operation: `${num1} ${operator} ${num2} = ${result}`,
        result: result
    };

    let history = loadHistory();
    history.push(calculation);

    // Nur die letzten 10 behalten
    if (history.length > 10) {
        history = history.slice(-10);
    }

    fs.writeFileSync('history.json', JSON.stringify(history, null, 2));
}
```

### Hauptschleife
```javascript
async function startCalculator() {
    let continueCalculating = true;

    while (continueCalculating) {
        // Menü anzeigen
        const menuChoice = await inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'Was möchtest du tun?',
            choices: ['Neue Rechnung', 'History anzeigen', 'Beenden']
        }]);

        switch (menuChoice.action) {
            case 'Neue Rechnung':
                await performCalculation();
                break;
            case 'History anzeigen':
                showHistory();
                break;
            case 'Beenden':
                continueCalculating = false;
                break;
        }
    }
}
```

## Beispiel-Ausgabe
```
? Was möchtest du tun? Neue Rechnung
? Erste Zahl: 15
? Operation: *
? Zweite Zahl: 3

Ergebnis: 15 * 3 = 45

=== LETZTE RECHNUNGEN ===
1. [16.9.2025, 14:30:25] 10 + 5 = 15
2. [16.9.2025, 14:31:02] 20 - 8 = 12
3. [16.9.2025, 14:31:45] 15 * 3 = 45

? Was möchtest du tun? Beenden
Auf Wiedersehen!
```

## Erwartete Dateien
- `package.json` - NPM Konfiguration
- `calculator.js` - Berechnungslogik
- `app.js` - Hauptanwendung
- `history.json` - Wird automatisch erstellt

## Test
```bash
npm install
node app.js
```

**Schwierigkeitsgrad:** ⭐⭐⭐⭐☆
**Konzepte:** NPM Packages, Inquirer, Module, JSON Storage, Async/Await