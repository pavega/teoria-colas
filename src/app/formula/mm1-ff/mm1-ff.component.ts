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
  probaTerceraColumna: number = 0;

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
    const tamanioPoblacion = this.mm1FF.get('tamanioPoblacion')?.value;
    if(tamanioPoblacion>0){
      this.filas = [];
      this.totalColumna2 = 0; // Limpiar el valor anterior
      for (let i = 0; i < tamanioPoblacion + 1; i++) {
        const result = (this.factorial(tamanioPoblacion) / this.factorial(tamanioPoblacion - i)) * ((this.llegadasPromedio / this.atendidoPorPeriodo) ** i);
        const fila = {
          columna1: i,
          columna2: result,
          columna3: null
        };
        this.filas.push(fila);
        this.totalColumna2 += result;
      }
    }else {
      this.filas = [];
      this.totalColumna2 = 0;
    }
  }

  cleanTable() {
    const tamanioPoblacion = this.tamanioPoblacion;
    if (!tamanioPoblacion) {
      this.filas = [];
      this.totalColumna2 = 0;
      this.probaTerceraColumna = 0;
    }
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

    // Calcular la tercera columna en cada fila
    for (const fila of this.filas) {
      fila.columna3 = fila.columna2 * this.po;
    }
    this.probaTerceraColumna = this.totalColumna2 * this.po;
  }


  get llegadasPromedio() { return this.mm1FF.get('llegadasPromedio')?.value }
  get atendidoPorPeriodo() { return this.mm1FF.get('atendidoPorPeriodo')?.value }
  get tamanioPoblacion() { return this.mm1FF.get('tamanioPoblacion')?.value }

}
