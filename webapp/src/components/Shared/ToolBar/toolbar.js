export default {
  props: [
    'drawer',
    'rightDrawer',
  ],
  data: () => ({
    aumentarwidth: 0,
    toolbar_obj: [{
        name: "home_conta",
        width: 500,
      },
      {
        name: "mais",
        width: 200,
      },
    ]
  }),
  methods: {
    drawerFlag() {
      if (this.drawer) {
        this.$emit('drawer', false);
      } else {
        this.$emit('drawer', true);
      }
    },
    rightDrawerFlag(index) {
      this.$emit('Umargem', toolbar_obj.width);
      if (this.rightDrawer) {
        this.$emit('rightDrawer', false);
      } else {
        this.$emit('rightDrawer', true);
      }
    },
    onLogout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  },
  watch: {
    rightDrawer: function(val) {
      if (!val) {
        this.aumentarwidth = 0;
      } else {
        this.aumentarwidth = 500;
      }
    },
  }
}