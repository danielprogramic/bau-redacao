<template>
  <div class="home_conta">
    <template v-for="(item, index) in itens" v-if="index < 1">
      <v-list  two-line  v-bind:key="item.title">
        <v-list-group lazy v-if="item.collapse"  v-bind:key="item.title" v-bind:class="{'navigation_overlaping-activeCorporation': item.collapse }" >
            <v-list-tile   slot="item" @click="">
              <v-list-tile-content>
                  <v-list-tile-title v-bind:class="{'navigation_overlaping-color-black': item.collapse }"  >{{ item.perfilAtv }}</v-list-tile-title>
                  <v-list-tile-title v-bind:class="{'navigation_overlaping-color-blue': item.collapse }"  >{{ item.empresa }}</v-list-tile-title>
                  <v-list-tile-title v-bind:class="{'navigation_overlaping-color-black': item.collapse }"  >{{ item.cnpj }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                  <v-icon v-bind:class="{'navigation_overlaping-color-blue': item.collapse }" >arrow_drop_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.collapse" v-bind:key="subItem.title" @click="">
              <v-list-tile-content>
                  <v-list-tile-title><b>{{ subItem.title }}}</b></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                  <v-icon class="navigation_overlaping-color" >{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
        </v-list-group>
      </v-list>
</template>
<template v-for="(item, index) in itens">
  <v-list-tile v-if="!item.collapse && !item.image && !item.upload" avatar ripple @click="toggle(index)" :key="item.title">
    <v-list-tile-avatar>
      <v-icon class="navigation_overlaping-color" medium>{{ item.icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title><b>{{ item.title }}</b></v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
  <center :key="item.title">
    <div class="navigation_overlaping-divider"></div>
  </center>
</template>
   </div>
</template>

<script>
  export default {
    name: 'home_conta',
    props: [
      'itens',
    ],
    data() {
      return {}
    },
    methods: {
      toggle: (index) => {
        alert("Daniel")
      },
    },
  }
</script>

<style lang="less" scoped>

</style>
