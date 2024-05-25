import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "/.env"
})


const port = 5555


connectDB().then(() => {
    app.listen(process.env.PORT_NUMBER || port , () => {
        console.log(`Express server running on port number ${process.env.PORT_NUMBER}`);
    })
}).catch((error) => {
    console.log(`Error Occured - express` , error);
})


