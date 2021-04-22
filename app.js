// dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mydogrocks',
    database: 'employee_db',
});

//prompts to add, view,and update (departments, roles + employees)
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
            'Add new employee',
            'Add new role',
            'Add new department',
            'Update employee role',
        ]
    }
]

const addEmployeeQs =[ 
    {
        type: 'input',
        name: 'id',
        message: 'What is the new employees id?',
    },
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the new employees first name?',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the new employees last name?',
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the new employees role id?',
    },
    {
        type: 'input',
        name: 'role_title',
        message: 'What is the new employees role title?',
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the new employees manager id?',
    }
];

const addRoleQs =[ 
{
    type: 'input',
    name: 'id',
    message: 'What is the new role id?',
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of the new role?',
},
{
    type: 'input',
    name: 'salary',
    message: 'What is the salary for the new role?',
},
{
    type: 'input',
    name: 'department_id',
    message: 'What is the department id for the new role?',
},
{
    type: 'input',
    name: 'department_name',
    message: 'What is the department name for the new role?',
},
];

const addDepartmentQs = [
{
    type: 'input',
    name: 'id',
    message: 'What is the new department id?',
},
{
    type: 'input',
    name: 'department_name',
    message: 'What is the new department name?',
}
];

const updateEmployeeRoleQs = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the employee?',
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the updated role id of the employee?',
    }
]

const init = () => {
    inquirer.prompt(initPrompt)
    .then((answer) => {
        switch (answer.options){
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
            case 'Update employee role':
                updateEmployeeRole();
                break;
        }
    })
};


const viewEmployees = () => {
    const query = 'SELECT * FROM employee_table;';
    connection.query(query, (err,res) =>{
        if(err){ res.json(err) };
        console.table(res);
    })
    init();
}

const viewDepartments = () => {
    const query = 'SELECT * FROM department_table;';
    connection.query(query, (err,res) =>{
        if(err){ res.json(err) };
        console.table(res);
    })
    init();
}

const viewRoles = () => {
    const query = 'SELECT * FROM role_table;'
    connection.query(query, (err,res) =>{
        if(err){ res.json(err) }
        console.table(res)
    })
    init();
}

const viewByManager = () => {
    const query = 'SELECT * FROM employee_table ORDER BY manager_id;'
    connection.query(query, (err,res) =>{
        if(err){ res.json(err) }
        console.table(res)
    })
    init();
}

const addEmployee = () => {
    inquirer.prompt(addEmployeeQs)
    .then((answer) => {
        const query = `INSERT INTO role_table(id , title) Value (${answer.role_id}, "${answer.role_title}");` 
        connection.query(query), (err,res) =>{
            if(err){ res.json(err) };
            console.table(res);
        }
        const query2 = 'INSERT INTO role_table SET ?';
        connection.query(query2, {
            id: answer.id,
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
        }, (err, res) => {
            if (err) throw err
            console.table(res)
            console.log('success')
        })
    })
}

const addRole = () => {
    inquirer.prompt(addRoleQs)
    .then((answer) => {
        const query = `INSERT INTO department_table(id , department_name) Value (${answer.department_id}, "${answer.department_name}");`
        connection.query(query), (err,res) =>{
            if(err){ res.json(err) }
            console.table(res)
        }
        const query2 = 'INSERT INTO role_table SET ?';
        connection.query(query2, {
            id: answer.id,
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id
        }, (err, res) => {
            if (err) throw err
            console.log('New role successfully added!')
        })
    })
}

const addDepartment = () => {
    inquirer.prompt(addDepartmentQs)
    .then((answer) => {
        const query = `INSERT INTO department_table(id , department_name) Value (${answer.id}, "${answer.department_name}");`
        connection.query(query, (err,res) =>{
            if(err){ res.json(err) }
        })
    })
};


const updateEmployeeRole = () => {
    inquirer.prompt(updateEmployeeRoleQs)
    .then((answer) => {
        const query = `UPDATE employee_table SET role_id = ${answer.role_id} WHERE id = ${answer.id};`
        connection.query(query, (err,res) =>{
            if(err){ res.json(err) }
            console.log('Successfully updated employee role!')
            viewEmployees();
        })
    })
    
}

init();