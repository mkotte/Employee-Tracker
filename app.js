// dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const dotenv = require('dotenv');

const db = require('./config/connection');
const Department = require('./models/departmentController');
const Employee = require('./models/employeeController');
const Role = require('./models/roleController');


db.Department = new Department();
db.Employee = new Employee();
db.Role = new Role();


//prompts to add, view, update and delete (departments, roles + employees)
const initPrompt = [
    {
        type: 'list',
        name: 'title',
        message: 'What would you like to do?',
        choices: ['View all employees', 'View all employees by department', 'View all employees by Manager', 'Add employee', 'Remove employee', 'Update employee', 'Update employee role', 'Update employee manager', 'Add ']
    }
]

const init = () => {
    promptUser()
    .then((answer) => {
        switch (answer.action){
            case 'View all employees':
                viewEmployees();
                break;
            case 'View all employees by department':
                viewByDepartment();
                break;
            case 'View all employees by Manager':
                viewByManager();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Remove employee':
                removeEmployee();
                break;
            case 'Update employee':
                updateEmployee();
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

}

const viewByDepartment = () => {

}

const viewByManager = () => {

}

const addEmployee = () => {

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