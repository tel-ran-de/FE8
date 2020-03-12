import {Component, OnInit} from '@angular/core';
import {User} from './components/user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-weather';

  currentCity = 'moscow';

  user = 'Vasya Pupkin';

  cityChangedEventHandler(city: string) {
    this.currentCity = city;
  }

  ngOnInit(): void {
    setTimeout(
      () => this.user = 'Masha Petrova',
      3000
    );
  }

  processUserChanged($event: string) {
    setTimeout(() => this.user = $event, 1000);
  }
}
