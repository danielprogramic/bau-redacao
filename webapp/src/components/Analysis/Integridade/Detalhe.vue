<template>
  <div class="detalhe">
    <v-container fluid>
      <v-layout row wrap>
        <!-- <v-flex xs12>
              <v-toolbar light class="elevation-0 content">
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
                	background-color: #D6E1EB;
              </v-toolbar>
            </v-flex> -->
        <v-flex xs4>
          <v-card style="background-color: #D6E1EB;">
            <v-card-media class="white--text" height="600px" src="/static/pizza.jpg" contain>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card>
            <v-card-media class="white--text" height="600px" src="/static/Intergridade.jpg" contain>
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-dialog v-model="dialog" scrollable max-width="900px">
            <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
            <v-card style="background-color: #D6E1EB;">
              <v-card-title>
                <v-flex xs5 align-end flexbox>
                   <span class="title">Titulo Modal</span>
                </v-flex>
                <v-flex xs5  align-end flexbox>
                  <v-text-field prepend-icon="search" v-model.number="currentPage" solo append-icon="cancel" hide-details single-line></v-text-field>
                </v-flex>
                <v-flex xs2  align-end flexbox>
                  <center>
                      <span class="title">{{currentPage}} / {{pageCount}}</span>
                  </center>
                </v-flex>
                
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 600px;width:98%;">
                <pdf 
                      :page="currentPage" 
                			@num-pages="pageCount = $event"
			                @page-loaded="currentPage = $event"
                src="/static/criando_novo_ambiente.pdf"></pdf>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="primary" dark @click.native="dialog = false">Fechar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- 
            <v-dialog v-model="dialog"  persistent max-width="690"  >
              <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
              <v-card style="background-color: #D6E1EB;">
                <v-card-title class="headline">Use Google's location service?</v-card-title>
                <v-card-text>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
                  <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Datepicker from "../../Shared/Datepicker/Datepicker";
  import pdf from 'vue-pdf';
  export default {
    name: "detalhe",
    components: {
      'dr-datepicker1': Datepicker,
      'dr-datepicker2': Datepicker,
      pdf
    },
    data() {
      return {
        a1: null,
        dialog: false,
        			currentPage: 1,
			pageCount: 0,
        states: [
          'Santa Marcelina', 'Santa Casa', 'Santa Isabel', 'Santo Amaro'
        ],
      };
    },
    methods: {},
    mounted() {}
  };
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  hr {
    margin-top: 10px;
    border: 0;
    background-color: #E1EBF6;
    height: 2px;
  }
</style>
