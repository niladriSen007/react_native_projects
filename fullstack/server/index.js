//create a basic index.js file
//import express from the node_modules folder
import express from "express";
import cors from 'cors'


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors())




app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});