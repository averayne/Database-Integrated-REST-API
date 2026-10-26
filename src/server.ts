import "dotenv/config";
import express from "express";
import productRoutes from "./routes/productRoutes";
import prisma from "./utils/prisma";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Let the server know that it should parse incoming JSON payloads.
app.use(express.json());

// put all product related routes under the /products path.
app.use("/products", productRoutes);
app.use(errorHandler);

async function startServer() {
    // Checks database connection before starting the server.
    await prisma.$connect();

    //app.listen starts the server and listens for incoming requests.
    app.listen(3000, function() {

        console.log("Server is running on port 3000");
    });
}

// handle server start
startServer().catch(function(error) {

    // error handling for server start failure
    console.error("Error starting server:", error);

    // exit the process with an error code to indicate failure.
    process.exit(1);
});
