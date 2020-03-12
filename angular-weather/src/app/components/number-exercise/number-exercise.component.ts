import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-exercise',
  templateUrl: './number-exercise.component.html',
  styleUrls: ['./number-exercise.component.scss']
})
export class NumberExerciseComponent implements OnInit {

  number: number;

  constructor() { }

  ngOnInit(): void {
  }

  onNumberChanged(number: number) {
    this.number = number;
  }
}
