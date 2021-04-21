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
            'Add new employee',
            'Add new role',
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
        },{
            type: 'input',
            name: 'manager_id',
            message: 'What is the new employees manager id?',
        }
];


const addEmployee = () => {
    console.log(1)
    inquirer.prompt(addEmployeeQs)
    .then((answer) => {
        console.log(2)
        const query = `INSERT INTO employee_table(id, first_name, last_name, role_id, manager_id) VALUES (${answer.id}, ${answer.first_name}, ${answer.last_name}, ${answer.role_id},${answer.manager_id});`
        connection.query(query, (err,res) =>{
            if(err){ res.json(err) };
            console.table(res);
        })
    })
}

const addRole = () => {
    const query = 'SELECT * FROM employee_table ORDER BY manager_id;'
    connection.query(query, (err,res) =>{
        if(err){ res.json(err) }
        console.table(res)
    })
    // .then() prompt for employee name's, id, role, finished
}

const addDepartment = () => {
    const query = 'SELECT * FROM employee_table ORDER BY manager_id;'
    connection.query(query, (err,res) =>{
        if(err){ res.json(err) }
        console.table(res)
    })
    // .then() prompt for employee name's, id, role, finished
}

const removeEmployee = () => {

}

const removeRole = () => {

}

const removeDepartment = () => {

}

const updateRole = () => {

}

const updateManager = () => {

}




init();