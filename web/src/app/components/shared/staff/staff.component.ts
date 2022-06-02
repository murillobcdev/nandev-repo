import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  STAFF_MEMBERS?: any = [
    {
      name: 'Murillo Brito',
      medical_specialty: 'Vascular',
      crm: '14184',
      phone: '(44) 99109-0608',
    },
    {
      name: 'Murillo Brito',
      medical_specialty: 'Vascular',
      crm: '14184',
      phone: '(44) 99109-0608',
    },
    {
      name: 'Murillo Brito',
      medical_specialty: 'Vascular',
      crm: '14184',
      phone: '(44) 99109-0608',
    },
    {
      name: 'Murillo Brito',
      medical_specialty: 'Vascular',
      crm: '14184',
      phone: '(44) 99109-0608',
    },
  ];
}
