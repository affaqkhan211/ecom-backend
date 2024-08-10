import express from "express";
import { registerBuyer } from "../../controllers/buyers/buyersControllers.js";
const buyerRouter = express.Router();

buyerRouter.post("/register", registerBuyer)

export default buyerRouter;