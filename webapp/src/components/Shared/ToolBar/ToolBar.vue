<template>
  <div>
    <nav>
      <v-toolbar v-if="$store.state.isUserLoggedIn" dark class="primary hidden-sm-and-down" :clipped-left="true" app>
        <!-- <v-toolbar-side-icon style="font-size:22px;" @click.stop="drawerFlag()"></v-toolbar-side-icon> -->
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <v-icon style="font-size:29px;">archive</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <v-icon style="font-size:29px;">backup</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <v-icon style="font-size:29px;">folder_open</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-container class="text-xs-center">
          <v-layout row child-flex justify-center align-center wrap>
            <v-flex style="margin-top:-22px;" fill-height>
              <img src="/static/logo-domrock-nav.png" alt="Dom Rock" />
            </v-flex>
          </v-layout>
        </v-container>
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon style="font-size:29px;">notifications</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon style="font-size:29px;">search</v-icon>
        </v-btn>
        <!-- <v-btn icon @click="onLogout()">
            <v-icon style="font-size:29px;">person</v-icon>
          </v-btn> -->
        <div v-for="(item, i) in toolbar_obj" :key="i">
          <v-btn icon v-bind:style="{width: item.habilitador ? item.width+'px' : '30px' }" @click="actionDrawer(item.name)">
            <v-icon style="font-size:29px;">{{item.icon}}</v-icon>
          </v-btn>
        </div>
        <!-- 
            <v-btn  v-bind:style="{width: aumentarwidth + 'px'}" @click="actionDrawer('home_conta')">
            <v-icon style="font-size:29px;">person</v-icon>
          </v-btn>
          <v-btn icon @click.stop="actionDrawer('mais')">
            <v-icon style="font-size:29px;">more_horiz</v-icon>
          </v-btn> 
          -->
  
        <!-- <v-toolbar-items>
        <v-menu transition="scale-transition">
        <v-btn dark color="primary" slot="activator">Scale Transition</v-btn>
        <v-list>
          <v-list-tile v-for="n in 5" :key="n" @click="">
            <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        </v-menu>
        </v-toolbar-items>  -->
      </v-toolbar>
      <div v-if="$store.state.isUserLoggedIn" class="hidden-md-and-up" app>
        <v-expansion-panel class="pink" dark="dark">
          <v-expansion-panel-content class="primary">
            <div slot="header">
              <router-link class="nav-item" to="/">
                <img src="/static/logo-domrock-nav.png" alt="Dom Rock" />
              </router-link>
            </div>
            <v-card class="secondary">
              <router-link class="nav-item" to="/about">
                <v-card-text>About</v-card-text>
              </router-link>
            </v-card>
            <v-card class="secondary">
              <router-link class="nav-item" to="/Contact">
                <v-card-text>Contact</v-card-text>
              </router-link>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <span style="float:left;" class="colorblue">TITULO DO CONJUNTO DE ANÁLISES</span>
        <span style="float:right;" class="colorblackop">CNPJ:03.649.560/0001-60</span>
      </div>
  
      <v-toolbar class="neutro hidden-sm-and-down" v-if="$store.state.isUserLoggedIn" :clipped-left="true" app>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <div style="margin-top:-24px;position:absolute;margin-left:4px;" class="arrow-up"></div>
                <v-icon style="font-size:29px;">more_horiz</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <v-icon style="font-size:19px;">play_arrow</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <span class="colorblue">TITULO DO CONJUNTO DE ANÁLISES</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-spacer></v-spacer>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <span class="colorblackop">CNPJ:03.649.560/0001-60</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
      </v-toolbar>
    </nav>
  </div>
</template>

<script src="./toolbar.js">
  
</script>

<style src="./toolbar.less" lang="less" scoped>
  
</style>

