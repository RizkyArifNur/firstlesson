import express from 'express'
import { BaseController } from './controllers'
import { appendFile } from 'fs'
import { connect } from 'mongoose'

export class App {
  public app: express.Application
  public port: number

  constructor(controllers: BaseController[], port: number, mongoUrl: string) {
    this.app = express()
    this.port = port
    this.initializeMiddlewares()
    this.initializeControllers(controllers)
    this.initializeDB(mongoUrl)
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
  }

  private initializeControllers(controllers: BaseController[]) {
    controllers.forEach(controller => {
      this.app.use(controller.path, controller.router)
    })
  }

  private initializeDB(url: string) {
    connect(url)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`listening on port ${this.port}`)
    })
  }
}
