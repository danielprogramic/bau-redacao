import Helpers from '@/mixins/Helper'

export default {
  props: [
    'toolbarItens',
  ],
  data() {
    return {
      listas: [{
          name: 'mais',
          timer: '',
          renderizaNav: false,
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
        {
          name: 'upload',
          itens: [

          ]
        },
        {
          name: 'modulos',
          itens: [

          ]
        },
      ],
    }
  },
  methods: {
    close() {
      this.toolbarItens.habilitador = false;
      this.toolbarItens.removeNavOverlaping = false;
    },
    onLogout() {
      this.toolbarItens.habilitador = false;
      this.toolbarItens.removeNavOverlaping = false;
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
    styleObjectOverlaping: function() {
      if (this.toolbarItens.exibicao)
        return {
          height: this.toolbarItens.height + '%',
          width: this.toolbarItens.widthOverlaping + 'px',
          marginRight: this.toolbarItens.marginRight + 'px'
        }
      else
        return {
          height: this.toolbarItens.height + '%',
          width: this.toolbarItens.widthOverlaping + 'px',
          marginLeft: this.toolbarItens.marginLeft + 'px'
        }
    },
    getItens: function() {
      const objAction = Helpers.filters.elements(this.listas, this.toolbarItens.name, 'name');
      return objAction[0].itens;
    }
  },
  created() {
    console.log('CREATE OVERLAPING')
    this.timer = setTimeout(() => {
      this.toolbarItens.habilitador = true;
    }, 500)

  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}