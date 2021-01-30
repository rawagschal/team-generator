const Employee = require('./Employee');

class Manager extends Employee {
    // define properties
    constructor(name, id, email) {
        // use `super` keyword to get defs from parent properties
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // methods
    getRole() {
        // override to return `Manager`
        return "Mananger";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;