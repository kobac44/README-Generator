// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.title.toUpperCase()}

  ![License: ${
    data.lic ? data.lic : "None"
  }](https://img.shields.io/badge/License-MIT-yellow.svg-${
    data.lic ? data.lic : "None"
  }-brightgreen)

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
