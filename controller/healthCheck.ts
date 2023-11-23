import { Request, Response } from "express";

const healthCheck = (req:Request, res:Response)=>{
    return res.status(200).json({message:"Server is running"})
}
export {healthCheck}