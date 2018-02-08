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
      <v-list >
        <dr-navigationItens-mais  v-if="toolbarItens.name=='mais'" :itens="getItens" > </dr-navigationItens-mais>
        <dr-navigationItens-home-conta  v-if="toolbarItens.name=='home_conta'" :itens="getItens" > </dr-navigationItens-home-conta>
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

<style lang="css" >
  .vue-dropzone{
    padding: 3px 3px  !important;
  }
 .dz-preview {
    margin:1px !important;;
  }
 .dz-preview .dz-image {
    margin:1px !important;;
    width: 130px !important;;
    height: 100px !important;;
  }
 .dz-file-preview {
    margin:1px !important;;
  }
 .dz-preview .dz-progress .dz-upload {
    background: #64c073 !important;
  }

 .dz-preview .dz-image>div {
    width: inherit !important;;
    height: inherit !important;;
    border-radius: 50% !important;;
    background-size: contain !important;;
  }
 .dz-preview .dz-image>img {
    width: 100% !important;;
  }
 .dz-preview .dz-details {
    color: white !important;;
    border-radius: 4px !important;;	
    background-color: #00639c !important;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important;;
    transition: opacity .2s linear !important;;
    text-align: center !important;;
  }
 .dz-file-preview .dz-details {
    color: white !important;;
    border-radius: 4px !important;;	
    background-color: #00639c !important;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important;;
    transition: opacity .2s linear !important;;
    text-align: center !important;;
  }

.dz-preview .dz-remove {
    position: absolute !important;;
    z-index: 30 !important;;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important;;
    background: #0a1f30 !important;;
    border-radius: 4px !important;;
    color: #00b4f1 !important;
    padding: 10px !important;;
    margin-left:13px !important;;
    top: inherit !important;;
    bottom: 10px !important;;
    border: 0px white solid !important;;
    text-decoration:none !important;
    text-transform: uppercase !important;;
    font-size: 0.8rem !important;;
    font-weight: 800 !important;;
    letter-spacing: 1.1px !important;;
    opacity: 1 !important;
    display:none !important;
}
 .dz-preview .dz-remove a {
   color:red;
 }



</style>
