import { Component, OnInit } from '@angular/core';
import { MapsService } from '../servicios/maps.service';


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
  this.locationCoffeShop.splice(i,1);//splice elimina un elemento de un arreglo
  console.log(i);

}
}
