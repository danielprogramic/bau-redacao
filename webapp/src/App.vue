<template>
  <v-app id="inspire" light>
    <dr-navigation  v-if="$store.state.isUserLoggedIn" :drawer="drawer">
    </dr-navigation>
    <dr-toolbar v-if="$store.state.isUserLoggedIn" :rightDrawer="rightDrawer" @OnToolbar="onToolbar">
    </dr-toolbar>
    <dr-toolbar-sub v-if="$store.state.isUserLoggedIn">
    </dr-toolbar-sub>
    <v-content>
      <!-- Esse bloco de codigo serve para o full com video -->
      <!-- <div v-if="!$store.state.isUserLoggedIn" id="fullScreenDiv">
          <img src="/static/bg_prin.png" id="videosubstitute" alt="Full screen background video">
          <div id="videoDiv">           
              <video preload="preload" id="video" autoplay="autoplay" loop="loop">
              <source src="/static/636796213.mp4" type="video/mp4"/>
              </video> 
          </div>
          <div id="filterBox"> 
          </div> 
          <div id="messageBox"> 
              <div>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
              </div>
          </div>   
      </div> -->
      <div v-if="!$store.state.isUserLoggedIn" class="bg">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </div>
      
      <v-container v-if="$store.state.isUserLoggedIn" fluid >
          <!-- <center>
            <v-btn icon @click.stop="drawer = !drawer">
              <v-icon style="font-size:22px;color:#8f8f9b">sort</v-icon>
            </v-btn>
          </center> -->
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
      <dr-footer :loggedIn="!$store.state.isUserLoggedIn"></dr-footer>

    </v-content>
    <dr-navigation-overlaping v-if="toolbarItens.removeNavOverlaping && $store.state.isUserLoggedIn" :toolbarItens="toolbarItens">
    </dr-navigation-overlaping>
    <v-footer v-if="$store.state.isUserLoggedIn" :fixed="false" app>
      <span class="colorblackop">&copy;  Copyright 2013 ― Todos os direitos reservados </span>
    </v-footer>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/ToolBar/ToolBar.vue'
  import ToolBarSub from '@/components/ToolBar/ToolBarSub.vue'
  import Navigation from '@/components/Navigation/Navigation.vue'
  import NavigationOverlaping from '@/components/Navigation/NavigationOverlaping.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    components: {
      'dr-toolbar': Toolbar,
      'dr-toolbar-sub': ToolBarSub,
      'dr-navigation': Navigation,
      'dr-navigation-overlaping': NavigationOverlaping,
       //'dr-navigation-overlaping': () => import('@/components/Navigation/NavigationOverlaping'), */assincronamente
      'dr-footer': Footer,
    },
    data: () => ({
        drawer: true,
        rightDrawer: false,
        exibicao: false,
        toolbarItens: new Object(),
    }),
    methods: {
      onToolbar(value) {
        this.rightDrawer = true;
        this.toolbarItens = value[0];
        this.exibicao = value[0].exibicao;
      }
    },
  }
</script>

<style lang="less">
  @import "../less/main";
</style>
