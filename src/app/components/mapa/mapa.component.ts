import { Component, OnInit } from '@angular/core';
import { MapsService } from '../servicios/maps.service';
import { Coordinate } from '../../clases/marcador.clase';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //star position
  lat =  -33.419012;
  lng =  -70.641702;


  public locationCoffeShop: any[]=[];
  

  constructor(
            private _mapservice:MapsService){}


  ngOnInit() {
    
    this.locationCoffeShop = this._mapservice.getlocationCoffeShop();
    console.log(this.locationCoffeShop)
}
deleteMarker(i: number){
  console.log(i);
}
}
