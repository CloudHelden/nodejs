const inquirer = require('inquirer');
const math = require('./math')
const fs = require('fs')

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
    console.log("Name:", answers.username, math.plus(3,4));
    console.log("Lieblingsfarbe:", answers.color);
  })