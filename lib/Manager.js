//the team manager’s name, employee ID, email address, and office number
// getRole() // Overridden to return 'Manager'
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(role, Managername, Managerid, Manageremail, officenumber) {
        super(role, Managername, Managerid, Manageremail);
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