import Helpers from '@/mixins/Helper'
export default {
  props: [
    'toolbarItens'
  ],
  data() {
    return {
      listas: [{
          name: 'mais',
          itens: [
            { icon: 'settings', title: 'Configurações' },
            { icon: 'help', title: 'Ajuda' },
          ]
        },
        {
          name: 'home_conta',
          itens: [{
              icon: '',
              perfilAtv: 'PERFIL ATIVO',
              cnpj: 'CNPJ:01.456.298/0001-15',
              empresa: 'Qualicorp corretora de Seguros S.A',
              collapse: [
                { action: 'restore_page', title: 'Detalhe 1' },
                { action: 'restore_page', title: 'Detalhe 2' },
                { action: 'restore_page', title: 'Detalhe 3' }
              ]
            },
            { icon: 'account_box', title: 'Minha conta' },
            { icon: 'supervisor_account', title: 'Usuários' },
            { icon: 'folder_shared', title: 'Acessos' },
          ]
        },
      ],
    }
  },
  methods: {
    close() {
      this.toolbarItensFlag.habilitador = false;
    },
    onLogout() {
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
  created() {
    this.close();
    console.log('CRIOU COMPONENTE NAVIGATION OVERLAPING')
  }
}