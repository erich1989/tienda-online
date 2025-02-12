import { GET, POST } from ".";
import { PRODUCTS_ROUTER } from "../routes/routersApies";

const apiProducts = {
    getAll: (data) => GET(`${PRODUCTS_ROUTER}`),
    post: (data) => POST(`${PRODUCTS_ROUTER}`, data),
};

export {
    apiProducts,
};