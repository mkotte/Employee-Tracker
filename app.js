// dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const db = require('./config/connection');
const Department = require('./models/departmentcontroller')
const Employee = require('./models/employeecontroller')
const Role = require('./models/rolecontroller')


db.Department = new Department();
db.Employee = new Employee();
db.Role = new Role();



//prompts to add, view, update and delete (departments, roles + employees)
const questions = {
    
}

