import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformerComponent } from './weather-informer.component';

describe('WeatherInformerComponent', () => {
  let component: WeatherInformerComponent;
  let fixture: ComponentFixture<WeatherInformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
