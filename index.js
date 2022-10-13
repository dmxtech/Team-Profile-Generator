const init = () => {
    promptUser()
        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();