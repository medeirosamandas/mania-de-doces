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
        ativo: false,
        titulo: 'Mini Ovos',
        descricao: '1 Unidade',
        valor: 10,
        peso: '65',
        urlFoto: 'assets/ovos2024/mini1.jpeg',
        recheio: [
          'Banoffe (casca Caribe)',
          'Beijinho',
          'Brigadeiro',
          'Casadinho',
          'Ferrero',
          'Folhado com Morangos',
          'Kinder',
          'Kit Kat',
          'Limão',
          'Maracujá',
          'Ninho com Nutella',
          'Paçoca',
          'Pistache',
          'Pistache com Morango',
          'Pudim',
        ],
      },

      {
        id: 2,
        ativo: false,
        titulo: 'Mini Ovos',
        descricao: '2 Unidades',
        valor: 20,
        peso: '130',
        urlFoto: 'assets/ovos2024/mini2.jpeg',
        recheio: [
          'Banoffe (casca Caribe)',
          'Beijinho',
          'Brigadeiro',
          'Casadinho',
          'Ferrero',
          'Folhado com Morangos',
          'Kinder',
          'Kit Kat',
          'Limão',
          'Maracujá',
          'Ninho com Nutella',
          'Paçoca',
          'Pistache',
          'Pistache com Morango',
          'Pudim',
        ],
      },
      {
        id: 3,
        ativo: false,
        titulo: 'Mini Ovos',
        descricao: '4 Unidades',
        valor: 38,
        peso: '250',
        urlFoto: 'assets/ovos2024/mini3.jpeg',
        recheio: [
          'Opção 1: Limão, Maracujá, Ferrero e Pistache',
          'Opção 2: Paçoca, Kinder, Kit Kat e Banoffe (casca Caribe)',
          'Opção 3: Paçoca, Brigadeiro, Folhado com Morangos e Ninho com Nutella',
          'Opção 4: Pudim, Pistache com Morango, Casadinho e  Beijinho',
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
        recheio: ['Pistache, Ferrero e Folhado com Morangos'],
      },
    ];

    this.ovoDeColher = [
      {
        id: 2,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Queridinhos',
        valor: 40,
        peso: '200',
        valor2: 75,
        peso2: '400',
        valor3: 85,
        peso3: '600',
        urlFoto: 'assets/ovos2024/ovoColher1.jpeg',
        recheio: [
          'Ninho, Nutella e Morangos',
          'Folhado com Morangos',
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
        valor2: 95,
        peso2: '600',
        urlFoto: 'assets/ovos2024/ovoNutellaco.jpeg',
        recheio: null,
      },
      {
        id: 7,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'com 4 docinhos sortidos',
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
        valor2: 70,
        peso2: '600',
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
        valor2: 80,
        peso2: '600',
        urlFoto: 'assets/ovos2024/ovosFechados2.jpeg',
        recheio: ['Pistache', 'Ninho com Nutella'],
      },
    ];

    this.ovosInfantis = [
      {
        id: 1,
        ativo: true,
        titulo: 'Ovo com Copo Personalizado',
        descricao: '',
        valor: 35,
        peso: '200',
        urlFoto: 'assets/ovos2024/ovoCopo.jpeg',
        recheio: null,
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Ovo Fechado com brinde surpresa e guloseimas',
        descricao: '',
        valor: 22,
        peso: '120',
        valor2: 30,
        peso2: '200',
        urlFoto: 'assets/ovos2024/ovoBrinde.jpeg',
        recheio: null,
      },

      {
        id: 4,
        ativo: true,
        titulo: 'Kit Confeiteiro',
        descricao: '',
        valor: 42,
        peso: null,
        urlFoto: 'assets/ovos2024/kitconfeiteiro.jpeg',
        recheio: null,
      },
      {
        id: 5,
        ativo: true,
        titulo: 'Caça aos ovos',
        descricao: '6 mini ovos de 35g com surpresa Fini',
        valor: 29,
        peso: '200',
        urlFoto: 'assets/ovos2024/cacaaosovos.jpg',
        recheio: null,
      },
      {
        id: 6,
        ativo: true,
        titulo: 'Ovo Explosão de guloseimas',
        descricao: '',
        valor: 60,
        peso: '300',
        urlFoto: 'assets/ovos2024/explosaoGuloseimas.jpeg',
        recheio: null,
      },

      {
        id: 7,
        ativo: true,
        titulo: 'Caixa com Alça com Guloseimas e Surpresas',
        descricao: '',
        valor: 42,
        peso: '250',
        urlFoto: 'assets/ovos2024/caixaAlca.jpeg',
        recheio: null,
      },
    ];
    this.listaLembrancinhas = [
      'assets/ovos2024/lembrancinhas.jpeg',
      'assets/ovos2024/lembrancinhas2.jpeg',
      'assets/ovos2024/lembrancinhas3.jpeg',
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
