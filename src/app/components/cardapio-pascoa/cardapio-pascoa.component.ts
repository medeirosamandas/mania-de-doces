import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-pascoa',
  templateUrl: './cardapio-pascoa.component.html',
  styleUrls: ['./cardapio-pascoa.component.css'],
})
export class CardapioPascoaComponent implements OnInit {
  ovosDePascoa: any;
  listaLembrancinhas: any;
  diaDosNamorados: any;
  ovosInfantis: any;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
    this.ovosDePascoa = [
      {
        id: 1,
        ativo: true,
        titulo: 'Quarteto de Mini Ovos Especiais',
        descricao: 'Caixa com 2 ovos',
        valor: 40,
        peso: 250,
        urlFoto: 'assets/ovos-de-pascoa/01.jpeg',
        recheio: ['Folhado com morango', 'Pudim', 'Casadinho', 'Ferrero'],
      },

      {
        id: 2,
        ativo: true,
        titulo: 'Quarteto de Mini Ovos Tradicionais',
        descricao: 'Caixa com 2 ovos',
        valor: 38,
        peso: 250,
        urlFoto: 'assets/ovos-de-pascoa/02.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },

      {
        id: 3,
        ativo: true,
        titulo: 'Trio de Ovos',
        descricao: 'Caixa com 2 ovos',
        valor: 58,
        peso: 430,
        urlFoto: 'assets/ovos-de-pascoa/03.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca'],
      },

      {
        id: 4,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Caixa com 2 ovos',
        valor: 39,
        peso: 180,
        urlFoto: 'assets/ovos-de-pascoa/04.jpeg',
        recheio: ['Ninho com Nutella', 'Casadinho', 'Folhado de Morangos'],
      },
      {
        id: 5,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Caixa com 2 ovos',
        valor: 75,
        peso: 400,
        urlFoto: 'assets/ovos-de-pascoa/05.jpeg',
        recheio: [
          'Ninho com Nutella e morango',
          'Ferrero',
          'Pudim',
          'Folhado de morangos',
        ],
      },

      {
        id: 6,
        ativo: true,
        titulo: 'Ovo de Colher com 4 Docinhos',
        descricao: 'Caixa com 2 ovos',
        valor: 68,
        peso: 400,
        urlFoto: 'assets/ovos-de-pascoa/06.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca'],
      },

