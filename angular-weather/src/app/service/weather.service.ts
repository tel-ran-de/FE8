import { Injectable } from '@angular/core';
import {ApiResponse} from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  public getWeather(city: string): ApiResponse {
    return {
      coord: {
        lon: 39.17,
        lat: 51.67
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
        icon: '04n'
        }
      ],
    base: 'stations',
    main: {
      temp: 11,
      feels_like: 6.28,
      temp_min: 11,
      temp_max: 11,
      pressure: 1009,
      humidity: 32
      },
    visibility: 10000,
    wind: {
      speed: 3,
      deg: 150
      },
    clouds: {
      all: 67
      },
    dt: 1583863813,
    sys: {
      type: 1,
      id: 9034,
      country: 'RU',
      sunrise: 1583812103,
      sunset: 1583853534
      },
    timezone: 10800,
    id: 472045,
    name: 'Voronezh',
    cod: 200
    };
  }
}
