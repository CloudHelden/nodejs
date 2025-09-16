// cli.js
const inquirer = require('inquirer');

console.log("Willkommen zu unserer Mini-CLI!");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Wie heißt du?'
    },
    {
      type: 'list',
      name: 'color',
      message: 'Welche Farbe magst du?',
      choices: ['Rot', 'Blau', 'Grün']
    }
  ])
  .then(answers => {
    console.log("\nDeine Antworten:");
    console.log("Name:", answers.username);
    console.log("Lieblingsfarbe:", answers.color);
  })
  .catch(err => {
    console.error("Fehler:", err);
  });
