// dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'mydogrocks',
    database: 'employee_db',
  });



//prompts to add, view, update and delete (departments, roles + employees)
const initPrompt = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
            'View all employees by manager',
            'Add employee','Add new role',
            'Add new department',
            'Remove employee',
            'Remove role',
            'Remove department',
            'Update employee',
            'Update employee role',
            'Update employee manager']
    }
]

const init = () => {
    promptUser()
    .then((answer) => {
        switch (answer.action){
            case 'View all employees':
                viewEmployees();
                break;
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees by manager':
                viewByManager();
                break;
            case 'Add new employee':
                addEmployee();
                break;
            case 'Add new role':
                addRole();
                break;
            case 'Add new department':
                addDepartment();
                break;
            case 'Remove employee':
                removeEmployee();
                break;
            case 'Remove role':
                removeRole();
                break;
            case 'Remove department':
                removeDepartment();
                break;
            case 'Update employee role':
                updateRole();
                break;
            case 'Update employee manager':
                updateManager();
                break;

        }
    })
};


const viewEmployees = () => {
    console.table(Employees)
}

const viewByDepartment = () => {
    console.table(Department)
}

const viewByManager = () => {

}

const addEmployee = () => {
    console.table(Employee);
    // prompt for employee name's, id, role, finished
}

const removeEmployee = () => {

}

const updateEmployee = () => {

}

const updateRole = () => {

}

const updateManager = () => {

}




init();