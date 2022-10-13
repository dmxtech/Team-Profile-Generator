//intern’s name, ID, email, and school, and I am taken back to the menu
// school

// getSchool()

// getRole() // Overridden to return 'Intern'
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Iname',
            message: 'What is the Intern name?',
        },
        {
            type: 'input',
            name: 'Iid',
            message: 'What is the intern Id?',
        },
        {
            type: 'input',
            name: 'Iemail',
            message: 'What is the intern email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern go to?',
        },
    ]);
};