import { HttpClient } from '@angular/common/http';
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

  nombre : string = '';
  apellido : string = '';
  cedula : string = '';
  clave : string = '';
  correo : string = '';
  telefono : string = '';


datos : Registrovolntarios = {
  id : '0',
  nombre : '',
  apellido: '', 
  cedula : '',
  clave : '',
  correo : '',
  telefono: ''

}

  constructor(public http: HttpClient) {
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
    /*localStorage.setItem('token', this.token)*/
    const obj : Registrovolntarios = {
      id : '0',
      nombre : this.nombre,
      apellido: this.apellido, 
      cedula : this.cedula,
      clave : this.clave,
      correo : this.correo,
      telefono: this.telefono,
    
    };
    console.log(obj);
    this.crearUsuario(obj)
  }

  crearUsuario(voluntario: Registrovolntarios){
    
    const url ="https://adamix.net/defensa_civil/def/registro.php";

    let data = new FormData();
    let resultado = {};
      data. append('id', voluntario.id);
      data. append('nombre', voluntario.nombre);
      data. append('apellido',voluntario.apellido);
      data. append('cedula', voluntario.cedula);
      data. append('clave', voluntario.clave);
      data. append('correo', voluntario.correo);
      data. append('telefono', voluntario.telefono);

    

    this.http.post(url, data)
    .subscribe(voluntario =>{
      console.log(voluntario)
    });
  
  }
}
