import { Injectable } from '@angular/core';
import {ApiResponse} from '../model/weather';
import {weatherMap} from './weather-map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  public getWeather(city: string): ApiResponse {
    return weatherMap[city];
  }
}
