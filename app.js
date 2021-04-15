// dependencies
const inquirer = require('inquirer');
const db = require('./db/connection');
const Department = require('./db/departmentcontroller')
const Employee = require('./db/employeecontroller')
const Role = require('./db/rolecontroller')


db.Department = new Department();
db.Employee = new Employee();
db.Role = new Role();

//prompts
const questions = {}