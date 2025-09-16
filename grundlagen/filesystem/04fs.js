const fs = require('fs');

// Lese eine Datei komplett ein
fs.readFile('log.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Fehler beim Lesen:", err);
    return;
  }
  console.log("Datei-Inhalt:\n", data.slice(0, 200), '...'); 
});

fs.writeFile('output.txt', 'Hallo aus Node.js!\n', (err) => {
  if (err) {
    console.error("Fehler beim Schreiben:", err);
    return;
  }
  console.log("Datei erstellt!");
});

fs.appendFile('output.txt', 'Noch eine Zeile!\n', (err) => {
  if (err) throw err;
  console.log("Neue Zeile angehängt!");
});