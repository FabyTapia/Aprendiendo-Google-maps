import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.clase';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //arreglo de marcadores vacio
  marcadores: Marcador[] = [];

  lat =  -33.419012;
  lng =  -70.641702;

  constructor() { 


const  nuevoMarcador = new Marcador ( -33.419012, -70.641702 )
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
  }
  agregarMarcador(evento){

    const coords: {lat: number, lng:number} = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng);
    
    this.marcadores.push( nuevoMarcador);
    console.log(evento);
  }
}
