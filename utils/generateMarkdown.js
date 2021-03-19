const license = ''
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT")
    return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`;
  if (license === "Unlicense")
    return `<img src="https://img.shields.io/badge/license-Unlicense-blue.svg"></img>`;
  if (license === "WTFPL")
    return `<img src="https://img.shields.io/badge/License-WTFPL-brightgreen.svg"></img>`;
    else ( license === null)
    return ''
}
renderLicenseBadge(license)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT")
    return "https://opensource.org/licenses/MIT";
  if (license === "Unlicense") return "http://unlicense.org/";
  if (license === "WTFPL") return "http://www.wtfpl.net/about/";
  else (license === null)
  return ''
}
renderLicenseLink(license)
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

---

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributions}


## License

This application is licensed under ${data.license} license.

## Tests 

${data.tests}

## Questions

If you have questions about this application pleaase open and issue or contact me at ${data.email}

---

`;
}

module.exports = generateMarkdown;
