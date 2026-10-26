import { Request, Response } from "express";
import { productSchema } from "../validations/productValidation";

import prisma from "../utils/prisma";

export async function getProducts(req: Request, res: Response) {

    // fetch all products from the databse.
    // findMany method is used to fetch all product from the databse.  
    const products = await prisma.product.findMany();

    // return fetched product as json response.
    res.json(products);
}


// create a new product.
// inserting the data into the database, and returning the saved product as a JSON response.
export async function createProduct(req: Request, res: Response) {

    // validate incoming request.
    const data = productSchema.parse(req.body);

    // insert the validated data into the table.
    const product = await prisma.product.create({
        data: data
    });

    // return the saved product as json response.
    res.status(201).json(product);

}