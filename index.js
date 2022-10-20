
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const fs = require('fs');
const promptEmployee = require('./lib/Employee');
const employeeinfo = [];
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
let currentname = "";
let currentid = "";
let currentemail = "";
// let currentoffice = "";
// let currentgithub = "";
// let currentschool = "";
// let team = "";
const template = require("./src/template");

var questions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee Id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ["Manager", "Engineer", "Intern", "NONE"],
    },


]
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officenumber',
            message: 'What is the manager office number?',
        },
    ])
        .then((data) => {
            let newManager = new Manager(currentname, currentid, currentemail, data.officenumber);
            console.log(data);
            console.log(data.officenumber);
            console.log(newManager);
            console.log(employeeinfo);
            employeeinfo.push(newManager);
            // const currentoffice = newManager;
            init();
        })
};
const promptEngineer = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer Github username?',
        },
    ])
        .then((data) => {
            let newEngineer = new Engineer(currentname, currentid, currentemail, data.github);
            console.log(data);
            employeeinfo.push(newEngineer);
            init();
        })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern go to?',
        },
    ])
        .then((data) => {
            let newIntern = new Intern(currentname, currentid, currentemail, data.school);
            console.log(data);
            employeeinfo.push(newIntern)
            init();
        })
};






function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const Employee = new promptEmployee(answers);

            currentname = answers.name;
            currentid = answers.id;
            currentemail = answers.email;
            currentoffice = answers.officenumber;
            currentgithub = answers.github;
            currentschool = answers.school;

            if (answers.role === "Manager") {
                promptManager()

                    .then(() => writeFile('index.html', JSON.stringify(answers)))
                    .then(() => console.log('Successfully wrote to index.html'))
                    .catch((err) => console.error(err));
            } else if (answers.role === "Engineer") {
                promptEngineer()
                    .then(() => writeFile('index.html', JSON.stringify(answers)))
                    .then(() => console.log('Successfully wrote to index.html'))
                    .catch((err) => console.error(err));
            } else if (answers.role === "Intern") {
                promptIntern()
                    .then(() => writeFile('index.html', JSON.stringify(answers)))
                    .then(() => console.log('Successfully wrote to index.html'))
                    .catch((err) => console.error(err));
            } else if (answers.role === "NONE") {

            }
        });

}


init();

// Bonus using writeFileSync as a promise

