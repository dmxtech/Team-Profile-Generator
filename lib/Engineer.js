//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Ename',
            message: 'What is the Engineer name?',
        },
        {
            type: 'input',
            name: 'Eid',
            message: 'What is the Engineer Id?',
        },
        {
            type: 'input',
            name: 'Eemail',
            message: 'What is the Engineer email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer Github username?',
        },
    ]);
};