// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description,contents, installation, usage, contributing, tests, license, github, email }) =>
`# ${title}
# Description
${description} 
## Table of ${contents}
*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credits)
*[License](#license)
## Installation 
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${tests}
## License
${license}
## Question
If you have any questions, please feel free to reach out via:
GitHub: ${github}
Email: ${email}`;

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
        choices: ['Commercial','Creative Commons','Private'],
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
    const readMEContent = generateReadMe(answers);
        
    fs.writeFile('README.md', readMEContent, (err) =>
    err ? console.log(err) : console.log('Success! You create a README.md file!')
);

}); 

