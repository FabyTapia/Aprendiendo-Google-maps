import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../../clases/marcador.clase';
import { MapsService } from '../servicios/maps.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //arreglo de marcadores vacio
  coffeShop:any[] =[];
  

  lat =  -33.419012;
  lng =  -70.641702;

  constructor(
            private _mapsService:MapsService){

            } 


  ngOnInit() {
    for (let coffeShop of this.coffeShop){
      this.coffeShop.push(new coffeShop(coffeShop.lat, coffeShop.lng));
    }
    this.coffeShop = this._mapsService.getcoffeShop();
    console.log(this.coffeShop)
  }
  
  
  }
  
  
  
  

  