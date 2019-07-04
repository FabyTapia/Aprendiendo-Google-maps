import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
 
import { AgmCoreModule } from '@agm/core';
 import{  MapsService } from './components/servicios/maps.service';
import { FavoritesComponent } from './components/favorites/favorites.component'


@NgModule({
  entryComponents:[
    
  ],
  
  declarations: [
    AppComponent,
    MapaComponent,
    FavoritesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbqCZzejEEu6U-vOD4zk8pH9lUf8S42DI'
    })
  ],
  providers: [ 
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
