import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullBannerComponent} from './full-Banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FullBannerComponent],
  exports: [FullBannerComponent]
})
export class FullBannerModule {
}
