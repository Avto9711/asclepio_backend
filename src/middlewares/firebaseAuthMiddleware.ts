import { Request, Response, NextFunction } from "express"
import firebase from "../config/firebase"

export default async function checkAuth(req:Request, res:Response, next:NextFunction) {
    try {
        await firebase.auth().verifyIdToken("sd")
        next()
    } catch (error) {
        res.status(403).send('Unauthorized!')
        
    }
}