//Dependencies
const inquirer = require("inquirer");
const DB = require("../src/db/DB");
const consoleTable = require("console.table");

//Added the init function
async function init() {
  console.log("Employee Tracker!\n");

  //Declaring a variable with options
  const db = new DB("company_db");
  let inProgress = true;
  while (inProgress) {
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
          short: "Employee",
          value: "viewAllEmployeeByManager",
          name: "View All Employee By Manager",
        },
        {
          short: "Employee",
          value: "viewAllEmployeeByRole",
          name: "View All Employee By Role",
        },
        {
          short: "Add Employee",
          value: "addEmployee",
          name: "Add an Employee",
        },
        {
          value: "updateEmployeeRole",
          name: "Update Employee Role",
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
          short: "Department",
          value: "viewAllDepartment",
          name: "View All Department",
        },
        {
          value: "addDepartment",
          name: "Add Department",
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
      inProgress = false;
      db.end();
    } else if (answers.options === "viewAllDepartment") {
      const query = "SELECT * FROM department";
      const data = await db.query(query);
      console.table(data);
      // init();
    } else if (answers.options === "addDepartment") {
      const { name } = await addDepartment(db);
      const query = `INSERT INTO department (name) VALUES ("${name}")`;
      await db.query(query);
    } else if (answers.options === "addEmployee") {
      const { first_name, last_name, role_id } = await addEmployee(db);
      const query = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${first_name}", "${last_name}", ${role_id})`;
      await db.query(query);
      // console.table(data);
      // init();
    } else if (answers.options === "viewAllEmployee") {
      // const newEmployee = viewAllEmployees();
      const query = "SELECT first_name, last_name FROM employee;";
      const data = await db.query(query);
      console.table(data);
      // init();
    } else if (answers.options === "viewAllEmployeeByManager") {
      const { manager_id } = await viewAllEmployeeByManager(db);
      const query = `SELECT first_name, last_name FROM employee WHERE employee.manager_id = ${manager_id}`;
      const data = await db.query(query);
      console.table(data);
      // init();
    } else if (answers.options === "viewAllEmployeeByRole") {
      const { role_id } = await viewAllEmployeeByRole(db);
      const query = `SELECT first_name, last_name FROM employee WHERE role_id = ${role_id}`;
      const data = await db.query(query);
      console.table(data);
      // init();
    } else if (answers.options === "updateEmployeeRole") {
      updateEmployeeRole();
      console.log("employee updated successfully");
    } else if (answers.options === "viewAllRole") {
      const query = "SELECT * FROM role;";
      const data = await db.query(query);
      console.table(data);
    } else {
      const { title, salary, department_id } = await addRole(db);
      const query = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${department_id})`;
      await db.query(query);
    }
  }

  //Declaring addDepartment function
  async function addDepartment(db) {
    const generateChoices = departments => {
      return departments.map(department => {
        return {
          short: department.id,
          name: department.name,
          value: department.id,
        };
      });
    };
    const allDepartments = await db.selectAll("department");
    const answers = await inquirer.prompt([
      {
        type: "list",
        message: "What role employee have?",
        name: "department_id",
        choices: generateChoices(allDepartments),
      },
    ]);
    // const newEmployee = answer.addEmployee;
    return answers;
  }

  //Declaring addEmployee function
  async function addEmployee(db) {
    const generateChoices = roles => {
      return roles.map(role => {
        return {
          short: role.id,
          name: role.title,
          value: role.id,
        };
      });
    };
    const allRoles = await db.selectAll("role");
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "last_name",
      },
      {
        type: "list",
        message: "What role employee have?",
        name: "role_id",
        choices: generateChoices(allRoles),
      },
    ]);
    // const newEmployee = answer.addEmployee;
    return answers;
  }

  //Declaring function for employeeByManager
  async function viewAllEmployeeByManager(db) {
    const generateChoices = employees => {
      return employees.map(employee => {
        return {
          short: employee.id,
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        };
      });
    };
    const allEmployees = await db.selectAll("employee");
    const managers = allEmployees.filter(each => {
      return each.is_manager === 1;
    });
    const answers = await inquirer.prompt({
      type: "list",
      message: "Please select a manager",
      name: "manager_id",
      choices: generateChoices(managers),
    });
    return answers;
  }

  //Declaring function for employeesByRole
  async function viewAllEmployeeByRole(db) {
    const generateChoices = roles => {
      return roles.map(role => {
        return {
          short: role.id,
          name: role.title,
          value: role.id,
        };
      });
    };
    const allRoles = await db.selectAll("role");

    const answers = await inquirer.prompt({
      type: "list",
      message: "Please select a role",
      name: "role_id",
      choices: generateChoices(allRoles),
    });
    return answers;
  }

  //Declaring function to update an employee role
  async function updateEmployeeRole(db) {
    const generateEmployeeChoices = employees => {
      return employees.map(employee => {
        return {
          short: employee.id,
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        };
      });
    };
    const allEmployees = await db.selectAll("employee");
    const generateRoleChoices = roles => {
      return roles.map(role => {
        return {
          short: role.id,
          name: role.title,
          value: role.id,
        };
      });
    };
    const allRoles = await db.selectAll("role");
    console.table(allRoles);
    const answers = await inquirer.prompt(
      {
        type: "list",
        message: "Which employee role do you want to update",
        name: "id",
        choices: generateEmployeeChoices(allEmployees),
      },
      {
        type: "list",
        message: "Which employee role do you want to update",
        name: "role_id",
        choices: generateRoleChoices(allRoles),
      }
    );
    await db.query(
      `UPDATE employee SET role_id = ${answers.role_id} WHERE id = ${answers.id}`
    );
  }

  //Declaring addRole function
  async function addRole(db) {
    const generateChoices = departments => {
      return departments.map(department => {
        return {
          short: department.id,
          name: department.name,
          value: department.id,
        };
      });
    };
    const allDepartments = await db.selectAll("department");
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the title of the role?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary",
      },
      {
        type: "list",
        message: "What department is the role?",
        name: "department_id",
        choices: generateChoices(allDepartments),
      },
    ]);
    // const newEmployee = answer.addEmployee;
    return answers;
  }
}
init();
