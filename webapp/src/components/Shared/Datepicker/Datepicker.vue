<template>
   <div class="datepicker">
      <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
         <input class="datepicker" slot="activator" label="Data Inicial" v-model="dateFormatted" prepend-icon="event" @blur="date = parseDate(dateFormatted)"></input>
         <v-date-picker color="blue lighten-1" locale="pt-br" v-model="date" @input="dateFormatted = formatDate($event)" :allowed-dates="allowedDates" scrollable actions>
            <template slot-scope="{ save, cancel }">
               <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
               </v-card-actions>
            </template>
         </v-date-picker>
      </v-menu>
      <!-- <p>Resultado: <strong>{{ date }}</strong></p> -->
      </v-flex>
   </div>
</template>

<script>
  export default {
    name: "datepicker",
    data() {
      return {
        date: null,
        dateFormatted: null,
        menu: false,
        modal: false,
        allowedDates: null,
        lastFiveDays: {
          min: null,
          max: null
        }
      };
    },
    methods: {
      formatDate(date) {
        if (!date) {
          return null;
        }
  
        const [year, month, day] = date.split("-");
        return `${month}/${day}/${year}`;
      },
      parseDate(date) {
        if (!date) {
          return null;
        }
  
        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      }
    },
    mounted() {
      const date = new Date();
      this.randomDays = [...Array(10)].map(() => {
        const day = Math.floor(Math.random() * 30);
        const d = new Date();
        d.setDate(day);
        return d.toISOString().substr(0, 10);
      });
  
      const d = new Date();
      d.setDate(date.getDate() - 5);
      this.lastFiveDays.min = d.toISOString().substr(0, 10);
      this.lastFiveDays.max = date.toISOString().substr(0, 10);
      this.allowedDates = this.lastFiveDays;
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .datepicker {
    border-radius: 4px;
    height: 40px;
    text-align: center;
    color: #0a1f30;
    background-color: #ffffff;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }
</style>
