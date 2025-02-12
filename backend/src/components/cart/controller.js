const store = require('./store');
const { products, cart } = require('../../data/data');


function retrunCart() {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(cart);
        } catch (error) {
            reject(error);
        }
    })
};

function addProductToCart(productId) {
    return new Promise(async (resolve, reject) => {
        try {
            const myProduct = products.find(product => product.id === Number(productId));
            cart.push(myProduct);
            resolve(cart);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    retrunCart,
    addProductToCart,
};