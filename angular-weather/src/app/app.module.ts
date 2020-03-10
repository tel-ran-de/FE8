import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInformerComponent } from './components/weather-informer/weather-informer.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInformerComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
