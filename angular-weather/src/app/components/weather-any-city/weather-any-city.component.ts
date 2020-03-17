import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-weather-any-city',
  templateUrl: './weather-any-city.component.html',
  styleUrls: ['./weather-any-city.component.scss']
})
export class WeatherAnyCityComponent implements OnInit {

  metricSystems: SelectItem[];

  requestDataForm = new FormGroup({
      city: new FormControl(''),
      metricSystem: new FormControl('')
    }
  );

  constructor() { }

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
  }

}
