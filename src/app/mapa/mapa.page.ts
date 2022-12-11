import { Component, OnInit } from '@angular/core';
import { coordInfo } from '../models/coord-interface.model';
import { Marker } from '../models/marker.model';


declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})



export class MapaPage implements OnInit {

  optdata: any[] = [];
  map = null;
 


  constructor() {
    this.Obtener();
  }
  Obtener = async () => {
    await fetch('https://adamix.net/defensa_civil/def/albergues.php')
      .then((response) => response.json())
      .then((data) => {
        // ASIGNANDO LOS DATOS DE LA API A MI ARRAY.
        console.log(data.datos);
        this.optdata = data.datos;
      });
  };
  ngOnInit() {}
  ionViewDidLoad() {
    this.Obtener();

  }

  loadMap(){
  }

  
}



