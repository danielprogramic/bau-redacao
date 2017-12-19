export default {
  props: [
    'drawer',
    'rightDrawer'
  ],
  data: () => ({
    bars: [{
        'class': 'white'
      },
      {
        'class': '',
        dark: true
      },
      {
        'class': 'primary',
        dark: true
      },
      {
        'class': 'elevation-1'
      }
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
    rightDrawerFlag() {
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
  }
}