import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  listaProdutos: any;

  constructor() {}

  ngOnInit(): void {
    this.listaProdutos = [
      {
        titulo: 'Cestas',
        descricao: 'Cestas Personalizadas',
        urlFoto: 'assets/circulo.png',
      },
      {
        titulo: 'Páscoa',
        descricao: 'Ovos de páscoa',
        urlFoto: 'assets/circulo.png',
      },
      {
        titulo: 'Páscoa',
        descricao: 'Doces Personalizados para aniversário',
        urlFoto: 'assets/circulo.png',
      },
      {
        titulo: 'Páscoa',
        descricao: 'Lembranças personalizadas em datas comemorativas',
        urlFoto: 'assets/circulo.png',
      },
    ];
  }
}
