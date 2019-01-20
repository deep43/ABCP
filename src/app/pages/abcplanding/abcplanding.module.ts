import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ABCPLandingComponent} from './abcplanding.component';
import {AbcptableModule} from '../../components/abcptable/abcptable.module';
import {FooterModule} from '../../components/footer/footer.module';
import {BannerModule} from '../../components/banner/banner.module';
import {HeaderModule} from '../../components/header/header.module';
import {FullBannerModule} from '../../components/full-banner/full-banner.module';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    FullBannerModule,
    HeaderModule,
    AbcptableModule,
    BannerModule,
  ],
  declarations: [ABCPLandingComponent]
})
export class ABCPLandingModule {

}
