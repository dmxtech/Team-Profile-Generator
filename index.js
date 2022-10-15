
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const fs = require('fs');
const promptEmployee = require('./lib/Employee');

var questions = [
    {
        type: 'checkbox',
        name: 'role',
        message: 'What is your role?',
        choices: ["Manager", "Engineer", "Intern", "NONE"],
    },
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

]

const initCard = function (answers) {
    //if else statement
    let role;

    if (answers.role === "Manager") {
        role = promptManager();
    } else if (answers.role === "Engineer") {
        role = promptEngineer();
    } else if (answers.role === "Intern") {
        role = promptIntern();
    }
}


function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const Employee = promptEmployee(answers);

            fs.writeFile('Index.html', Employee, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            )
        });
}

init();

// Bonus using writeFileSync as a promise

