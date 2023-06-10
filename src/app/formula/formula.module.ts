import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule } from './formula-routing.module';
import { Mm1Component } from './mm1/mm1.component';
import { MmmComponent } from './mmm/mmm.component';
import { Md1Component } from './md1/md1.component';
import { Mm1FfComponent } from './mm1-ff/mm1-ff.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Mm1Component,
    MmmComponent,
    Md1Component,
    Mm1FfComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormulaRoutingModule,
    MaterialModule,
  ],
  exports: [
    Mm1Component,
    MmmComponent,
    Md1Component,
    Mm1FfComponent
  ],
})
export class FormulaModule { }
