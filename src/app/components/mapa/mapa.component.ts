import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat =  -31.7613365;
  lng =  -71.3187697;

  constructor() { }

  ngOnInit() {
  }

}
