// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project? Provide details.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide steps to install your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage info.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Did you do this on your own? Provide your contributers if any.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your application?',
      },
  ]);
};

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${answers.name}</h1>
    <p class="lead">${answers.title}</p>
    <h3>Example heading <span class="badge badge-secondary">Read Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">Description: ${answers.description}</li>
      <li class="list-group-item">Installation: ${answers.install}</li>
      <li class="list-group-item">Usage: ${answers.usage}</li>
      <li class="list-group-item">Contributers: ${answers.contribution}</li>
      <li class="list-group-item">Testing: ${answers.test}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// TODO: Create a function to initialize app
const init = async () => {
    console.log('README Generator');
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync('index.html', html);
  
      console.log('Successfully wrote to index.html');
    } catch (err) {
      console.log(err);
    }
  };
  

// Function call to initialize app
init();
