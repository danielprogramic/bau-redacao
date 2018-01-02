<template>
  <div class="hello">
    <v-layout column align-center>
      </br>
      <v-flex xs5 offset-xs1>
        <h1 class="headline mb-3">{{ msg }}</h1>
        <!-- <v-btn large router to="/login/" round color="info" dark>LOGIN PARA SISTEMA</v-btn> -->
        <v-btn large round color="info" dark>DASHBOARD</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs11 sm5>
        <v-dialog persistent v-model="modal" lazy full-width width="290px">
          <v-text-field slot="activator" label="Picker in dialog" v-model="date" prepend-icon="event" readonly></v-text-field>
          <v-date-picker v-model="date" scrollable actions>
            <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
</template>
        </v-date-picker>
      </v-dialog> 
     </v-flex>
   </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        date: null,
        menu: false,
        modal: false,
        msg: `Se EDDEDED marcares ao largo um lampejo
                De um farol a mostrar o caminho,
                Saberá ser o nosso desejo
                Que jamais tu navegues sozinho'`
      }
    },
    created() {
      console.log('dedeed')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
