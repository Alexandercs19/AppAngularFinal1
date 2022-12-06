import { Component, OnInit, ViewEncapsulation   } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCoverflow} from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCoverflow]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
