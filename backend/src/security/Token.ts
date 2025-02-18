import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export class Token {

    async create(data: { users_id: number }){
        const token = jwt.sign(data, String(process.env.JWT_SECRET))
        return token
    }

    async verify(token: string){
        try {

            jwt.verify(token, String(process.env.JWT_SECRET))
            return jwt.decode(token)

        } catch (error){
            return false
        }
    }

}
