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
        },
        {
          icon: '',
          title: '',
          background: "secondary",
          color: "#0A1F30",

          iconeffecover: "navigation-icons",
          active: false,
        },
        {
          icon: 'dashboard',
          title: 'Dashboard',
          background: "content",
          color: "#03b4f1",

          iconeffecover: "navigation-icons",
          active: false,
        },
        {
          icon: 'list',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",

          iconeffecover: "navigation-icons",
          active: false,
        },
        {
          icon: 'assessment',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",

          iconeffecover: "navigation-icons",
          active: false,
        },
        {
          icon: 'forum',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",

          iconeffecover: "navigation-icons",
          active: false,
        },
        {
          icon: 'folder_open',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",

          iconeffecover: "navigation-icons",
          active: false,
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