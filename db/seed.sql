-- seed file used to fill out tables prior to queries
USE employee_db;
​
INSERT INTO department_table(id, department_name)
VALUES
(001, "Sales"),
(002, "Marketing"),
(003, "Engineering"),
(004, "Finance"),
(005, "Legal");

INSERT INTO role_table(id, title, salary, department_id)
VALUES
(41, "Salesperson", 40000, 001),
(42, "Sales Intern", 20000, 001),
(51, "Marketing Manager", 50000, 002),
(52, "Digital Marketing Specialist", 45000, 002),
(61, "Senior Engineer", 80000, 003),
(62, "Engineering Intern", 25000, 003),
(71, "Senior Accountant", 55000, 004),
(72, "Accountant", 55000, 004),
(81, "Senior Corporate Counsel", 110000, 005),
(82, "Laywer", 45000, 005);
​
INSERT INTO employee_table(id, first_name, last_name, role_id, manager_id)
VALUES
(4408, "Lynette", "Price", 41, NULL),
(4482, "Hugh", "Bailey", 42, 4408),
(4807, "Dolores", "Schneider", 42, 4408),
(5028, "Jeanette", "Watkins", 51, NULL),
(5049, "Mike", "Web", 52, 5028),
(5132, "Eileen", "Jensen", 52, 5028),
(5389, "Lela", "Freeman", 52, 5028),
(6378, "Oliver", "Higgins", 61, NULL),
(6198, "Casey", "Cooper", 62, 6378),
(6755, "Alan", "Zimmerman", 62, 6378),
(7815, "Kim", "McCormick", 71, NULL),
(7729, "Antonio", "Page", 72, 7815),
(7238, "Hannah", "Porter", 72, 7815),
(8632, "Bradley", "McLaughlin", 81, NULL),
(8311, "Nancy", "Cobb", 82, 8632),
(8949, "Seth", "Long", 82, 8632);
​