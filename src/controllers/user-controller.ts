import { BaseController, get, post, router } from './base-controller'
@router('/user')
export class UserController extends BaseController {
  constructor() {
    super()
  }
  @get('/:id')
  async getBase(params) {
    return params
  }

  @post('/:id')
  async postBase(params) {
    return params
  }
}
