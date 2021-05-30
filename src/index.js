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
        short: "Employee",
        value: "viewAllEmployee",
        name: "View All Employee",
      },
      {
        short: "Employee By Department",
        value: "viewAllEmployeeByDepartment",
        name: "View All Employee By Department",
      },
      {
        short: "Employee By Role",
        value: "viewAllEmployeeByRole",
        name: "View All Employee By Role",
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
        short: "Role",
        value: "viewAllRole",
        name: "View All Role",
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
        short: "Department",
        value: "viewAllDepartment",
        name: "View All Department",
      },
      {
        value: "addDepartment",
        name: "Add Department",
      },
      {
        value: "removeDepartment",
        name: "Remove Department",
      },
      {
        short: "Budget",
        value: "viewBudget",
        name: "View Utilized Budget for a Department",
      },
      {
        short: "Exit",
        value: "exit",
        name: "Exit",
      },
    ],
  });

  //Using if else commands
  if (answers.options === "exit") {
    // inProgress = false;
    process.exit();
  } else if (answers.options === "viewAllDepartment") {
    const query = "SELECT * FROM department";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "addDepartment") {
    const newDepartment = addDepartment();
    const query = `INSERT INTO department (name) VALUES (${newDepartment})`;
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "removeDepartment") {
    const newDepartment = removeDepartment();
    const query = `DELETE FROM department (name) VALUES (${newDepartment})`;
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "addEmployee") {
    const newEmployee = addEmployee();
    const query = `INSERT INTO employee (name) VALUES (${newEmployee})`;
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "viewAllEmployees") {
    const newEmployee = viewAllEmployees();
    const query = "SELECT * FROM employee";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "viewAllEmployeeByDepartment") {
    const newEmployee = viewAllEmployeeByDepartment();
    const query = "VIEW department_id from department";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "viewAllEmployeeByRole") {
    const newEmployee = viewAllEmployeeByRole();
    const query = "SELECT role_id FROM employee";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "removeEmployee") {
    const newEmployee = removeEmployee();
    const query = "REMOVE first_name, last_name FROM employee";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "updateEmployee") {
    const newEmployee = updateEmployee();
    const query = "UPDATE first_name, last_name IN employee";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "updateEmployeeRole") {
    const newEmployee = updateEmployeeRole();
    const query = "UPDATE role_id IN employee";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "updateEmployeeManager") {
    const newEmployee = updateEmployeeManager();
    const query = "UPDATE manager_id IN employee";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "viewAllRole") {
    const newRole = viewAllRole();
    const query = "List of the role:";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "addRole") {
    const newRole = addRole();
    const query = "Add a new role in the list";
    const data = await db.query(query);
    console.table(data);
    init();
  } else if (answers.options === "removeRole") {
    const newRemoveRole = removeRole();
    const query = "Remove a role in the list";
    const data = await db.query(query);
    console.table(data);
    init();
  } else (answers.options === "viewBudget") {
    const newBudget = viewBudget();
    const query = "What is the new Budget?";
    const data = await db.query(query);
    console.table(data);
    init();
  }

  //Declaring addDepartment function
  async function addDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Which department this role belongs to?",
      name: "addDepartment",
    });
    const newDepartment = answers.addDepartment;
    return newDepartment;
  }

  //Declaring View Department
  async function viewAllDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Various department are:",
      name: "View All Department",
    });
    const viewDepartment = answers.viewAllDepartment;
    return viewDepartment;
  }

  //Declaring Remove department
  async function removeDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove Department",
      name: "Remove Department",
    });
    const removeDepartment = answers.removeDepartment;
    return removeDepartment;
  }

  //Declaring addEmployee function
  async function addEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Add Employee in the list",
      name: "Add an Employee",
    });
    const newEmployee = answer.addEmployee;
    return newEmployee;
  }

  //Declaring function for viewAllEmployees
  async function viewAllEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employee",
      name: "viewAllEmployee",
    });
    const viewEmployee = answer.viewAllEmployee;
    return newEmployee;
  }

  //Declaring function for employeesByDepartment
  async function viewAllEmployeesByDepartment() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employees by Department",
      name: "View All Employees By Departments",
    });
    const newViewAllEmployeeByDepartment = answer.viewAllEmployeesByDepartment;
    return newViewAllEmployeeByDepartment;
  }

  //Declaring function for employeesByRole
  async function viewAllEmployeeByRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View All Employees by Role",
      name: "View All Employees By Role",
    });
    const newViewAllEmployeeByRole = answer.viewAllEmployeeByRole;
    return newViewAllEmployeeByDepartment;

  }

  //Declaring function to removeEmployee
  async function removeEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove an Employee from the list",
      name: "Remove an Employee",
    });
    const newRemoveEmployee = answer.removeEmployee;
    return newRemoveEmployee;
  }

  //Declaring function to update an employee
  async function updateEmployee() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update an Employee",
      name: "Update an Employee",
    });
    const newUpdateEmployee = answer.updateEmployee;
    return newUpdateEmployee;
  }

  //Declaring function to update an employee role
  async function updateEmployeeRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update an Employee Role",
      name: "Update Employee Role",
    });
    const newUpdateEmployeeRole = answer.updateEmployeeRole;
    return newUpdateEmployeeRole;
  }

  //Declaring function to update employee Manager
  async function updateEmployeeManager() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Update the Employees Manager",
      name: "Update Employee Manager",
    });
    const newUpdateEmployeeManager = answer.updateEmployeeManager;
    return newUpdateEmployeeManager;
  }

  //Declaring addRole function
  async function addRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Added Role in the list",
      name: "Add role",
    });
    const newAddRole = answer.addRole;
  }

  //Declaring viewRoles function
  async function viewAllRole() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View various roles in the list",
      name: "View All Roles",
    });
    const newViewAllRole = answer.viewAllRole;
  }

  //Declaring removeRoles function
  async function removeRoles() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "Remove a role from the list",
      name: "Remove Roles",
    });
    const newRemoveRole = answer.removeRole;
  }

  //Declaring budget function
  async function viewBudget() {
    const answers = await inquirer.prompt({
      type: "input",
      message: "View the budget",
      name: "View Utilised Budget for a Department",
    });
    const newViewBudget = answer.viewBudget;
  }
}
init();
