USE company_db;

-- GET all departments with role information
SELECT name, title, salary FROM department LEFT JOIN role ON department.id=role.department_id;

-- GET all roles with department information
SELECT title as "role", name as "department", salary as "salary" FROM department;

-- Get all departments
SELECT * FROM department;

-- Get all roles
SELECT id, title FROM role;

-- Get all employees
SELECT id, first_name, last_name FROM employee;

-- Get all employees with role and department information
SELECT first_name, last_name, title, salary, name FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id;

-- Get all employees with role and department information and manager
SELECT employee_role.first_name, employee_role.last_name, title, salary, name, employee_manager.first_name, employee_manager.last_name
FROM employee employee_role 
LEFT JOIN role 
ON employee_role.role_id=role.id 
LEFT JOIN department
ON role.department_id=department.id
LEFT JOIN employee employee_manager
ON employee_role.manager_id=employee_manager.id;