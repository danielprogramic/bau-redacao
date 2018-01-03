import Helpers from '@/mixins/Helper'
export default {
  props: [
    'toolbarItens'
  ],
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      listas: [{
          name: 'mais',
          itens: [
            { icon: 'settings', title: 'Configurações' },
            { icon: 'help', title: 'Ajuda' },
          ]
        },
        {
          name: 'home_conta',
          itens: [
            { icon: '', title: 'Qualicorp corretora de Seguros S.A', corporation:true },
            { icon: 'account_box', title: 'Minha conta' },
            { icon: 'supervisor_account', title: 'Usuários' },
            { icon: 'folder_shared', title: 'Acessos' },
          ]
        },
      ],
      miniVariant: false,
      right: true,
    }
  },
  methods: {
    close() {
      this.$emit('OnNavOverlaping', false);
    },
    onLogout() {
      this.$emit('OnNavOverlaping', false);
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    },
    toggle(index) {
      alert(index);
    },
  },
  computed: {
    toolbarItensFlag: function() {
      return this.toolbarItens
    },
    getItens: function() {
      const objAction = Helpers.filters.elements(this.listas, this.toolbarItens.name, 'name');
      return objAction[0].itens;
    }
  },
}