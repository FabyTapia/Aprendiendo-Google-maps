import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class MapsService {

  public locationCoffeShop: any[]= 
[

{
      name:"Wonderland Cafe",
      address: " ROSAL 361 BARRIO LASTARRIA, SANTIAGO ",
      lat:  -33.438194,
      lng: -70.642138

  },
  
  {
      name:"El Taller",
      address: "Avenida Providencia 1467",
      lat: -33.4279635,
      lng: -70.6177755
  },

  
  {
      name:"Colmado Coffee&Bar",
      address: "Merced 346",
      lat: -33.437435,
      lng: -70.6419652
  
  },
  
  
  {
      name:"Cafe Colonia",
      address: "Enrique Mac Iver 161",
      lat: -33.440714 ,
      lng: -70.6465394 
  },
  
  {
      name:"Original Green Roasters",
      address: " Rancagua 040, Providencia, Región Metropolitana",  
      lat: -33.4415355,
      lng: -70.633078
  },
  
  {
      name:"Cafe Mosqueto",
      address: "Mosqueto 440",
      lat: -33.4373245 ,
      lng: -70.6441973
  },
  
  {
      name:"Cafe de la Candelaria",
      address: "Avenida Italia 1449 Providencia",
      lat: -33.45694,
      lng: -70.64827
  },
  
  {
      name:"Habia Una Vez",
      address: " Antonia López de Bello 307, Recoleta, Región Metropolitana",
      lat: -33.431379,
      lng:  -70.6319897
  },
  
  {
      name:"Happy Day Waffles & Coffee",
      address: "Calle Santo Domingo 553",
      lat: -33.45694,
      lng: -70.64827
  },
  
  {
      name:"Cafe Vienes",
      address: "Enrique Mac Iver 416",
      lat: -33.4333464,
      lng: -70.6480493
  },
  
  {
      name:"Mobssie",
      address: "Santa Filomena 284",
      lat: -33.43025,
      lng: -70.64285
  }
  ]

constructor() {
      console.log('servicio listo');
}
getlocationCoffeShop(){
    return this.locationCoffeShop;
}
// getcoffeShop(): Observable<any> {
    //   return of(this.locationCoffeShop);
}


//type info service
interface locationCoffeShop{
    name?:string;
    address?:string;
    lat: number;
    lng: number;
  }