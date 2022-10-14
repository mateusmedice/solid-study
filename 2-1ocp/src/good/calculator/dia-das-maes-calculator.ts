import IProduct from "../model/product";
import IPromotionCalculator from "./promotion-calculator";
import promotionCalculator from "./promotion-calculator";

export class DiaDasMaesCalculator implements IPromotionCalculator {
    calculate(product: IProduct): number {
        return product.price - ((product.price * 3) / 100);
    }

}