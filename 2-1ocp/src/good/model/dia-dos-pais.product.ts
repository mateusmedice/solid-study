import { DiaDosPaisCalculator } from "../calculator/dia-dos-pais.calculator";
import IPromotionCalculator from "../calculator/promotion-calculator";
import IProduct from "./product";

export default class DiaDosPaisProduct implements IProduct {
    name: string;
    price: number;
    promotionPrice: IPromotionCalculator = new DiaDosPaisCalculator();

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}