// const index = require("./index.js")

// const Manager = require("../lib/Manager");


// const Employee = require("../lib/Employee");
// function to generate html
const generateHTML = function (getteam) {
  console.log("my print", getteam);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>My Team</title>
    <h1>My Team</h1>
    <div>
    ${getteam}
    <ul class="list-Manager">
    <li class="list-group-item">Role: ${getteam.role}</li>
    <li class="list-group-item">Name: ${getteam.Managername}</li>
    <li class="list-group-item">Email: (mailito ${getteam.Manageremail})</li>
    <li class="list-group-item">Id: ${getteam.Managerid}</li>
    <li class="list-group-item">Office: ${getteam.officenumber}</li>
    
 
  </ul>
  </div>
  <div>
    <ul class="list-Manager">
    <li class="list-group-item">Role: ${getteam.role}</li>
    <li class="list-group-item">Name: ${getteam.Engineername}</li>
    <li class="list-group-item">Email: (mailito:${getteam.Engineeremail})</li>
    <li class="list-group-item">Id: ${getteam.Engineerid}</li>
    <li href= https://github.com/${getteam.github} class="list-group-item">Github: https://github.com/${getteam.github}</li>
    
 
  </ul>
  </div>
  <div>
    <ul class="list-Manager">
    <li class="list-group-item">Role: ${getteam.role}</li>
    <li class="list-group-item">Name: ${getteam.Internname}</li>
    <li class="list-group-item">Email:(mailito ${getteam.Internemail})</li>
    <li class="list-group-item">Id: ${getteam.Internid}</li>
    <li class="list-group-item">School: ${getteam.school}</li>
    
 
  </ul>
  </div>
  
  </head>
  <body>
  </body>
</html>
`;
}
exports.generateHTML = generateHTML



