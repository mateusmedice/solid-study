import { Product } from "../base/product";
import { PromotionType } from "../base/promotion-type";

export class PromotionCalculatorService {

    public async calculate(product: Product): Promise<Product> {

        if (PromotionType.DIA_DAS_MAES === product.promotionType) {
            product.price = product.price - ((product.price * 3) / 100);
        }

        if (PromotionType.DIA_DOS_PAIS === product.promotionType) {
            product.price = product.price - ((product.price * 6) / 100);
        }

        if (PromotionType.BLACK_FRIDAY === product.promotionType) {
            product.price = product.price - ((product.price * 9) / 100);
        }

        if (PromotionType.NATAL === product.promotionType) {
            product.price = product.price - ((product.price * 12) / 100);
        }

        return product;
    }
}