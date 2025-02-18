import { v4 } from 'uuid'

interface IError{
    message?: string,
    action?: string,
    statusCode?: number,
    stack?: any
    errorUniqueCode?: string
    errorId?: string
    description?: string
    details?: any[]
}

export class BaseError extends Error{

    action: string
    statusCode: number
    stack: any
    errorId: string
    details: any

    constructor(error: IError){
        super()
        this.name = this.constructor.name
        this.message = error?.message || ''
        this.action = error?.action || ''
        this.statusCode = error?.statusCode || 500
        this.stack = error?.stack || this.stack
        this.errorId = error?.errorId || v4()
        this.details = error?.details
    }

}

export class BadRequestError extends BaseError{

    constructor(error?: IError){
        super({
            statusCode: error?.statusCode || 400,
            message: error?.message || 'Um erro de validação ocorreu.',
            action: error?.action || 'Verifique se os dados informados estão corretos.',
            details: error?.details,
            stack: error?.stack
        })
    }

}

export class NotFoundError extends BaseError{

    constructor(error?: IError){
        super({
            statusCode: error?.statusCode || 404,
            message: error?.message || 'Não foi possível encontrar este recurso no sistema.',
            action: error?.action || 'Verifique se os dados informados estão corretos.',
            stack: error?.stack
        })
    }

}

export class ConflictError extends BaseError{

    constructor(error?: IError){
        super({
            statusCode: error?.statusCode || 409,
            message: error?.message || 'Um conflito ocorreu.',
            action: error?.action || 'Verifique se o cadastro já existe ou se há vinculos, se não houver nenhum conflito tente novamente e se o erro persistir informe o \'errorId\' ao suporte.',
            details: error?.details,
            stack: error?.stack
        })
    }

}

export class ForbiddenError extends BaseError{

    constructor(error?: IError){
        super({
            statusCode: error?.statusCode || 403,
            message: error?.message || 'Você não possui permissão para executar esta ação.',
            action: error?.action || 'Verifique se você possui permissão para executar esta ação.',
            stack: error?.stack
        })
    }

}

export class UnauthorizedError extends BaseError{

    constructor(error?: IError){
        super({
            message: error?.message || 'Usuário não autenticado.',
            action: error?.action || 'Verifique se você está autenticado com uma sessão ativa e tente novamente.',
            statusCode: 401,
            stack: error?.stack
        })
    }

}

export class InternalServerError extends BaseError{

    constructor(error?: IError){
        super({
            statusCode: error?.statusCode || 500,
            message: error?.message || 'Um erro interno não esperado aconteceu.',
            action: error?.action || 'Entre em contato com o suporte e informe o \'errorId\'.',
            stack: error?.stack
        })
    }

}

export class ServiceUnavailableError extends BaseError{

    constructor(error?: IError){
        super({
            statusCode: error?.statusCode || 503,
            message: error?.message || 'Serviço indisponível no momento.',
            action: error?.action || 'Verifique se o serviço está disponível. Se o problema persistir informe o \'errorId\' ao suporte.',
            stack: error?.stack
        })
    }

}