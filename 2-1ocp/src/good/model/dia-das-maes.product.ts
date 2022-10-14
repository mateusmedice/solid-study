import { DiaDasMaesCalculator } from "../calculator/dia-das-maes-calculator";
import IPromotionCalculator from "../calculator/promotion-calculator";

import IProduct from "./product";

export class DiaDasMaesProduct implements IProduct {
    name: string;
    price: number;
    promotionPrice: IPromotionCalculator = new DiaDasMaesCalculator();
     
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}