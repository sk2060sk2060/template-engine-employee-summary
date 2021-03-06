// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email, role="Employee") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;


// const employee = new Employee("Sharon", 23, "sharon@gmail.com")
// console.log(employee.getName());
// console.log(employee.getId());
// console.log(employee.getEmail());
// console.log(employee.getRole());
