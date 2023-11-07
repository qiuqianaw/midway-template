import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './global/middleware/report.middleware';
import { WeatherErrorFilter } from './modules/weather/filter/weather.filter';
import config from './config/config.default';

@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config/config.default.ts')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    console.log(config.db);
    console.log(process.env);
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    this.app.useFilter([WeatherErrorFilter]);
  }
}
