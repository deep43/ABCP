import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import {ABCPTableComponent} from './abcptable.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule
  ],
  declarations: [ABCPTableComponent],
  exports: [ABCPTableComponent]
})
export class AbcptableModule { }
