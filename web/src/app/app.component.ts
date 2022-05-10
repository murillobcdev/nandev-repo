import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  language = 'pt';

  public constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any
  ) {

    translate.setDefaultLang('pt');

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {

      if (event.urlAfterRedirects.startsWith('/en')) {
        this.language = 'en';
        this.onActivate();
      } else {
        this.language = 'pt';
        this.onActivate();
      }
      translate.use(this.language);
    });

  }

  public onActivate() {
    window.scroll(0, 0);
  }

  setTitle(newTitle: string = 'Grupo NaNdev') {
    this.titleService.setTitle(newTitle + (newTitle !== 'Grupo NaNdev' ? ' ' : ' '));
  }

  setMetaTitle(title: string) {
    this.metaService.updateTag({name: 'title', content: title});
    this.metaService.removeTag('property="og:title"');
    this.metaService.addTag({ property: 'og:title', content: title }, true);
    this.metaService.removeTag('property="twitter:title"');
    this.metaService.addTag({ property: 'twitter:title', content: title }, true);
  }

  setDescription(description: string = 'Grupo NaNdev, inovando e transformando a indústria web.') {

    if (description === null || description === undefined || description === '') {
      return;
    }

    this.metaService.removeTag('name = "description"');
    this.metaService.addTag({ name: 'description', content: description }, true);

    this.metaService.removeTag('property = "og:description"');
    this.metaService.addTag({ property: 'og:description', content: description }, true);

    this.metaService.removeTag('property = "twitter:description"');
    this.metaService.addTag({ property: 'twitter:description', content: description }, true);

  }

  setMetaLink(link: string) {
    this.metaService.removeTag('property = "og:url"');
    this.metaService.addTag({ property: 'og:url', content: link }, true);
    this.metaService.removeTag('property = "twitter:url"');
    this.metaService.addTag({ property: 'twitter:url', content: link }, true);
  }

  setMetaKeyword(keyword: string) {
    this.metaService.removeTag('name = "keywords"');
    this.metaService.addTag({ name: 'keywords', content: keyword }, true);
  }

  setImage(image: string) {
    this.metaService.removeTag('property = "og:image"');
    this.metaService.addTag({ property: 'og:image', content: image }, true);
  }

}


