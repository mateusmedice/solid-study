import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
    
    public _width: number;
    public _height: number;

    constructor(width: number, height: number) {
        super(width, height);

        this._width = width;
        this._height = height;
    }
}