// This license generates the badge to be displayed at the top of the README. 
function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GPLv3:  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'CC0 1.0': '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)', 
    'MPL 2.1': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Apache-2.0': '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };

  if (license === 'None') {
    return ''
  } else {
    return badges[license]  
  }
}

// This function will create the license link based off of the selected license. 
function renderLicenseLink(license) {
  const licenseLink = {
    MIT: '[License: MIT](https://opensource.org/licenses/MIT)',
    GPLv3:  '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
    'CC0 1.0': '[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)', 
    'MPL_2.1': '[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)',
    'Apache-2.0': '[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)'
  };
  
  if (license === 'None') {
    return ''
  } else {
    return licenseLink[license]  
  }
}

// This function will render the license section, if a license was selected.
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
    return `This project is under the ${renderLicenseLink(license)} license.`
  }
}

//This function holds the content that will be generated in Markdown. 

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
   
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  - [Features](#features)
  - [Tests](#tests)
  - [How to Contribute](#how-to-contribute)

  
  ## Installation
  
 ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credit}
  
  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  GitHub Username: [${data.username}](https://github.com/${data.username})

  If you have any other questions please email me at [${data.email}](mailto:${data.email})
  
  ## Features
  
  ${data.features}
  
  ## Tests

  ${data.tests}

  ## How to Contribute
  
  ${data.contributing}`
  
}

module.exports = {generateMarkdown};
