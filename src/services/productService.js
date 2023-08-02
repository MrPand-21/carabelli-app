import axios from "axios"


//Çalışır Durumda Değildir, minik yapı redux'a taşındı
export default class ProductService {

    products = []

    getProducts() {
        return this.products
    }

    getById(id) {
        return this.products.find(p => p.id == id)
    }

    addProduct(fee, name, desc) {
        this.products.push(
            {
                fee: fee,
                ad: name,
                a: desc,
                id: this.products.length + 1
            }
        )

        return this.products
    }

}