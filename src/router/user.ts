import express from "express";
import { createUser,getUser } from "../controllers/user";

const routerUser = express.Router()

routerUser.post("/user",createUser )
routerUser.get("/user/:id", getUser)

export default routerUser;