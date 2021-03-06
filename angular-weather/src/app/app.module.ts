import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInformerComponent } from './components/weather/weather-informer/weather-informer.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberExerciseComponent } from './components/number-exercise/number-exercise.component';
import { NumberComponent } from './components/number-exercise/number/number.component';
import { NumberFormComponent } from './components/number-exercise/number-form/number-form.component';
import { HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherAsyncComponent } from './components/weather-async/weather-async.component';
import { WeatherInformerDummyComponent } from './components/weather-async/weather-informer-async/weather-informer-dummy.component';
import { WeatherAnyCityComponent } from './components/weather-any-city/weather-any-city.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInformerComponent,
    CitySelectorComponent,
    NumberExerciseComponent,
    NumberComponent,
    NumberFormComponent,
    WeatherComponent,
    WeatherAsyncComponent,
    WeatherInformerDummyComponent,
    WeatherAnyCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
