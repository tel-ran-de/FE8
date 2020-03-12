import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export class User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: string;

  @Output()
  userChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.user = 'Граф Орлов';
      this.userChanged.emit(this.user);
    },
      6000);
  }

}
