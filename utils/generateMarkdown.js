// function to generate markdown for README
function generateMarkdown(data) {
  return `


    [!NPM version](https://badgen.net/npm/v/inquirer-emoji) <img src="https://badge.fury.io/js/inquirer.svg" alt="npm"


  # License

 >  [![License] (https://img.shields.io/badge/License-${data.license}.svg)]
 

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
 Clone the repository to your computer.



 # **Usage**

${data.use}:

Run 'node index.js'. It will ask for a username and repo name


 
### **Contributors**

  ${data.con}:

 * UNC/ TRILOGY provided starter files and code, and I was the developer.
 

 ## **GitHub Information**

 # '''https://github.com/kobac44'''

 Picture of Developer:


 
 ## *Questions*
 
 > questions or comments contact me by ${data.contact}:

###  kobie.watkins@gmail.com



    
 ##  Tests:
  $data.test

 
  {  } from "module":}
  
  `;
}

module.exports = generateMarkdown;
