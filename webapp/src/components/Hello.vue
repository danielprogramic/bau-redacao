<template>
  <div class="hello">
    <v-layout column align-center>
      </br>
      <v-flex xs5 offset-xs1>

        <!-- <h1 class="headline mb-3">{{ msg }}</h1>
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
      </v-dialog> -->
          <!-- <form class="form-horizontal row">
            <div class="col-md-3">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="horizontal" > horizontal
                </label>
              </div>
            </div>
            <div class="col-md-3">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="collapsable"> collapsable
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label col-md-5">labelClassName:</label>
                <div class="col-md-7">
                  <select class="form-control" v-model="labelClassName">
                    <option value="bg-white">bg-white</option>
                    <option value="bg-orange">bg-orange</option>
                    <option value="bg-gold">bg-gold</option>
                    <option value="bg-gray">bg-gray</option>
                    <option value="bg-lightpink">bg-lightpink</option>
                    <option value="bg-chocolate">bg-chocolate</option>
                    <option value="bg-tomato">bg-tomato</option>
                  </select>
                </div>
              </div>
            </div>
          </form> -->
      <div class="text-center">
        <dr-tree
          :data="data"
          :horizontal="horizontal"
          :collapsable="collapsable"
          :label-class-name="labelClassName"
          :render-content="renderContent"
          @on-expand="onExpand"
          @on-node-click="onNodeClick"
        >
        </dr-tree>
      </div>


     </v-flex>
   </v-layout>
  </div>
</template>

<script>
  import DrTree from './Shared/Diagram/dr-tree'
  export default {
    name: 'hello',
    components: {
      DrTree
    },
    data() {
      return {
        date: null,
        menu: false,
        modal: false,
        msg: `Se EDDEDED marcares ao largo um lampejo
                De um farol a mostrar o caminho,
                Saberá ser o nosso desejo
                Que jamais tu navegues sozinho'`,
        data: {
          id: 0,
          label:  `<b>ITEM-0</b>`,
          children: [
               {
                id: 5,
                label: 'ITEM-1-1',
               }, {
                id: 6,
                label: 'ITEM-1-2'
            }]
        },
        horizontal: true,
        collapsable: true,
        labelClassName: 'bg-white'
       }
    },
    methods: {
      renderContent (h, data) {
        return h('div', {
          domProps: {
            innerHTML: data.label
          }
        })
      },
      onExpand (data) {
        if ('expand' in data) {
          data.expand = !data.expand

          if (!data.expand && data.children) {
            this.collapse(data.children)
          }
        } else {
          this.$set(data, 'expand', true)
        }
      },
      onNodeClick (e, data) {
        alert(data.label)
      },
      collapse (list) {
        list.forEach(child => {
          if (child.expand) {
            child.expand = false
          }

          child.children && this.collapse(child.children)
        })
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
.bg-white {
  background-color: white;
}
.bg-orange {
  background-color: orange;
}
.bg-gold {
  background-color: gold;
}
.bg-gray {
  background-color: gray;
}
.bg-lightpink {
  background-color: lightpink;
}
.bg-chocolate {
  background-color: chocolate;
}
.bg-tomato {
  background-color: tomato;
}
</style>
