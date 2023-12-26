const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');
// Import other controllers if needed

// Routes
router.get('/ProductBrandList', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductCategoryList', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductSliderList', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductListByBrand/:BrandID', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductListByCategory/:CategoryID', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductListBySmilier/:CategoryID', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductListByKeyword/:Keyword', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductListByRemark/:Remark', productController.getAllProducts); // Replace with appropriate controller
router.get('/ProductDetails/:ProductID', productController.getProductById); // Replace with appropriate controller
router.get('/ProductReviewList/:ProductID', productController.getAllProducts); // Replace with appropriate controller
router.get('/UserOTP/:email', productController.getAllProducts); // Replace with appropriate controller
router.get('/VerifyLogin/:email/:otp', productController.getAllProducts); // Replace with appropriate controller
router.get('/UserLogout', productController.getAllProducts); // Replace with appropriate controller
router.post('/CreateProfile', productController.addProduct); // Replace with appropriate controller
router.post('/UpdateProfile', productController.updateProduct); // Replace with appropriate controller
router.get('/ReadProfile', productController.getAllProducts); // Replace with appropriate controller
router.post('/SaveWishList', productController.addProduct); // Replace with appropriate controller
router.post('/RemoveWishList', productController.deleteProduct); // Replace with appropriate controller
router.get('/WishList', productController.getAllProducts); // Replace with appropriate controller
router.post('/SaveCartList', productController.addProduct); // Replace with appropriate controller
router.post('/RemoveCartList', productController.deleteProduct); // Replace with appropriate controller
router.get('/CartList', productController.getAllProducts); // Replace with appropriate controller

module.exports = router;
