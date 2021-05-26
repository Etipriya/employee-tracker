//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
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
 const answers = await inquirer.prompt({
   type:"list",
   name:"options",
   message:"What would you like to do?",
   choices:["Add department",]
 })
}
