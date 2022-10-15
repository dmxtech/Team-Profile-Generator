//intern’s name, ID, email, and school, and I am taken back to the menu
//getSchool() getRole() // Overridden to return 'Intern'

const inquirer = require('inquirer');


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern go to?',
        },
    ]);
};
module.exports = promptIntern();