const { writeFile } = require('fs').promises;



const generateHTML = ({ role, name, id, email, github, school }) =>
    `<!DOCTYPE html>
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
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
    promptUser()

        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();