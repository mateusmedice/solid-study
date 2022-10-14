export class AreaCalculator {

    public getAreaType(height, width): string {

        const rectangle = new Rectangle(width, height);

        if (rectangle.isSquare()) {
            return 'square';
        }

        return 'rectangle';
    }
}