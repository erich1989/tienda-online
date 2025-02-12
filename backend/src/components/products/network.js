const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const authenticateToken = require('../../middleware/authMiddleware');

const router = express.Router();



// router.get('/:id',
//   // authenticateToken.authenticateToken,
//   async (req, res) => {
//   try {
//     const company = await controller.retrunCompany(req.params.id);
//     response.success(req, res, company, 200);
//   } catch (error) {
//     response.error(req, res, 'Unexpected Error', 500, error)
//   }
// });

router.get('/',
    // authenticateToken.authenticateToken,
    async (req, res) => {
        try {
            const products = await controller.retrunProducts(req.body);
            response.success(req, res, products, 200);
        } catch (error) {
            response.error(req, res, 'Unexpected Error', 500, error)
        }
    });

router.post('/',
    // authenticateToken.authenticateToken,
    async (req, res) => {
        try {
            const products = await controller.createProduct(req.body);
            //   response.success(req, res, products, 200);
            response.success(req, res, products, 200);
        } catch (error) {
            response.error(req, res, 'Unexpected Error', 500, error)
        }
    });

// router.post('/update', authenticateToken.authenticateToken, async (req, res) => {
//   try {
//     const info = await controller.update(req.body);
//     response.success(req, res, info, 200);
//   } catch (error) {
//     response.error(req, res, 'Unexpected Error', 500, error)
//   }
// });

// router.delete('/delete', authenticateToken.authenticateToken, async (req, res) => {
//   try {
//     const info = await controller.deleteElement(req.body.idCompany);
//     response.success(req, res, info, 200);
//   } catch (error) {
//     response.error(req, res, 'Unexpected Error', 500, error)
//   }
// });

module.exports = router;