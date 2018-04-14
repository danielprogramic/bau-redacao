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
            <dr-boxe :data="data" :mode="true" :aberto="false" @OnTriggerBoxes="onNodeClick">
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
        aberto: false,
        states: [
          'Santa Marcelina', 'Santa Casa', 'Santa Isabel', 'Santo Amaro'
        ],
        data: {
          id: 0,
          caixa: {
            titulo: 'DIVERGÊNCIAS',
            itens: [{
                label: 'Prêmio',
                value: 'R$ 95.263,54',
              },
              {
                label: 'Comissão',
                value: 'R$ -116.887,86',
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
              titulo: 'COMPOSIÇÃO DE FATURAS',
              itens: [{
                  label: 'Valor Bruto Fatura',
                  value: 'R$ 4.071.830,39',
                },
                {
                  label: 'Desconto',
                  value: 'R$ 0,00',
                },
                {
                  label: 'Valor Líq. Desconto',
                  value: 'R$ 4.071.830',
                },
                {
                  label: 'Previsão Recebimento',
                  value: 'R$ 517.998,55',
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
              titulo: 'DEMOSTRATIVO',
              itens: [
                {
                  label: 'Valor Prêmio',
                  value: 'R$ 3.976.566,85',
                }, 
                {
                  label: 'Desconto Base Cálc; R$',
                  value: 'R$ 0,00',
                },
                {
                  label: 'Base Cáculo',
                  value: 'R$ 3.976.566,85',
                }, 
                {
                  label: 'Valor Recebido',
                  value: 'R$ 634.886,41',
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
          name: 'qualicorpdetalhe'
        })
      },
    },
    mounted() {
    }
  };
</script>

  <!-- 
    https://stackoverflow.com/questions/41888464/how-to-update-one-componet-from-another-component-in-vue-js update
    emiter
    Add "scoped" attribute to limit CSS to this component only -->
<style>
hr {
  margin-top:10px;
  border:0;
	background-color: #E1EBF6;
  height: 2px;
}
</style>
