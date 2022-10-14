import Shape from "./shape.type";

export class Circle implements Shape {
    
    public radius: number;

    constructor(radios: number) {
        this.radius = radios;
    }
    
    getArea(): number {
        return Math.PI * (this.radius * this.radius);
    }
    
}