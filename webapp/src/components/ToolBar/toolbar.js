import Helpers from '@/mixins/Helper'
import VueSticky from 'vue-sticky';
export default {
  directives: {
    'sticky': VueSticky,
  },
  props: [
    'rightDrawer',
  ],
  data: () => ({
    marcador: '',
    scrollPosition: 200,
    toolbar_obj: [{
        name: 'home_conta',
        titulo: 'André Fernando de Almeida',
        icon: 'person',
        marginRight: 68,
        width: 360,
        height: 74,
        widthOverlaping: 350,
        habilitador: false,
      },
      {
        name: 'mais',
        titulo: 'Mais',
        icon: 'more_horiz',
        marginRight: 0,
        width: 280,
        height: 54,
        widthOverlaping: 300,
        habilitador: false,
      },
    ],
    stickyConfig: {
      zIndex: 6,
      stickyTop: 0
    },
  }),
  methods: {
    actionDrawer(tipo) {
      this.marcador = tipo;
      const objAction = Helpers.filters.elements(this.toolbar_obj, tipo, 'name');
      objAction[0].habilitador = true;

      // const teste = Helpers.filters.elements(this.toolbar_obj, '^home_conta$|^m$', 'name');
      // console.log(teste);

      this.$emit('OnToolbar', objAction);
    }
  },
  mounted() {
    setTimeout(() => {
      //this.stickyConfig.stickyTop = 300
    }, 5000)
  },
  watch: {
    rightDrawer: function(val) {
      if (!val) {
        const objAction = Helpers.filters.elements(this.toolbar_obj, this.marcador, 'name');
        objAction[0].habilitador = false;
      }
    },
  }
}