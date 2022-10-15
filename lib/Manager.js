//the team manager’s name, employee ID, email address, and office number
// getRole() // Overridden to return 'Manager'
const inquirer = require('inquirer');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officenumber',
            message: 'What is the manager office number?',
        },
    ]);
};
module.exports = promptManager();