import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'abcp-banner',
  templateUrl: './banner.component.html',
  styleUrls: [
    './banner.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss',
  ]
})
export class BannerComponent implements OnInit {
  @Input() buttonName: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
