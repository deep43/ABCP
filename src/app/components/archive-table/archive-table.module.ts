import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveTableComponent } from './archive-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArchiveTableComponent],
  exports: [ArchiveTableComponent]
})
export class ArchiveTableModule { }
