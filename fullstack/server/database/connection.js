import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(`mongodb+srv://niladri:nil@cluster0.f7m9n9s.mongodb.net/`)
        console.log(`Connection Successful`)
    }catch(e){
        console.log(`Server error occured - ${e}`)
    }
}