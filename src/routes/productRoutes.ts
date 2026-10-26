// this file defines the routes for product-related endpoints.

import { Router } from "express";
import { createProduct, getProducts,  } from "../controllers/productController";

const router = Router();

// call getProducts function when a GET request matches this route. 
router.get("/", getProducts);
router.post("/", createProduct);

export default router;