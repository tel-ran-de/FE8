import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../model/weather';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

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
