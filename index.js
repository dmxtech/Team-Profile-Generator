// let currentname = "";
// let currentid = "";
// let currentemail = "";
// let currentoffice = "";
// let currentgithub = "";
// let currentschool = "";
// let team = "";

//Declare variables
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const fs = require('fs');
const promptEmployee = require('./lib/Employee');
const employeeinfo = [];
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
// const getteam = JSON.stringify(employeeinfo);

const template = require("./src/template");
const { default: Choices } = require('inquirer/lib/objects/choices');
//App start & set first prompt to select type of employee
function initEmployee() {
    return inquirer.prompt([


        {
            type: 'list',
            name: 'role',
            message: 'What is the role?',
            choices: ["Manager", "Engineer", "Intern", "Finish"],
        },
        
    ])
        .then((answers) => {
            
            
           
            let role = (answers.role);
            
            if (role === "Manager") {
                promptManager()
                
                 console.log("team",employeeinfo);
        //    console.log("ansr",answers.role);
        //    console.log("answ",answers);
            } else if (role === "Engineer") {
                promptEngineer()
                
            } else if (role === "Intern") {
                promptIntern()
                

            } else if (role === "Finish") {
                let finalhtml = template.generateHTML(employeeinfo)
                writeFile('./dist/index.html', finalhtml)
                .then(() => console.log('Successfully wrote to index.html'))
            }
            //     promptfinish()
            //         .then(() => writeFile('./dist/index.html', finalhtml))
            //         .then(() => console.log('Successfully wrote to index.html'))
            //         .catch((err) => console.error(err));
            // }
            
//function that starts the prompt manager
            function promptManager() {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'Managername',
                        message: 'What is the manager name?',
                    },
                    {
                        type: 'input',
                        name: 'Managerid',
                        message: 'What is the manager Id?',
                    },
                    {
                        type: 'input',
                        name: 'Manageremail',
                        message: 'What is the manager email?',
                    },
                    {
                        type: 'input',
                        name: 'officenumber',
                        message: 'What is the manager office number?',
                    },
                ])
                    .then((data) => {
                        let newManager = new Manager(
                            answers.role, 
                            data.Managername, 
                            data.Managerid, 
                            data.Manageremail, 
                            data.officenumber
                            );
                        // console.log("data", data);
                        // console.log("data.officenumber", data.officenumber);
                        console.log("newManager", newManager);
                        // console.log("employeeinfo", employeeinfo);
                        
                        //push data into array
                        employeeinfo.push(newManager);
                        console.log("employeeinfo", employeeinfo);
                        // const currentoffice = newManager;
                        initEmployee()
                    })
            };
            // start promt for engineer
            function promptEngineer() {

                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'Engineername',
                        message: 'What is the Engineer name?',
                    },
                    {
                        type: 'input',
                        name: 'Engineerid',
                        message: 'What is the Engineer Id?',
                    },
                    {
                        type: 'input',
                        name: 'Engineeremail',
                        message: 'What is the Engineer email?',
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the Engineer Github username?',
                    },
                ])
                    .then((data) => {
                        let newEngineer = new Engineer(
                            answers.role, 
                            data.Engineername, 
                            data.Engineerid, 
                            data.Engineeremail, 
                            data.github
                            );
                        console.log(newEngineer);
                        //push data into main array
                        employeeinfo.push(newEngineer);
                        initEmployee();
                    })
            };
// start intern prompt 
            function promptIntern() {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'Internname',
                        message: 'What is the Intern name?',
                    },
                    {
                        type: 'input',
                        name: 'Internid',
                        message: 'What is the Intern Id?',
                    },
                    {
                        type: 'input',
                        name: 'Internemail',
                        message: 'What is the Intern email?',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school did the intern go to?',
                    },
                ])
                    .then((data) => {
                        let newIntern = new Intern(
                            answers.role, 
                            data.Internname, 
                            data.Internid, 
                            data.Internemail, 
                            data.school);
                        console.log(newIntern);
                        // push new intern into main array
                        employeeinfo.push(newIntern);
                        initEmployee();
                    })
            };
// function to start finsh prompt
            function promptfinish() {
                return inquirer.prompt([
                    {
                        type: 'list',
                        name: 'finish',
                        message: 'do you want to finish?',
                        choices: ["Yes", "No"],
                    },
                ])

               
            }
        }
        // fs.writeFileSync('./dist/index.html', template(employeeinfo));
        )
    
};
initEmployee();


  // .then(() => writeFile('index.html', JSON.stringify(employeeinfo)))
                // .then(() => console.log('Successfully wrote to index.html'))
                // .catch((err) => console.error(err));


                // .then((data) => {
                //     let newIntern = new Intern(currentname, currentid, currentemail, data.school);
                //     console.log(data);
                //     employeeinfo.push(newIntern)
                //     init();

            // function init() {
            //     return inquirer.prompt(questions)
            //         .then((answers) => {
            //             console.log(answers);
            //             const Employee = new promptEmployee(answers.name, answers.id, answers.email, answers.officenumber, answers.role);

            //             currentname = answers.name;
            //             currentid = answers.id;
            //             currentemail = answers.email;
            //             currentoffice = answers.officenumber;
            //             currentgithub = answers.github;
            //             currentschool = answers.school;
            //             currentrole = answers.role;

            //             if (answers.role === "Manager") {
            //                 promptManager()

            //                 // .then(() => writeFile('index.html', JSON.stringify(employeeinfo)))

            //                 // .then(() => console.log('Successfully wrote to index.html'))
            //                 // .catch((err) => console.error(err));
            //             } else if (answers.role === "Engineer") {
            //                 promptEngineer()
            //                 // .then(() => writeFile('index.html', JSON.stringify(employeeinfo)))
            //                 // .then(() => console.log('Successfully wrote to index.html'))
            //                 // .catch((err) => console.error(err));
            //             } else if (answers.role === "Intern") {
            //                 promptIntern()
            //                 // .then(() => writeFile('index.html', JSON.stringify(employeeinfo)))
            //                 // .then(() => console.log('Successfully wrote to index.html'))
            //                 // .catch((err) => console.error(err));
            //             } else if (answers.role === "Finish") {
            //                 promptfinish()
            //                     .then(() => writeFile('./dist/index.html', finalhtml))
            //                     .then(() => console.log('Successfully wrote to index.html'))
            //                     .catch((err) => console.error(err));
            //             }
            //             let finalhtml = template.generateHTML(Employee)
            //             //console.log(employeeinfo);
            //             writeFile("./dist/index.html", finalhtml)
            //                 // .then(() => console.log('Successfully wrote to index.html'))
            //                 .catch((err) => console.error(err));
            //         });

            // }
            //while (promptfinish.finish === "Yes");

       

// Bonus using writeFileSync as a promise

//TODO work on template so it shows a nice html
//promt finish no=>continue & prompt finish after setting employee.
//put succesfully wrote into after office number
// get correct values for template