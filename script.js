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

// Export classes to the global scope
window.Rectangle = Rectangle;
window.Square = Square;