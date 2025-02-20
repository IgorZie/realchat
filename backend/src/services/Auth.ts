import { NotFoundError, UnauthorizedError } from "../errors/Errors"
import { UsersRepositories } from "../repositories/Users"
import { ILogin } from "../schemas/AuthSchema"
import { Password } from "../security/Password"
import { Token } from "../security/Token"

export class Auth {

    async login(data: ILogin) {
        const { email, password } = data

        const usersRepositories = new UsersRepositories()

        const userExists = await usersRepositories.readByEmail(email)
        if (!userExists) {
            throw new NotFoundError({
                message: 'Credenciais inválidas'
            })
        }

        const newPassword = new Password(password)
        const verifyPass = newPassword.verify(String(userExists.password))

        if (!verifyPass) {
            throw new NotFoundError({
                message: 'Credenciais inválidas'
            })
        }

        const token = new Token()
        const createToken = await token.create({
            users_id: userExists.id
        })

        delete (userExists as  any).password

        return {
            ...userExists,
            token: createToken
        }

    }

    async isAuth(token: string) {

        const newToken = new Token() 
        const verifyToken = await newToken.verify(token)

        if (!verifyToken){
            return false
        }

        return true
    }

}