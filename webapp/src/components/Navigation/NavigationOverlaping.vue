<template>
  <div v-if="initOverpaling(toolbarItens)" class="navigation_overlaping">
    <v-navigation-drawer class="secondary elevation-2 bordercard" v-bind:style="styleObjectOverlaping" v-bind:class="{'mg': !toolbarItens.habilitador }" temporary fixed :right="toolbarItens.exibicao" v-model="toolbarItens.habilitador">
      <v-toolbar class="toolbarTitle elevation-1"  height="64">
        <v-icon style="color: #0A1F30" large>{{toolbarItens.icon }}</v-icon>
        <div class="toolbaRightLbl">{{toolbarItens.titulo}}</div>
        <v-spacer></v-spacer>
        <v-btn @click.native="close()" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <dr-navigationItens-mais  v-if="toolbarItens.name=='mais'" :itens="getItens" > </dr-navigationItens-mais>
        <dr-navigationItens-home-conta  v-if="toolbarItens.name=='home_conta'" :itens="getItens" > </dr-navigationItens-home-conta>
        <dr-upload  v-if="toolbarItens.name=='upload'" > </dr-upload>
        <dr-modulo  v-if="toolbarItens.name=='modulo'" > </dr-modulo>
          <v-list-tile 
          style="float:right;" 
          @click="onLogout()">
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
<style src="./navigationoverlaping.less" lang="less" >
</style>

