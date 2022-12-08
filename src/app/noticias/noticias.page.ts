import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../api/getapi.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(public _services: GetapiService) {

    

   }

  ngOnInit() {
  }

}
