import { Component, OnInit } from '@angular/core';
import { Registrovolntarios } from '../interfaces/registrovolntarios';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  optdata: any []=[]
  token : any;
  http: any;


  constructor() {
    this.Obtener();
  }
  Obtener = async () => {
    await fetch('https://adamix.net/defensa_civil/def/registro.php')
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

  login(){
    localStorage.setItem('token', this.token)
  }

  /*crearUsuario(voluntario: Registrovolntarios){
    const url ="https://adamix.net/defensa_civil/def/registro.php";

    let data = new FormData();
    let resultado = {};
    for(let k in voluntario){
      data. append(k, voluntario[k]);
    }

    this.http.post(url, data)
    .subscribe(voluntarios =>{
      console.log(voluntarios);
    });
  }*/
}
