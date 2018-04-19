import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-pages',
  templateUrl: './grid-pages.component.html',
  styleUrls: ['./grid-pages.component.css']
})

export class GridPagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

}