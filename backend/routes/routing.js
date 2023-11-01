const express = require("express");
const router = express.Router();
const controller=require('../controller/tb_product_datas-controller');

router.get('/plp', controller.getDataValues);
router.get('/pdp/:item_id',controller.getProductData);

module.exports=router;