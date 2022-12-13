import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {
  optdata: any[] = [];
  constructor() {
    this.Obtener();
  }
  Obtener = async () => {
    await fetch('https://adamix.net/defensa_civil/def/medidas_preventivas.php')
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
}
