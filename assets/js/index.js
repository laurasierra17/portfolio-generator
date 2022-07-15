// Initialize modules
const fs = require('file-system');
const inquirer = require('inquirer');

// Prompt user for their name, location, bio, and URLs to their LinkedIn and GitHub
inquirer
    .prompt([
        {
            message: "What is your first name?",
            name: "firstName"
        },
        {
            message: "Where are you located?",
            name: "location"
        },
        {
            message: "How would you introduce yourself in one sentence?",
            name: "bio"
        },
        {
            message: "What is your LinkedIn username?",
            name: "linkedin"
        },
        {
            message: "What is your GitHub username?",
            name: "github"
        }
    ])
    .then(({ firstName, location, bio, linkedin, github }) => {
        // Save user's response in a string
        const linkedinURL = `https://www.linkedin.com/in/${linkedin}`;
        const githubURL = `https://www.github.com/${github}`;

    })