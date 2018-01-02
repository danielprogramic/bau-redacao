<template>
  <div v-if="$store.state.isUserLoggedIn">
      <div class="exibetest">
          <div class="exibetest-texto">
              Recebendo Objeto:
              {{toolbarItensFlag}}
          </div>     
      </div>
   <v-navigation-drawer width="300" height="40%" class="secondary" v-bind:style="{marginRight: toolbarItensFlag.marginRight + 'px'}" v-bind:class="{'mg': !toolbarItensFlag.habilitador }" temporary fixed :right="true" v-model="toolbarItensFlag.habilitador" app>
      <v-toolbar class="homemais" flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <v-icon style="color:#0A1F30;" medium>{{toolbarItensFlag.icon }}</v-icon>
              <span class="toolbaRightLbl">
                  {{toolbarItensFlag.titulo}}
                  </span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-btn @click="close()" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click="onLogout()">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script src="./navigationOverlaping.js"></script>
<style src="./navigationoverlaping.less" lang="less" scoped>
</style>
