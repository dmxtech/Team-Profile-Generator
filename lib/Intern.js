//intern’s name, ID, email, and school, and I am taken back to the menu
//getSchool() getRole() // Overridden to return 'Intern'

const Employee = require("./Employee")

class Intern extends Employee {
    constructor(role, Internname, Internid, Internemail, school) {
        super(role, Internname, Internid, Internemail);
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