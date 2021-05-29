//Dependencies
const inquirer = require("inquirer");
const DB = require("../src/db/DB");
const consoleTable = require("console.table");

//Added the init function
async function init() {
  console.log("Employee Tracker!\n");

  //Declaring a variable with options
  const db = new DB("company_db");
  const answers = await inquirer.prompt({
    name: "options",
    type: "list",
    message: "What would you like to do?",
    choices: [
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

  if (answers.options === "exit") {
    // inProgress = false;
    process.exit();
  } else {
    if (answers.options === "viewAllDepartments") {
      const query = "SELECT * FROM department";
      const data = await db.query(query);
      console.table(data);
      init();
    } else if (answers.options === "addDepartment") {
      const newDepartment = addDepartment();
      const query = `INSERT INTO department (name) VALUES (${newDepartment})`;
      const data = await db.query(query);
      console.table(data);
    }
  }

  //Declaring addDepartment function
  async function addDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "What is the department this role belongs to?",
      name: "addDepartment",
    });
    const newDepartment = answers.addDepartment;
    return newDepartment;
  }

  //Declaring View Department
  async function viewAllDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Which department this role belongs to?",
      name: "View All Departments",
    });
    const newDepartment = answers.Department;
  }

  //Declaring Remove department
  async function removeDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove Department",
      name: "Remove Departments",
    });
    const newDepartment = answers.Department;
  }

  //Update an employee
  async function updateDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update Department",
      name: "Update Department",
    });
    const newDepartment = answers.department;
  }

  //Declaring addEmployee function
  async function addEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Added Employee in the list",
      name: "Add an Employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function for viewAllEmployees
  async function viewAllEmployees() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employees",
      name: "viewAllEmployees",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function for employeesByDepartment
  async function viewAllEmployeesByDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employees by Department",
      name: "View All Employees By Departments",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function for employeesByRole
  async function viewAllEmployeesByRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employees by Role",
      name: "View All Employees By Role",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function to removeEmployee
  async function removeEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove an Employee from the list",
      name: "Remove an Employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function to update an employee
  async function updateEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update an Employee",
      name: "Update an Employee",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function to update an employee role
  async function updateEmployeeRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update an Employee Role",
      name: "Update Employee Role",
    });
    const newEmployee = answer.employee;
  }

  //Declaring function to update employee Manager
  async function updateEmployeeManager() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update the Employees Manager",
      name: "Update Employee Manager",
    });
    const newEmployee = answer.employee;
  }

  //Declaring addRole function
  async function addRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Added Role in the list",
      name: "Add role",
    });
    const newRole = answer.Role;
  }

  //Declaring viewRoles function
  async function viewAllRoles() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View various roles in the list",
      name: "View All Roles",
    });
    const newRole = answer.Role;
  }

  //Declaring removeRoles function
  async function removeRoles() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove a role from the list",
      name: "Remove Roles",
    });
    const newRole = answer.Role;
  }

  //Declaring budget function
  async function viewBudget() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View the budget",
      name: "View Utilised Budget for a Department",
    });
    const newRole = answer.viewBudget;
  }
}
init();
