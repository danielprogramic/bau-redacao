import Helpers from '@/mixins/Helper'
import VueSticky from 'vue-sticky';

const MAIS = 'mais';

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
    toolbar_obj_left: [{
        name: 'modulos',
        titulo: 'Módulos',
        icon: 'archive',
        marginLeft: 0,
        width: 330,
        height: 400,
        exibicao: false,
        widthOverlaping: 350,
        removeNavOverlaping: false,
        habilitador: false,
      },
      {
        name: 'upload',
        titulo: 'Enviar arquivo',
        icon: 'backup',
        marginLeft: 80,
        width: 700,
        height: 400,
        exibicao: false,
        widthOverlaping: 850,
        removeNavOverlaping: false,
        habilitador: false,
      },

    ],
    //CONFIGURAÇÃO DO NAVOVERLAPING
    toolbar_obj_right: [{
        name: 'home_conta',
        titulo: 'André Fernando de Almeida',
        icon: 'person',
        marginRight: 68,
        width: 360,
        height: 74,
        exibicao: true,
        widthOverlaping: 350,
        removeNavOverlaping: false,
        habilitador: false,
      },
      {
        name: 'mais',
        titulo: 'Mais',
        icon: 'more_horiz',
        marginRight: 0,
        width: 280,
        height: 54,
        exibicao: true,
        widthOverlaping: 300,
        removeNavOverlaping: false,
        habilitador: false,
      },
    ],
    stickyConfig: {
      zIndex: 6,
      stickyTop: 0
    },
  }),
  methods: {
    actionDrawer(tipo, type) {
      this.marcador = tipo;
      const arrayMulti = this['toolbar_obj_' + type];
      const objAction = Helpers.filters.elements(arrayMulti, tipo, 'name');
      objAction[0].removeNavOverlaping = true;
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