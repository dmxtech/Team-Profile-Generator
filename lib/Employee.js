
//name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager email?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'What is the manager office number?',
        },
    ]);
};