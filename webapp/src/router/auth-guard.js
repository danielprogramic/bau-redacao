import Store from '../store/store'

export default {
  guest(to, from, next) {
    if (Store.state.isUserLoggedIn) {
      // next('/dashboard');
      next('/integridade/sumario');
    }
    next(!Store.state.isUserLoggedIn)
  },
  auth(to, from, next) {
    next(Store.state.isUserLoggedIn ? true : {
      path: '/login',
      query: {
        redirect: to.name
      }
    })
  }
}