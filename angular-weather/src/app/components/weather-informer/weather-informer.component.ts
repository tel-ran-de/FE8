import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../../service/weather.service';
import {ApiResponse} from '../../model/weather';

const WEATHER_FIELDS = [
  {
    name: 'City',
    weatherObject: 'name'
  },
  {
    name: 'Temp.',
    suffix: '&degC',
    weatherObject: 'main.temp'
  },
  {
    name: 'Feel',
    suffix: '&degC',
    weatherObject: 'main.feels_like'
  },
  {
    name: 'Wind',
    suffix: ' m/sec',
    weatherObject: 'wind.speed'
  },
  {
    name: 'Humidity',
    suffix: '%',
    weatherObject: 'main.humidity'
  },
  {
    name: 'Pressure',
    suffix: ' kPa',
    weatherObject: 'main.pressure'
  }
];

@Component({
  selector: 'app-weather-informer',
  templateUrl: './weather-informer.component.html',
  styleUrls: ['./weather-informer.component.scss']
})
export class WeatherInformerComponent implements OnInit {

  public weather: ApiResponse;

  private _city: string;

  @Input()
  set city(value: string) {
    this._city = value;
    this.weather = this.weatherService.getWeather(this._city);
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather = this.weatherService.getWeather(this._city);
  }

}
