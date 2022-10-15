//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'
const inquirer = require('inquirer');

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer Github username?',
        },
    ]);
};
module.exports = promptEngineer();