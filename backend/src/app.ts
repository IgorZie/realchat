import express from "express"
import cors from "cors"
import Routes from './routes'
import helmet from "helmet"
import path from "path"
import { handleErrors } from './errors/handleErrors'

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
app.use('/api/users', Routes.usersRoutes)
app.use(handleErrors)

export { app }