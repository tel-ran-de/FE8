import {Component, Input, OnInit} from '@angular/core';
import {ApiResponse} from '../../../model/weather';

@Component({
  selector: 'app-weather-informer-dummy',
  templateUrl: './weather-informer-dummy.component.html',
  styleUrls: ['./weather-informer-dummy.component.scss']
})
export class WeatherInformerDummyComponent {

  @Input()
  public weather: ApiResponse;

}