      {
        id: 7,
        ativo: true,
        titulo: 'Ovo de Colher Super Especial com 4 Docinhos',
        descricao: 'Caixa com 2 ovos',
        valor: 80,
        peso: 400,
        urlFoto: 'assets/ovos-de-pascoa/07.jpeg',
        recheio: null,
      },
      {
        id: 8,
        ativo: true,
        titulo: 'Ovo de Colher Super Especial',
        descricao: 'Caixa com 2 ovos',
        valor: 95,
        peso: 700,
        urlFoto: 'assets/ovos-de-pascoa/08.jpeg',
        recheio: null,
      },
      {
        id: 9,
        ativo: true,
        titulo: 'Ovo Plano',
        descricao: 'Caixa com 2 ovos',
        valor: 42,
        peso: 350,
        urlFoto: 'assets/ovos-de-pascoa/09.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho'],
      },
      {
        id: 10,
        ativo: true,
        titulo: 'Ovo Fechado Trufado',
        descricao: 'Caixa com 2 ovos',
        valor: 48,
        peso: 400,
        urlFoto: 'assets/ovos-de-pascoa/10.jpeg',
        recheio: ['Brigadeiro', 'Cocadinha', 'Paçoca', 'Ninho', 'Maracujá'],
      },
      {
        id: 10,
        ativo: true,
        titulo: 'Ovo Fechado Trufado',
        descricao: 'Caixa com 2 ovos',
        valor: 58,
        peso: 500,
        urlFoto: 'assets/ovos-de-pascoa/11.jpeg',
        recheio: ['Brigadeiro', 'Cocadinha', 'Paçoca', 'Ninho', 'Maracujá'],
      },
    ];

    this.ovosInfantis = [
      {
        id: 1,
        ativo: true,
        titulo:
          'Casca chocolate ao leite e chocolate branco, com surpresa e bombons dentro',
        descricao: 'Caixa com 2 ovos',
        valor: 40,
        peso: 250,
        urlFoto: 'assets/ovos-de-pascoa/infantil-01.jpeg',
        recheio: null,
      },

      {
        id: 2,
        ativo: true,
        titulo:
          'Casca chocolate ao leite e chocolate branco, com surpresa e bombons dentro',
        descricao: 'Caixa com 2 ovos',
        valor: 45,
        peso: 300,
        urlFoto: 'assets/ovos-de-pascoa/infantil-01.jpeg',
        recheio: null,
      },
      {
        id: 3,
        ativo: true,
        titulo: 'Ovos com Geleca',
        descricao: 'Caixa com 2 ovos',
        valor: 25,
        peso: 100,
        urlFoto: 'assets/ovos-de-pascoa/infantil-03.jpeg',
        recheio: null,
      },
      {
        id: 4,
        ativo: true,
        titulo: 'Ovos com Geleca',
        descricao: 'Caixa com 2 ovos',
        valor: 30,
        peso: 150,
        urlFoto: 'assets/ovos-de-pascoa/infantil-03.jpeg',
        recheio: null,
      },
      {
        id: 5,
        ativo: true,
        titulo: 'Ovos com Guloseimas',
        descricao: 'Caixa com 2 ovos',
        valor: 15,
        peso: 100,
        urlFoto: 'assets/ovos-de-pascoa/infantil-05.jpeg',
        recheio: null,
      },
      {
        id: 6,
        ativo: true,
        titulo: 'Caixa com Alça, com guloseimas e surpresa',
        descricao: 'Caixa com 2 ovos',
        valor: 40,
        peso: 250,
        urlFoto: 'assets/ovos-de-pascoa/infantil-06.jpeg',
        recheio: null,
      },
      {
        id: 7,
        ativo: true,
        titulo: 'Kit Confeiteiro',
        descricao: 'Caixa com 2 ovos',
        valor: 42,
        peso: null,
        urlFoto: 'assets/ovos-de-pascoa/infantil-07.jpeg',
        recheio: null,
      },
    ];
    this.listaLembrancinhas = [
      'assets/lembrancinhas/1.jpeg',
      'assets/lembrancinhas/2.jpeg',
      'assets/lembrancinhas/3.jpeg',
      'assets/lembrancinhas/4.jpeg',
    ];

    this.diaDosNamorados = [
      {
        id: 2.1,
        ativo: false,
        titulo: 'Caixa com 8 doces decorados + 2 dadinhos',
        valor: 22,
        urlFoto: ['assets/dia-dos-namorados/07.jpeg'],
      },
      {
        id: 2,
        ativo: false,
        titulo: 'Caixa com 9 doces decorados',
        valor: 20,
        urlFoto: ['assets/dia-dos-namorados/19.jpeg'],
      },
      {
        id: 3,
        ativo: false,
        titulo: 'Caixa com 10 doces decorados',
        valor: 22,
        urlFoto: [
          'assets/dia-dos-namorados/04.jpeg',
          'assets/dia-dos-namorados/05.jpeg',
          'assets/dia-dos-namorados/06.jpeg',
        ],
      },
      {
        id: 4,
        ativo: false,
        titulo: 'Caixa com 12 doces decorados',
        valor: 25,
        urlFoto: ['assets/dia-dos-namorados/03.jpeg'],
      },

      {
        id: 7,
        ativo: false,
        titulo: 'Caixa da sedução com 9 doces + jogo do amor',
        valor: 28,
        urlFoto: [
          'assets/dia-dos-namorados/10.jpeg',
          'assets/dia-dos-namorados/11.jpeg',
        ],
      },

      {
        id: 8,
        ativo: false,
        titulo: 'Caixa com 8 doces e uma garrafa de cerveja Budweiser',
        valor: 22,
        urlFoto: ['assets/dia-dos-namorados/12.jpeg'],
      },

      {
        id: 10,
        ativo: false,
        titulo: 'Caixa dos Desejos',
        opcao1: 'Fondue no coração de chocolate',
        opcao2: 'Docinhos + 1 garrafa de cerveja',
        valor: 39.9,
        urlFoto: [
          'assets/dia-dos-namorados/14.jpeg',
          'assets/dia-dos-namorados/15.jpeg',
          'assets/dia-dos-namorados/16.jpeg',
        ],
      },

      {
        id: 11,
        ativo: false,
        titulo: 'Foundue Especial',

        valor: 69.9,
        urlFoto: [
          'assets/dia-dos-namorados/17.jpeg',
          'assets/dia-dos-namorados/18.jpeg',
        ],
      },
      {
        id: 1,
        ativo: false,
        titulo: 'Caixa com 6 doces decorados',
        valor: 15,
        urlFoto: [
          'assets/dia-dos-namorados/01.jpeg',
          'assets/dia-dos-namorados/02.jpeg',
        ],
      },
      {
        id: 5,
        ativo: false,
        titulo: 'Caixa com 5 doces e um coração',
        valor: 18,
        urlFoto: ['assets/dia-dos-namorados/08.jpeg'],
      },
      {
        id: 9,
        ativo: false,
        titulo: 'Caixa com 4 doces e um coração',
        valor: 15,
        urlFoto: ['assets/dia-dos-namorados/13.jpeg'],
      },
      {
        id: 6,
        ativo: false,
        titulo: 'Caixa com dois ursinhos e 3 corações recheados ',
        valor: 18,
        urlFoto: ['assets/dia-dos-namorados/09.jpeg'],
      },
    ];
  }
}
