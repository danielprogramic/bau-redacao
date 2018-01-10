<template>
  <div class="hello">

   <v-layout right >
      <v-flex >
      <v-menu 
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <input class="datepicker"
          slot="activator"
          label="Data Inicial"
          v-model="dateFormatted"
          prepend-icon="event"
          @blur="date = parseDate(dateFormatted)"
        ></input>
        <v-date-picker  color="blue lighten-1" locale="pt-br" v-model="date" @input="dateFormatted = formatDate($event)" scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>
      <p>Resultado: <strong>{{ date }}</strong></p>
      </v-flex>
   </v-layout> 




    <v-layout style="overflow-x: auto;" column >
      <v-flex  xs5 offset-xs1>

        <!-- <h1 class="headline mb-3">{{ msg }}</h1>
        <v-btn large round color="info" dark>DASHBOARD</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs11 sm5>
        <v-dialog persistent v-model="modal" lazy full-width width="290px">
          <v-text-field slot="activator" label="Picker in dialog" v-model="date" prepend-icon="event" readonly></v-text-field>
          <v-date-picker v-model="date" scrollable actions>
            <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
        </template>
        </v-date-picker>
      </v-dialog> -->
          <!-- <form class="form-horizontal row">
            <div class="col-md-3">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="horizontal" > horizontal
                </label>
              </div>
            </div>
            <div class="col-md-3">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="collapsable"> collapsable
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label col-md-5">labelClassName:</label>
                <div class="col-md-7">
                  <select class="form-control" v-model="labelClassName">
                    <option value="bg-white">bg-white</option>
                    <option value="bg-orange">bg-orange</option>
                    <option value="bg-gold">bg-gold</option>
                    <option value="bg-gray">bg-gray</option>
                    <option value="bg-lightpink">bg-lightpink</option>
                    <option value="bg-chocolate">bg-chocolate</option>
                    <option value="bg-tomato">bg-tomato</option>
                  </select>
                </div>
              </div>
            </div>
          </form> -->
      <div class="text-center">
        <dr-tree
          :data="data"
          :horizontal="horizontal"
          :collapsable="collapsable"
          :label-class-name="labelClassName"
          :render-content="renderContent"
          @on-expand="onExpand"
          @on-node-click="onNodeClick"
        >
         <p slot="foo">primeiro</p>
         <p>segundo</p>
        </dr-tree>   
      </div>
     </v-flex>
   </v-layout>
  </div>
</template>

