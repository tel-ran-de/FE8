import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAsyncComponent } from './weather-async.component';

describe('WeatherAsyncComponent', () => {
  let component: WeatherAsyncComponent;
  let fixture: ComponentFixture<WeatherAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
