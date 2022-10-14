import product from "../model/product";
import IPromotionCalculator from "./promotion-calculator";

export class DiaDosPaisCalculator implements IPromotionCalculator {
    calculate(product: product): number {
        return product.price - ((product.price * 10) / 100)
    }
    
}