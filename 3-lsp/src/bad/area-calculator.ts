import { Rectangle } from "./rectangle";
import { Square } from "./square";

export class AreaCalculator {

    public getArea(height, width): number {

        const rectangle: Rectangle = new Square(width, height);

        return rectangle.calculateArea();
    }
}