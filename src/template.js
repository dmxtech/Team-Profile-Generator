// function to generate html
const generateHTML = function (getteam) {

  let templatelist = [];
  for (i = 0; i < getteam.length; i++) {
    if (getteam[i].getRole() === "Manager") {
      templatelist.push(
        `
        <ul class="list-Manager">
          <li class="list-group-item">Role: ${getteam[i].role}</li>
          <li class="list-group-item">Name: ${getteam[i].name}</li>
          <a class="list-group-item" href = "mailto: ${getteam[i].email}">Email:  ${getteam[i].email}</a>
          <li class="list-group-item">Id: ${getteam[i].id}</li>
          <li class="list-group-item">Office: ${getteam[i].officenumber}</li>
        </ul>
        `
      )
      if (getteam[1].getRole() === "Engineer") {
        templatelist.push(
          `
        <ul class="list-Engineer">
        <li class="list-group-item">Role: ${getteam[1].role}</li>
        <li class="list-group-item">Name: ${getteam[1].name}</li>
        <a class="list-group-item"href = "mailto: ${getteam[1].email}">Email: ${getteam[1].email}</a>
        <li class="list-group-item">Id: ${getteam[1].id}</li>
        <a href= https://github.com/${getteam[1].github} class="list-group-item">Github: https://github.com/${getteam[1].github}</a>
      </ul>
      `
        )
        if (getteam[2].getRole() === "Intern") {
          templatelist.push(
            `
        <ul class="list-Intern">
        <li class="list-group-item">Role: ${getteam[2].role}</li>
        <li class="list-group-item">Name: ${getteam[2].name}</li>
        <a class="list-group-item" href = "mailto: ${getteam[2].email}">Email:${getteam[2].email}</a>
        <li class="list-group-item">Id: ${getteam[2].id}</li>
        <li class="list-group-item">School: ${getteam[2].school}</li>
        </ul>
        `
          )

        }
      }
    }

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



