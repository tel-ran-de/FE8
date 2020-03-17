import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {WeatherService} from '../../service/weather.service';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../model/weather';

export class DataRequest {
  city: string;
  metricSystem: string;
}

@Component({
  selector: 'app-weather-any-city',
  templateUrl: './weather-any-city.component.html',
  styleUrls: ['./weather-any-city.component.scss']
})
export class WeatherAnyCityComponent implements OnInit {

  metricSystems: SelectItem[];

  weather$: Observable<ApiResponse>;

  requestDataForm = new FormGroup({
      city: new FormControl('Moscow'),
      metricSystem: new FormControl('metric')
    }
  );

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.metricSystems = [
      {
        label: 'Metric',
        value: 'metric'
      },
      {
        label: 'Imperial',
        value: 'imperial'
      }
    ];
    this.requestDataForm.get('city').setValidators(Validators.required);
  }

  handleFormSubmit() {
    if (this.requestDataForm.valid) {
      this.weather$ = this.weatherService.getWeatherExtended(this.requestDataForm.value);
    }
  }
}
