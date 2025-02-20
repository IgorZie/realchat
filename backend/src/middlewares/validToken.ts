import { Request, Response, NextFunction } from 'express'
import { Token } from '../security/Token'
import { UnauthorizedError } from '../errors/Errors'

export async function validToken(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers

    try {
        
        const newToken = new Token() 
        const verifyToken = await newToken.verify(String(authorization))
        
        if (!verifyToken){
            throw new UnauthorizedError({})
        }

        next()

    } catch (error) {
        next(error)
    }
}
