import express from "express";
import cors from "cors";
import  {signUpUser}  from "./controller/user.controller.js"


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))




app.get("/", (req, res) => {
    console.log("displaying homepage");
    res.send("Welcome to the homepage")
})

app.use("/signup", signUpUser)


export default app;