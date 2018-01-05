import AuthenticationService from '@/services/AuthenticationService'
import MessagensNotificar from '../utils/notificar/NotificarStyle'
export default {
  name: 'login',
  data: () => ({
    msg: ['Entrar', 'Recuperar Senha'],
    email: '',
    password: '',
    emailrecover: '',
    show: true,
    status: false,
  }),
  methods: {
    // onSetRouter() {
    //   this.$router.push('/relembrar-senha/')
    // },
    async onLogin() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        this.$notify(MessagensNotificar.success("Entrando no sistema..."));
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.usuario)
        this.$router.push({
          name: 'dashboard'
        })
      } catch (error) {
        this.$notify(MessagensNotificar.error(error.response.data.error))
      }
    }
  }
}