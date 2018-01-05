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
          size: '32',
        },
        {
          icon: '',
          title: '',
          background: "secondary",
          color: "#0A1F30",
          size: '22',
        },
        {
          icon: 'dashboard',
          title: 'Dashboard',
          background: "content",
          color: "#03b4f1",
          size: '22',
        },
        {
          icon: 'list',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          size: '22',
        },
        {
          icon: 'assessment',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          size: '22',
        },
        {
          icon: 'forum',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          size: '22',
        },
        {
          icon: 'folder_open',
          title: 'Dashboard',
          background: "secondary",
          color: "#0A1F30",
          size: '22',
        },
      ],
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