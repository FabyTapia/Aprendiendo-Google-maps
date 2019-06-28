import { Injectable } from '@angular/core';

@Injectable()
export class MapsService {

  public cofeeShop: any[]= 
  [
  
  {
  name:"Wonderland Cafe",
  address: "El Rosal 361",
  Coordinates: {
        "lat": -33.4059593,
        "lng": -71.1272736
  }
  },
  
  {
  name:"El Taller",
  address: "Avenida Providencia 1467",
  Coordinates: {
        "lat": -33.4279635,
        "lng": -70.6177755
  }
  },
  
  {
  name:"Colmado Coffee&Bar",
  address: "Merced 346",
  Coordinates: {
        "lat": -33.437435,
        "lng": -70.6419652
  }
  },
  
  
  {
  name:"Cafe Colonia",
  address: "Enrique Mac Iver 161",
  Coordinates: {
        "lat": -33.440714 ,
        "lng": -70.6465394 
  }
  },
  
  
  
  {
  name:"Original Green Roasters",
  address: "Avenida Rancagua 040",
  Coordinates: {
        "lat": -34.170249,
        "lng": -70.7407427
  }
  },
  
  {
  name:"Cafe Mosqueto",
  address: "Mosqueto 440",
  Coordinates: {
        "lat": -33.4373245 ,
        "lng": -70.6441973
  }
  },
  
  {
  name:"Cafe de la Candelaria",
  address: "Avenida Italia 1449 Providencia",
  Coordinates: {
        "lat": -33.45694,
        "lng": -70.64827
  }
  },
  
  {
  name:"Habia Una Vez",
  address: "Antonio Lopez de Bello 323",
  Coordinates: {
        "lat": -33.45694,
        "lng": -70.64827
  }
  },
  
  {
  name:"Happy Day Waffles & Coffee",
  address: "Calle Santo Domingo 553",
  Coordinates: {
        "lat": -33.45694,
        "lng": -70.64827
  }
  },
  
  {
  name:"Cafe Vienes",
  address: "Enrique Mac Iver 416",
  Coordinates: {
        "lat": -33.4333464,
        "lng": -70.6480493
  }
  },
  
  {
  name:"Mobssie",
  address: "Santa Filomena 284",
  Coordinates: {
        "lat": -33.43025,
        "lng": -70.64285
  }
  }
  ]

    constructor() {
        console.log('servicio listo');
    }

    getcoffeShop(){
        return this.cofeeShop;
    }
}