import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';
import {FooterModule} from './components/footer/footer.module';
import {FullBannerModule} from './components/full-banner/full-banner.module';
import {BannerModule} from './components/banner/banner.module';
import {AbcptableModule} from './components/abcptable/abcptable.module';
import {HeaderModule} from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FooterModule,
    FullBannerModule,
    HeaderModule,
    AbcptableModule,
    BannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
