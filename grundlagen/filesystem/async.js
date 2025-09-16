const fs = require('fs');

let fileContent = "";

// Async lesen
fs.readFile('log.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Fehler beim Lesen:", err);
    return;
  }
  console.log("✅ Datei gelesen! Länge:", data.length);
  fileContent = data;
});

// Das passiert SOFORT, bevor die Datei gelesen wurde
console.log("Versuche neue Datei zu schreiben...");
fs.writeFile('copy-async.txt', fileContent, (err) => {
  if (err) {
    console.error("Fehler beim Schreiben:", err);
    return;
  }
  console.log("❌ Datei geschrieben - aber sie ist leer!");
  console.log("fileContent war:", JSON.stringify(fileContent));
});

// console.log("Ende des Scripts\n");

// // Kurze Pause für die Demo
// setTimeout(() => {
//   console.log("=== SYNC LÖSUNG ===\n");
  
//   console.log("2) SYNC - Das funktioniert:");
  
//   try {
//     console.log("Lese log.txt synchron...");
//     const syncContent = fs.readFileSync('log.txt', 'utf8');
//     console.log("✅ Datei gelesen! Länge:", syncContent.length);
    
//     console.log("Schreibe neue Datei...");
//     fs.writeFileSync('copy-sync.txt', syncContent);
//     console.log("✅ Datei erfolgreich kopiert!");
    
//     // Beweis dass es funktioniert hat
//     const copiedContent = fs.readFileSync('copy-sync.txt', 'utf8');
//     console.log("Kopierte Datei Länge:", copiedContent.length);
//     console.log("Erste Zeile:", copiedContent.split('\n')[0]);
    
//   } catch (err) {
//     console.error("Fehler:", err);
//   }
  
// }, 2000);