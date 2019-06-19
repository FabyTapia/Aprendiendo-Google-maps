
export class Marcador  {

    public lat: number;
    public lng: number;

    //propiedades
    public title =  'Sin Title';
    public desc = 'Sin Desc'

    constructor( lat:number,  lng: number){
        this.lat = lat;
        this.lng = lng;
    }
}