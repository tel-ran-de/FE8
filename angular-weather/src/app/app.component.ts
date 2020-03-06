import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-weather';
  name = 'Vasya';
  items = [0, 1, 2, 3, 4];
}
