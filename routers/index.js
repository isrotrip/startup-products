const express = require('express');

const Controller = require('../controllers/controller.js');

const router = express.Router();

router.get('/', Controller.getStartups);

router.get('/products/:startupId/create', Controller.getFormCreateProduct);
router.post('/products/:startupId/create', Controller.createProduct);

router.get('/testModel', Controller.testModel);

module.exports = router;