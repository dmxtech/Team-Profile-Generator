const { writeFile } = require('fs').promises;
const fs = require('fs');
const inquirer = require('inquirer');

// Bonus using writeFileSync as a promise
const init = () => {
    promptEmployee()

        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();