import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NumberExerciseComponent} from './components/number-exercise/number-exercise.component';


const routes: Routes = [
  { path: 'number-exercise', component: NumberExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
