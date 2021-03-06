import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Login from '@/components/Login/Login.vue'
import IntegridadeSumario from '@/components/Analysis/Integridade/Sumario.vue'
import IntegridadeDetalhe from '@/components/Analysis/Integridade/Detalhe.vue'
import IntegridadeTree from '@/components/Analysis/Integridade/LayoutTree.vue'
//
import QualicorpSumario from '@/components/Analysis/Qualicorp/Sumario.vue'
import QualicorpDetalhe from '@/components/Analysis/Qualicorp/Detalhe.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/dashboard', name: 'dashboard', component: Hello, beforeEnter: AuthGuard.auth },
    { path: '/login', name: 'login', component: Login, beforeEnter: AuthGuard.guest },
    { path: '/integridade/sumario', name: 'integridadesumario', component: IntegridadeSumario, beforeEnter: AuthGuard.auth },
    { path: '/integridade/detalhe', name: 'Integridadedetalhe', component: IntegridadeDetalhe, beforeEnter: AuthGuard.auth },
    { path: '/integridade/tree', name: 'integridadetree', component: IntegridadeTree, beforeEnter: AuthGuard.auth },
    { path: '/qualicorp/sumario', name: 'qualicorpsumario', component: QualicorpSumario, beforeEnter: AuthGuard.auth },
    { path: '/qualicorp/detalhe', name: 'qualicorpdetalhe', component: QualicorpDetalhe, beforeEnter: AuthGuard.auth },
    { path: '*', redirect: 'login' }
  ],
  saveScrollPosition: true,
  mode: 'history'
})