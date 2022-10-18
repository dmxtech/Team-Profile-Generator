
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const fs = require('fs');
const promptEmployee = require('./lib/Employee');
const employeeinfo = [];
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
let currentname = ""
let currentid = ""
let currentemail = ""

var questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ["Manager", "Engineer", "Intern", "NONE"],
    },
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



]
const promptManager = (employeeinfo) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officenumber',
            message: 'What is the manager office number?',
        },
    ])
        .then((data) => {
            let newManager = new Manager(data.officenumber)
            employeeinfo.push(newManager)
            init();
        })
};
const promptEngineer = (employeeinfo) => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer Github username?',
        },
    ])
        .then((data) => {
            let newEngineer = new Engineer(data.github)
            employeeinfo.push(newEngineer)
            init();
        })
};

const promptIntern = (employeeinfo) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern go to?',
        },
    ])
        .then((data) => {
            let newIntern = new Intern(data.officenumber)
            employeeinfo.push(newIntern)
            init();
        })
};


function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const Employee = new promptEmployee(answers);
            currentname = answers.name;
            currentid = answers.id;
            currentemail = answers.email;
            employeeinfo.push(Employee);


            if (answers.role === "Manager") {
                promptManager()

            } else if (answers.role === "Engineer") {
                promptEngineer()

            } else if (answers.role === "Intern") {
                promptIntern()
            }
            else if (answers.role === "NONE") {
                fs.writeFile('./dist/index.html', Employee, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                )
            }

        });
}


init();

// Bonus using writeFileSync as a promise

