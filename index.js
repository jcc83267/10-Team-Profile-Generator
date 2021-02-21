const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');
const { listenerAdded } = require('emittery');
const { choices } = require('yargs');
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
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = new Manager(name, id, email, officeNumber);
            team.push(teamMember);
            userOptions();
        });
}

function userOptions() {
    inquirer.prompt([{
        type: 'list' ,
        name: 'userChoice',
        message: "Would you like to add more members?",
        choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, my team is done"]
    }])
    .then(function (data) {
        switch (data.userChoice) {
            case "Yes, add an Engineer":
                promptEngineer();
                break;

            case "Yes, add an Intern":
                promptIntern();
                break;
            case "No, my team is done":
                //function for team
                break;
        }
    });
}

function promptEngineer() {
    inquirer
        .prompt([{
                type: "text",
                name: "name",
                message: "What is the Engineer's name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is the Engineer's ID Number?"
            },
            {
                type: "text",
                name: "email",
                message: "What is the Engineer's email address?"
            },
            {
                type: "text",
                name: "github",
                message: "What is the Engineer's github?"
            }])

        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github);
            team.push(teamMember)
            console.log(teamMember);
            console.log(team)
            userOptions()
            
        });
}

function promptIntern() {
    inquirer
    .prompt([{
            type: "text",
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is the Intern's ID Number?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the Intern's email address?"
        },
        {
            type: "text",
            name: "github",
            message: "What is the Intern's current school?"
        }])

    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school);
        team.push(teamMember)
        console.log(teamMember);
        console.log(team)
        //userOptions()
        
    });
}

promptManager();
