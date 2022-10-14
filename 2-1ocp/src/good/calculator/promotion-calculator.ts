import IProduct from "../model/product";

export default interface IPromotionCalculator {
    calculate(product: IProduct): number;
}