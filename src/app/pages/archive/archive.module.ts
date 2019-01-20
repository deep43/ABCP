import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchiveComponent} from './archive.component';
import {FullBannerModule} from '../../components/full-banner/full-banner.module';
import {BannerModule} from '../../components/banner/banner.module';
import {ArchiveTableModule} from '../../components/archive-table/archive-table.module';
import {ArchiveFooterModule} from '../../components/archive-footer/archive-footer.module';

@NgModule({
  imports: [
    CommonModule,
    FullBannerModule,
    BannerModule,
    ArchiveTableModule,
    ArchiveFooterModule
  ],
  declarations: [ArchiveComponent]
})
export class ArchiveModule {
}
