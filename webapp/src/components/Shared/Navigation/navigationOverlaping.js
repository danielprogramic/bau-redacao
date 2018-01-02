export default {
  props: [
    'toolbarItens'
  ],
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
          icon: 'settings',
          title: 'Configurações'
        },
        {
          icon: 'help',
          title: 'Ajuda'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Dom Rock'
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
    }
  },
  computed: {
    toolbarItensFlag: {
      get: function() {
        return this.toolbarItens
      },
      set: function(val) {
        this.$emit('emtoolbarItens', val)
      }
    },
  },

}