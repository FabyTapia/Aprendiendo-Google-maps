import { Component, OnInit } from '@angular/core';
import { MapsService } from '../servicios/maps.service';
import { Coordinate } from '../../clases/marcador.clase';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //arreglo de marcadores vacio
  
  lat =  -33.419012;
  lng =  -70.641702;


  public locationCoffeShop: any[]=[];
  

  constructor(
            private _mapservice:MapsService){}


  ngOnInit() {
    
    this.locationCoffeShop = this._mapservice.getlocationCoffeShop();
    console.log(this.locationCoffeShop)
    // this._locationCoffeShop.getcoffeShop().subscribe(res =>{
      // for(let locationCoffeShop in res.coffeShop){
        //this.locationCoffeShop.push({
          //lat: parseInt(res[locationCoffeShop].lat),
          //lng: parseInt(res[locationCoffeShop].lng)
       // })
      //}
   // })
  //}
}

}