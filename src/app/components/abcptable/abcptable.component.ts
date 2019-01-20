import { Component, OnInit, Input } from '@angular/core';
import {SafeTrust} from '../../shared/models/safe-trust';

@Component({
  selector: 'abcp-table',
  templateUrl: './abcptable.component.html',
  styleUrls: ['./abcptable.component.scss']
})
export class ABCPTableComponent implements OnInit {
  @Input() tableData: SafeTrust[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
