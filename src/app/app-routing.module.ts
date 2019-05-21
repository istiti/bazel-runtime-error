import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  // public
  {path: '',  component: HomeComponent},
  {path: 'absolute', loadChildren: () => import('src/app/a/a.module').then(m => m.AModule)},
  {path: 'relative', loadChildren: () => import('./a/a.module').then(m => m.AModule)}
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
