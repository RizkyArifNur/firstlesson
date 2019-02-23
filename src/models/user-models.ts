import { model, Schema } from 'mongoose'
import { IUser } from '../interfaces/user-interface'

export const UserModel = model<IUser>(
  'user',
  new Schema({
    name: String,
    password: String
  })
)
