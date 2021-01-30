const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const { validate } = require('@babel/types');
const { getConsoleOutput } = require('@jest/console');

// output files here

// to hold team members
var teamMembers = [];

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

const init = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'initialOptions',
            message: 'Choose which action you would like to perform',
            choices: ['Add Manager', 'Add Engineer', 'Add Intern']
        }
    ])
}

init();