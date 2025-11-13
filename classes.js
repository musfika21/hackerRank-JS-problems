class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    
    perimeter() {
        // Calculate the sum of all sides
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}