export default {
  props: [
    'drawer'
  ],

  data() {
    return {

      items: [{
          icon: '',
          title: '',
          background: "secondary",
          color: "#fff",
          iconeffecover: "-icons",
          active: false,
          legenda: '',
          path: ''
        },
        {
          icon: '',
          title: '',
          background: "secondary",
          color: "#0A1F30",
          iconeffecover: "navigation-icons",
          active: false,
          legenda: '',
          path: ''
        },
        {
          icon: 'dashboard',
          title: 'Dashboard',
          background: "content",
          color: "#03b4f1",
          iconeffecover: "navigation-icons",
          active: false,
          legenda: 'Sumário',
          path: 'integridadesumario'
        },
        {
          icon: 'list',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          iconeffecover: "navigation-icons",
          active: false,
          legenda: 'Detalhes',
          path: 'Integridadedetalhe'
        },
        {
          icon: 'assessment',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          iconeffecover: "navigation-icons",
          active: false,
          legenda: 'Gráficos',
          path: ''
        },
        {
          icon: 'forum',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          iconeffecover: "navigation-icons",
          active: false,
          legenda: 'Chat Bot',
          path: ''
        },
        {
          icon: 'folder_open',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          iconeffecover: "navigation-icons",
          active: false,
          legenda: 'Repositórios',
          path: ''
        },

      ],
    }
  },
  methods: {
    renderbuttonclick(value) {
      return value ? 'navigationAct' : 'navigation'
    },
    onclick(value) {
      this.items.map(s => [s.active = false, s.iconeffecover = "navigation-icons"]);
      this.items[value].active = true;
      this.items[value].iconeffecover = 'navigationAct-icons';
      this.$router.push({
        name: this.items[value].path
      })
    }
  },
  computed: {
    drawerFlag: {
      get: function() {
        return this.drawer
      },
      set: function(val) {
        this.$emit('emdrawer', val)
      }
    }
  },

}