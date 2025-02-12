import { apiProducts } from "./../apis/products";

const actionProducts = {
    returnAllProducts: () => apiProducts.getAll().then((response) => response),
    createProduct: (data) => apiProducts.post(data).then((response) => response),
}

export default actionProducts;