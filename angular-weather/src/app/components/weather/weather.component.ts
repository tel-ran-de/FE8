import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  currentCity = 'moscow';

  ngOnInit(): void {
    this.cityChangedEventHandler(this.currentCity);
  }

  constructor() {
  }

  cityChangedEventHandler(city: string) {
    this.currentCity = city;
  }
}
