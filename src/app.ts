import express, { Router } from 'express'
import { BaseController } from './controllers'
import { connect } from 'mongoose'

export class App {
  public app: express.Application
  public port: number

  constructor(routers: Router[], port: number, mongoUrl: string) {
    this.app = express()
    this.port = port
    this.initializeMiddlewares()
    this.initializeControllers(routers)
    this.initializeDB(mongoUrl)
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
  }

  private initializeControllers(routers: Router[]) {
    routers.forEach(router => {
      this.app.use('/', router)
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
