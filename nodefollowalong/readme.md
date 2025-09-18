# Befehlssammlung

### Node.js Projekt initialisieren
```bash
npm init -y
```

### Pakete installieren
```bash
npm install express axios
```

### Core Module (bereits in Node.js enthalten)
- `fs` - Dateisystem
- `path` - Pfad-Utilities

### Basis Server
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
```