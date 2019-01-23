import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {
  MatCheckboxModule, MatButtonModule, MatIconModule
} from '@angular/material';

import {AppComponent} from './app.component';

import {FooterModule} from './components/footer/footer.module';
import {HeaderModule} from './components/app-header/header.module';
import {ArchiveModule} from './pages/archive/archive.Module';
import {ABCPLandingModule} from './pages/abcplanding/abcplanding.Module';

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
    AppRoutingModule,
    ArchiveModule,
    HeaderModule,
    FooterModule,
    ABCPLandingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
