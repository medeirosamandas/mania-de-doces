import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lembrancinhas',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, CurrencyPipe],
  templateUrl: './lembrancinhas.component.html',
  styleUrl: './lembrancinhas.component.css',
})
export class LembrancinhasComponent implements OnInit {
  listaLembrancinhas: any;

  ngOnInit(): void {
    this.listaLembrancinhas = [
      {
        id: 1,
        ativo: true,
        titulo: 'Balões',
        descricao: null,
        valor: 20,
        peso: '100',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/01.jpg',
        recheio: null,
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Ovinhos Recheados com Bala Fini',
        descricao: null,
        valor: 20,
        peso: '100',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/02.jpg',
        recheio: null,
      },
      {
        id: 3,
        ativo: true,
        titulo: '2 mini ovos divertidos',
        descricao: null,
        valor: 12,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/03.jpg',
        recheio: null,
      },
      {
        id: 4,
        ativo: true,
        titulo: 'Kit 6 Docinhos',
        descricao: null,
        valor: 16,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/04.jpg',
        recheio: null,
      },
      {
        id: 5,
        ativo: true,
        titulo: 'Kit 3 Docinhos + 2 rabinhos de coelho',
        descricao: null,
        valor: 16,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/05.jpg',
        recheio: null,
      },
      {
        id: 6,
        ativo: true,
        titulo: 'Controle Recheado',
        descricao: null,
        valor: 10,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/06.jpg',
        recheio: null,
      },

      {
        id: 10,
        ativo: true,
        titulo: 'kit docinhos',
        descricao: 'kit com 2',
        descricao2: 'kit com 4',
        valor: 5,
        peso: null,
        valor2: 12,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/10.jpg',
        recheio: null,
      },

      {
        id: 12,
        ativo: true,
        titulo: 'kit 6 docinhos',
        descricao: null,
        descricao2: null,
        valor: 16,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/12.jpg',
        recheio: null,
      },
      {
        id: 13,
        ativo: true,
        titulo: '3 coelhos recheados',
        descricao: null,
        descricao2: null,
        valor: 18,
        peso: '100',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/13.jpg',
        recheio: null,
      },
      {
        id: 14,
        ativo: true,
        titulo: 'Cenouritos',
        descricao: '1 unidade',
        descricao2: '2 unidades',
        valor: 5,
        peso: null,
        valor2: 14,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/14.jpg',
        recheio: null,
      },
      {
        id: 15,
        ativo: true,
        titulo: '4 docinhos',
        descricao: '12g cada',
        descricao2: null,
        valor: 6,
        peso: '48',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/15.jpg',
        recheio: null,
      },
      {
        id: 16,
        ativo: true,
        titulo: '',
        descricao: 'Docinho com coelhinho',
        descricao2: 'Mini ovinho',
        valor: 2.5,
        peso: null,
        valor2: 3,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/16.jpg',
        recheio: null,
      },
      {
        id: 17,
        ativo: true,
        titulo: 'unidade bombom',
        descricao: null,
        descricao2: null,
        valor: 3,
        peso: '35',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/17.jpg',
        recheio: null,
      },
      {
        id: 18,
        ativo: true,
        titulo: 'mini ovinho com embalagem coelhinho',
        descricao: null,
        descricao2: null,
        valor: 3,
        peso: '35',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/18.jpg',
        recheio: null,
      },
      {
        id: 19,
        ativo: true,
        titulo: 'Bombons sortidos',
        descricao: null,
        descricao2: null,
        valor: 13,
        peso: '130',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/19.jpg',
        recheio: null,
      },
      {
        id: 20,
        ativo: true,
        titulo: 'Bombons sortidos',
        descricao: null,
        descricao2: null,
        valor: 10,
        peso: '100',
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/20.jpg',
        recheio: null,
      },
      {
        id: 21,
        ativo: true,
        titulo: 'Mini cenouritos',
        descricao: null,
        descricao2: null,
        valor: 3,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/21.jpg',
        recheio: null,
      },
      {
        id: 22,
        ativo: true,
        titulo: 'Ovo Frito',
        descricao: null,
        descricao2: null,
        valor: 9,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/22.jpg',
        recheio: null,
      },
      {
        id: 23,
        ativo: true,
        titulo: 'Coelhinho',
        descricao: null,
        descricao2: null,
        valor: 7,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/23.jpg',
        recheio: null,
      },
      {
        id: 24,
        ativo: true,
        titulo: 'Ovo Plano',
        descricao: null,
        descricao2: null,
        valor: 22,
        peso: 170,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/24.jpg',
        recheio: null,
      },
      {
        id: 7,
        ativo: false,
        titulo: '6 docinhos + 2 mini ovos divertidos',
        descricao: null,
        valor: 25,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/07.jpg',
        recheio: null,
      },

      {
        id: 9,
        ativo: false,
        titulo: '4 mini ovos divertidos',
        descricao: null,
        valor: 20,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/09.jpg',
        recheio: null,
      },
      {
        id: 11,
        ativo: false,
        titulo: 'kit 8 docinhos',
        descricao: null,
        descricao2: null,
        valor: 18,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/11.jpg',
        recheio: null,
      },
      {
        id: 8,
        ativo: false,
        titulo: '2 controles divertidos',
        descricao: null,
        valor: 15,
        peso: null,
        valor2: null,
        peso2: null,
        valor3: null,
        peso3: null,
        urlFoto: 'assets/lembrancinhas2024/08.jpg',
        recheio: null,
      },
    ];
  }
}
