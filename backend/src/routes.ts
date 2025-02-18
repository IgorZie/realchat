import express from 'express'
import UsersController from './controllers/UsersController'

const usersRoutes = express.Router()

// Users - /api/users
usersRoutes.post('/', UsersController.create)

export default {
    usersRoutes
}