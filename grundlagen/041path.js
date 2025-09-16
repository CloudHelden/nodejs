// path-demo.js
const fs = require('fs');
const path = require('path');

console.log("=== Path Demo ===\n");

// ❌ FALSCH: Windows-Format hardcoded
console.log("1) Versuch mit Windows-Pfad:");
const windowsPath = 'filesystem\\log.txt';
console.log("Pfad:", windowsPath);

fs.readFile(windowsPath, 'utf8', (err, data) => {
  if (err) {
    console.log("❌ FEHLER:", err.message);
  } else {
    console.log("✅ Datei gelesen:", data.slice(0, 50) + '...');
  }
});

// ❌ AUCH FALSCH: Unix-Format hardcoded
console.log("\n2) Versuch mit Unix-Pfad:");
const unixPath = 'filesystem/log.txt';
console.log("Pfad:", unixPath);

fs.readFile(unixPath, 'utf8', (err, data) => {
  if (err) {
    console.log("❌ FEHLER:", err.message);
  } else {
    console.log("✅ Datei gelesen:", data.slice(0, 50) + '...');
  }
});

// ✅ RICHTIG: Mit path.join()
console.log("\n3) Richtig mit path.join():");
const correctPath = path.join('filesystem', 'log.txt');
console.log("Pfad:", correctPath);
console.log("Automatisch für dein System:", process.platform);

fs.readFile(correctPath, 'utf8', (err, data) => {
  if (err) {
    console.log("❌ FEHLER:", err.message);
  } else {
    console.log("✅ Datei erfolgreich gelesen!");
    console.log("Erste Zeile:", data.split('\n')[0]);
  }
});