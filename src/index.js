//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

//Declare the port and establish server
const connection = mysql.createConnection({
  host: "localhost",
  PORT = 3000,
  user: "root",
  password: "root",
  database: "company_db"
});

//Listener
const app = express();
app.listen(PORT, () => {
  console.log(`Navigate to localhost: ${PORT}`);
});
