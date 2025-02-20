import { Request, Response, NextFunction } from 'express'
import { ILogin, loginSchema } from '../schemas/AuthSchema'
import { Auth } from '../services/Auth'
import { zodValidator } from '../utils/validator/zod.validator';

async function login(request: Request, response: Response, next: NextFunction){

    try {

        const authService = new Auth()
        const validatedData: ILogin = zodValidator(loginSchema, request.body)

        const data = await authService.login(validatedData)

        return response.status(200).json({
            status: 200,
            description: 'Success',
            message: "Login realizado com sucesso",
            data
        })
         
    } catch(error){
        next(error)
    }

}

async function isAuth(request: Request, response: Response, next: NextFunction){
    const { authorization } = request.headers
    try {

        const authService = new Auth()

        const data = await authService.isAuth(String(authorization))

        return response.status(200).json({
            status: 200,
            description: 'Success',
            message: "Sessão está válida",
            data
        })
         
    } catch(error){
        next(error)
    }

}

export default {
    login,
    isAuth
}