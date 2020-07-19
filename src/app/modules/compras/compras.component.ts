import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements OnInit {

  public data: any[];

  constructor() {
    this.data = [{
      categoria: 'Alacena',
      contenido: [{
        name: 'Azucar',
        cantidad: 3,
        maximo: 10,
        unidad: 'kg',
        color: 'warning'
      },{
        name: 'Sal',
        cantidad: 1,
        maximo: 5,
        unidad: 'kg',
        color: 'danger'
      }]},{
      categoria: 'Refrigerador',
      contenido: [{
        name: 'Leche',
        cantidad: 6,
        maximo: 7,
        unidad: 'L',
        color: 'success'
      },{
        name: 'Huevo',
        cantidad: 1,
        maximo: 4,
        unidad: 'kg',
        color: 'warning'
      }]},
    ]
  }

  ngOnInit() {}

}
