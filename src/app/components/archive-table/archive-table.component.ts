import {Component, Input, OnInit} from '@angular/core';
import {SafeTrust} from '../../shared/models/safe-trust';

@Component({
  selector: 'abcp-archive-table',
  templateUrl: './archive-table.component.html',
  styleUrls: ['./archive-table.component.scss']
})
export class ArchiveTableComponent implements OnInit {
  @Input() tableData: SafeTrust[];
  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
