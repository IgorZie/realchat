import { z } from 'zod'

export const usersSchema = z.object({
    name: z.string({
        required_error: 'Nome é um campo obrigatório',
        invalid_type_error: 'Nome deve ser uma string'
    }).min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
    email: z.string({
        required_error: 'Email é um campo obrigatório',
        invalid_type_error: 'Email deve ser uma string'
    }).email('Email inválido'),
    password: z.string({
        required_error: 'Senha é um campo obrigatório',
        invalid_type_error: 'Senha deve ser uma string'
    }).min(6, 'Senha deve ter no minimo 6 caracteres'),
    phone: z.string({
        invalid_type_error: 'Telefone deve ser uma string'
    }).min(10, 'Telefone deve ter no minimo 10 caracteres').max(11, 'Telefone deve ter no máximo 11 caracteres').optional()
})

export type IUsers = z.infer<typeof usersSchema>