import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {
  optdata: any[] = [];
  constructor() {
    this.Obtener();
  }
  Obtener = async () => {
    await fetch('https://adamix.net/defensa_civil/def/miembros.php')
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
