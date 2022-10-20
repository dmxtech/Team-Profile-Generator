//intern’s name, ID, email, and school, and I am taken back to the menu
//getSchool() getRole() // Overridden to return 'Intern'

const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
    getschool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern