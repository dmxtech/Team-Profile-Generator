const generateHTML = function () {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>My Team</title>
      <ul class="list-group">
      <li class="list-group-item">Role: ${role}</li>
      <li class="list-group-item">Name: ${name}</li>
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">GitHub: ${github}</li>
      <li class="list-group-item">School: ${school}</li>
    </ul>
    </head>
    <body>
    </body>
</html>`
}

const initCard = function (arr) {
    //if else statement
    let role;

    if (arr.title === "Manager") {
        role = `Office Number: ${arr.officenumber}`
    } else if (arr.title === "Engineer") {
        role = `Github: ${arr.github}`
    } else if (arr.title === "Intern") {
        role = `School: ${arr.school}`
    }



}
exports.generateHTML = generateHTML
exports.initCard = initCard;