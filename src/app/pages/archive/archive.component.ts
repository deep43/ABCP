import { Component, OnInit } from '@angular/core';
import {SafeTrust} from '../../shared/models/safe-trust';

@Component({
  selector: 'abcp-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  fullBannerData = {
    title: 'Canadian ABCP',
    text: 'The purpose of this page is to get more @CIBC. Lorem ipsum dolor sit' +
      ' amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    buttonName: 'Register Online',
    videoUrl: 'https://www.youtube.com/embed/LoIsRPqSjCM?playlist=LoIsRPqSjCM&iv_load_policy=' +
      '3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&' +
      'showinfo=0&rel=0&loop=1&origin=http%3A%2F%2Fxmk.a1a.myftpupload.com&widgetid=1&mute=1'
  };
  bannerData = {title: 'Back to the Canadian ABS/MBS Research Main Page', buttonName: 'Click Here'};

  constructor() { }

  ngOnInit() {
  }

}
