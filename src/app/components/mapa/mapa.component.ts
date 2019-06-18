import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat =  -33.4726900;
  lng =  -70.6472400;

  constructor() { }

  ngOnInit() {
  }

}
