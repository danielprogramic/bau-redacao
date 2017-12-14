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
      <v-btn icon @click="onLogout()">
        <v-icon style="font-size:29px;">person</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawerFlag()">
        <v-icon style="font-size:29px;">more_horiz</v-icon>
      </v-btn>
    </v-toolbar>
  
        <div class="hidden-md-and-up">
            <v-expansion-panel class="pink" dark="dark" app>
                <v-expansion-panel-content  class="primary" >
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
                    <v-card   class="secondary" >
                        <router-link class="nav-item" to="/Contact">
                            <v-card-text>Contact</v-card-text>
                        </router-link>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
  
    <v-toolbar class="neutro" v-if="$store.state.isUserLoggedIn" :clipped-left="true" app>
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

<style scoped>
  .arrow-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }

  .expansion-panel li {
    border: 10px solid #ddd;
 
}

</style>
