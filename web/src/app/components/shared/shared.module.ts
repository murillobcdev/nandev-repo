import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { FormconfirmationComponent } from './formconfirmation/formconfirmation.component';
import { CookiesComponent } from './cookies/cookies.component';
import { NgxMaskModule } from 'ngx-mask';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SwiperModule } from 'swiper/angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { IntroComponent } from './intro/intro.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const components = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
  LoadingComponent,
  FormconfirmationComponent,
  CookiesComponent,
  ErrorMessageComponent,
  IntroComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    SwiperModule,
    LightgalleryModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class SharedModule {}
