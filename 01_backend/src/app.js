import express from 'express';
import cors from 'cors';
// cookie parser is used to access user broweser cookies and to set its cookies
import cookieParser from "cookie-parser"


const app = express()

// app.use method is used for middlewares and configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// accepting json file 
app.use(express.json({limit:"16kb"}))
// data coming from url  
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// to store favicon asset we use static
app.use(express.static("public")) 
app.use(cookieParser)

// routes import

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users",userRouter)

// https://localhost:8000/api/v1/users/register

export{ app } 