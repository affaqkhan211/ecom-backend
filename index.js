import express from "express";
const app = express();
import dotenv from "dotenv"
import Connection from "./db/conn.js";
import buyerRouter from "./routes/buyers/buyerRoutes.js";
import cors from "cors"


const port = 8000;
dotenv.config()
app.use(express.json())
app.use(cors())

Connection()

app.use("/api/buyers/", buyerRouter)
app.listen(port, () => {
    console.log("Listening on 8000");
    
})