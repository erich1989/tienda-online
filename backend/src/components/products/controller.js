const store = require('./store');
const { products, cart } = require('../../data/data');


function retrunProducts() {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(products);
            cart.splice(0, cart.length); 
        } catch (error) {
            reject(error);
        }
    })
};

function createProduct(data) {
    return new Promise(async (resolve, reject) => {
        try {
            // Obtener el ID más alto del array de productos
            const maxId = products.length > 0 ? Math.max(...products.map(product => product.id)) : 0;

            // Asignar el siguiente ID
            data.id = maxId + 1;

            // Agregar el nuevo producto al array
            products.push(data);

            resolve(products);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    retrunProducts,
    createProduct,
};