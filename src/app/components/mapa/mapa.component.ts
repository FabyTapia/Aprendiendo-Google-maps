import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat =  -33.419012;
  lng =  -70.641702;

  constructor() { }

  ngOnInit() {
  }

}
