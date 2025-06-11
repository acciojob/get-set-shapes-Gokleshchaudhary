class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers.");
        }
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        if (side <= 0) {
            throw new Error("Side must be a positive integer.");
        }
        super(side, side); // Call the Rectangle constructor
    }

    getPerimeter() {
        return 4 * this.width; // Since width and height are the same in a square
    }
}

// Example Usage
const rectangle = new Rectangle(5, 10);
const square = new Square(7);

const outputDiv = document.getElementById('output');
outputDiv.innerHTML += `<strong>Rectangle:</strong><br>`;
outputDiv.innerHTML += `Width: ${rectangle.width}<br>`;
outputDiv.innerHTML += `Height: ${rectangle.height}<br>`;
outputDiv.innerHTML += `Area: ${rectangle.getArea()}<br><br>`;

outputDiv.innerHTML += `<strong>Square:</strong><br>`;
outputDiv.innerHTML += `Width: ${square.width}<br>`;
outputDiv.innerHTML += `Height: ${square.height}<br>`;
outputDiv.innerHTML += `Area: ${square.getArea()}<br>`;
outputDiv.innerHTML += `Perimeter: ${square.getPerimeter()}<br>`;