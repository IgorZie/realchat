import { Request, Response, NextFunction } from 'express'
import { IUsers, usersSchema } from '../schemas/UsersSchema'
import { z } from 'zod';
import { Users } from '../services/Users'

async function create(request: Request, response: Response, next: NextFunction) {
    try {
        
        const usersService = new Users()
        const validatedData: IUsers = usersSchema.parse(request.body)
    
        const newUser = await usersService.create(validatedData)

        return response.status(201).json({
            status: 201,
            description: 'Created',
            message: "Usuário criado com sucesso",
            data: newUser
        })

    } catch (error) {
        if (error instanceof z.ZodError) {
            return response.status(400).json({ message: "Erro de validação", errors: error.errors })
        } else {
            return response.status(500).json({ message: "Erro interno do servidor." })
        }
    }

}

export default {
    create
}