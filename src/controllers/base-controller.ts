import express from 'express'
export class BaseController {
  public router = express.Router()
  public path = ''
  constructor() {
    this.initializeRoute()
  }
  protected initializeRoute() {}
}
