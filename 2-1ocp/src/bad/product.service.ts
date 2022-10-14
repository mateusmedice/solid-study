import { Product } from "../base/product";
import { PromotionCalculatorService } from "./promotion-calculator.service";

export class ProductService {

    private products: Array<Product> = new Array();

    public async addProduct(product: Product): Promise<Array<Product>> {

        const calculatedProduct: Product = await new PromotionCalculatorService().calculate(product);

        this.products.push(calculatedProduct);

        return this.products;
    }
}