import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  // public
  {path: '',  component: HomeComponent},
  {path: 'relative', loadChildren: () => import('./a/a.module.ngfactory').then(m => m.AModuleNgFactory)}
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
