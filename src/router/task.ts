import express from "express"
import { createTask,getTasks } from "../controllers/task"

const routerTask = express.Router()

routerTask.post("/task/:id",createTask)
routerTask.get("/task/:id",getTasks)

export default routerTask