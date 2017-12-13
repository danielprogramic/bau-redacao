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

<script>
  export default {
    props: [
      'drawer'
    ],
    data() {
      return {
        items: [{
            icon: 'archive',
            title: 'Biblioteca',
            background: "primary",
            color: "#fff",
            size: '32',
          },
          {
            icon: 'more_horiz',
            title: 'Biblioteca',
            background: "neutro",
            color: "#0A1F30",
            size: '22',
          },
          {
            icon: 'dashboard',
            title: 'Dashboard',
            background: "content",
            color: "#03b4f1",
            size: '22',
          },
          {
            icon: 'list',
            title: 'Dashboard',
            background: "secondary",
            color: "#0A1F30",
            size: '22',
          },
          {
            icon: 'assessment',
            title: 'Dashboard',
            background: "secondary",
            color: "#0A1F30",
            size: '22',
          },
          {
            icon: 'forum',
            title: 'Dashboard',
            background: "secondary",
            color: "#0A1F30",
            size: '22',
          },
          {
            icon: 'folder_open',
            title: 'Dashboard',
            background: "secondary",
            color: "#0A1F30",
            size: '22',
          },
        ],
      }
    },
    computed: {
      drawerFlag: {
        get: function() {
          return this.drawer
        },
        set: function(val) {
          this.$emit('emdrawer', val)
        }
      }
    },
  }
</script>
