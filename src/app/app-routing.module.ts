import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ABCPLandingComponent} from './pages/abcplanding/abcplanding.component';
import {ArchiveComponent} from './pages/archive/archive.component';

const routes: Routes = [
  {
    path: '',
    component: ABCPLandingComponent,
  },
  {
    path: 'archive',
    component: ArchiveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
