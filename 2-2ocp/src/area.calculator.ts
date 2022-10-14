import { Circle } from "./circle.type";
import Shape from "./shape.type";

export class AreaCalculator {

    public calculateArea(shape: Shape): number {

        return shape.getArea();
    }

}