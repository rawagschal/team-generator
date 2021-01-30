const Employee = require('./Employee');

class Intern extends Employee {
    // define props
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // methods
    getRole() {
        //override to return `Intern`
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;