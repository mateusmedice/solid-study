import IPromotionCalculator from "../calculator/promotion-calculator";

export default interface IProduct {
    name: string;
    price: number;
    promotionPrice: IPromotionCalculator;
}