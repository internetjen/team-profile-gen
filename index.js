//Packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateHTML = require ("./generateHTML.js");

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Name:',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'ID#:',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Email:',
        }
    ])

.then((data) => {
    const content = generateHTML(data);
    fs.writeFile('newWebPage.html', content, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});


//parent class: Employee 
//Returns 'Employee'
// class Employee {
//     constructor (name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName() {
//         return
//     }
//     getId() {

//     }
//     getEmail() {

//     }
//     getRole() {

//     }
// };

// const createEmployee = new Employee();


// //subclass: Manager
// class Manager extends Employee {
//     officeNumber

//     constructor

//     getRole() //Overridden to return 'Manager'
// };

// //subclass: Engineer 
// class Engineer extends Employee {
//     github //GitHub username

//     constructor

//     getRole() //Overridden to return 'Engineer'
// };

// //subclass: Intern 
// class Intern extends Employee {
//     school

//     constructor

//     getSchool()
//     getRole() //Overridden to return 'Intern'  
// };
