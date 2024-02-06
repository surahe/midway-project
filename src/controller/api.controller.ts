import { Inject, Controller, Get, Query, Post, Body, Param, createRequestParamDecorator } from '@midwayjs/core';
import { ParseIntPipe } from '@midwayjs/validate';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

// 实现装饰器
export const Token = () => {
  return createRequestParamDecorator(ctx => {
    return ctx.headers.token;
  });
};

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query('uid') uid, @Token() token: string) {
    const user = await this.userService.getUser({ uid });
    // const query = this.ctx.query;
    return { success: true, message: 'OK', data: user };
  }

  @Post('/')
  async updateUser(@Body() user)  {
    // const body = this.ctx.request.body;
  }

  @Get(':uid')
  async getUserInfo(@Param('uid') uid: string) {
    // const params = this.ctx.params;
    // get cookie
    this.ctx.cookies.get('foo', { encrypt: true });
  }

  @Post('/update_apge')
  async updateAge (@Body('age', [ParseIntPipe]) age: number) {

  }
}
