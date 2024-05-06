// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the itended use for this project?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who collaborated with you on this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write a test for your application.'
    },
    {
        type: 'list',
        message: 'What License are you using?',
        name: 'license',
        choices: ['MIT', 'Apache', 'IBM', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    })

}

// Function call to initialize app
init();
