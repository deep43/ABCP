import {Component, OnInit} from '@angular/core';
import {SafeTrust} from '../../shared/models/safe-trust';

const ABCP_TABLE: SafeTrust[] = [
  {name: 'Safe Trust Series 1996-1 English', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 English', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 English', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 English', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 French', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 French', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 French', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 French', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 English', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'},
  {name: 'Safe Trust Series 1996-1 English', date: 'Dec 10 2015', action: 'Archive', actionLink: '/archive'}
];

@Component({
  selector: 'abcp-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  footerColumns = [
    {iconClass: 'icofont-social-twitter', link: '#', linkName: 'Terms of use '},
    {
      iconClass: 'icofont-social-twitter', link: '#',
      linkName: 'CIBC World Markets Corp. (US Broker-Dealer) Disclosures Privacy and Security'
    },
    {iconClass: 'icofont-social-twitter', link: '#', linkName: 'Site Map'},
    {iconClass: 'icofont-social-twitter', link: '#', linkName: 'Ownership Interest in TMX Group'},
    {
      iconClass: 'icofont-social-twitter', link: '#',
      linkName: 'CIBC World Markets Inc. is a Member of the Canadian Investor Protection Fund'
    },
    {iconClass: 'icofont-social-twitter', link: '#', linkName: 'CIBC World Markets Inc. Trade Matching Statement'},
  ];
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
  abcpTable = ABCP_TABLE;
  abcpTableTitle = 'SOUND Trust Series 1998-1';

  constructor() {
  }

  ngOnInit() {
  }

}
