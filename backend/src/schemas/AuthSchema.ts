import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email é um campo obrigatório',
        invalid_type_error: 'Email deve ser uma string'
    }).email('Email inválido'),
    password: z.string({
        required_error: 'Senha é um campo obrigatório',
        invalid_type_error: 'Senha deve ser uma string'
    }).min(6, 'Senha deve ter no minimo 6 caracteres')
})

export type ILogin = z.infer<typeof loginSchema>