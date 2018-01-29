<template>
  <div class="detalhe">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
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
          </v-toolbar>
        </v-flex>
        <v-flex xs4>
          <v-card style="background-color: #D6E1EB;">
<div class="uk-width-1-2">
<vn-pie :model="pages"
  :height="400"
  text-field="name"
  value-field="views"
  :show-tooltip-percent="true"
  :show-legend="true"></vn-pie>
</div>
<div class="uk-width-1-2">
<vn-pie :model="pages"
  :height="400"
  :donut="true"
  text-field="name"
  value-field="views"
  :show-tooltip-percent="true"
  :show-legend="false"></vn-pie>
</div>
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card>
            <v-card-media class="white--text" height="600px" src="/static/Intergridade.jpg" contain>
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <div @click.stop="dialog = true" style="background-color:transparent; width:50px; height:100%;opacity: 0.5;float:right;cursor: pointer;">
                      <span class="headline">eded</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-dialog v-model="dialog" scrollable max-width="900px">
            <!-- <v-btn color="primary" dark slot="activator">Open Dialog</v-btn> -->
            <v-card style="background-color: #D6E1EB;">
              <v-card-title>
                <v-flex xs7 align-end flexbox>
                  <span class="title">Título da Modal</span>
                </v-flex>
                <v-flex xs3 align-end flexbox>
                  <v-text-field prepend-icon="search" v-model.number="currentPage" solo :suffix="currentPage+'/'+pageCount" hide-details single-line></v-text-field>
                </v-flex>
                <v-flex xs2 class="text-lg-right" align-end flexbox>
                  <v-btn icon @click.stop="dialog = false">
                    <v-icon style="color:#0A1F30">clear</v-icon>
                  </v-btn>
                </v-flex>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 600px;width:98%;">
                <span style="position:absolute;margin-top:10px;color:#586374;margin-left:20px;">Título-do-arquivo.formato</span>
                <div class="text-lg-right">
                  <v-btn icon>
                    <v-icon style="color:#0A1F30">print</v-icon>
                  </v-btn>
                  <v-btn icon :href="'/static/1000630_201701.pdf'" download>
                    <v-icon style="color:#0A1F30">file_download</v-icon>
                  </v-btn>
                </div>
                <div class="elevation-1" style="background-color:#fff;padding:10px;border-radius:4px;">
                  <pdf :page="currentPage" @num-pages="pageCount = $event" @page-loaded="currentPage = $event" src="/static/1000630_201701.pdf"></pdf>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <!-- <v-card-actions>
                  <v-btn color="primary" dark @click.native="dialog = false">Fechar</v-btn>
                </v-card-actions> -->
            </v-card>
          </v-dialog>
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
        pages:[
  {
    "name": "首页",
    "views": 349821,
    "stay": 77,
    "ratio": 0.28
  },
  {
    "name": "产品详情",
    "views": 106338,
    "stay": 18,
    "ratio": 0.2
  },
  {
    "name": "搜索结果",
    "views": 921232,
    "stay": 58,
    "ratio": 0.76
  },
  {
    "name": "产品列表",
    "views": 794073,
    "stay": 69,
    "ratio": 0.92
  },
  {
    "name": "购物车",
    "views": 970822,
    "stay": 54,
    "ratio": 0.83
  }
],
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
