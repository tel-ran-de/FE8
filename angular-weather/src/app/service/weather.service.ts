import { Injectable } from '@angular/core';
import {ApiResponse} from '../model/weather';
import {weatherMap} from './weather-map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataRequest} from '../components/weather-any-city/weather-any-city.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.openweathermap.org/data/2.5/weather';
  apiKey = '07ddf0059c262491e6a6255260e8c44e';

  constructor(private http: HttpClient) { }

  public getWeather(city: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>( `${this.url}?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  public getWeatherExtended(dataRequest: DataRequest): Observable<ApiResponse> {
    return this.http.get<ApiResponse>( `${this.url}?q=${dataRequest.city}&appid=${this.apiKey}&units=${dataRequest.metricSystem}`);
  }
}
