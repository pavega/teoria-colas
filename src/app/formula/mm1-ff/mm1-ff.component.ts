import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-mm1-ff',
  templateUrl: './mm1-ff.component.html',
  styleUrls: ['./mm1-ff.component.css']
})
export class Mm1FfComponent implements OnInit {

  mm1FF!: FormGroup;
  cantidadFilas!: number;
  filas: any[] = [];

  totalColumna2: number = 0;

  l = -1;
  w = -1;
  lq = -1;
  wq = -1;
  po = -1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mm1FF = this.formBuilder.group({
      llegadasPromedio: [''],
      atendidoPorPeriodo: [''],
      tamanioPoblacion: [''],
    });
  }
  generarFilas() {
    setTimeout(() => {
      this.filas = [];
      for (let i = 0; i < this.cantidadFilas + 1; i++) {
        const x =this.factorial(this.cantidadFilas);
        const y = this.factorial(this.cantidadFilas - i);
        const z = (this.llegadasPromedio / this.atendidoPorPeriodo) ** i;
        const result = (x/y)*z;
        const fila = {
          columna1: i,
          columna2: result,
          columna3: this.calcularColumna3(result)
        };
        this.filas.push(fila);
        this.totalColumna2 += result;
      }
    });
  }

  calcularColumna3(columna2: number) {
    const totalColumna2 = this.totalColumna2;
    let result;

    if (totalColumna2 > 0) {
      result = columna2 * totalColumna2;
    }

    return result;
  }

  customValidator(formGroup: FormGroup) {
    const llegadasPromedio = formGroup.get('llegadasPromedio')?.value;
    const atendidoPorPeriodo = formGroup.get('atendidoPorPeriodo')?.value;

    if (llegadasPromedio && atendidoPorPeriodo) {
      const division = llegadasPromedio / atendidoPorPeriodo;
      formGroup.get('division')?.setValue(division);
    }
  }


  factorial(num: number){
    let fact = 1;
    for (let i = 1; i <= num; i++) {
            fact = fact * i;
    }
    return fact;
  }

  calcularMM1FF(){
    if (this.mm1FF.invalid) return;

    this.po = parseFloat((1/this.totalColumna2).toFixed(3));
    this.lq = parseFloat((this.tamanioPoblacion - (((this.llegadasPromedio+this.atendidoPorPeriodo)/this.llegadasPromedio)*(1-this.po))).toFixed(3))
    this.l = parseFloat((this.lq + (1-this.po)).toFixed(3));
    this.wq = parseFloat((this.lq/((this.tamanioPoblacion-this.l)*this.llegadasPromedio)).toFixed(3));
    this.w = parseFloat((this.wq +(1/this.atendidoPorPeriodo)).toFixed(3));
  }


  get llegadasPromedio() { return this.mm1FF.get('llegadasPromedio')?.value }
  get atendidoPorPeriodo() { return this.mm1FF.get('atendidoPorPeriodo')?.value }
  get tamanioPoblacion() { return this.mm1FF.get('tamanioPoblacion')?.value }

}
