import { Prisma, Users } from '@prisma/client';
import { prisma } from '../infra/database'

export class UsersRepositories {

    async readByEmail(email: string, beginTran?: Prisma.TransactionClient): Promise<Users | null> {
        const connection = beginTran ?? prisma
        return connection.users.findFirst({
            where: {
                email
            }
        })
    }

    async readById(id: number, beginTran?: Prisma.TransactionClient): Promise<Users | null> {
        const connection = beginTran ?? prisma
        return connection.users.findUnique({
            where: {
                id                
            }
        })
    }

    async create(data: IUsersCreate, beginTran?: Prisma.TransactionClient): Promise<Users | null> {
        const connection = beginTran ?? prisma
        return connection.users.create({
            data
        })
    }

    async update(data: IUsersUpdate, beginTran?: Prisma.TransactionClient): Promise<Users | null>{
        const connection = beginTran ?? prisma
        const { id, ...restData } = data
        return connection.users.update({
            data: {
                ...restData
            },
            where: {
                id
            }
        })
    }
    
    async readAll(filter?: IFilter, beginTran?: Prisma.TransactionClient): Promise<Users[] | []> {
        const connection = beginTran ?? prisma
        return connection.users.findMany({
            where: {
                name: {
                    contains: filter?.text
                }
            }
        })
    }

}

interface IFilter {
    text?: string
}

interface IUsersCreate {
    name: string
    email: string
    password: string
    phone?: string
}

interface IUsersUpdate {
    id: number
    name?: string
    email?: string
    phone?: string
}
