import { UserModel } from '../models'

export class UserService {
  async getUserById(id: String) {
    const result = await UserModel.findById(id)
    if (!result) {
      return 'No data found'
    }
    return result
  }
}
