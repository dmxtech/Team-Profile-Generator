
//name id email getName() getId() getEmail() getRole() // Returns 'Employee'
class Employee {
  constructor(role, name, id, email) {
    this.role = role
    this.name = name
    this.id = id
    this.email = email

  }
  getName() {
    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return this.role
  }

}
module.exports = Employee