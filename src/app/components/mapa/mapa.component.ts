import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.clase';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MapsService } from '../servicios/maps.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //arreglo de marcadores vacio
  maps:[] =[];
  marcadores: Marcador[] = [];

  lat = 19.4978;
  lng = -99.1269;

  constructor(public snackBar: MatSnackBar,
            private _MapsService:MapsService) { 


if (localStorage.getItem('marcadores') ){
  this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
}
  }

  ngOnInit() {
  }
  agregarMarcador(evento){
                      //controlar info 
    const coords: {lat: number, lng:number} = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng);
    
    this.marcadores.push( nuevoMarcador);

    this.guardarStorage();
this.snackBar.open('Marcador agregado', 'Cerrar',{duration:3000});
  }

  borrarMarcador(i:number){
    //splice sirve para borrar elemento de un arreglo 
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar',{duration:3000});
  
  }
  guardarStorage(){
    // JSON.strinify convierte this.marcadores en string
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));

  }
}