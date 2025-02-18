import { NextFunction, Request, Response } from "express"
import { 
    ForbiddenError,
    InternalServerError,
    UnauthorizedError,
    ConflictError,
    BadRequestError,
    NotFoundError,
    ServiceUnavailableError,
    BaseError
} from "./Errors"

export function handleErrors(error: BaseError, request: Request, response: Response, next: NextFunction) {
    try {
        if (
            error instanceof ForbiddenError ||
            error instanceof InternalServerError ||
            error instanceof UnauthorizedError ||
            error instanceof ConflictError ||
            error instanceof BadRequestError ||
            error instanceof NotFoundError ||
            error instanceof ServiceUnavailableError
        ) {
            return response.status(error.statusCode).json({
                ...error
            })
        }
        const defaultError = new InternalServerError({})
        defaultError.message = error?.message
        return response.status(defaultError.statusCode).json(defaultError)
    } catch (error) {
        const defaultError = new InternalServerError({})
        return response.status(defaultError.statusCode).json(defaultError)
    }
}
