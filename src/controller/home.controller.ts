import { Controller, Get, Inject, UseGuard } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { AuthGuard } from '../guard/auth.guard';
import { Role} from '../decorator/role.decorator'

// @UseGuard(AuthGuard)
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context

  @Get('/')
  async home(): Promise<string> {
    // 获取 Session 上的内容
    // const userId =  this.ctx.session.userId;
    console.log(111)
    return 'Hello Midwayjs!';
  }
}
@UseGuard(AuthGuard)
@Controller('/user')
export class userController {

  // 只允许 admin 访问
  @Role(['admin'])
  @Get('/getUserRoles')
  async getUserRoles() {
    // ...
  }
}
