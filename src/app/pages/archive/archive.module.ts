import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchiveComponent} from './archive.component';
import {FullBannerModule} from '../../components/full-banner/full-banner.module';
import {BannerModule} from '../../components/banner/banner.module';

@NgModule({
  imports: [
    CommonModule,
    FullBannerModule,
    BannerModule
  ],
  declarations: [ArchiveComponent]
})
export class ArchiveModule {
}
