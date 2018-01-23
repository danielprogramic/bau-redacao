<template>
  <div>
    <nav>
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
                <span class="bluedetail-font">TITULO DO CONJUNTO DE ANÁLISES</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-tile-action>
        <v-spacer></v-spacer>
        <v-list-tile-action>
          <v-container class="text-xs-center">
            <v-layout row child-flex justify-center align-center wrap>
              <v-flex fill-height>
                <span class="cinza2-font">CNPJ:03.649.560/0001-60</span>
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
    data() {
      return {}
    },
  }
</script>

<style lang="less" scoped>
  
</style>

