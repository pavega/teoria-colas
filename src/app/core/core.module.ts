import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { FormulaRoutingModule } from '../formula/formula-routing.module';
import { FormulaModule } from '../formula/formula.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormulaModule,
    RouterModule,
    FormulaRoutingModule,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
