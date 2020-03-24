import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit {

  cities: SelectItem[];
  selectedCity = 'moscow';

  @Output()
  cityChanged: EventEmitter<string> =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.cities = [
      {
        label: 'Moscow',
        value: 'moscow'
      },
      {
        label: 'Voronezh',
        value: 'voronezh'
      },
      {
        label: 'Berlin',
        value: 'berlin'
      },
      {
        label: 'Amsterdam',
        value: 'amsterdam'
      },
      {
        label: 'Barcelona',
        value: 'barcelona'
      }
    ];
  }

  processClickOnButton($event: Event) {
    console.log(this.selectedCity);
    this.cityChanged.emit(this.selectedCity);
  }
}
