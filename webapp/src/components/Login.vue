<template>
  <div class="login">
    <notifications position="bottom center" />
    <v-container grid-list-md fill-height>
      <div>
        <v-layout row wrap>
          <v-flex xs12 sm6 md8>
            <div style="height:130px; width:140px;">
              <img class="imagem-responsiva" src="../../static/logo-white.png" alt="">
            </div>
            <br>
            <v-flex xs12 sm12 md8>
              <div class="quote">
                <div class="rectangle-3">
                </div>
                <div class="title_text">
                  Se marcares ao largo um lampejo De um farol a mostrar o caminho, Saberá ser o nosso desejo Que jamais tu navegues sozinho <br>
                  <span class="autor"> AUTOR, 2010 - SÂO PAULO SP</span>
                </div>
              </div>
            </v-flex>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-card height="320px">
              <v-card-title primary-title>
                <div>
                  <div style="font-weight: 900;padding-left:15px;" class="headline">{{msg[Number(!show)]}}</div>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-container>
                <v-layout align-center justify-center>
                  <v-card-text>
                    <transition name="fade" mode="out-in">
                      <div key="3" v-if="show">
                        <label style="font-weight:bold;" for="">Email</label><br>
                        <input style="width:100%;" class="layout_input" type="text" v-model="email"><br><br>
                        <label style="font-weight:bold;" for="">Senha</label><br>
                        <input style="width:61%;" class="layout_input" type="password" v-model="password">
                        <v-btn style="width:30%;float:right;" @click="onLogin" color="primary">Entrar</v-btn>
                        <span v-on:click="show = !show" style="opacity :0.6;font-size:11px;padding-left:2px;">
                            ESQUECI MINHA SENHA
                        </span>
                      </div>
                      <div key="1" v-if="!show">
                        <label style="font-weight:bold;" for="">Email</label><br>
                        <input style="width:100%;" class="layout_input" type="text" v-model="emailrecover"><br><br>
                        <v-btn style="width:30%;float:right;" color="primary">Enviar</v-btn>
                        <span v-on:click="show = !show" style="opacity :0.6;font-size:11px;padding-left:2px;">
                            VOLTAR PARA O LOGIN
                        </span>
                      </div>
                    </transition>
                  </v-card-text>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import MessagensNotificar from './utils/notificar/NotificarStyle'
  
  export default {
    name: 'login',
    data: () => ({
      msg: ['Entrar','Recuperar Senha'],
      email: '',
      password: '',
      emailrecover: '',
      show: true,
      status: false,
    }),
    methods: {
      onSetRouter() {
        this.$router.push('/relembrar-senha/')
      },
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
</script>

<style lang="stylus" scoped>
@import "../../stylus/login"
</style>