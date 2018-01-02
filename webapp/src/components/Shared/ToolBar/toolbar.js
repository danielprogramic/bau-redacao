import Helpers from '@/mixins/Helper'
export default {
  props: [
    'rightDrawer',
  ],
  data: () => ({
    marcador: '',
    toolbar_obj: [{
        name: 'home_conta',
        titulo: 'Daniel Douglas Machado',
        icon: 'person',
        marginRight: 68,
        width: 290,
        habilitador: false,
      },
      {
        name: 'mais',
        titulo: 'Mais',
        icon: 'more_horiz',
        marginRight: 0,
        width: 280,
        habilitador: false,
      },
    ]
  }),
  methods: {
    actionDrawer(tipo) {
      this.marcador = tipo;
      const objAction = Helpers.filters.elements(this.toolbar_obj, tipo, 'name');
      objAction[0].habilitador = true;

      const teste = Helpers.filters.elements(this.toolbar_obj, '^home_conta$|^m$', 'name');
      console.log(teste);

      this.$emit('OnToolbar', objAction);
    },
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