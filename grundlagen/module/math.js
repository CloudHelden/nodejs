// math.js

// Eine einfache Funktion exportieren
function plus(a, b) {
  return a + b;
}

// Mehrere Funktionen exportieren (optional)
function mal(a, b) {
  return a * b;
}

// Variante 1: Einzelnen Export
// module.exports = add;

// Variante 2: Mehrere Exports in einem Objekt
module.exports = {
  plus,
  mal
};
