// const index = require("./index.js")

// const Employee = require("../lib/Employee");

const generateHTML = function (employeeinfo) {
  console.log(employeeinfo);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>My Team</title>
    <h1>My Team</h1>
    <div>
    <ul class="list-Manager">
    <li class="list-group-item">Role: ${employeeinfo.role}</li>
    <li class="list-group-item">Name: ${employeeinfo.name}</li>
    <li class="list-group-item">Email: ${employeeinfo.email}</li>
    <li class="list-group-item">Id: ${employeeinfo.id}</li>
    <li class="list-group-item">Office: ${employeeinfo.office}</li>
    
 
  </ul>
  </div>
  
  </head>
  <body>
  </body>
</html>
`;
}
exports.generateHTML = generateHTML



