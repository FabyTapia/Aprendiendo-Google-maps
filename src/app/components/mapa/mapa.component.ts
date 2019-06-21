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

  }

  borrarMarcador(i:number){
    //splice sirve para borrar elemento de un arreglo 
    this.marcadores.splice(i,1);
    this.guardarStorage();
  
  }
  guardarStorage(){
    // JSON.strinify convierte this.marcadores en string
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));

  }
}