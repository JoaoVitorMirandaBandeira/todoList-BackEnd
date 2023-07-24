import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createTask = async (req: Request, res: Response) => {
    const {title, status,due_date} = req.body
    const userId = req.params.id
    try {
        const task = await prisma.task.create({
            data:{
                title,
                status,
                due_date,
                User: {connect: {id: userId}}
            }
        })
        return res.status(201).json(task)
    } catch (error) {
        return res.status(500).json(`Internal server erro: ${error}`)
    }
}

export const getTasks = async (req: Request, res:Response) => {
    const userId = req.params.id
    try {
        const tasks = await prisma.task.findMany({
            where:{
                userId
            }
        })
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(`Internal server erro: ${error}`)
    }
}