import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if (!user.name || !user.email) {
            return response.status(400).json({message:"Submit all fields"})
        }
        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'User Created'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json( users )
    } 
}
