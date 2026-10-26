import { Request, Response, NextFunction} from "express";
import { ZodError } from "zod";

export function errorHandler(
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // return an appropriate resonse based on the error. 
    if (error instanceof ZodError) {

        // 400 invalid input
        res.status(400).json ({
            message: "invalid product",
            errors: error.issues
        });
        return;
    }

    // log errors in the terminal.
    console.error(error);
    res.status(500).json({
        // 500 internal server error
        message: "internal server error"
    });
}