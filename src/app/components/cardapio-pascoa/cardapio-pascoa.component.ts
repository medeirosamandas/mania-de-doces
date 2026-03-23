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
        valor2: 22,
        peso2: '130',
 
        urlFoto: 'assets/ovos2024/mini2.jpeg',
        recheio: [
          'Brigadeiro', 'Cocadinha', 'Paçoca', 'Ninho com Morango', 'Limão',
        ],
      },

      {
        id: 2,
        ativo: true,
        titulo: 'Duo de Ovos',
        descricao: '2 Unidades',
        valor: 32,
        peso: '180',
      
        urlFoto: 'assets/ovos2024/duomini.jpeg',
        recheio: [
          'Brigadeiro', 'Cocadinha', 'Paçoca', 'Ninho com Morango', 'Limão',
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
        descricao: 'Sabores Tradicionais - Cocadinha, Brigadeiro e Paçoca',
        valor: 75,
        peso: '430',
        descricao2: 'Sabores Especiais - Pistacche, Ninho com Morango e Ferrero',
        valor2: 83,
        peso2: '430',
   
        urlFoto: 'assets/ovos-de-pascoa/triogrande.jpeg',
        recheio: null,
      },
      
    ];

    this.ovoDeColher = [
      {
        id: 2,
        ativo: false,
        titulo: 'Ovo de Colher',
        descricao: 'Queridinhos',
        valor: 44,
        peso: '230',
        urlFoto: 'assets/ovos2024/ovoColherQueridinho.jpeg',
        recheio: [
          'Ninho, Nutella e Morangos',
          'Ferrero Rocher',
        ],
      },

      {
        id: 5,
        ativo: false,
        titulo: 'Ovo de Colher Especial',
        descricao: 'Nutellaço',
        valor: 95,
        peso: '380',
        valor2: 105,
        peso2: '520',
        urlFoto: 'assets/ovos2024/ovoNutellaco.jpeg',
        recheio: null,
      },
     
      
    ];

    this.ovoFechado = [
      {
        id: 1,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Tradicionais',
        valor: 75,
        peso: '400',
        valor2: 85,
        peso2: '500',
        urlFoto: 'assets/ovos2024/ovosFechados.jpeg',
        recheio: ['Cocadinha', 'Brigadeiro', 'Paçoca', 'Maracujá', 'Casadinho'],
      },

      {
        id: 2,
        ativo: true,
        titulo: 'Ovo Fechado e Trufado',
        descricao: 'Sabores Especiais',
        valor: 80,
        peso: '400',
        valor2: 95,
        peso2: '500',
        urlFoto: 'assets/ovos2024/ovoFechado.jpeg',
        recheio: ['Ninho com Nutella', 'Pistache'],
      },
      {
        id: 3,
        ativo: true,
        titulo: 'Ovo Trufado Fini',
        descricao: null,
        valor: 75,
        peso: '400',
        valor2: 85,
        peso2: '500',
        urlFoto: 'assets/ovos2024/fini.jpeg',
        recheio: ['Beijos', 'Dentadura'],
      },
    ];

    this.ovosInfantis = [{

      id: 3,
      ativo: true,
      titulo: 'Ovos Tradicionais com Surpresa e Guloseimas',
      descricao: '',
      valor: 34,
      peso: '180',        valor2: 27,
      peso2: '120',        valor3: 15,
      peso3: '80',        valor4: 8,
      peso4: '40',        valor5: 6,
      peso5: '35',
      urlFoto: 'assets/ovos2024/combinadoBrinde.jpeg',
      recheio: null,
    },
    
      {
        id: 1,
        ativo: true ,
        titulo: 'Ovo com Copo Personalizado',
        descricao: '',
        valor: 40,
        peso: '180',
        urlFoto: 'assets/ovos2024/infantilCopo.jpeg',
        recheio: null,
      },
        
 
      {
        id: 4,
        ativo: true,
        titulo: 'Kit Confeiteiro',
        descricao: '',
        valor: 48,
        peso: null,
        urlFoto: 'assets/ovos2024/confeiteiro1.jpeg',
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
