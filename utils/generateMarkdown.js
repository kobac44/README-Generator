// function to generate markdown for README
function generateMarkdown(data) {
  return `
# License

>  ![License: MIT](${
    data.license === "MIT"
      ? "https://img.shields.io/badge/License-MIT-yellow.svg"
      : ""
  })
 

## ${data.title}

##  Table of Contents
<!-- toc -->

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributors](#contributors)
[GitHub Informationl](#github-information)
[Questions](#questions)
[Credits](#credits)

# **Description**

${data.description}:

> This README.md generator is another way to create a README.md 
 
#  **Installation**

${data.installation}:

* Installations used were, node js, fs, util;



# **Usage**

${data.use}:

Run 'node index.js'. It will ask for a username and repo name

 
### **Contributors**

${data.contributors}:

## **GitHub Information**

[${data.github}](https://github.com/${data.github}/)
 
## *Questions*
 
> questions or comments contact me by${data.contact}:

${data.email} [${data.name}]

  
##  Test${data.test}
 
Install node.js node.js, fs, util, and inquirer. 


### Credits

*AskBCS https://uncralfsfpt0520.slack.com/services/B014ZJTDW86 learning assisstant https://www.npmjs.com/package/inquirer#question
https://uncralfsfpt0520.slack.com/archives/D013K5LA2FN, https://uncralfsfpt0520.slack.com/archives/D0163BM74BV

  `;
}

module.exports = generateMarkdown;
