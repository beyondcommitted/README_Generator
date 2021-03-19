// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your document?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Give the user instructions on how to install application.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Give the user infomation what the use of the application is.',
  },
  {
    type: 'list',
    name: 'licencing',
    choices: ["MIT", "Unlicense"],
    message: 'Enter licenses that this application is covered under.',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Give guidelines for the contributions allowed to this application.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Give instructions on how to test this application.',
    default: "npm test",
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a quick description of your application.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your e-mail address.',
  },
];

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions)
        console.log(answers)
        await writeFileAsync('README.md', generateMarkdown(answers))
    
    } catch (error) {
        console.log(error)
    }
}

// Function call to initialize app
init();
