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
    },
    {
        type: 'input',
        name: 'border',
        message: 'Enter a border width:',
    },
];

