<template>
  <v-app id="inspire" light>
    <dr-navigation :drawer="drawer">
    </dr-navigation>
    <dr-toolbar @drawer="drawer = $event" :drawer="drawer" @rightDrawer="rightDrawer = $event" :rightDrawer="rightDrawer" @Umargem="addItem">
    </dr-toolbar>
    <v-content>
      <div v-if="!$store.state.isUserLoggedIn" class="bg">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </div>
      <v-container v-if="$store.state.isUserLoggedIn" fluid>
        <v-layout justify-left>
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon style="font-size:22px;color:#8f8f9b">sort</v-icon>
          </v-btn>
        </v-layout>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
      <dr-footer :loggedIn="!$store.state.isUserLoggedIn"></dr-footer>
    </v-content>
    <v-navigation-drawer width="300" height="40%" 
    v-if="$store.state.isUserLoggedIn" class="secondary" 

    v-bind:style="{marginRight: numereracao + 'px'}" 
    v-bind:class="{'mg': !rightDrawer }" 
    
    temporary fixed :right="true" v-model="rightDrawer" app>
      <v-toolbar class="homemais" flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <v-icon medium>more_horiz</v-icon>
              Mais
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-btn @click="rightDrawer = false" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click.stop="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  
  
    <v-footer v-if="$store.state.isUserLoggedIn" :fixed="false" app>
      <span class="colorblackop">&copy;  Copyright 2013 ― Todos os direitos reservados </span>
    </v-footer>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/Shared/ToolBar/ToolBar'
  import Navigation from '@/components/Shared/Navigation/Navigation'
  import Footer from '@/components/Shared/Footer'
  
  export default {
    components: {
      'dr-toolbar': Toolbar,
      'dr-navigation': Navigation,
      'dr-footer': Footer,
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
            icon: 'settings',
            title: 'Configurações'
          },
          {
            icon: 'help',
            title: 'Ajuda'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        numereracao: 3,
        title: 'Dom Rock'
      }
    },
    methods: {
      addItem(text) {
        this.numereracao = text;
      }
    },

  }
</script>

<style lang="stylus">
@import "../stylus/main"
</style>