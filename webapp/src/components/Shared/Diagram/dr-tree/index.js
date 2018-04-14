import DrTree from './dr-tree'

const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true
  Vue.component(DrTree.name, DrTree)
}

DrTree.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(DrTree)
}

export default DrTree