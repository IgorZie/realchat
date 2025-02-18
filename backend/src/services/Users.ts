import { ConflictError } from "../errors/Errors";
import { UsersRepositories } from "../repositories/Users";
import { IUsers } from '../schemas/UsersSchema'
import { Password } from "../security/Password";
import { generatePass } from "../utils/generatePass";

export class Users {

    async create(data: IUsers){
        const { name, email, phone, password } = data

        const usersRepositories = new UsersRepositories()

        const emailExists = await usersRepositories.readByEmail(email)
        if (emailExists){
            throw new ConflictError({
                message: 'Já existe um usuário com o endereço de e-mail informado'
            })
        }
        const passwordHash = new Password(password as string).create()

        const newUser = await usersRepositories.create({
            name,
            email,
            phone,
            password: passwordHash
        })

        delete (newUser as  any).password

        return {
            ...newUser
        }

    }    
    
}
