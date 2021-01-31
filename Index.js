const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

// put the output file in dist/
const output = path.join("./dist", "myTeam.html");
const render = require("./src/myTeamTemplate.js");

// to hold team members
var teamMembers = [];

// initial function that requires manager input
function createManager() {
    console.log("Welcome to the Team Profile Generator! Start by entering your team manager's information.")
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
        menu();
    });
}

function menu() {
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

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's first and last name:",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("You must enter the engineer's first and last name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please assign the engineer an ID number:",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("You must assign the engineer an ID number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the engineer's email address:",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("You must enter the engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("You must enter your engineer's GitHub username!");
                    return false;
                }
            }
        }
        
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        console.log(teamMembers);
        menu();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the intern's first and last name:",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("You must enter the intern's first and last name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Please assign the intern an ID number:",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("You must assign the intern an ID number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the intern's email address:",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("You must enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the intern's school:",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("You must enter the intern's school!");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        menu();
    });
}

function finishTeam() {
    fs.writeFileSync(output, render(teamMembers));
}

createManager();