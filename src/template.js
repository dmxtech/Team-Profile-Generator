// const index = require("./index.js")

// const Manager = require("../lib/Manager");


// const Employee = require("../lib/Employee");
// function to generate html
const generateHTML = function (getteam) {
  console.log("getteam", getteam);
  let templatelist = [];
  for (i = 0; i < getteam.length; i++) {
    console.log("my print", getteam[i].getRole());
    if (getteam[i].getRole() === "Manager") {
      templatelist.push(
        `
        <ul class="list-Manager">
          <li class="list-group-item">Role: ${getteam[i].role}</li>
          <li class="list-group-item">Name: ${getteam[i].name}</li>
          <li class="list-group-item">Email: (mailito ${getteam[i].email})</li>
          <li class="list-group-item">Id: ${getteam[i].id}</li>
          <li class="list-group-item">Office: ${getteam[i].officenumber}</li>
        </ul>
        `
      )
    }
    if (getteam[i].getRole() === "Engineer") {
      templatelist.push(
        `
        <ul class="list-Manager">
        <li class="list-group-item">Role: ${getteam[i].role}</li>
        <li class="list-group-item">Name: ${getteam[i].name}</li>
        <li class="list-group-item">Email: (mailito:${getteam[i].email})</li>
        <li class="list-group-item">Id: ${getteam[i].id}</li>
        <li href= https://github.com/${getteam[i].github} class="list-group-item">Github: https://github.com/${getteam.github}</li>
      </ul>
      `
      )
    }
    if (getteam[i].getRole() === "Intern") {
      templatelist.push(
        `
        <ul class="list-Manager">
        <li class="list-group-item">Role: ${getteam[i].role}</li>
        <li class="list-group-item">Name: ${getteam[i].name}</li>
        <li class="list-group-item">Email: (mailito:${getteam[i].email})</li>
        <li class="list-group-item">Id: ${getteam[i].id}</li>
        <li href= https://github.com/${getteam[i].github} class="list-group-item">Github: https://github.com/${getteam.github}</li>
        
     
      </ul>`
      )
    }
    console.log("templatelist", templatelist);
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>My Team</title>
    <h1>My Team</h1>
  </head>
  ${templatelist}
  <body>
  
  </body>
</html>
`
  }
}
exports.generateHTML = generateHTML



