<template>
  <div class="sumario">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-toolbar light class="elevation-0 content">
            <!-- <v-select label="HOSPITAL" :items="states" autocomplete color="bluedetail" clearable overflow dense>
            </v-select>
            <div style="margin:30px;">
            </div>
            <v-select label="OPERADORA" :items="states" autocomplete color="bluedetail" clearable dense>
            </v-select> -->
            <v-spacer></v-spacer>
            <dr-datepicker1>
            </dr-datepicker1>
            <div style="margin:10px;">
              até
            </div>
            <dr-datepicker2>
            </dr-datepicker2>
            <v-btn icon>
              <v-icon style="font-size:29px;opacity: 0.23;">comment</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
        <v-flex xs5 offset-xs1>
          <div class="text-center">
            <dr-boxe :data="data" :mode="true" :aberto="true" @OnTriggerBoxes="onNodeClick">
            </dr-boxe>
            <dr-boxe :data="data1"  :mode="true" :aberto="true" @OnTriggerBoxes="onNodeClick1">
            </dr-boxe>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Datepicker from "../../Shared/Datepicker/Datepicker";
  import Boxes from "../../Shared/Diagram/templates/Boxes";
  export default {
    name: "sumario",
    components: {
      'dr-boxe': Boxes,
      'dr-datepicker1': Datepicker,
      'dr-datepicker2': Datepicker,
    },
    data() {
      return {
        a1: null,
        states: [
          'Santa Marcelina', 'Santa Casa', 'Santa Isabel', 'Santo Amaro'
        ],
        data: {
          id: 0,
          caixa: {
            titulo: 'ENVIO - LOTES GUIAS',
            itens: [{
                label: 'Qtd Guias',
                value: '1.302',
              },
              {
                label: 'SP/SADT',
                value: '1.190',
              },
              {
                label: 'Internação',
                value: '112',
              },
              {
                label: '</br>',
                value: '</br>',
              },
              {
                label: 'Qtd Procedimentos Executados',
                value: '1.473',
              },
              {
                label: 'Qtd Despesas - Códigos',
                value: '1.473',
              },
              {
                label: 'Valor Cálculado',
                value: 'R$ 1.886,65',
              },
              {
                label: 'Valor Total Lote',
                value: 'R$ 1.892,86',
              },
              {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
            ],
          },
          children: [{
            id: 5,
            caixa: {
              titulo: 'PENDÊNCIA DE RETORNO',
              itens: [{
                  label: 'Qtd Guias',
                  value: 3,
                },
                {
                  label: 'SP/SADT',
                  value: 3,
                },
                {
                  label: 'Internação',
                  value: 0,
                },
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                  label: 'Valor Calculado',
                  value: 'R$ 0,00',
                },
                {
                  label: 'Valor Total Lote',
                  value: 'R$ 705,00',
                },
                {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
              ],
            },
          }, {
            id: 6,
            caixa: {
              titulo: ' RETORNO CONFIRMADO',
              itens: [
                {
                  label: 'Qtd Guias',
                  value: '1.299',
                }, 
                {
                  label: 'SP/SADT',
                  value: '1.187',
                },
                {
                  label: 'Internações',
                  value: '112',
                }, 
                {
                  label: '</br>',
                  value: '</br>',
                }, 
                {
                  label: 'Valor Calculado',
                  value: 'R$ 0,00',
                }, 
                {
                  label: 'Valor Total Lote',
                  value: 'R$ 1.886.114,65',
                }, 
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                  label: 'Valor Aprovado',
                  value: 'R$ 1.538.878,73',
                },
                {
                  label: 'Valor Glosado',
                  value: 'R$ 353.082,13',
                },
                {
                  label: '% Glosa',
                  value: '18,66%',
                },
                {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
              ],
            },
          children: [{
            id: 5,
            caixa: {
              titulo: 'RETORNO CONFIRMADO - SEM GLOSA',
              itens: [
                {
                  label: 'Qtd Guias',
                  value: '1.299',
                }, 
                {
                  label: 'SP/SADT',
                  value: '1.187',
                },
                {
                  label: 'Internações',
                  value: '112',
                },
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                  label: 'Valor Cálculado',
                  value: 'R$ 0,00',
                },
                {
                  label: 'Valor Total do Lote',
                  value: 'R$ 1.353.082,13',
                }, 
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                  label: 'Valor Total do Lote',
                  value: 'R$ 1.353.082,13',
                }, 
                {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
              ],
            },
          }, {
            id: 6,
            caixa: {
              titulo: 'RETORNO CONFIRMADO - COM GLOSA',
              itens: [ {
                  label: 'Qtd Guias',
                  value: '1.299',
                }, 
                {
                  label: 'SP/SADT',
                  value: '1.187',
                },
                {
                  label: 'Internações',
                  value: '112',
                }, 
                {
                  label: '</br>',
                  value: '</br>',
                }, 
                {
                  label: 'Valor Calculado',
                  value: 'R$ 0,00',
                }, 
                {
                  label: 'Valor Total Lote',
                  value: 'R$ 1.886.114,65',
                }, 
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                  label: 'Valor Aprovado',
                  value: 'R$ 1.538.878,73',
                },
                {
                  label: 'Valor Glosado',
                  value: 'R$ 353.082,13',
                },
                {
                  label: '% Glosa',
                  value: '18,66%',
                },
                {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              } 
              ],
            },
          }]
          }]
        },
        data1: {
          id: 0,
          caixa: {
            titulo: 'RETORNO - LOTES GUIAS',
            itens: [{
                label: 'Qtd Guias',
                value: '1.299',
              },
              {
                label: 'Qtd Serviços - Códigos',
                value: '5.881',
              },
              {
                label: '</br>',
                value: '</br>',
              },
              {
                label: 'Valor Total do Lote',
                value: 'R$ 1.891.960,86',
              },
              {
                label: 'Valor Aprovado',
                value: 'R$ 1.538.878,73',
              },
              {
                label: 'Valor Glosado',
                value: 'R$ 353.082,13',
              },
              {
                label: '% Glosa',
                value: '18,66%',
              },
              {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
            ],
          },
          children: [{
            id: 5,
            caixa: {
              titulo: 'RETORNO - NA COMPETÊNCIA',
              itens: [{
                  label: 'Valor Total do Lote',
                  value: 'R$ 0,00',
                },
                {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
              ],
            },
          }, {
            id: 6,
            caixa: {
              titulo: 'RETORNO - OUTRAS COMPETÊNCIAS',
              itens: [
                {
                  label: 'Qtd Guias',
                  value: '1.299',
                }, 
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                  label: 'Valor Total Lote',
                  value: 'R$ 1.891.960,86',
                },
                {
                  label: '</br>',
                  value: '</br>',
                },
                {
                label: '<hr>',
                value: '<hr>',
              },
              {
                label: '</br>&nbsp;&nbsp;Ver Mais&nbsp;&nbsp;&#9658;',
                value: '</br></br> ',
                actions: [{
                  path: 'http://www.danielprogramic.com.br',
                  trigger: true,
                }],
              },
              {
                label: '</br>',
                value: '</br>',
              },
              ],
            },
          }]
        },
      };
    },
    methods: {
      onNodeClick(item, index) {
        this.$router.push({
          name: 'Integridadedetalhe'
        })
      },
      onNodeClick1(item, index) {
        this.$router.push({
          name: 'Integridadedetalhe'
        })
      },
    },
    mounted() {
    }
  };
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
hr {
  margin-top:10px;
  border:0;
	background-color: #E1EBF6;
  height: 2px;
}
</style>
