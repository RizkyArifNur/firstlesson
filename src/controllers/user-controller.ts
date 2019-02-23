import express, { Request, Response } from 'express'
import { UserService } from '../services'
import { BaseController } from './base-controller'
export class UserController extends BaseController {
  userService: UserService
  constructor() {
    super()
    this.path = '/user'
    this.userService = new UserService()
  }

  initializeRoute() {
    this.router.get(`/:id`, this.getUserById)

    this.router.post(`/`, async (req: Request, res: Response) => {})
    this.router.get(`/`, async (req: Request, res: Response) => {
      res.send('ini user')
    })
  }

  getUserById = async (req: Request, res: Response) => {
    res.send('hahah')
  }
}
