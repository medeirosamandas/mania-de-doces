import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-pascoa',
  templateUrl: './cardapio-pascoa.component.html',
  styleUrls: ['./cardapio-pascoa.component.css'],
})
export class CardapioPascoaComponent implements OnInit {
  miniOvos: any;
  listaLembrancinhas: any;
  diaDosNamorados: any;
  ovosInfantis: any;
  trioDeOvos: any;
  ovoDeColher: any;
  ovoFechado: any;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
    this.miniOvos = [
      {
        id: 1,
        ativo: true,
        titulo: 'Mini Ovos',
        descricao: '1 Unidade',
        valor: 10,
        peso: '250',
        urlFoto: 'assets/ovos2024/mini1.jpeg',
        recheio: [
          'Limão, maracujá, Ferrero, pistache, paçoca, Kinder, Kit Kat, Banoffe (casca Caribe), Brigadeiro, Folhado de morango, Ninho com Nutella, Pudim, Pistache com Morango, Casadinho, Beijinho',
        ],
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Mini Ovos',
        descricao: '2 Unidades',
        valor: 20,
        peso: '500',
        urlFoto: 'assets/ovos2024/mini2.jpeg',
        recheio: [
          'Limão, maracujá, Ferrero, pistache, paçoca, Kinder, Kit Kat, Banoffe (casca Caribe), Brigadeiro, Folhado de morango, Ninho com Nutella, Pudim, Pistache com Morango, Casadinho, Beijinho',
        ],
      },
      {
        id: 3,
        ativo: true,
        titulo: 'Mini Ovos',
        descricao: '4 Unidade',
        valor: 38,
        peso: '1000',
        urlFoto: 'assets/ovos2024/mini3.jpeg',
        recheio: [
          'Opção 1: Limão, maracujá, Ferrero e pistache',
          'Opção 2: Paçoca, Kinder, kit Kat e banoffe (casca caribe)',
          'Opção 3: Paçoca, brigadeiro, folhado de morango e ninho com Nutella',
          'Opação 4: Pudim, pistache com morango, casadinho e  beijinho',
        ],
      },
    ];

    this.trioDeOvos = [
      {
        id: 1,
        ativo: true,
        titulo: 'Trio de Ovos',
        descricao: 'Sabores Tradicionais',
        valor: 58,
        peso: '430',
        urlFoto: 'assets/ovos2024/trio1.jpeg',
        recheio: ['Beijinho, Brigadeiro e Paçoca'],
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Trio de Ovos',
        descricao: 'Sabores Especiais',
        valor: 68,
        peso: '430',
        urlFoto: 'assets/ovos2024/trio2.jpeg',
        recheio: ['Pistache, Ferrero e Folhado'],
      },
    ];

    this.ovoDeColher = [
      {
        id: 1,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Sabores Especiais',
        valor: 40,
        peso: '180',
        urlFoto: 'assets/ovos2024/ovoColher1.jpeg',
        recheio: [
          'Ninho com Nutella',
          'Ferrero',
          'Folhado de Morangos',
          'Kinder Bueno',
        ],
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Queridinhos FALTA FOTO',
        valor: 40,
        peso: '200',
        urlFoto: 'assets/ovos2024/ovoColher1.jpeg',
        recheio: [
          'Ninho, Nutella e Morangos',
          'Folhado de Morangos',
          'Ferrero Rocher',
        ],
      },
      {
        id: 3,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Queridinhos FALTA FOTO',
        valor: 75,
        peso: '400',
        urlFoto: 'assets/ovos2024/ovoColher1.jpeg',
        recheio: [
          'Ninho, Nutella e Morangos',
          'Folhado de Morangos',
          'Ferrero Rocher',
        ],
      },
      {
        id: 4,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Queridinhos FALTA FOTO',
        valor: 85,
        peso: '600',
        urlFoto: 'assets/ovos2024/ovoColher1.jpeg',
        recheio: [
          'Ninho, Nutella e Morangos',
          'Folhado de Morangos',
          'Ferrero Rocher',
        ],
      },
      {
        id: 5,
        ativo: true,
        titulo: 'Ovo de Colher Especial',
        descricao: 'Nutellaço',
        valor: 80,
        peso: '400',
        urlFoto: 'assets/ovos2024/ovoNutellaco.jpeg',
        recheio: null,
      },
      {
        id: 6,
        ativo: true,
        titulo: 'Ovo de Colher Especial',
        descricao: 'Nutellaço',
        valor: 95,
        peso: '600',
        urlFoto: 'assets/ovos2024/ovoNutellaco.jpeg',
        recheio: null,
      },
      {
        id: 7,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'com 4 docinhos',
        valor: 80,
        peso: '400',
        urlFoto: 'assets/ovos2024/ovoColherDocinho.jpeg',
        recheio: ['Ninho, Nutella e Morangos'],
      },
    ];

    this.ovoFechado = [
      {
        id: 1,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Tradicionais',
        valor: 50,
        peso: '400',
        urlFoto: 'assets/ovos2024/ovosFechados.jpeg',
        recheio: ['Cocadinha', 'Brigadeiro', 'Paçoca', 'Maracujá'],
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Tradicionais',
        valor: 70,
        peso: '600',
        urlFoto: 'assets/ovos2024/ovosFechados.jpeg',
        recheio: ['Cocadinha', 'Brigadeiro', 'Paçoca', 'Maracujá'],
      },
      {
        id: 3,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Especiais',
        valor: 57,
        peso: '400',
        urlFoto: 'assets/ovos2024/ovosFechados.jpeg',
        recheio: ['Pistache', 'Ninho com Nutella'],
      },
      {
        id: 4,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Especiais',
        valor: 80,
        peso: '600',
        urlFoto: 'assets/ovos2024/ovosFechados.jpeg',
        recheio: ['Pistache', 'Ninho com Nutella'],
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
