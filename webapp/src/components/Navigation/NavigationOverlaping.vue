<template>
  <div class="navigation_overlaping" >
    <!-- <div style="margin-left:200px;background-color:yellow">
      {{toolbarItens}}
    </div> -->
    <v-navigation-drawer  class="secondary elevation-2 bordercard" 
      v-bind:style="styleObjectOverlaping"
      v-bind:class="{'mg': !toolbarItens.habilitador }" 
      temporary fixed  
      :right="toolbarItens.exibicao"
      v-model="toolbarItens.habilitador">
      <v-toolbar class="toolbarTitle" flat height="64">
        <v-icon style="color: #0A1F30" large>{{toolbarItens.icon }}</v-icon>
        <div class="toolbaRightLbl">{{toolbarItens.titulo}}</div>
        <v-spacer></v-spacer>
        <v-btn @click.native="close()" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
       <v-list>
          <template v-for="(item, index) in getItens">
          <!-- LISTA COM COLLAPSE -->
          <v-list  two-line>
          <v-list-group  v-if="item.collapse"  v-bind:key="item.title" v-bind:class="{'navigation_overlaping-activeCorporation': item.collapse }" >
            <v-list-tile   slot="item" @click="">
              <v-list-tile-content>
                <v-list-tile-title v-bind:class="{'navigation_overlaping-color-black': item.collapse }"  >{{ item.perfilAtv }}</v-list-tile-title>
                <v-list-tile-title v-bind:class="{'navigation_overlaping-color-blue': item.collapse }"  >{{ item.empresa }}</v-list-tile-title>
                <v-list-tile-title v-bind:class="{'navigation_overlaping-color-black': item.collapse }"  >{{ item.cnpj }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon v-bind:class="{'navigation_overlaping-color-blue': item.collapse }" >arrow_drop_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.collapse" v-bind:key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon class="navigation_overlaping-color" >{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          </v-list>
            <!-- LISTA NORMAL -->
            <v-list-tile v-if="!item.collapse && !item.image" avatar ripple @click="toggle(index)" :key="item.title">
              <v-list-tile-avatar>
                <v-icon class="navigation_overlaping-color" medium>{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title >{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
           <!-- LISTA NORMAL -->
           <div  v-if="item.image" :key="item.title">
           <v-card >
            <v-card-media height="800px" src="/static/menu.jpg" >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
           </div>
  

            <center>
              <div class="navigation_overlaping-divider" v-if="index + 1 < getItens.length" :key="item.title"></div>
            </center>     
          </template>
            <center>
              <div class="navigation_overlaping-divider"></div>
            </center>   
          <v-list-tile 
          style="float:right;" 
          @click="onLogout()"
          >
              <v-list-tile-avatar>
                <v-icon style="color: #0A1F30;" >exit_to_app</v-icon>
              <v-list-tile-content style="width:150px;">
                <v-list-tile-title>Sair</v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script src="./navigationOverlaping.js"></script>
<style src="./navigationoverlaping.less" lang="less" scoped></style>
