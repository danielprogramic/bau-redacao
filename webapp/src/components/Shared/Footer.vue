<template>
  <div  v-if="loggedIn"  style="width:100%; margin-top:-30px;margin-left:20px;position:absolute;color:#fff;float:left;">
    <div><span style="opacity:0.5;">&copy;2013 ― Todos os direitos reservados </span> &nbsp;&nbsp;&nbsp;&nbsp;
      <span style="font-weight: bold;">Sobre Dom Rock </span> &nbsp; &nbsp; | &nbsp; &nbsp;
      <span style="font-weight: bold;">Contato </span>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'loggedIn'
    ],
  }
</script>
<style lang="stylus" scoped>
</style>