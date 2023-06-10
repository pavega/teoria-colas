import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-md1',
  templateUrl: './md1.component.html',
  styleUrls: ['./md1.component.css']
})
export class Md1Component implements OnInit {

  md1Form!: FormGroup;

  /*MD1*/
  lmd1 = -1;
  wmmd1 = -1;
  lqmd1 = -1;
  wqmd1 = -1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.md1Form = this.formBuilder.group({
      llegadasPromedio3: [''],
      atendidoPorPeriodo3: [''],
    });
  }

  calcularMD1() {
    if (this.md1Form.invalid) return;
    this.lqmd1 = parseFloat((Math.pow(this.llegadasPromedio3,2)/(2*this.atendidoPorPeriodo3*(this.atendidoPorPeriodo3-this.llegadasPromedio3))).toFixed(4));
    this.wqmd1 = parseFloat((this.llegadasPromedio3/(2*this.atendidoPorPeriodo3*(this.atendidoPorPeriodo3-this.llegadasPromedio3))).toFixed(4));
    this.lmd1 = parseFloat((this.lqmd1 +(this.llegadasPromedio3/this.atendidoPorPeriodo3)).toFixed(4));
    this.wmmd1 = parseFloat((this.wqmd1+(1/this.atendidoPorPeriodo3)).toFixed(4));
  }

   /*MD1*/
   get llegadasPromedio3() { return this.md1Form.get('llegadasPromedio3')?.value }
   get atendidoPorPeriodo3() { return this.md1Form.get('atendidoPorPeriodo3')?.value }

}
