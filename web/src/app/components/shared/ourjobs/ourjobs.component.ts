import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourjobs',
  templateUrl: './ourjobs.component.html',
  styleUrls: ['./ourjobs.component.scss'],
})
export class OurjobsComponent implements OnInit {
  projects?: any = [
    { name: 'zap' },
    { name: 'zapiao' },
    { name: 'teste' },
    { name: 'barata' },
    { name: 'besoro' },
    { name: 'pix junior' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
