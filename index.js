
// String template literals for generating a string version of the HTML document before it is written to the file system

// 💡 Hints
// It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

// 🏆 Bonus
// Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?""
// ESM module method to import package
// import inquirer from 'inquirer';
// commonjs module is second method to import package

// const arya = {
//     first: "Arya",
//     last: "Stark",
//     origin: "Winterfell",
//     allegiance: "House Stark"
//   };

//   const greeting = `My name is ${arya.first}!
//   I am loyal to ${arya.allegiance}.`;

//   console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.

//   type: (String) Type of the prompt. Defaults: input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
// name: (String) The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
// message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of name (followed by a colon).
// 'location', 'bio', 'linkedinurl', 'githuburl', 'additionalprompt',

// const inquirer = require("inquirer")... inporting is required to initiate inquirer package prompts 
const inquirer = require("inquirer")
const fs = require('fs');
const questions = [
    {
        type: 'input',
        name: 'myname',
        message: 'please enter your name:'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Please enter your location:'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please enter your bio info:'
    },
    {
        type: 'input',
        name: 'linkedinurl',
        message: 'Please enter your linkedin url:'
    },
    {
        type: 'input',
        name: 'githuburl',
        message: 'Please enter your github url:'
    },
    {
        type: 'input',
        name: 'additionalprompts',
        message: 'Please enter any additional info:'
    },
    /* Pass your questions in here */
]
// .prompt is a method within the inquirer package, we are asking inquirer to prompt user with questions stored
// inside array object above ^ 
inquirer
    .prompt(questions)

    // second method for user prompts....
    // .prompt([
    //     {
    //         type: 'input',
    //         name: 'myname',
    //         message: 'please enter your name:'
    //     },
    //        {
    //         type: 'input',
    //         name: 'location',
    //         message: 'Please enter your location:'
    //        },
    //        {
    //         type: 'input',
    //         name: 'bio',
    //         message: 'Please enter your bio info:'
    //        },
    //        {
    //         type: 'input',
    //         name: 'linkedinurl',
    //         message: 'Please enter your linkedin url:'
    //        },
    //        {
    //         type: 'input',
    //         name: 'githuburl',
    //         message: 'Please enter your github url:'
    //        },
    //        {
    //         type: 'input',
    //         name: 'additionalprompts',
    //         message: 'Please enter any additional info:'
    //        },
    //     /* Pass your questions in here */
    // ])

    // var createGreeting = (message, name) => message + ", " + name + "!";
    // create string template literal to recall data from user answered questions array object...
    // exp...const greeting = `My name is ${arya.first}!
    // I am loyal to ${arya.allegiance}.`;
    // .then((answers) => {
    // }) .then above is the call back function that runs when all of the questions are answered by usered, it is attached to the .prompt(questions) function above ^. so the , prompt and .then work together .prompt is displaying questions array object in sequence to user .then is returning the user response as an object, then we use the string assigned to the variable "const htmltemplelit" to display user inputs as template literal in the form of html document
    .then((answers) => {
        // this console.log(answers) allows me to see answers from questions prompt array object as an object 
        console.log(answers)
        // // fs is a Node standard library package for reading and writing files
        // **All packages must be at top of index.js file**
        // const fs = require('fs');

        // // Return the contents of 'data.csv' as a string in the variable "data"
        // // "utf8" encodes the raw buffer data in human-readable format
        // fs.readFile('data.csv', 'utf8', (error, data) =>
        //   error ? console.error(error) : console.log(data)
        // );

        // // Uncomment this next function to write to the file with anything you pass in as process.argv[2]

        // // fs.writeFile('log.txt', process.argv[2], (err) =>
        // //   err ? console.error(err) : console.log('Success!')
        // // );
        const htmltempletlit = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mini Project</title>
        <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <div class="portfoliowrapper">
        <div class="container">
        <h1>Portfolio Generator</h1>
        <h2>My Name: ${answers.myname}!</h2>
        <p>Location: ${answers.location}!</p>
        <p>Bio: ${answers.bio}!</p>
        <p>LinkedIn URL: ${answers.linkedinurl}!</p>
        <p>GitHub URL: ${answers.githuburl}!</p>
        <p>Additional Prompt: ${answers.additionalprompts}!</p>
        </div>
        </div>
        </body>
        </html>`
        // Use user feedback for... whatever!!
        // ternary operator is alternative for if else to handle error to load and successfull load for user.
        fs.writeFile('index.html', htmltempletlit,  (err) =>
          err ? console.error(err) : console.log('Success!') )

          

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });