const Employee = require("./Employee");

class Engineer extends Employee {
    // define properties
    constructor(name, id, email, github) {
        // use `super` keyword to refer to parent class
        super(name, id, email);
        this.github = github;
    }

    // methods
    getRole() {
        // override `Employee` and return `Engineer`
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;