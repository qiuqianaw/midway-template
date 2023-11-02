import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherEmptyDataError } from '../error/weather.error';
import { WeatherInfo } from '../interface/weather.interface';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    console.log(cityId);
    if (!cityId) {
      throw new WeatherEmptyDataError();
    }

    try {
      const result = await makeHttpRequest<WeatherInfo>(
        `http://www.weather.com.cn/data/sk/${cityId}.html`,
        {
          dataType: 'json',
        }
      );
      console.log('~result', result);
      if (result.status === 200) {
        return result.data as WeatherInfo;
      }
    } catch (error) {
      throw new WeatherEmptyDataError(error);
    }
  }
}
