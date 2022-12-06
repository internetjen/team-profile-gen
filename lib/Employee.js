//parent class: Employee 
//Returns 'Employee'
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Name from user input
    getName() {
        return this.name;
    }

    // ID from user input
    getId() {
        return this.id;
    }

    // Email from user input
    getEmail() {
        return this.email;
    }

    // Employee type returns 'employee' by default
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee