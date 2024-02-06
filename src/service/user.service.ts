import { Provide, Config, Init } from '@midwayjs/core';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  @Config('accessKey')
  accessKey;

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  @Init()
  async initMethod() {
    console.log(this.accessKey); // has value
  }
}
