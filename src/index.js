//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const db = require()
const consoleTable = require("console.table");

//Declare the port and establish server
const connection = mysql.createConnection({
  host: "localhost",
  PORT = 3306,
  user: "root",
  password: "password",
  database: "company_db"
});

//Creating connection 
connection.connect(error => {
  if(error){
    console.log(error);
  }
  init();
})

//Added the init function
async function init() {
  console.log("Welcome to the employee tracker!\n");

  //Declaring a variable with options
  const answers = await inquirer.prompt({
   type:"list",
   name:"options",
   message:"What would you like to do?",
   choices:[
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
  ]
 })

 const reply = answers.init
}
