// 1) Node.js 'fs'-Modul importieren
const fs = require('fs');

// 2) Datei asynchron einlesen
fs.readFile('log.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Fehler beim Lesen der Datei:", err);
    return;
  }

  // 3) Inhalt in einzelne Zeilen aufsplitten
  const lines = data.split('\n');

  // 4) Jede Zeile parsen & Webseite extrahieren
  lines.forEach((line, index) => {
    // Regex: Nimmt alles zwischen den Anführungszeichen nach dem Statuscode
    const match = line.match(/"https?:\/\/[^"]+"/);
    if (match) {
      console.log(`${index + 1}: ${match[0]}`);
    }
  });
});
