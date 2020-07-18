const inquirer = require("inquirer");
const fs = require("fs");
const userInfo = promptUser();
const util = require("util");
// const api = require("./utils/api.js");

const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");
const writeFileAsync = util.promisify(fs.writeFile);
// function call to initialize program
init();

async function init() {
  console.log("Welcome to Kobie Watkins README.md file Generator");
  try {
    const answers = await promptUser();

    const markDown = generateMarkdown(answers);

    await writeFileAsync("README.md", markDown);

    console.log("Successfully completed the README.md");
  } catch (err) {
    console.log(err);
  }
}

// array of questions for user

// const questions =  [

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "editor",
      name: "description",
      message: "Please provide a good description of your project.",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors?",
    },
    {
      type: "editor",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub User URL.",
    },
    {
      type: "input",
      name: "questions",
      message: "Any questions?",
    },
    {
      type: "input",
      name: "test",
      message: "What are the tests?",
    },
  ]);
}

// function call to initialize program
init();
