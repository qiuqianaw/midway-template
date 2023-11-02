import { MidwayError } from '@midwayjs/core';

export class WeatherEmptyDataError extends MidwayError {
  constructor(err?: Error) {
    super('weather is empty', {
      cause: err,
    });

    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
