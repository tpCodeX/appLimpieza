import express from 'express';
import ProductController from './controllers/ProductController';

const router=express.Router();//para crear el objeto router y usar sus métodos.

const productController = new ProductController();
router.get('/',(req,res) => {
    res.render('../views/index')
})


//Product Services
router.get("/productos", productController.handleListProducts.bind(productController));
router.get("/productos/add", (request, response) => {
  response.render("productos/add");
});
router.get("/productos/searchProducts", productController.handleSearchProduct.bind(productController));
router.get("/productos/edit", productController.handleGetProductData.bind(productController));

router.post("/productos/add-product", productController.handleCreateProduct.bind(productController));
router.post("/productos/delete", productController.handleDeleteProduct.bind(productController));
router.post("/productos/edit-product", productController.handleUpdateProductData.bind(productController));
//searchService




export default router;
