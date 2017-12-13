<template>
  <div>
    <v-card>
      <v-toolbar v-if="$store.state.isUserLoggedIn" dark class="primary" app>
        <v-toolbar-side-icon style="font-size:22px;" @click.stop="drawerFlag()"></v-toolbar-side-icon>
        <v-btn icon @click="">
          <v-icon style="font-size:28px;">backup</v-icon>
        </v-btn>
        <v-btn icon @click="">
          <v-icon style="font-size:28px;">folder_open</v-icon>
        </v-btn>
         <v-container class="text-xs-center" >
        <v-layout row child-flex justify-center align-center wrap>
         <v-flex style="margin-top:-22px;" fill-height>
          <img src="/static/logo-domrock-nav.png" alt="Dom Rock" />
        </v-flex>
         </v-layout>
           </v-container>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon style="font-size:28px;">notifications</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon style="font-size:28px;">search</v-icon>
        </v-btn>
        <v-btn icon @click="onLogout()">
          <v-icon style="font-size:28px;">person</v-icon>
        </v-btn>
        <v-btn icon @click.stop="rightDrawerFlag()">
          <v-icon style="font-size:28px;">more_horiz</v-icon>
        </v-btn>
      </v-toolbar>
      </v-toolbar>
    </v-card>
    <v-toolbar class="neutro" v-if="$store.state.isUserLoggedIn" :color="bars[3].class" :dark="bars[3].dark" app>
    </v-toolbar>
  
  </div>
</template>

<script>
  export default {
    props: [
      'drawer',
      'rightDrawer'
    ],
    data: () => ({
      bars: [{
          'class': 'white'
        },
        {
          'class': '',
          dark: true
        },
        {
          'class': 'primary',
          dark: true
        },
        {
          'class': 'elevation-1'
        }
      ]
    }),
    methods: {
      drawerFlag() {
        if (this.drawer) {
          this.$emit('drawer', false);
        } else {
          this.$emit('drawer', true);
        }
      },
      rightDrawerFlag() {
        if (this.rightDrawer) {
          this.$emit('rightDrawer', false);
        } else {
          this.$emit('rightDrawer', true);
        }
      },
      onLogout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'login'
        })
      }
    },
  
  }
</script>
