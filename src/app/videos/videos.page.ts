import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  constructor() {}
  ngOnInit() {}

  // optdata: any[] = [];
  // constructor() {
  //   this.Obtener();
  // }
  // Obtener = async () => {
  //   await fetch('https://adamix.net/defensa_civil/def/videos.php')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // ASIGNANDO LOS DATOS DE LA API A MI ARRAY.
  //       console.log(data.datos);
  //       this.optdata = data.datos;
  //     });
  // };
  // ngOnInit() {}
  // ionViewDidLoad() {
  //   this.Obtener();
  // }
}
