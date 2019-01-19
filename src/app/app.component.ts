import {Component} from '@angular/core';
import {SafeTrust} from './shared/models/safe-trust';


const ABCP_TABLE_1: SafeTrust[] = [
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
  abcpTableTitle1 = 'CIBC-sponsored Asset-Backed Commercial Paper Conduits';
}
