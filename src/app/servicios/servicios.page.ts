import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetapiService } from '../api/getapi.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor() { 
    this.Obtener()
  }

  Obtener = async() => {

    await fetch('https://adamix.net/defensa_civil/def/servicios.php')
    .then((response) => response.json())
     .then((data) => {

      // ASIGNANDO LOS DATOS DE LA API A MI ARRAY.
      console.log(data.datos)
     });
    }
  ngOnInit() {
  }
  ionViewDidLoad() {
    this.Obtener()
  }
 
  

}
