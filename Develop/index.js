// These are the different packages needed to create the README
const fs = require('fs')
const inquirer = require('inquirer');
// This links to the generateMarkdown.js file.
const mark = require('./utils/generateMarkdown')



// Question Array for Inquirer
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
        choices: ['MIT', 'GPLv3', 'CC0 1.0', 'MPL 2.1', 'Apache-2.0', 'None'],
    },
];

// This function cues inquirer to ask the questions and then activate the generator creating a new file. 
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

// Function to initialize the system. 
function init() {
    writeToFile()
}
// Function call to initialize app
init();
