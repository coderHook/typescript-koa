import { JsonController, Get, Param, Put, Body, Post, HttpCode, NotFoundError } from 'routing-controllers'
// import { pagesById, Page } from './data'
import User from './entity'

@JsonController()
export default class UserController {
  @Get('/users/')
  async allUsers(){
    const users = await User.find();
    return { users }
  }

  @Get('/users/:id')
  getUser(
    @Param('id') id: number
  ) {
    return User.findOne(id)
  }

  @Put('/users/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() update: Partial<User>
  ) {
    const user = await User.findOne(id)
    if(!user) throw new NotFoundError('Cannot Find User')

    return User.merge(user, update).save()
  }

  @Post('/users')
  @HttpCode(201)
  createUser(
    @Body() user: User
  ) {
    return user.save()
  }


}