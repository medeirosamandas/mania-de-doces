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
        valor: 12,
        peso: '65',
        descricao2: '2 Unidades',
        valor2: 20,
        peso2: '130',
        urlFoto: 'assets/ovos2024/mini2.jpeg',
        recheio: [
          'Brigadeiro', 'Cocadinha', 'Paçoca', 'Ninho com Nutella', 'Ninho com Morango', 'Maracujá', 'Limão',
        ],
      },

      {
        id: 2,
        ativo: true,
        titulo: 'Duo de Mini Ovos',
        descricao: '2 Unidades',
        valor: 30,
        peso: '170',
        descricao2: null,
        urlFoto: 'assets/ovos2024/duomini.jpeg',
        recheio: [
          'Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Morango', 'Maracujá',
        ],
      },

      
      {
        id: 3,
        ativo: true,
        titulo: 'Quarteto de Mini Ovos',
        descricao: '4 Unidades',
        valor: 40,
        peso: '250',
        descricao2: null,
        valor2: 48,
        peso2: '330',
        urlFoto: 'assets/ovos2024/4ovos.jpeg',
        recheio: [
          'Opção 1: Brigadeiro, Ninho, Pistache e Maracujá.',
          'Opção 2: Paçoca, Cocadinha, Ferrero e Kinder.',
        ],
      },
      
     
    ];

    this.trioDeOvos = [
      {
        id: 1,
        ativo: true,
        titulo: 'Trio de Ovos',
        descricao: 'Sabores Tradicionais',
        valor: 63,
        peso: '430',
        descricao2: 'Sabores Especiais',
        valor2: 75,
        peso2: '430',
        urlFoto: 'assets/ovos2024/trio3.jpeg',
        recheio: ['Beijinho, Brigadeiro e Paçoca'],
        recheio2: ['Pistache, Ninho com Morango e Ferrero'],
      },
      
    ];

    this.ovoDeColher = [
      {
        id: 2,
        ativo: true,
        titulo: 'Ovo de Colher',
        descricao: 'Queridinhos',
        valor: 40,
        peso: '230',
        valor2: 80,
        peso2: '400',
        valor3: 90,
        peso3: '600',
        urlFoto: 'assets/ovos2024/ovoColherQueridinho.jpeg',
        recheio: [
          'Ninho, Nutella e Morangos',
          'Ferrero Rocher',
        ],
      },

      {
        id: 5,
        ativo: true,
        titulo: 'Ovo de Colher Especial',
        descricao: 'Nutellaço',
        valor: 90,
        peso: '400',
        valor2: 100,
        peso2: '600',
        urlFoto: 'assets/ovos2024/ovoNutellaco.jpeg',
        recheio: null,
      },
      {
        id: 6,
        ativo: true,
        titulo: 'Ovo de Colher Especial',
        descricao: 'Kidivertido',
        valor: 90,
        peso: '400',
        valor2: 100,
        peso2: '600',
        urlFoto: 'assets/ovos2024/ovoKidivertido.jpeg',
        recheio: null,
      },
      
    ];

    this.ovoFechado = [
      {
        id: 1,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Tradicionais',
        valor: 60,
        peso: '480',
        valor2: 70,
        peso2: '650',
        urlFoto: 'assets/ovos2024/ovosFechados.jpeg',
        recheio: ['Cocadinha', 'Brigadeiro', 'Paçoca', 'Maracujá', 'Casadinho'],
      },

      {
        id: 3,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Especiais',
        valor: 68,
        peso: '480',
        valor2: 90,
        peso2: '650',
        urlFoto: 'assets/ovos2024/ovoFechado.jpeg',
        recheio: ['Pistache', 'Ninho com Nutella'],
      },
    ];

    this.ovosInfantis = [
      {
        id: 1,
        ativo: true,
        titulo: 'Ovo com Copo Personalizado',
        descricao: '',
        valor: 40,
        peso: '180',
        urlFoto: 'assets/ovos2024/infantilCopo.jpeg',
        recheio: null,
      },
      {
        id: 2,
        ativo: true,
        titulo: 'Ovo com Garrafa Personalizado',
        descricao: '',
        valor: 38,
        peso: '180',
        urlFoto: 'assets/ovos2024/infantilGarrafa.jpeg',
        recheio: null,
      },

      {
        id: 3,
        ativo: true,
        titulo: 'Combinado Brinde Surpresa e Guloseimas',
        descricao: '',
        valor: 32,
        peso: '180',        valor2: 25,
        peso2: '120',        valor3: 13,
        peso3: '80',        valor4: 7,
        peso4: '40',        valor5: 35,
        peso5: '5',
        urlFoto: 'assets/ovos2024/combinadoBrinde.jpeg',
        recheio: null,
      },
 
      {
        id: 4,
        ativo: true,
        titulo: 'Kit Confeiteiro 1',
        descricao: '',
        valor: 45,
        peso: null,
        urlFoto: 'assets/ovos2024/confeiteiro1.jpeg',
        recheio: null,
      },
      {
        id: 4,
        ativo: true,
        titulo: 'Kit Confeiteiro 2',
        descricao: '',
        valor: 50,
        peso: null,
        urlFoto: 'assets/ovos2024/confeiteiro2.jpeg',
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
