// Load environment variables
import "dotenv/config";

// Import Prisma client
import { PrismaClient } from "@prisma/client";

// Create a new Prisma client instance
const prisma = new PrismaClient();

export default prisma;