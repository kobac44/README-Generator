const prompt = require("inquirer").createPromptModule();
const fs = require("fs");

const api = require("./utils/api.js");
const README = require();
const generateMarkdown = require("./utils/generateMarkdown.js");

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(readMe + ".Markdown", data, (error) =>
    error
      ? console.error(error)
      : console.log(`${fileName + "Markdown"} generated!`)
  );
};

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [];
function promptUser() {
  return inquirer.prompt([]);
}

// function call to initialize program
init();
