// function to generate markdown for README
function generateMarkdown(data) {
  return `
    [!NPM version](https://badgen.net/npm/v/inquirer-emoji) <img src="https://badge.fury.io/js/inquirer.svg" alt="npm"


  # Licence

 >  [![License] (https://img.shields.io/badge/License-${data.licence}.svg)]
 

  # ${data.title.toUpperCase()}

  ### node js :package:

  #  Table of Contents
  <!-- toc -->

  * [Description] (#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [GitHub Informationl](#github-information)
  * [Questions](#questions)
  * [Credits](#credits)

 # **Description**

 > ${data.desc}

 > This README.md generator is another way to create a README.md for developers. The application can only be
 be used in terminal or gitbash terminal using node js programming sofware. To run this project from the CLI using 
 key-word  node 'space' index.js calling a series of questions that generate a good README.md file.
 
 
#  **Installation**

   ${Installation}:

 * Installations used were, node js, fs, util, and the inquirer installed to run this application on gitbash terminal CLI.
 Using the terminal window the user must call / type - node js [return} and proceed with node index.js written on the command line 
 after that the command line interface will generate questions that have been answered by the programmer.

__Usage:_
    $data.use

 
### **Contributors**
  $data.c

  > questions or comments contact me by ${data.contact}:

  ###  kobie.watkins@gmail.com

    __Tests:__
  $data.test

  __Questions:__
  $data.questions

  {  } from "module":}
  
  `;
}

module.exports = generateMarkdown;
