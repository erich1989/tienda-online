import { apiCart } from "./../apis/cart";

const actionCart = {
    returnCart: () => apiCart.get().then((response) => response),
    addProductToCart: (data) => apiCart.getAdd(data).then((response) => response),
}

export default actionCart;