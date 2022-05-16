import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  staffMembers?: any = [
    {
      name: 'Murillo Brito',
      title: 'Desenvolvedor web Front-end',
      desc: '',
      imageSrc: 'https://placekitten.com/225/225',
    },
    {
      name: 'Henrique Mazzuchetti',
      title: 'Desenvolvedor web Front-end',
      desc: '',
      imageSrc: 'https://placekitten.com/225/225',
    },
    {
      name: 'Leon Molina',
      title: 'Desenvolvedor Mobile e Back-end',
      desc: '',
      imageSrc: 'https://placekitten.com/225/225',
    },
  ];
}
