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
      "View All Employees",
      "View All Departments",
      "View All Roles",
      "View All Employees By Department",
      "View All Employees By Manager",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Remove Employee",
      "Remove Department",
      "Remove Role",
      "Update Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "View Total Budget By Department",
      "Exit",
    ],
  });
  const answers = await inquirer.prompt(question);
  if (answers.action === "exit") {
    inProgress = false;
  } else {
    if (answers.action === "viewAllDepartments") {
      const query = "SELECT * FROM department";
      const data = await db.query(query);
      console.table(data);
    }
  }
}
init();
