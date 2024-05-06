// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  if (license === 'Apache') {
    return '[License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
  if (license === 'IBM') {
    return '[License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)'
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'IBM') {
    return 'https://opensource.org/license/ibmpl-php'
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (license !== 'None') {
    return `[!${licenseBadge}](${licenseLink})`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license)
  return `# ${data.title}

  ${license}

  ## Description
  ${data.description}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test](#test)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}


## Usage
${data.usage}


## Contributions
${data.contributions}


## Test
${data.tests}


## Questions?
Reach me at the following:

Github: [${data.github}](github.com/${data.github})

Email: ${data.email}


## License
This application is covered under ${data.license}
`;
}

module.exports = generateMarkdown;
