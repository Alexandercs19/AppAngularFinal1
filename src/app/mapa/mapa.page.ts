import { Component, OnInit } from '@angular/core';
import { CoordInfor } from 'models/coord-info.model';
import { Marker } from 'models/marker.model';
import { MapControllerService } from '../services/map-controller.service';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
 constructor(){}

 ngOnInit(): void {
     
 }
}
