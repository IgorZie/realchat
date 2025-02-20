import express from 'express'
import UsersController from './controllers/UsersController'
import AuthController from './controllers/AuthController'

const authRoutes = express.Router()
const usersRoutes = express.Router()

// Auth - /api/auth
authRoutes.post('/login', AuthController.login)
authRoutes.get('/isAuth', AuthController.isAuth)

// Users Public - /api/users
usersRoutes.post('/', UsersController.create)

// Users - /api/v1/users
usersRoutes.get('/', UsersController.readAll)

export default {
    authRoutes,
    usersRoutes
}