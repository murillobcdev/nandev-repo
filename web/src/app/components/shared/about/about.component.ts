import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  ABOUT_CARE: any = [
    {
      title: 'Cuidado especial',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      src: '/assets/images/logos/icon-heart.png',
    },
    {
      title: 'Controle de evolução',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      src: '/assets/images/logos/icon-document.png',
    },
    {
      title: 'Equipe preparada',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      src: '/assets/images/logos/icon-staff.png',
    },
  ];

  ABOUT_REVIEWS: any = [
    {
      src: '',
      name: 'Maria da conceição',
      recuperation: 'recuperação em 3 meses',
    },
    {
      src: '',
      name: 'Júnior da silva',
      recuperation: 'recuperação em 3 meses',
    },
    {
      src: '',
      name: 'Rogério Albert',
      recuperation: 'recuperação em 5 meses',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
