import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import json from "json"


const app = express();

app.use(cookieParser());
app.use(cors(
    {
       origin : process.env.CORS_ORIGIN , 
       credentials : true
    }
)); 
app.use(json({limit : "16Kb"}));
app.use(urlencoded({extented : true , limit : "16Kb"}));

export { app};