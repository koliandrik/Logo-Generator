const fs = require('fs');

const { Circle, Square, Triangle, Diamond } = require('./lib/shapes.js');

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

(async () => {
    const inquirer = await import('inquirer');

    inquirer.default.prompt(questions)
    .then(answers => {
        let { name, shape, textColor, shapeColor } = answers;

        name = name.toUpperCase();

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
        const svg = `
            <svg width="300" height="200">
                ${shapeObj.render()}
                <text x="150" y="100" font-size="50" fill="${textColor}" text-anchor="middle">${name}</text>
            </svg>
        `;
        const timestamp = new Date().getTime();
        const filename = `logo_${timestamp}.svg`;
        fs.writeFileSync(`./examples/${filename}`, svg);
        console.log(`Logo created! Check examples/${filename}`);
    }
    );
})();