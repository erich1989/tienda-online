import { GET, POST } from ".";
import { CART_ROUTER } from "../routes/routersApies";

const apiCart = {
    get: (data) => GET(`${CART_ROUTER}`),
    getAdd: (data) => GET(`${CART_ROUTER}/${data.productId}`),
};

export {
    apiCart,
};