import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'abcp-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.scss']
})
export class FullBannerComponent implements OnInit {
  @Input() buttonName: string;
  @Input() title: string;
  @Input() text: string;
  @Input() videoUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
