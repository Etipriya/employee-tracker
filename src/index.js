//Dependencies
const inquirer = require("inquirer");
const DB = require("../src/db/DB");
const consoleTable = require("console.table");

// //Creating connection
// connection.connect(error => {
//   if (error) {
//     console.log(error);
//   }
//   init();
// });

//Added the init function
async function init() {
  console.log("Welcome to the employee tracker!\n");

  //Declaring a variable with options
  const db = new DB("company_db");
  const question = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: [
      // "View All Employees",
      // "View All Departments",
      // "View All Roles",
      // "View All Employees By Department",
      // "View All Employees By Manager",
      // "Add Employee",
      // "Add Department",
      // "Add Role",
      // "Remove Employee",
      // "Remove Department",
      // "Remove Role",
      // "Update Employee",
      // "Update Employee Role",
      // "Update Employee Manager",
      // "View Total Budget By Department",
      // "Exit",
      {
        short: "Employees",
        value: "viewAllEmployees",
        name: "View All Employees",
      },
      {
        short: "Employees By Department",
        value: "viewAllEmployeesByDepartment",
        name: "View All Employees By Department",
      },
      {
        short: "Employees By Role",
        value: "viewAllEmployeesByRole",
        name: "View All Employees By Role",
      },
      {
        short: "Add Employee",
        value: "addEmployee",
        name: "Add an Employee",
      },
      {
        short: "Remove Employee",
        value: "removeEmployee",
        name: "Remove an Employee",
      },
      {
        value: "updateEmployee",
        name: "Update an Employee",
      },
      {
        value: "updateEmployeeRole",
        name: "Update Employee Role",
      },
      {
        value: "updateEmployeeManager",
        name: "Update Employee Manager",
      },
      {
        short: "Roles",
        value: "viewAllRoles",
        name: "View All Roles",
      },
      {
        value: "addRole",
        name: "Add Role",
      },
      {
        value: "removeRole",
        name: "Remove Role",
      },
      {
        short: "Departments",
        value: "viewAllDepartments",
        name: "View All Departments",
      },
      {
        value: "addDepartment",
        name: "Add Departments",
      },
      {
        value: "removeDepartment",
        name: "Remove Departments",
      },
      {
        short: "Budget",
        value: "viewBudget",
        name: "View Utilised Budget for a Department",
      },
      {
        short: "Exit",
        value: "exit",
        name: "Exit",
      },
    ],
  });

  const answers = await inquirer.prompt(question);
  if (answers.options === "exit") {
    inProgress = false;
  } else {
    if (answers.options === "View All Departments") {
      const query = "SELECT * FROM department";
      const data = await db.query(query);
      console.table(data);
    } else {
    }
  }
  //Declaring addDepartment function
  async function addDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "What is the department this role belongs to?",
      name: "department",
    });
    const newDepartment = answers.department;
  }

  //Declaring addEmployee function
  async function addEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Added Employee in the list",
      name: "employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring addRole function
  async function addRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Added Role in the list",
      name: "role",
    });
    const newRole = answer.Role;
  }

  //Declaring View Department
  async function viewDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "What is the department this role belongs to?",
      name: "viewAllDepartments",
    });
    const newDepartment = answers.viewDepartment;
  }

  //Declaring Remove department
  async function removeDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove Department",
      name: "removeDepartment",
    });
    const newDepartment = answers.removeDepartment;
  }

  //Update an employee
  async function updateDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Add Department",
      name: "addDepartment",
    });
    const newDepartment = answers.department;
  }

  //Declaring View employee
  async function viewEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employees By Role",
      name: "employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring Remove an employee
  async function removeEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove an Employee",
      name: "employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring update an employee
  async function updateEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update an Employee",
      name: "employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring update an employee by role
  async function updateEmployeeByRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update an Employee By Role",
      name: "employee",
    });
    const newEmployee = answer.employee;
  }
}
init();
