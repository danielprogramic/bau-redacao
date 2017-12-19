<template>
  <div v-if="$store.state.isUserLoggedIn">
    <v-navigation-drawer fixed :mini-variant="true" :clipped="false" v-model="drawerFlag" class="secondary" dark app>
      <div v-for="(item, i) in items" :key="i">
        <v-list v-bind:class="item.background">
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon v-bind:style="{color: item.color, fontSize: item.size + 'px'}" light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-bind:style="{color: item.color}" v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script src="./navigation.js"></script>
