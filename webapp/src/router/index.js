import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login/Login'
import IntegridadeSumario from '@/components/Analysis/Integridade/Sumario'
import IntegridadeDetalhe from '@/components/Analysis/Integridade/Detalhe'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/dashboard', name: 'dashboard', component: Hello, beforeEnter: AuthGuard.auth },
    { path: '/login', name: 'login', component: Login, beforeEnter: AuthGuard.guest },
    { path: '/integridade/sumario', name: 'integridadesumario', component: IntegridadeSumario, beforeEnter: AuthGuard.auth },
    { path: '/integridade/detalhe', name: 'Integridadedetalhe', component: IntegridadeDetalhe, beforeEnter: AuthGuard.auth },
    { path: '*', redirect: 'login' }
  ],
  saveScrollPosition: true,
  mode: 'history'
})