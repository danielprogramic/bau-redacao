<template>
  <div style=" transition: all ease-in-out .9s;" v-sticky="stickyConfig">
    <nav>
      <v-toolbar dark class="primary hidden-sm-and-down " :clipped-left="true" app>
        <!-- <v-toolbar-side-icon style="font-size:22px;" @click.stop="drawerFlag()"></v-toolbar-side-icon> -->
        <!-- <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <v-icon style="font-size:29px;">archive</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action> -->
       <div v-for="(item, i) in toolbar_obj_left" >
          <v-btn icon v-bind:style="{width: item.habilitador ? item.width+'px' : '30px' }" @click.stop="actionDrawer(item.name, 'left')">
            <v-icon style="font-size:29px;">{{item.icon}}</v-icon>
          </v-btn>
        </div>   
        <v-btn icon>
          <v-icon style="font-size:29px;">folder_open</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon style="font-size:29px;">notifications</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon style="font-size:29px;">search</v-icon>
        </v-btn>
        <div v-for="(item, i) in toolbar_obj_right" >
          <v-btn icon v-bind:style="{width: item.habilitador ? item.width+'px' : '30px' }" @click.stop="actionDrawer(item.name, 'right')">
            <v-icon style="font-size:29px;">{{item.icon}}</v-icon>
          </v-btn>
        </div>
      <a class="navbar-brand" href="http://disputebills.com"><img src="/static/logo-domrock-nav.png" alt="Dispute Bills">
        </a>
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
    </nav>
      <!-- <v-toolbar class="neutro hidden-sm-and-down" v-if="$store.state.isUserLoggedIn" :clipped-left="true" app>
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
      </v-toolbar> -->
  </div>
</template>

<script src="./toolbar.js">
</script>

<style src="./toolbar.less" lang="less" scoped>
</style>

