import express from "express";
const app = express();

app.use(express.json());

import mongoose from "mongoose";
import {mongoDBURL} from "./db.js";

import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"; 

const port = 5555;

import cors from "cors";
//option 1: allow all origins with default of cors(*)
app.use(cors());

//option 2: allow custom origins
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"]
//     })
// )

app.get("/",(request,response)=>{
    return response.status(234).send("welcome to book store project")
})

app.use("/books", booksRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to database");
    app.listen(port,()=>{
    console.log(`app is listening to port: ${port}`);
    })
})
.catch((err)=>{
    console.log(err);
})