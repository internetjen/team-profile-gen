//Packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');

//parent class: Employee 
//Returns 'Employee'
class Employee {
    name
    id
    email

    constructor

    getName()
    getId()
    getEmail()
    getRole() 

};

//subclass: Manager
class Manager extends Employee {
    officeNumber

    constructor

    getRole() //Overridden to return 'Manager'

}

//subclass: Engineer 
class Engineer extends Employee {
    github //GitHub usernam

    constructor

    getRole() //Overridden to return 'Engineer'
}

//subclass: Intern 
class Intern extends Employee {
    school

    constructor

    getSchool()
    getRole() //Overridden to return 'Intern'
    
}