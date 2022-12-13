import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'Home' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Servicios', url: '/servicios', icon: 'construct' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Videos', url: '/videos', icon: 'film' },
    { title: 'Albergues', url: '/albergues', icon: 'bed' },
    // { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Medidas Preventivas', url: '/medidas', icon: 'alert-circle' },
    { title: 'Miembros', url: '/miembros', icon: 'people-circle' },
    { title: 'Quiero ser Voluntario', url: '/quiero', icon: 'person-add' },
    { title: 'Acerca de ', url: '/acerca-de', icon: 'reader' },
    { title: 'Iniciar Sesion', url: '/iniciar-sesion', icon: 'id-card' },
  ];
}
