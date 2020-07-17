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

  _Repo by ${data.name}_
  
  __${data.desc}__

  ---
 __Installation:__
  ${data.import
    
    __Usage:__
  $data.use

  __Contributors:__
  $data.con

    __Tests:__
  $data.test

  __Questions:__
  $data.questions

  {  } from "module":}
  
  `;
}

module.exports = generateMarkdown;
