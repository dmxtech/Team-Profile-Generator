// function to generate html
const generateHTML = function (getteam) {
  console.log("getteam", getteam);
  let templatelist = [];
  for (i = 0; i < getteam.length; i++) {
    console.log("my print", getteam[i]);
    console.log("templatelist0", templatelist);
    if (getteam[i].getRole() === "Manager") {
      templatelist.push(
        `
        <ul class="list-Manager">
          <li class="list-group-item">Role: ${getteam[i].role}</li>
          <li class="list-group-item">Name: ${getteam[i].name}</li>
          <li class="list-group-item" href = "mailto: ${getteam[i].email}">Email:  ${getteam[i].email}</li>
          <li class="list-group-item">Id: ${getteam[i].id}</li>
          <li class="list-group-item">Office: ${getteam[i].officenumber}</li>
        </ul>
        `
      )
      console.log("my print1", getteam[i]);
      console.log("templatelist1", templatelist);
      if (getteam[1].getRole() === "Engineer") {
        templatelist.push(
          `
        <ul class="list-Engineer">
        <li class="list-group-item">Role: ${getteam[1].role}</li>
        <li class="list-group-item">Name: ${getteam[1].name}</li>
        <li class="list-group-item"href = "mailto: ${getteam[1].email}">Email: ${getteam[1].email}</li>
        <li class="list-group-item">Id: ${getteam[1].id}</li>
        <li href= https://github.com/${getteam[1].github} class="list-group-item">Github: https://github.com/${getteam[1].github}</li>
      </ul>
      `
        )
        console.log("templatelist2", templatelist);
        console.log(templatelist);
        if (getteam[2].getRole() === "Intern") {
          templatelist.push(
            `
        <ul class="list-Intern">
        <li class="list-group-item">Role: ${getteam[2].role}</li>
        <li class="list-group-item">Name: ${getteam[2].name}</li>
        <li class="list-group-item" href = "mailto: ${getteam[2].email}">Email:${getteam[2].email}</li>
        <li class="list-group-item">Id: ${getteam[2].id}</li>
        <li class="list-group-item">School: ${getteam[2].school}</li>
        </ul>
        `
          )
          console.log("templatelist3", templatelist);
        }
      }
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