<script>
  import DrTree from './Shared/Diagram/dr-tree'
  export default {
    name: 'hello',
    components: {
      DrTree
    },
    data() {
      return {
        date: null,
        dateFormatted: null,
        menu: false,
        modal: false,
        data: {
          id: 0,
          template:  `<div style="width:320px;"> 

                        <div style="padding:10px;">
                          <b style="font-size:15px;">Fechamento Novembro/16</b>
                        </div> 

                        <div style="background-color:#fff;height:209px;border-radius: 6px;" >

                          <div style="padding:20px;">
                            <div style="float:left;">Previsão </div> 
                            <div style="float:right;"><b>R$ 100,00</b></div>
                          </div>

                          <div style="padding:20px;">
                            <div style="float:left;">Efetivo </div> 
                            <div style="float:right;"><b>R$ 150,00</b></div>
                          </div>

                          <div style="padding:20px;">
                            <div style="float:left;">Variações </div> 
                            <div style="float:right;"><b>R$ 100,00</b></div>
                          </div> 
                          
                          <div style="padding:20px;">
                            <div style="height:1px;background-color: #E1EBF6;width:100%;" >  </div>
                            </br>
                            <div style="float:left;">
                            <b>Resumo</b>
                            &#9658;
                            </div> 
                            <div style="float:right;">
                            <b>Detalhes</b>
                            &#9658;
                            </div>
                          </div> 

                        </div>
                        
                      </div>`,
          children: [
               {
                id: 5,
                template: `<div style="height:100%;width:320px;"> 

                        <div style="padding:10px;">
                          <b style="font-size:15px;">Pendências de retorno</b>
                        </div> 

                        <div style="background-color:#fff;border-radius: 6px;" >

                          <div style="padding:20px;">
                            <div style="float:left;">QTD Guias </div> 
                            <div @click="alert('dede')" style="float:right;"><b>R$ 100,00</b></div>
                          </div>

                          <div style="padding:20px;">
                            <div style="float:left;">SP/SADT </div> 
                            <div style="float:right;"><b>R$ 150,00</b></div>
                          </div>
                          <div style="padding:20px;">
                            <div style="float:left;">Internação</div> 
                            <div style="float:right;"><b>R$ 150,00</b></div>
                          </div>
                          </br>
                          <div style="padding:20px;">
                            <div style="float:left;"><b>Valor total</b> </div> 
                            <div style="float:right;"><b style="color:#00B4F1" >R$ 5.398.192,00</b></div>
                          </div> 
                          
                          <div style="padding:20px;">
                            <div style="height:1px;background-color: #E1EBF6;width:100%;" >  </div>
                            </br>
                            <div style="float:right;">
                            <b>Ver mais</b>
                            &#9658;
                            </div>
                            </br>
                          </div> 
                        </div>
                          
                      </div>`,

               }, {
                id: 6,
                template: `<div style="width:320px;"> 

                        <div style="padding:10px;">
                          <b style="font-size:15px;">Retorno Confirmado</b>
                        </div> 

                        <div style="background-color:#fff;height:209px;border-radius: 6px;" >

                          <div style="padding:20px;">
                            <div style="float:left;">Previsão </div> 
                            <div style="float:right;"><b>R$ 100,00</b></div>
                          </div>

                          <div style="padding:20px;">
                            <div style="float:left;">Efetivo </div> 
                            <div style="float:right;"><b>R$ 150,00</b></div>
                          </div>

                          <div style="padding:20px;">
                            <div style="float:left;">Variações </div> 
                            <div style="float:right;"><b>R$ 100,00</b></div>
                          </div> 
                          
                          <div style="padding:20px;">
                            <div style="height:1px;background-color: #E1EBF6;width:100%;" >  </div>
                            </br>
                            <div style="float:left;">
                            <b>Resumo</b>
                            &#9658;
                            </div> 
                            <div style="float:right;">
                            <b>Detalhes</b>
                            &#9658;
                            </div>
                          </div> 

                        </div>
                        
                      </div>`
            }]
        },
        horizontal: true,
        collapsable: true,
        valor: 400,
        labelClassName: 'bg-white'
       }
    },
    methods: {
      renderContent (h, data) {
        return h('div', {
          'class': {
            foo: true,
            bar: false
          },
          domProps: {
            innerHTML: data.template
          },
        },  
        );
      },
      onExpand (data) {
        if ('expand' in data) {
          data.expand = !data.expand
          if (!data.expand && data.children) {
            this.collapse(data.children)
          }
        } else {
          this.$set(data, 'expand', true)
        }
      },
      onNodeClick (e, data) {
        //console.log(data)
      },
      collapse (list) {
        list.forEach(child => {
          if (child.expand) {
            child.expand = false
          }

          child.children && this.collapse(child.children)
        })
      },
      formatDate (date) {
        if (!date) {
          return null
        }

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) {
          return null
        }

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    },
    created() {
      this.data.template = `<div style="width:320px;"> 
                        <div style="padding:10px;">
                          <b style="font-size:15px;">Fechamento Novembro/16</b>
                        </div> 
                        <div style="background-color:#fff;height:209px;border-radius: 6px;" >
                          <div style="padding:20px;">
                            <div style="float:left;">Previsão </div> 
                            <div style="float:right;"><b>${this.valor}</b></div>
                          </div>
                          <div style="padding:20px;">
                            <div style="float:left;">Efetivo </div> 
                            <div style="float:right;"><b>R$ 150,00</b></div>
                          </div>

                          <div style="padding:20px;">
                            <div style="float:left;">Variações </div> 
                            <div style="float:right;"><b>R$ 100,00</b></div>
                          </div>                
                          <div style="padding:20px;">
                            <div style="height:1px;background-color: #E1EBF6;width:100%;" >  </div>
                            </br>
                            <div style="float:left;">
                            <b>Resumo</b>
                            &#9658;
                            </div> 
                            <div style="float:right;">
                            <b>Detalhes</b>
                            &#9658;
                            </div>
                          </div> 
                        </div>    
                      </div>`
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.datepicker{
    border-radius: 4px;	
    height: 40px;
    text-align: center;
    color: #0A1F30;
    background-color: #FFFFFF;	
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
}
.bg-white {
  	background-color: #D6E1EB;

}
.bg-orange {
  background-color: #00B4F1;
}
.bg-gold {
  background-color: gold;
}
.bg-gray {
  background-color: gray;
}
.bg-lightpink {
  background-color: lightpink;
}
.bg-chocolate {
  background-color: chocolate;
}
.bg-tomato {
  background-color: tomato;
}
</style>
