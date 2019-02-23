import { App } from './src/app'
import { UserController } from './src/controllers'

const app = new App(
  [new UserController()],
  3000,
  'mongodb://localhost/first-lesson'
)

app.listen()
