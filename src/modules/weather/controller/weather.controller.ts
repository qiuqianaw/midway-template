import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
import { WeatherInfo } from '../interface/weather.interface';

@Controller('/')
export class WeatherController {
  @Inject()
  weatherService: WeatherService;

  @Get('/weather')
  async getWeatherController(
    @Query('cityId') cityId: string
  ): Promise<WeatherInfo> {
    console.log(process.config);
    return this.weatherService.getWeather(cityId);
  }
}
