import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function validToken(token: string) {
    try {
        const valid = JWT.verify(token, String(process.env.JWT_SECRET))

        if (!valid) {
            return false
        }
        return true

    } catch (error) {
        return false
    }
}
