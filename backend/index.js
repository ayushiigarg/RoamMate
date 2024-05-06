// importing packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// files
import connectDB from "./config/db.js";
//configuration
dotenv.config();
connectDB();
const app = express(); //instance of express js
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
//Routes
  app.listen(PORT, () => 
     console.log(`API server running on port ${PORT}`));


