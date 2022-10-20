//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    }
    getgithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer