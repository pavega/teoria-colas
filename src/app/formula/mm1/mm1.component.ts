import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mm1',
  templateUrl: './mm1.component.html',
  styleUrls: ['./mm1.component.css']
})
export class Mm1Component implements OnInit {

  form!: FormGroup;

  /*MM1*/
  lmm1 = -1;
  wmm1 = -1;
  lqmm1 = -1;
  wqmm1 = -1;
  romm1 = -1;
  p0mm1 = -1;
  pnmm1 = -1;
  totalServiciomm1 = -1;
  totalEsperasSistemamm1 = -1;
  totalEsperaColamm1 = -1;
  costoFinalSistemamm1 = -1;
  costoFinalColamm1 = -1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      llegadasPromedio: [''],
      atendidoPorPeriodo: [''],
      horasLaborales: [''],
      valorEvaluado: [''],
      numeroCanales: [''],
      costoServicio: [''],
      costoInsatisfaccion: [''],
      tipoCalculo: ['']
    });
  }

  calcularMM1() {
    var wmm1Temporal;
    var wqmm1Temporal;
    if (this.form.invalid) return;
    this.lmm1 = parseFloat((this.llegadasPromedio/(this.atendidoPorPeriodo-this.llegadasPromedio)).toFixed(4));
    this.wmm1 = 1/(this.atendidoPorPeriodo-this.llegadasPromedio);
    wmm1Temporal=this.wmm1;
    this.wmm1 = this.wmm1;
    this.lqmm1 = parseFloat((Math.pow(this.llegadasPromedio,2)/(this.atendidoPorPeriodo*(this.atendidoPorPeriodo-this.llegadasPromedio))).toFixed(4));
    this.wqmm1 = this.llegadasPromedio/(this.atendidoPorPeriodo)*(this.atendidoPorPeriodo-this.llegadasPromedio);
    wqmm1Temporal=this.wqmm1;
    this.wqmm1 = this.wqmm1;
    this.romm1 = parseFloat((this.llegadasPromedio/this.atendidoPorPeriodo).toFixed(4));
    this.p0mm1 = parseFloat((1-(this.llegadasPromedio/this.atendidoPorPeriodo)).toFixed(4));
    this.pnmm1 = parseFloat((Math.pow((this.llegadasPromedio/this.atendidoPorPeriodo),(this.valorEvaluado+1))).toFixed(4));

    this.totalServiciomm1 = this.costoServicio*this.numeroCanales;
    this.totalServiciomm1 = parseFloat((this.totalServiciomm1*this.horasLaborales).toFixed(4));

    this.totalEsperasSistemamm1 = this.llegadasPromedio*wmm1Temporal*this.costoInsatisfaccion;
    this.totalEsperasSistemamm1 = parseFloat((this.totalEsperasSistemamm1*this.horasLaborales).toFixed(4));

    this.totalEsperaColamm1 = this.llegadasPromedio*wqmm1Temporal*this.costoInsatisfaccion;
    this.totalEsperaColamm1 = parseFloat((this.totalEsperaColamm1*this.horasLaborales).toFixed(4));

    this.costoFinalSistemamm1 = parseFloat((this.totalServiciomm1+this.totalEsperasSistemamm1).toFixed(4));
    this.costoFinalColamm1 = parseFloat((this.totalServiciomm1+this.totalEsperaColamm1).toFixed(4));
  }

   /*MM1*/
   get llegadasPromedio() { return this.form.get('llegadasPromedio')?.value  }
   get atendidoPorPeriodo() { return this.form.get('atendidoPorPeriodo')?.value }
   get valorEvaluado() { return this.form.get('valorEvaluado')?.value }
   get horasLaborales() { return this.form.get('horasLaborales')?.value }
   get numeroCanales() { return this.form.get('numeroCanales')?.value }
   get costoServicio() { return this.form.get('costoServicio')?.value }
   get costoInsatisfaccion() { return this.form.get('costoInsatisfaccion')?.value }
   get tipoCalculo() { return this.form.get('tipoCalculo')?.value }

}
