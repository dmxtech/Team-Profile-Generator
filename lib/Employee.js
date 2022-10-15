
//name id email getName() getId() getEmail() getRole() // Returns 'Employee'

function promptEmployee(answers) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>My Team</title>
      <h1>My Team</h1>
      <div>
      <ul class="list-group">
      <li class="list-group-item">Name: ${answers.name}</li>
      <li class="list-group-item">Role: ${answers.role}</li>  
      <li class="list-group-item">Id: ${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">GitHub: {github}</li>
      <li class="list-group-item">School: {school}</li>
    </ul>
    </div>
    <div>
      <ul class="list-group">
      <li class="list-group-item">Name: ${answers.name}</li>
      <li class="list-group-item">Role: ${answers.role}</li>  
      <li class="list-group-item">Id: ${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">GitHub: {github}</li>
      <li class="list-group-item">School: {school}</li>
    </ul>
    </div>
    </head>
    <body>
    </body>
</html>
`;
}
module.exports = promptEmployee;
