// function to generate markdown for README
function generateMarkdown(data) {
  return `
   
<a href="${data.link}" style="float:right"><img src="${data.avatar} "width="120" height="120"></a>

[!NPM version](https://badgen.net/npm/v/inquirer-emoji) <img src="https://badge.fury.io/js/inquirer.svg" alt="npm"


# License

 >  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
 

  ## Title

   ${data.title}:

   WATKINS README.md


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

 > ${data.description}:

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

${data.contributors}:

 * UNC/ TRILOGY provided starter files and code, and I was the developer.


 ## **GitHub Information**

 # '''https://github.com/kobac44'''

 Picture of Developer:

 <img src="https://lh3.googleusercontent.com/raXl2mzHfK1DSRpjIcHx_EaZFg2oH2QUciTc3ZQHQbBadd5-
 Ne4ht5gPv6CCssq4760AVA=s85" width="250px" >


 
 ## *Questions*
 
 > questions or comments contact me by ${data.contact}:

###  kobie.watkins@gmail.com

  
 ##  Test Example
  
Install node.js and use gitbash or terminal types to instal node.js, fs, util, and inquirer. Then in command line
run > node index.js. Screen shot provided.



  ### Credits

  *AskBCS https://uncralfsfpt0520.slack.com/services/B014ZJTDW86 learning assisstant https://www.npmjs.com/package/inquirer#question


  `;
}

module.exports = generateMarkdown;
