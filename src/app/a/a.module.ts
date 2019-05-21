import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a/a.component';

@NgModule({
  declarations: [AComponent],
  imports: [
    CommonModule,
    ARoutingModule
  ]
})
export class AModule { }
