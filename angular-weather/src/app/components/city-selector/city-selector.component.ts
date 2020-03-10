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
  cityChangeEvent: EventEmitter<string> =  new EventEmitter<string>();

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
      }
    ];
  }

  processClickOnButton($event: Event) {
    console.log(this.selectedCity);
    this.cityChangeEvent.emit(this.selectedCity);
  }
}
