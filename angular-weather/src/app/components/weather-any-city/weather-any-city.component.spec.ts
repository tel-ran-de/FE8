import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAnyCityComponent } from './weather-any-city.component';

describe('WeatherAnyCityComponent', () => {
  let component: WeatherAnyCityComponent;
  let fixture: ComponentFixture<WeatherAnyCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAnyCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAnyCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
