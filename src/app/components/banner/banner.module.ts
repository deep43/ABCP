import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import {BannerComponent} from './banner.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [BannerComponent],
  exports: [BannerComponent]})
export class BannerModule { }
