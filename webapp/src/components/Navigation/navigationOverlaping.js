import Helpers from '@/mixins/Helper'
import Mais from '@/components/Navigation/ItensOverlaping/Mais'
import HomeConta from '@/components/Navigation/ItensOverlaping/HomeConta'
import Upload from '@/components/Navigation/ItensOverlaping/Upload/Upload'
import Modulo from '@/components/Navigation/ItensOverlaping/Modulo'

export default {
  props: [
    'toolbarItens',
  ],
  components: {
    'dr-navigationItens-mais': Mais,
    'dr-navigationItens-home-conta': HomeConta,
    'dr-upload': Upload,
    'dr-modulo': Modulo,
  },
  data() {
    return {
      listas: [{
        name: 'mais',
        timer: '',
        renderizaNav: false,
        itens: [{
          icon: 'settings',
          title: 'Configurações'
        }, {
          icon: 'help',
          title: 'Ajuda'
        }, ]
      }, {
        name: 'home_conta',
        itens: [{
          icon: '',
          perfilAtv: 'PERFIL ATIVO',
          cnpj: 'CNPJ:01.456.298/0001-15',
          empresa: 'Ciclo De Recebíveis',
          collapse: [{
            action: 'restore_page',
            title: 'IRMANDADE DA SANTA CASA'
          }, {
            action: 'restore_page',
            title: 'IRMANDADE DA SANTA CASA'
          }, {
            action: 'restore_page',
            title: 'IRMANDADE DA SANTA CASA'
          }]
        }, {
          icon: 'account_box',
          title: 'Minha conta'
        }, {
          icon: 'supervisor_account',
          title: 'Usuários'
        }, {
          icon: 'folder_shared',
          title: 'Acessos'
        }, ]
      }, {
        name: 'upload',
        itens: [{
          upload: true,
        }],
      }, {
        name: 'modulos',
        itens: [{
          image: true,
        }]
      }, ],
    }
  },
  methods: {
    initOverpaling: (value) => {
      const timer = setTimeout(() => {
        value.habilitador = true;
      }, 20);
      return timer;
    },
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
    },
  },
  watch: {
    toolbarItens: function(val) {
      //alert("Cabeção")
    },
  }
}