import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberExerciseComponent } from './number-exercise.component';

describe('NumberExcerexcersizesizeComponent', () => {
  let component: NumberExerciseComponent;
  let fixture: ComponentFixture<NumberExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
