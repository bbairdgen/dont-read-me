// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const mark = require('./utils/generateMarkdown')
const { stringify } = require('querystring');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'What is your Project Title?',
        name: 'title'
    },
    {
        type: 'input', 
        message: 'What is your description?',
        name: 'description'
    },
    {
        type: 'input', 
        message: 'What installation instructions do you have? (If none, write N/A)',
        name: 'installation'
    },
    {
        type: 'input', 
        message: 'Provide any usage instructions of examples for use.', 
        name: 'usage'
    },
    {
        type: 'input', 
        message: 'Credit any collaborators, attributions, or tutorials that you may have used.',
        name: 'credit',
    },
    {
        type: 'input', 
        message: 'What instructions do you have for contributors, if any?',
        name: 'contributing',
    },
    {
        type: 'input', 
        message: 'If there are multiple features, list them here.',
        name: 'features',
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input', 
        message: 'What is your email?',
        name: 'email',
    },    
    {
        type: 'input', 
        message: 'What tests have you run?',
        name: 'tests',
    },
    {
        type: 'list', 
        message: 'Which license applies to your project?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'CC0 1.0', 'MPL 2.1', 'Apache-2.0'],
    //     filter(val) {
    //         return val.toLowerCase().splice(' ').splice('.')
    //     }
    },
];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions)
     .then((data) => {
        //  console.log(data);
         const sick = mark.generateMarkdown(data)
         
         fs.writeFile('README.md', sick, (err) => 
            err ? console.log(err) : console.log('Successfully created file'))
         return 
     })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}
// Function call to initialize app
init();
