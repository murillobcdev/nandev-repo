import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent implements OnInit {
  isCookie: boolean = true;
  cookiePermission: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isCookie = JSON.parse(
      localStorage.getItem('cookiesDismissed') || '[]'
    );
    this.cookiePermission = JSON.parse(localStorage.getItem('cookies') || '[]');
  }
  allowCookies() {
    this.cookiePermission = true;
    localStorage.setItem('cookies', JSON.stringify(this.cookiePermission));
  }
  cookieDismiss() {
    this.isCookie = true;
    localStorage.setItem('cookiesDismissed', JSON.stringify(this.isCookie));
  }
}
