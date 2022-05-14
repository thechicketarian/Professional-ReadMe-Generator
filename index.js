// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {   
        type: 'input',
        message: "What is the name of the project?",
        name: "title"
    },
    {   
        type: 'input',
        message: "What is the desciption of the project?",
        name: "description"
    },
    {   
        type: 'input',
        message: "What is you table of contents?",
        name: "contents"
    },
    {   
        type: 'input',
        message: "What is your installation process?",
        name: "installation"
    },
    {   
        type: 'input',
        message: "How will this project be used?",
        name: "usage"
    },
    {   
        type: 'input',
        message: "What contribution guideliness does the user need to follow?",
        name: "contributing"
    },
    {   
        type: 'input',
        message: "How should I test this project?",
        name: "tests"
    },
    {   
        type: 'list',
        message: "Choose license for this project?",
        choices: ['MIT','Apache','Gnu-3'],
        name: 'license'
    },
    {   
        type: 'username',
        message: "What is your GitHub username?",
        name: "gitHub"
    },
    {   
        type: 'email',
        message: "What is your email address?",
        name: "email"
    }

])


    .then((answers) => {
    const readMEContent = generateMarkdown(answers);
        
    fs.writeFile('README.md', readMEContent, (err) =>
    err ? console.log(err) : console.log('Success! You create a README.md file!')
);

}); 

