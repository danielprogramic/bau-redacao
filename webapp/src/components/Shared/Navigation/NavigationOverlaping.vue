<template>
  <div class="navigation_overlaping" v-if="$store.state.isUserLoggedIn">
    <v-navigation-drawer height="72%" class="secondary elevation-2 bordercard" v-bind:style="{width:toolbarItensFlag.widthOverlaping + 'px' ,marginRight: toolbarItensFlag.marginRight + 'px'}" v-bind:class="{'mg': !toolbarItensFlag.habilitador }" temporary fixed :right="true"
      v-model="toolbarItensFlag.habilitador" app>
      <v-toolbar class="homemais" flat height="64">
        <v-icon style="color: #0A1F30" large>{{toolbarItensFlag.icon }}</v-icon>
        <div class="toolbaRightLbl">{{toolbarItensFlag.titulo}}</div>
        <v-spacer></v-spacer>
        <v-btn @click="close()" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
       <v-list two-line>
          <template v-for="(item, index) in getItens">
            <v-list-tile v-bind:class="{'navigation_overlaping-activeCorporation': item.corporation }"
              avatar
              ripple
              @click="toggle(index)"
              :key="item.title"
              >
              <v-list-tile-avatar v-if="!item.corporation">
                <v-icon class="navigation_overlaping-color" medium>{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-bind:class="{'navigation_overlaping-color-blue': item.corporation }" >{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
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
