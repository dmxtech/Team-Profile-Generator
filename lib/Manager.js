//the team manager’s name, employee ID, email address, and office number
// getRole() // Overridden to return 'Manager'
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, role, officenumber) {
        super(name, id, email, role);
        this.officenumber = officenumber;
    }
    getofficenumber() {
        return this.officenumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager