import { z } from "zod";

// Describes the data required to create each product reducing the risk of invalid input.
export const productSchema = z.object({
    name: z.string().trim().min(1),
    priceCents: z.number().int().min(0),
    quantity: z.number().int().min(0)
});

// name must be text.
// priceCents must be a whole number.
// quantity must be a whole number. 


// Converts the input to a number. 
export const idSchema = z.coerce.number().int().min(1);