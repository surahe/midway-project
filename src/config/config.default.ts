import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1706761156412_3804',
  koa: {
    port: 7001,
  },
  accessKey: process.env.OSS_ACCESSKEY,     // 54321
  secret: process.env.OSS_SECRET            // 12345
} as MidwayConfig;
