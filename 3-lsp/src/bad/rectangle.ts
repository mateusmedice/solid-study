export class Rectangle {
    private width: number;
    private height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    public calculateArea(): number {
        return this.width * this.height;
    }
}