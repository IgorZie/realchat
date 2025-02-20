import { Request, Response, NextFunction } from 'express'
import { IUsers, usersSchema } from '../schemas/UsersSchema'
import { Users } from '../services/Users'
import { zodValidator } from '../utils/validator/zod.validator';

async function create(request: Request, response: Response, next: NextFunction) {
    try {
        
        const usersService = new Users()
        const validatedData: IUsers = zodValidator(usersSchema, request.body)
    
        const newUser = await usersService.create(validatedData)

        return response.status(201).json({
            status: 201,
            description: 'Created',
            message: "Usuário criado com sucesso",
            data: newUser
        })

    } catch (error) {
        next(error)
    }
}

async function readAll(request: Request, response: Response, next: NextFunction) {
    try {
        
        const usersService = new Users()
    
        const data = await usersService.readAll()

        return response.status(200).json({
            status: 200,
            description: 'Success',
            message: "Busca realizada com sucesso",
            data
        })

    } catch (error) {
        next(error)
    }
}

export default {
    create,
    readAll
}