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
  {name: 'Hydrogen', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Helium', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Lithium', date: '(Nov 30 2018)', action: 'Archive'},
  {name: 'Beryllium', date: '(Nov 30 2018)', action: 'Archive'}
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
}
