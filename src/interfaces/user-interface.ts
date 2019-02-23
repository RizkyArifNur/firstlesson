import * as mongoose from 'mongoose'
import { ObjectID } from 'bson'
export interface IUser extends mongoose.Document {
  _id: ObjectID
  name: String
  password: String
}
