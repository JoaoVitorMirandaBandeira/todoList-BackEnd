import express,{Request,Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import routerUser from "./router/user";
import routerTask from "./router/task";


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(routerUser)
app.use(routerTask)

app.listen(PORT,() => {
    console.log(`Serve init http://localhost:${PORT}`)
} )