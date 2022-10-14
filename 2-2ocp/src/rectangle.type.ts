import Shape from "./shape.type";

export class Rectangle implements Shape {
    public width: number;
    public height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
    
}