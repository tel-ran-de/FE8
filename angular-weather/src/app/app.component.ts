import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-weather';

  currentCity = 'moscow';

  cityChangedEventHandler(city: string) {
    this.currentCity = city;
  }
}
