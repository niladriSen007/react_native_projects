import express from 'express'
import { LoginUser, RegisterUser, UpdateUser } from '../controllers/auth.js';


const router = express.Router()

router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.put("/update/user/:id",UpdateUser);



export default router