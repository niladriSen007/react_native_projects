//create a basic index.js file
//import express from the node_modules folder
import express from "express";
import cors from 'cors'
import { connectDB } from "./database/connection.js";
import userRouter from "./routes/userRoutes.js"


const app = express();
const PORT = 5000;

connectDB()


app.use(express.json());
app.use(cors())
app.use("/auth",userRouter)




app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});