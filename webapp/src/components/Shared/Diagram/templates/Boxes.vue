<template>
  <div class="boxes">
    <div class="text-center">
      <dr-tree :data="data"
      :horizontal="mode" 
      :collapsable="collapsable" 
      :label-class-name="labelClassName" 
      :render-content="renderContent" 
      @on-expand="onExpand" 
      @on-node-click="onNodeClick">
      </dr-tree>
    </div>
  </div>
</template>

<script>
  import DrTree from '../dr-tree/dr-tree'
  export default {
    name: 'boxes',
    props: [
      'data',
      'mode'
    ],
    components: {
      DrTree
    },
    data() {
      return {
        horizontal: true,
        collapsable: true,
        labelClassName: 'bg-white'
      }
    },
    methods: {
      renderContent(h, data, context) {
        const self = this;
        return [h('div', {
            'class': {
              'divergencia': true
            },
            domProps: {
              innerHTML: data.caixa.titulo
            },
          }),
          h('div', {
            'class': {
              'divergencia-box': true
            }
          }, [
            h('ul', {
                'class': {
                  'divergencia-ul': true
                },
              },
              data.caixa.itens.map((conteudo, index) => h('li', {
                'class': {
                  'divergencia-ul-actions': conteudo.actions
                },
                domProps: {
                  innerHTML: conteudo.label
                },
                on: {
                  click: function(event) {
                    if (conteudo.actions) {
                      if (conteudo.actions[0].trigger) {
                        self.$emit('OnTriggerBoxes', data.caixa.itens, index);
                      }
                    }
                  }
                }
              }))
            ),
            h('ul', {
                'class': {
                  'divergencia-ul-val': true
                },
              },
              data.caixa.itens.map(conteudo => h('li', {
                domProps: {
                  innerHTML: conteudo.value
                }, 
              }
 
              ))
            ),
          ], ),
        ];
      },
      onExpand(data) {
        if ('expand' in data) {
          data.expand = !data.expand
          if (!data.expand && data.children) {
            this.collapse(data.children)
          }
        } else {
          this.$set(data, 'expand', true)
        }
      },
      onNodeClick(e, data) {},
      collapse(list) {
        list.forEach(child => {
          if (child.expand) {
            child.expand = false
          }
          child.children && this.collapse(child.children)
        })
      },
    },
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .divergencia {
    width: 360px;
    font-weight: bold;
    padding: 9px;
    text-align: left;
  }
  .divergencia-box {
    background-color: #fff;
    height: 100%;
    border-radius: 6px;
  }
  .divergencia-ul {
    width: 65%;
    text-align: left;
    color:#586374;
    padding-left:12px;
    padding-top:12px;
    list-style-type: none;
    display: inline-block;
  }
  .divergencia-ul-val {
    width: 35%;
    text-align: right;
    font-weight: bold;
    padding-right:12px;
    padding-top:12px;
    list-style-type: none;
    display: inline-block;
  }
  .divergencia-ul-actions {
    color: #00B4F1;
    cursor: pointer;
    font-weight: bold;
  }
  .bg-white {
    background-color: #D6E1EB;
  }
  .bg-orange {
    background-color: #00B4F1;
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
