import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mmm',
  templateUrl: './mmm.component.html',
  styleUrls: ['./mmm.component.css']
})
export class MmmComponent implements OnInit {

  mmmForm!: FormGroup;

  /*MMM*/
  lmmm = -1;
  wmmm = -1;
  lqmmm = -1;
  wqmmm = -1;
  rommm = -1;
  p0mmm = -1;
  pnmmm = -1;
  totalServiciommm = -1;
  totalEsperasSistemammm = -1;
  totalEsperaColammm = -1;
  costoFinalSistemammm = -1;
  costoFinalColammm = -1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mmmForm = this.formBuilder.group({
      llegadasPromedio2: [''],
      atendidoPorPeriodo2: [''],
      valorEvaluado2: [''],
      horasLaborales2: [''],
      numeroCanales2: [''],
      costoServicio2: [''],
      costoInsatisfaccion2: [''],
      tipoCalculo2: ['']
    });
  }

  calcularMMm() {
    var wmmmTemporal;
    var wqmmmTemporal;
    if (this.mmmForm.invalid) return;
    this.p0mmm = parseFloat((1/(((1/this.factorial(this.numeroCanales2-1))+(Math.pow((this.llegadasPromedio2/this.atendidoPorPeriodo2),this.numeroCanales2-1)))+(1/this.factorial(this.numeroCanales2))*(Math.pow((this.llegadasPromedio2/this.atendidoPorPeriodo2),this.numeroCanales2))*((this.numeroCanales2*this.atendidoPorPeriodo2)/((this.numeroCanales2*this.atendidoPorPeriodo2)-this.llegadasPromedio2)))).toFixed(2));
    this.lmmm = (((this.llegadasPromedio2*this.atendidoPorPeriodo2)*(Math.pow((this.llegadasPromedio2/this.atendidoPorPeriodo2),this.numeroCanales2))/((this.factorial(this.numeroCanales2-1))*(Math.pow((this.numeroCanales2*this.atendidoPorPeriodo2-this.llegadasPromedio2),2)))))*this.p0mmm+(this.llegadasPromedio2/this.atendidoPorPeriodo2)
    this.wmmm = (this.lmmm/this.llegadasPromedio2);
    wmmmTemporal=this.wmmm;
    this.wmmm = this.wmmm;
    this.lqmmm = parseFloat((this.lmmm-this.llegadasPromedio2/this.atendidoPorPeriodo2).toFixed(4));
    this.wqmmm = (this.lqmmm/this.llegadasPromedio2);
    wqmmmTemporal=this.wqmmm;
    this.wqmmm = this.wqmmm;

    this.rommm = parseFloat((this.llegadasPromedio2/(this.numeroCanales2*this.atendidoPorPeriodo2)).toFixed(4));
    this.totalServiciommm = (this.costoServicio2*this.numeroCanales2)*this.horasLaborales2;
    this.totalEsperasSistemammm = (this.llegadasPromedio2*wmmmTemporal*this.costoInsatisfaccion2)*this.horasLaborales2;
    this.totalEsperaColammm = (this.llegadasPromedio2*wqmmmTemporal*this.costoInsatisfaccion2)*this.horasLaborales2;
    this.costoFinalSistemammm = parseFloat((this.totalServiciommm +this.totalEsperasSistemammm).toFixed(4));
    this.costoFinalColammm = parseFloat((this.totalServiciommm +this.totalEsperaColammm).toFixed(4));
  }

  factorial(num: number){
    let fact = 1;
    for (let i = 1; i <= num; i++) {
            fact = fact * i;
    }
    return fact;
  }

  /*MMm*/
  get llegadasPromedio2() { return this.mmmForm.get('llegadasPromedio2')?.value }
  get atendidoPorPeriodo2() { return this.mmmForm.get('atendidoPorPeriodo2')?.value }
  get horasLaborales2() { return this.mmmForm.get('horasLaborales2')?.value }
  get numeroCanales2() { return this.mmmForm.get('numeroCanales2')?.value }
  get costoServicio2() { return this.mmmForm.get('costoServicio2')?.value }
  get costoInsatisfaccion2() { return this.mmmForm.get('costoInsatisfaccion2')?.value }
  get tipoCalculo2() { return this.mmmForm.get('tipoCalculo2')?.value }

}
