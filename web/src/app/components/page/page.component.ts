import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { Page } from 'src/app/models/page';
import { PageService } from 'src/app/services/page/page.service';

@Component({

  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']

})
export class PageComponent implements OnInit {


  constructor(
    private appComponent: AppComponent,
    private pageService: PageService
    ) { }

  ngOnInit(): void {


  }

}
