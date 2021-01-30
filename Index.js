const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

// output files here

// to hold team members
var teamMembers = [];

// questions for all employee types
const baseQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter employee's first and last name:",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("You must enter employee's first and last name:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please assign an ID number to the employee:",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("You must assign an ID number to the employee:");
                return false;
            }
        }
    },

];

// initial function that requires manager input
function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter your team manager's first and last name:",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log("You must enter your team manager's first and last name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Please assign your team manager an ID number:",
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log("You must assign your team manager an ID number!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your team manager's email address:",
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log("You must enter your team manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter your team manager's office number:",
                validate: managerOfficeNumberInput => {
                    if (managerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log("You must enter your team manager's office number!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            addEmployee();
        });
    }
createManager();
// console.log(teamMembers);


function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuOption",
            message: "What would you like to do next?",
            choices: [
                "Add an engineer",
                "Add an intern",
                "Finish building my team"
            ]
        }
    ]).then(chosenOption => {
        switch (chosenOption.menuOption) {
            case "Add an engineer":
                addEngineer();
                break;
            case "Add an intern":
                addIntern();
                break;
            case "Finish building my team":
                finishTeam();
        }
    });
}

function finishTeam() {
    
}

