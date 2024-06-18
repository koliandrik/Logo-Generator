const { Circle, Square, Triangle, Diamond } = require('./lib/shapes.js');
const fs = require('fs');

// Import the required modules

// Define the questions for the user prompt
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter logo text (max 3 characters):',
        validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape (circle, square, triangle):',
        choices: ['circle', 'square', 'triangle', 'diamond'],
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color:',
    }
];

// Main code block
(async () => {
    // Import the 'inquirer' module
    const inquirer = await import('inquirer');

    // Prompt the user with the defined questions
    inquirer.default.prompt(questions)
    .then(answers => {
        // Retrieve the user's answers
        let { name, shape, textColor, shapeColor } = answers;

        // Convert the name to uppercase
        name = name.toUpperCase();

        // Create the shape object based on the user's choice
        let shapeObj;
        switch (shape) {
            case 'circle':
                shapeObj = new Circle(shapeColor);
                break;
            case 'square':
                shapeObj = new Square(shapeColor);
                break;
            case 'triangle':
                shapeObj = new Triangle(shapeColor);
                break;
            case 'diamond':
                shapeObj = new Diamond(shapeColor);
                break;
        }

        // Generate the SVG code for the logo
        const svg = `
            <svg width="300" height="200">
                ${shapeObj.render()}
                <text x="150" y="100" font-size="50" fill="${textColor}" text-anchor="middle">${name}</text>
            </svg>
        `;

        // Generate a unique filename based on the current timestamp
        const timestamp = new Date().getTime();
        const filename = `logo_${timestamp}.svg`;

        // Write the SVG code to a file
        fs.writeFileSync(`./examples/${filename}`, svg);

        // Print a success message with the filename
        console.log(`Logo created! Check examples/${filename}`);
    });
})();
