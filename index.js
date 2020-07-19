const inquirer = require("inquirer");
const fs = require("fs");
// const userInfo = promptUser();
const util = require("util");
// const api = require("./utils/api.js");

const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");
const writeFileAsync = util.promisify(fs.writeFile);

// licenses
const apache = {
  text:
    "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).",
  badge:
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
};
const gnu = {
  text:
    "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).",
  badge:
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
};
const mit = {
  text: "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).",
  badge:
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
};
const isc = {
  text: "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).",
  badge:
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
};

// function call to initialize program
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
      type: "list",
      name: "license",
      message:
        "Choose a license (if project is open sourced, please choose 'none' from the list below).",
      choices: ["Apache License", "GNU GPLv3", "MIT", "ISC", "None"],
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
      message: "Enter your GitHub Username.",
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
