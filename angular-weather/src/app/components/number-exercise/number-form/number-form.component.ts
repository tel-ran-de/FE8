import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.scss']
})
export class NumberFormComponent implements OnInit {
  number = 0;

  @Output()
  numberChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onNumberChanged() {
      this.numberChanged.emit(this.number);
  }

  onPlusClick($event: MouseEvent) {
    this.number++;
    this.onNumberChanged();
  }

  onMinusClick($event: MouseEvent) {
    this.number--;
    this.onNumberChanged();
  }
}
