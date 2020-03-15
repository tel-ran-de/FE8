import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformerDummyComponent } from './weather-informer-dummy.component';

describe('WeatherInformerComponent', () => {
  let component: WeatherInformerDummyComponent;
  let fixture: ComponentFixture<WeatherInformerDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInformerDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformerDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
