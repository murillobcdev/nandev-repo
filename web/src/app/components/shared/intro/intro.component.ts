import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  SWIPER_HERO: any = {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
  };

  constructor() {}

  ngOnInit(): void {}
}
