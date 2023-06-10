import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mm1Component } from './mm1/mm1.component';
import { MmmComponent } from './mmm/mmm.component';
import { Md1Component } from './md1/md1.component';
import { Mm1FfComponent } from './mm1-ff/mm1-ff.component';

const routes: Routes = [
  {path: 'MM1', component: Mm1Component},
  {path: 'MMm', component: MmmComponent},
  {path: 'MD1', component: Md1Component},
  {path: 'MM1FuenteFinita', component: Mm1FfComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaRoutingModule { }
