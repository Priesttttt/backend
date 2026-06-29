// require('dotenv').config({path : './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config();

//connection to the database
connectDB()
//async await returns a promise
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server runnig at port ${process.env.PORT}`);
    });

})
.catch((err) => {
    console.log("MONGODB connection Error" , err);
})
