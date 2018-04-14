export default {
  error(mensagem) {
    return {
      group: 'auth',
      type: 'error',
      title: 'Erro.',
      text: '<b>' + mensagem + '</b>',
    }
  },
  info(mensagem) {
    return {
      group: 'auth',
      type: 'info',
      title: 'Info.',
      text: '<b>' + mensagem + '</b>',
    }
  },
  success(mensagem) {
    return {
      group: 'auth',
      type: 'success',
      title: 'Sucesso.',
      text: '<b>' + mensagem + '</b>',
    }
  },
  warning(mensagem) {
    return {
      group: 'auth',
      type: 'warning',
      title: 'Aviso.',
      text: '<b>' + mensagem + '</b>',
    }
  },

}