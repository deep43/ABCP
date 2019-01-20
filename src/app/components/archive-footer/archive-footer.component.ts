import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'abcp-archive-footer',
  templateUrl: './archive-footer.component.html',
  styleUrls: ['./archive-footer.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class ArchiveFooterComponent implements OnInit {
  @Input() columns: Object[];

  constructor() {
  }

  ngOnInit() {
  }

}
