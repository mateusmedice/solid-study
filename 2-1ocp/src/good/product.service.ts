import { DiaDosPaisCalculator } from "./calculator/dia-dos-pais.calculator";
import { DiaDasMaesProduct } from "./model/dia-das-maes.product";
import DiaDosPaisProduct from "./model/dia-dos-pais.product";
import IProduct from "./model/product";

export class ProductService {

    public async loadProducts(): Promise<any> {

        const products: Array<IProduct> = new Array();
        
        products.push(new DiaDasMaesProduct('Produto 1', 1000));
        products.push(new DiaDosPaisProduct('Produto 2', 1000));

        products.forEach(product => {
            console.log(product.name + ' - ' 
                    + product.price + ' - ' 
                    + product.promotionPrice.calculate(product));
        });

        return products;
    }
}