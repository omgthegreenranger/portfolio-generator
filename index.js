const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Where are you?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your LinkedIN:',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your github:',
      name: 'github',
    },
    { type: 'input',
      message: 'Tell us about yourself:',
      name: 'bio',
    },
  ])
  .then((data) => {
    const filepath = `index.html`;
    const {username, location, linkedin, github, bio} = data;

    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${username} - Portfolio</title>
        <link rel="stylesheet" href="./assets/styles/styles.css">
    </head>
    <body>
        <header>
            <h1>${username}</h1>
            <h2>${location}</h2>
            <nav>
                <ul>
                    <li><a href="${linkedin}">LinkedIn</a></li>
                    <li><a href="${github}">GitHub</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <div><h3>ABOUT ME</h3></div>
                <div>${bio}</div>
            </section>
        </main>
    
    </body>
    </html>`

    fs.writeFile(filepath, template, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    console.log(data);
  });
