<template>
  <v-app id="inspire" light>
  
    <dr-navigation v-if="$store.state.isUserLoggedIn" :drawer="drawer">
    </dr-navigation>
  
    <dr-toolbar v-if="$store.state.isUserLoggedIn" :rightDrawer="rightDrawer" @OnToolbar="onToolbar">
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
  
    <dr-navigation-overlaping v-if="$store.state.isUserLoggedIn" :toolbarItens="toolbarItens" @OnNavOverlaping="onNavOverlaping">
    </dr-navigation-overlaping>
  
    <v-footer v-if="$store.state.isUserLoggedIn" :fixed="false" app>
      <span class="colorblackop">&copy;  Copyright 2013 ― Todos os direitos reservados </span>
    </v-footer>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/ToolBar/ToolBar'
  import Navigation from '@/components/Navigation/Navigation'
  import NavigationOverlaping from '@/components/Navigation/NavigationOverlaping'
  import Footer from '@/components/Footer'
  
  export default {
    components: {
      'dr-toolbar': Toolbar,
      'dr-navigation': Navigation,
      'dr-navigation-overlaping': NavigationOverlaping,
      'dr-footer': Footer,
    },
    data() {
      return {
        drawer: true,
        rightDrawer: false,
        toolbarItens: new Object(),
      }
    },
    methods: {
      onToolbar(value) {
        this.rightDrawer = true;
        this.toolbarItens = value[0];
      },
      onNavOverlaping(value) {
        this.rightDrawer = false;
      }
    }
  }
</script>

<style lang="less">
@import "../less/main";
</style>