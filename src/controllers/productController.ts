import { Request, Response } from "express";
import { productSchema, idSchema } from "../validations/productValidation";

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

export async function getProduct(req: Request, res: Response) {

    // Reads the produuct id frm the url parameters (req.params.id) and validates it using idSchema.
    const id = idSchema.parse(req.params.id);

    // ask postgres for the product with the id. 
    // converts and validates the id using idSchema.
    const product = await prisma.product.findUnique({
        where: {
            id: id 
        }
    });

    // return the fetched product as json response.
    res.json(product);
}

export async function updateProduct(req: Request, res: Response) {

    // validate id from url 
    const id = idSchema.parse(req.params.id);

    // validate the new product values from the request body.
    const data = productSchema.parse(req.body);

    // update the product in the database with new data. 
    const product = await prisma.product.update({
        where: {
            id: id
        },
        data: data
    });

    // return the updated product as json response.
    res.json(product);
}

// delete a product by its id.
export async function deleteProduct(req: Request, res: Response) {

    // validate id from url 
    const id = idSchema.parse(req.params.id);

    // delete the product from the database by its id. 
    await prisma.product.delete({
        where: {
            id: id
        }
    });

    // confirms the deletion with a json response.
    res.json({ message: "Product deleted successfully" });
}