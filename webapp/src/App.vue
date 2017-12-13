<template>
  <v-app id="inspire" light>

    <dr-navigation 
       :drawer="drawer">
    </dr-navigation>

    <dr-toolbar 
       @drawer="drawer = $event" 
       :drawer="drawer" 
       @rightDrawer="rightDrawer = $event" 
       :rightDrawer="rightDrawer">
    </dr-toolbar>
  
    <v-content>
      <div v-if="!$store.state.isUserLoggedIn" class="bg">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </div>
      <v-container v-if="$store.state.isUserLoggedIn" fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
      <dr-footer :loggedIn="!$store.state.isUserLoggedIn"></dr-footer>
    </v-content>
    
    <v-navigation-drawer v-if="$store.state.isUserLoggedIn" class="secondary" temporary fixed :right="right" v-model="rightDrawer" app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <v-icon style="color:#0a1f30;" medium>business_center</v-icon>
              Módulos
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
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
  
  </v-app>
</template>

<script>
  import Toolbar from '@/components/Shared/ToolBar'
  import Navigation from '@/components/Shared/Navigation'
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
          icon: 'library_add',
          title: 'Biblioteca'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Dom Rock'
      }
    },
  }
</script>

<style lang="stylus" scoped>
@import "../stylus/main"
</style>