<template>
   <div class="mais">
      <template v-for="(item, index) in itens">
         <v-list-tile v-if="!item.collapse && !item.image && !item.upload"  avatar ripple @click="toggle(index)" :key="item.title">
            <v-list-tile-avatar>
               <v-icon class="navigation_overlaping-color" medium>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
               <v-list-tile-title ><b>{{ item.title }}</b></v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
         <center  :key="item.title">
            <div class="navigation_overlaping-divider"></div>
         </center>
      </template>
   </div>
</template>
<script>
  export default {
   name: 'mais',
   props: [
    'itens',
   ],
    data() {
      return {}
    },
  }
</script>
<style lang="less" scoped>
</style>
