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

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  

  ngOnInit(): void {
    this.ovosDePascoa = [
      {
        id: 1,
        ativo: false,
        titulo: 'Duo de Ovos',
        descricao: 'Caixa com 2 ovos',
        valor: 30,
        peso: 160,
        urlFoto: 'assets/ovos-de-pascoa/01-duo-de-ovos.jpeg',
        recheio: ['Ninho com Morango', 'Brigadeiro com Nutella'],
      },

      {
        id: 7,
        ativo: false,
        titulo: 'Mini Ovo Tradicional',
        descricao: 'Caixa com 1 mini ovo - sabores tradicionais',
        valor: 14,
        peso: 90,
        urlFoto:
          'assets/ovos-de-pascoa/07-08-caixa-com-um-mini-ovo-tradicional-especial.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 8,
        ativo: false,
        titulo: 'Mini Ovo Especial',
        descricao: 'Caixa com 1 mini ovo - sabores especiais',
        valor: 17,
        peso: 90,
        urlFoto:
          'assets/ovos-de-pascoa/07-08-caixa-com-um-mini-ovo-tradicional-especial.jpeg',
        recheio: ['Ferreiro Rocher', 'Rafaello', 'Kinder Bueno', 'Kit Kat'],
      },

      {
        id: 1,
        ativo: false,
        titulo: 'Ovo Fechado Trufado',
        descricao: 'Ovo fechado trufado tamanho P',
        valor: 30,
        peso: 200,
        urlFoto: 'assets/ovos-de-pascoa/11-12-ovos-fechados-e-trufados.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 2,
        ativo: false,
        titulo: 'Ovo Fechado Trufado',
        descricao: 'Ovo fechado trufado tamanho M',
        valor: 45,
        peso: 350,
        urlFoto: 'assets/ovos-de-pascoa/11-12-ovos-fechados-e-trufados.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 3,
        ativo: false,
        titulo: 'Ovo Fechado Sem Recheio',
        descricao: 'Ovo fechado sem recheio e com surpresa dentro. Tamanho M',
        valor: 35,
        peso: 250,
        urlFoto: 'assets/ovos-de-pascoa/13-ovo-fechado-sem-recheio.jpeg',
        recheio: null,
      },
      {
        id: 4,
        ativo: false,
        titulo: 'Kit Infantil - Caixa com Alça',
        descricao: 'Ovo trufado. Brinde jogo da memória e brinde surpresa',
        valor: 42,
        peso: 340,
        urlFoto: 'assets/ovos-de-pascoa/14-caixa-com-alca.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },

      {
        id: 6,
        ativo: false,
        titulo: 'Ovo de Colher com Docinhos',
        descricao: 'Ovo de colher sabores tradicionais + 4 docinhos',
        valor: 60,
        peso: 400,
        urlFoto: 'assets/ovos-de-pascoa/16-ovo-com-docinhos.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 7,
        ativo: false,
        titulo: 'Ovo de Colher com Docinhos',
        descricao: 'Ovo de colher sabores especiais + 4 docinhos',
        valor: 67,
        peso: 400,
        urlFoto: 'assets/ovos-de-pascoa/17-ovo-com-docinhos.jpeg',
        recheio: ['Ferreiro Rocher', 'Rafaello', 'Kinder Bueno', 'Kit Kat'],
      },
      {
        id: 8,
        ativo: false,
        titulo: 'Ovo Plano',
        descricao: 'Ovo Plano com muuuito sabor',
        valor: 39,
        peso: 380,
        urlFoto: 'assets/ovos-de-pascoa/18-ovo-plano.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 5,
        ativo: false,
        titulo: 'Kit Infantil - Fábrica de Coelho',
        descricao: 'Um lindo kit confeiteiro',
        valor: 38,
        peso: null,
        urlFoto: 'assets/ovos-de-pascoa/15-kit-fabrica-de-coelhos.jpeg',
        recheio: null,
      },
      {
        id: 9,
        ativo: false,
        titulo: 'Ovo de Colher Tradicional',
        descricao: 'Caixa com 1 ovo - sabores tradicionais',
        valor: 30,
        peso: 180,
        urlFoto:
          'assets/ovos-de-pascoa/09-10-caixa-com-um-ovo-tradicional-especial.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 3,
        ativo: false,
        titulo: '4 Mini Ovos Tradicionais',
        descricao: 'Caixa com 4 mini ovos - sabores tradicionais',
        valor: 35,
        peso: 240,
        urlFoto: 'assets/ovos-de-pascoa/03-caixa-mini-ovos-tradicionais.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 4,
        ativo: false,
        titulo: '4 Mini Ovos Especiais',
        descricao: 'Caixa com 4 mini ovos - sabores especiais',
        valor: 38,
        peso: 240,
        urlFoto: 'assets/ovos-de-pascoa/04-caixa-mini-ovos-especiais.jpeg',
        recheio: ['Ferreiro Rocher', 'Rafaello', 'Kinder Bueno', 'Kit Kat'],
      },
      {
        id: 0,
        ativo: false,
        titulo: 'Ovo de Colher Especial',
        descricao: 'Caixa com 1 ovo - sabores especiais',
        valor: 33,
        peso: 180,
        urlFoto:
          'assets/ovos-de-pascoa/09-10-caixa-com-um-ovo-tradicional-especial.jpeg',
        recheio: ['Ferreiro Rocher', 'Rafaello', 'Kinder Bueno', 'Kit Kat'],
      },
      {
        id: 2,
        ativo: false,
        titulo: 'Trio de Ovos',
        descricao: 'Caixa com 3 ovos',
        valor: 45,
        peso: 450,
        urlFoto: 'assets/ovos-de-pascoa/02-trio-de-ovos.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca'],
      },
      {
        id: 5,
        ativo: false,
        titulo: '2 Mini Ovos Tradicionais',
        descricao: 'Caixa com 2 mini ovos - sabores tradicionais',
        valor: 17,
        peso: 120,
        urlFoto:
          'assets/ovos-de-pascoa/05-caixa-com-2-mini-ovos-tradicionais.jpeg',
        recheio: ['Brigadeiro', 'Beijinho', 'Paçoca', 'Ninho com Nutella'],
      },
      {
        id: 6,
        ativo: false,
        titulo: '2 Mini Ovos Especiais',
        descricao: 'Caixa com 2 mini ovos - sabores especiais',
        valor: 19,
        peso: 120,
        urlFoto:
          'assets/ovos-de-pascoa/06-caixa-com-2-mini-ovos-especiais.jpeg',
        recheio: ['Ferreiro Rocher', 'Rafaello', 'Kinder Bueno', 'Kit Kat'],
      },
    ];

    this.listaLembrancinhas = [
      'assets/ovos-de-pascoa/lembrancinha1.jpeg',
      'assets/ovos-de-pascoa/lembrancinha2.jpeg',
      'assets/ovos-de-pascoa/lembrancinha3.jpeg',
      'assets/ovos-de-pascoa/lembrancinha4.jpeg',
      'assets/ovos-de-pascoa/lembrancinha5.jpeg',
      'assets/ovos-de-pascoa/lembrancinha6.jpeg',
      'assets/ovos-de-pascoa/lembrancinha7.jpeg',
    ];

    this.diaDosNamorados = [
      {
        id: 1,
        ativo: true, 
        titulo: "Caixa com 6 doces decorados", 
        valor: 15, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/01.jpeg', 
          'assets/dia-dos-namorados/02.jpeg'
        ]
      },         {
        id: 2.1,
        ativo: true, 
        titulo: "Caixa com 8 doces decorados + 2 dadinhos", 
        valor: 22, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/07.jpeg', 
        ]        },  {
        id: 2,
        ativo: true, 
        titulo: "Caixa com 9 doces decorados", 
        valor: 20, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/19.jpeg', 
        ]        }, 
                {
        id: 3,
        ativo: true, 
        titulo: "Caixa com 10 doces decorados", 
        valor: 22, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/04.jpeg', 
          'assets/dia-dos-namorados/05.jpeg', 
          'assets/dia-dos-namorados/06.jpeg'
        ]      },         {
        id: 4,
        ativo: true, 
        titulo: "Caixa com 12 doces decorados", 
        valor: 25, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/03.jpeg', 
        ]      },         {
        id: 5,
        ativo: true, 
        titulo: "Caixa com 5 doces e um coração", 
        valor: 18, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/08.jpeg', 
        ]        },         {
        id: 6,
        ativo: true, 
        titulo: "Caixa com dois ursinhos e 3 corações recheados ", 
        valor: 18, 
        urlFoto: 
        [
          'assets/dia-dos-namorados/09.jpeg', 
        ]         }, 
        
        {
          id: 7,
          ativo: true, 
          titulo: "Caixa da sedução com 9 doces + jogo do amor", 
          valor: 28, 
          urlFoto: 
          [
            'assets/dia-dos-namorados/10.jpeg', 
            'assets/dia-dos-namorados/11.jpeg'
          ]
        },

        {
          id: 8,
          ativo: true, 
          titulo: "Caixa com 8 doces e uma garrafa de cerveja Budweiser", 
          valor: 22, 
          urlFoto: 
          [
            'assets/dia-dos-namorados/12.jpeg', 
          ]         },

          {
            id: 9,
            ativo: true, 
            titulo: "Caixa com 4 doces e um coração", 
            valor: 15, 
            urlFoto: 
            [
              'assets/dia-dos-namorados/13.jpeg', 
            ]         },

            {
              id: 10,
              ativo: true, 
              titulo: "Caixa dos Desejos", 
              opcao1: "Fondue no coração de chocolate",
              opcao2: "Docinhos + 1 garrafa de cerveja",
              valor: 39.90, 
              urlFoto: 
              [
                'assets/dia-dos-namorados/14.jpeg', 
                'assets/dia-dos-namorados/15.jpeg', 
                'assets/dia-dos-namorados/16.jpeg', 
              ]         },

              {
                id: 11,
                ativo: true, 
                titulo: "Foundue Especial", 

                valor: 69.90, 
                urlFoto: 
                [
                  'assets/dia-dos-namorados/17.jpeg', 
                  'assets/dia-dos-namorados/18.jpeg', 
                ]         }
      
      ]
  }
}
