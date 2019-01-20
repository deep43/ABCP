import {Component} from '@angular/core';
import {SafeTrust} from './shared/models/safe-trust';


const ABCP_TABLE_1: SafeTrust[] = [
  {name: 'Safe Trust Series 1996-1', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1', date: '(Nov 30 2018)', action: 'Archive'}
];
const ABCP_TABLE_2: SafeTrust[] = [
  {name: 'Safe Trust Series 1996-1 English', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 English', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 English', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 English', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 French', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 French', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 French', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 French', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 English', date: '(Dec 10 2015)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 English', date: '(Dec 10 2015)', action: 'Archive'}
];
const ABCP_TABLE_3: SafeTrust[] = [
  {name: 'Safe Trust Series 1996-1 Fact Sheet', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 Fact Sheet', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Safe Trust Series 1996-1 Fact Sheet', date: '(Nov 30 2018)', action: 'Archive'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  abcpTable1 = ABCP_TABLE_1;
  abcpTable2 = ABCP_TABLE_2;
  abcpTable3 = ABCP_TABLE_3;
  abcpTableTitle1 = 'CIBC-sponsored Asset-Backed Commercial Paper Conduits';
  abcpTableTitle2 = 'Information Memorandum';
  abcpTableTitle3 = 'Conduits Fact Sheet';

  bannerData = {title: 'Click Below To Register', buttonName: 'Register Online'};
  fullBannerData = {
    title: 'Canadian ABCP',
    text: 'The purpose of this page is to get more @CIBC. Lorem ipsum dolor sit' +
    ' amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    buttonName: 'Register Online',
    videoUrl: "https://www.youtube.com/embed/LoIsRPqSjCM?playlist=LoIsRPqSjCM&iv_load_policy=" +
    "3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&" +
    "showinfo=0&rel=0&loop=1&origin=http%3A%2F%2Fxmk.a1a.myftpupload.com&widgetid=1&mute=1"
  };

}
