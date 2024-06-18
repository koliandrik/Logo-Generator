const { Circle, Square, Triangle, Diamond } = require('./shapes.js');

// Test Circle
test('Circle renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="red" />`);
});

// Test Square
test('Square renders correctly', () => {
    const square = new Square('blue');
    expect(square.render()).toBe(`<rect x="50" y="0" width="200" height="200" fill="blue" />`);
});

// Test Triangle
test('Triangle renders correctly', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toBe(`<polygon points="150, 0 0,200 300,200" fill="green" />`);
});

// Test Diamond
test('Diamond renders correctly', () => {
    const diamond = new Diamond('yellow');
    expect(diamond.render()).toBe(`<polygon points="150,0 300,100 150,200 0,100" fill="yellow" />`);
});