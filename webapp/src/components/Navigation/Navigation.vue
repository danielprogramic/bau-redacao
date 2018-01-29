<template>
  <div>
    <v-navigation-drawer  fixed :mini-variant="true" :clipped="false" v-model="drawerFlag" class="secondary" dark app>
      <div v-for="(item, i) in items" :key="i">
        <v-tooltip right>
        <v-list slot="activator"
           @mouseover.native="item.iconeffecover = renderbuttonclick(item.active)+'-icons_over'" 
           @mouseout.native="item.iconeffecover = renderbuttonclick(item.active)+'-icons'"  
           v-bind:class="[renderbuttonclick(item.active)]"  
           @click.native="onclick(i)" 
        >
          <v-list-tile value="true" >
            <v-list-tile-action>
              <v-icon v-bind:class="[item.iconeffecover]" v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-bind:style="{color: item.color}" v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
          <span>{{item.legenda}}</span>
       </v-tooltip>
      </div>

    </v-navigation-drawer>
  </div>
</template>
<script src="./navigation.js"></script>
<style src="./navigation.less" lang="less" scoped></style>
