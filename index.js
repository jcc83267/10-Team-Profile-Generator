const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template')
const team = [];


function promptManager() {

        
    inquirer
        .prompt([{
                type: "text",
                name: "name",
                message: "What is the Manager's name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is the Manager's ID Number?"
            },
            {
                type: "text",
                name: "email",
                message: "What is the Manager's email address?"
            },
            {
                type: "text",
                name: "officeNumber",
                message: "What is the Manager's Office Number?"
            }])
            
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber);
            team.push(teamMember)
            console.log(team)
        });
}

promptManager();
