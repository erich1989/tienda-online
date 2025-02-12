const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const authenticateToken = require('../../middleware/authMiddleware');

const router = express.Router();

router.get('/:id',
    // authenticateToken.authenticateToken,
    async (req, res) => {
        try {
            const productId = req.params.id;
            const cart = await controller.addProductToCart(productId);
            response.success(req, res, cart, 200);
        } catch (error) {
            response.error(req, res, 'Unexpected Error', 500, error)
        }
    });

router.get('/',
    // authenticateToken.authenticateToken,
    async (req, res) => {
        try {
            const cart = await controller.retrunCart();
            response.success(req, res, cart, 200);
        } catch (error) {
            response.error(req, res, 'Unexpected Error', 500, error)
        }
    });


module.exports = router;