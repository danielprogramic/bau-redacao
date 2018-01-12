<template>
   <div class="hello">
      <v-container fluid>
         <v-layout row wrap>
            <v-flex  xs12 >
               <v-toolbar light class="elevation-0 content" >
               
                  <v-select
                     label="HOSPITAL"
                     :items="states"
                     autocomplete
                     color="bluedetail"
                     clearable 
                     overflow  
                     dense
                     >
                  </v-select>
                  <div style="margin:30px;">       
                  </div>
                  <v-select 
                     label="OPERADORA"    
                     :items="states"
                     autocomplete
                     color="bluedetail"
                     clearable
                     dense
                     >
                  </v-select>
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
            <v-flex  xs5 offset-xs1>
               <div class="text-center">
                  <dr-boxe :data="data" @OnBabaca="onNodeClick">
                  </dr-boxe>
               </div>
            </v-flex>
         </v-layout>
      </v-container>
   </div>
</template>

<script>
  import Datepicker from "./Shared/Datepicker/Datepicker";
  import Boxes from "./Shared/Diagram/templates/Boxes";
  export default {
    name: "hello",
    components: {
      'dr-boxe': Boxes,
      'dr-datepicker1': Datepicker,
      'dr-datepicker2': Datepicker,
    },
    data() {
      return {
        a1: null,
        states: [
          'Santa Marcelina','Santa Casa','Santa Isabel','Santo Amaro'
        ],
        data: {
          id: 0,
          caixa: {
            titulo: 'Fechamento Novembro/16',
            itens: [{
                label: 'Previsão',
                value: 100,
  
              },
              {
                label: 'Efetivo',
                value: 100,
              },
  
            ],
          },
          children: [{
            id: 5,
            caixa: {
              titulo: 'Pendências de retorno',
              itens: [{
                  label: 'Previsão',
                  value: 100,
                  actions: [{
                    path: 'http://www.danielprogramic.com.br',
                    trigger: true,
                  }],
                },
                {
                  label: 'Efetivo',
                  value: 100,
                },
  
              ],
            },
          }, {
            id: 6,
            caixa: {
              titulo: 'Retorno Confirmado',
              itens: [{
                  label: 'Previsão',
                  value: 100,
                },
                {
                  label: 'Efetivo',
                  value: 100,
                  actions: [{
                    path: 'http://www.danielprogramic.com.br',
                    trigger: true,
                  }],
                },
                {
                  label: 'Previsão',
                  value: 100,
                },
                {
                  label: 'Efetivo',
                  value: 100,
                },
                {
                  label: 'Previsão',
                  value: 100,
                },
                {
                  label: 'Efetivo',
                  value: 500,
                },
              ],
            },
          }]
        },
      };
    },
    methods: {
      onNodeClick(item, index) {
        item[index].value = 600;
      },
    },
    mounted() {

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
