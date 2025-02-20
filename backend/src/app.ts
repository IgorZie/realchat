import express from "express"
import cors from "cors"
import Routes from './routes'
import helmet from "helmet"
import path from "path"
import { handleErrors } from './errors/handleErrors'
import { validToken } from "./middlewares/validToken"

const app = express()

app.use('/', express.static(path.join(__dirname, '..', 'public')))
app.use(cors({
    origin: [
        "http://localhost:3000"
    ]
}))
app.use(helmet({
    crossOriginResourcePolicy: false
}))
app.use(express.json())
app.use('/api/auth', Routes.authRoutes)
app.use('/api/users', Routes.usersRoutes)
app.use(validToken)
app.use('/api/v1/users', Routes.usersRoutes)
app.use(handleErrors)

export { app }