import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'abcp-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss',
    '../../../animations/animation.css'
  ]
})
export class AppHeaderComponent {
  toggleDropdown = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  toggleMobileDropdown() {
    this.toggleDropdown = !this.toggleDropdown;
  }

}
