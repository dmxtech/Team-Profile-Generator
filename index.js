
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const fs = require('fs');
const promptEmployee = require('./lib/Employee');

var questions = [
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


// function init() {
//     return inquirer.promptEmployee(questions)
//         .then((answers) => writeFile('index.html', generateHTML(answers)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));
// };
// fs.writeFile('index.html', Employee, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
// )

// init();

            // const init = () => {
             //     promptEmployee()

            //         .then((answers) => writeFile('index.html', generateHTML(answers)))
            //         .then(() => console.log('Successfully wrote to index.html'))
            //         .catch((err) => console.error(err));
            // };