import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma = new PrismaClient()

export const getUser =async (req: Request, res: Response) => {
    const userId = req.params.id
    try {
        const user = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(`Internal server error: ${error}`)
    }
}
export const createUser = async (req: Request, res: Response) => {
    const {email,name,password} = req.body;
    try{
        const user = await prisma.user.create({
            data:{
                email,
                name,
                password
            }
        })
        return res.status(201).json(user)
    }catch(error){
        return res.status(500).json(`Internal server error: ${error}`)
    }
}