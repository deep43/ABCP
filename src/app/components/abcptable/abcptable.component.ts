import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abcp-table',
  templateUrl: './abcptable.component.html',
  styleUrls: ['./abcptable.component.scss']
})
export class ABCPTableComponent implements OnInit {
  @Input() tableData: string;
  @Input() title: string;
  displayedColumns: string[] = ['name', 'date', 'action'];

  constructor() { }

  ngOnInit() {
  }

}
