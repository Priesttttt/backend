import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async () =>{
   try{
    // connection Instance
    const CI = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`DATABASE CONNECTED !!! from host ${CI.connection.host}`)

   }
   catch(error){
     console.log("ERROR from DB" , error);
     process.exit(1)
   }
}
export default connectDB;

