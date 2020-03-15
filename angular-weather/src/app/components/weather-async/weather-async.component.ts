import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../model/weather';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-weather-async',
  templateUrl: './weather-async.component.html',
  styleUrls: ['./weather-async.component.scss']
})
export class WeatherAsyncComponent implements OnInit {

  currentCity = 'moscow';

  weather: Observable<ApiResponse>;

  ngOnInit(): void {
    this.cityChangedEventHandler(this.currentCity);
  }

  constructor(private weatherService: WeatherService) {
  }

  cityChangedEventHandler(city: string) {
    this.currentCity = city;
    this.weather = this.weatherService.getWeather(city);
  }
}
