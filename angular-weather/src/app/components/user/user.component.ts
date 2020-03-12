import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.user = 'Граф Орлов', 6000);
  }

}
