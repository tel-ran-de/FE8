import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NumberExerciseComponent} from './components/number-exercise/number-exercise.component';
import {WeatherComponent} from './components/weather/weather.component';
import {WeatherAsyncComponent} from './components/weather-async/weather-async.component';
import {WeatherAnyCityComponent} from './components/weather-any-city/weather-any-city.component';


const routes: Routes = [
  { path: 'number-exercise', component: NumberExerciseComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'weather-async', component: WeatherAsyncComponent },
  { path: 'weather-any-city', component: WeatherAnyCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
