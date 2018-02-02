import Helpers from '@/mixins/Helper'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

var example = `
<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions">
....
dropzoneOptions: {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 150,
    maxFilesize: 0.5,
    headers: { "My-Awesome-Header": "header value" }
}`

export default {
  props: [
    'toolbarItens',
  ],
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      ok: true,
      example: "````" + example + "````",
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true,
        dictDefaultMessage: "Arraste seu arquivo..",
        autoProcessQueue: true,
        accept(file, done) {
          console.log(file);
          done();
        },
      },
      fileAdded: false,
      filesAdded: false,
      success: false,
      error: false,
      removedFile: false,
      sending: false,
      successMultiple: false,
      sendingMultiple: false,
      queueComplete: false,
      uploadProgress: false,
      progress: false,
      myProgress: 0,
      isMounted: false,
      dDrop: false,
      dStarted: false,
      dEnded: false,
      dEntered: false,
      dOver: false,
      dLeave: false,
      listas: [{
          name: 'mais',
          timer: '',
          renderizaNav: false,
          itens: [
            { icon: 'settings', title: 'Configurações' },
            { icon: 'help', title: 'Ajuda' },
          ]
        },
        {
          name: 'home_conta',
          itens: [{
              icon: '',
              perfilAtv: 'PERFIL ATIVO',
              cnpj: 'CNPJ:01.456.298/0001-15',
              empresa: 'Ciclo De Recebíveis',
              collapse: [
                { action: 'restore_page', title: 'Detalhe 1' },
                { action: 'restore_page', title: 'Detalhe 2' },
                { action: 'restore_page', title: 'Detalhe 3' }
              ]
            },
            { icon: 'account_box', title: 'Minha conta' },
            { icon: 'supervisor_account', title: 'Usuários' },
            { icon: 'folder_shared', title: 'Acessos' },
          ]
        },
        {
          name: 'upload',
          itens: [{
            upload: true,
          }],
        },
        {
          name: 'modulos',
          itens: [{
            image: true,
          }]
        },
      ],
    }
  },
  methods: {
    close() {
      this.toolbarItens.habilitador = false;
      this.toolbarItens.removeNavOverlaping = false;
    },
    onLogout() {
      this.toolbarItens.habilitador = false;
      this.toolbarItens.removeNavOverlaping = false;
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    },
    toggle(index) {
      alert(index);
    },
    vfileAdded(file) {
      this.fileAdded = true
        // window.toastr.info('', 'Event : vdropzone-file-added')
    },
    vfilesAdded(file) {
      this.filesAdded = true
        // window.toastr.info('', 'Event : vdropzone-files-added')
    },
    vsuccess(file, response) {
      this.success = true
        // window.toastr.success('', 'Event : vdropzone-success')
    },
    verror(file) {
      this.error = true
        // window.toastr.error(file.upload.filename, 'Event : vdropzone-error - ' + file.status)
    },
    vremoved(file, xhr, error) {
      this.removedFile = true
        // window.toastr.warning('', 'Event : vdropzone-removedFile')
    },
    vsending(file, xhr, formData) {
      this.sending = true
        // window.toastr.warning('', 'Event : vdropzone-sending')
    },
    vsuccessMuliple(files, response) {
      this.successMultiple = true
        // window.toastr.success('', 'Event : vdropzone-success-multiple')
    },
    vsendingMuliple(file, xhr, formData) {
      this.sendingMultiple = true
        // window.toastr.warning('', 'Event : vdropzone-sending-multiple')
    },
    vqueueComplete(file, xhr, formData) {
      this.queueComplete = true
        // window.toastr.success('', 'Event : vdropzone-queue-complete')
    },
    vprogress(totalProgress, totalBytes, totalBytesSent) {
      this.progress = true
      this.myProgress = Math.floor(totalProgress)
        // window.toastr.success('', 'Event : vdropzone-sending')
    },
    vmounted() {
      this.isMounted = true
    },
    vddrop() {
      this.dDrop = true
    },
    vdstart() {
      this.dStarted = true
    },
    vdend() {
      this.dEnded = true
    },
    vdenter() {
      this.dEntered = true
    },
    vdover() {
      this.dOver = true
    },
    vdleave() {
      this.dLeave = true
    }
  },
  computed: {
    styleObjectOverlaping: function() {
      if (this.toolbarItens.exibicao)
        return {
          height: this.toolbarItens.height + '%',
          width: this.toolbarItens.widthOverlaping + 'px',
          marginRight: this.toolbarItens.marginRight + 'px'
        }
      else
        return {
          height: this.toolbarItens.height + '%',
          width: this.toolbarItens.widthOverlaping + 'px',
          marginLeft: this.toolbarItens.marginLeft + 'px'
        }
    },
    getItens: function() {
      const objAction = Helpers.filters.elements(this.listas, this.toolbarItens.name, 'name');
      return objAction[0].itens;
    }
  },
  watch: {
    fileAdded() {
      let that = this
      setTimeout(function() {
        that.fileAdded = false
      }, 2000)
    },
    filesAdded() {
      let that = this
      setTimeout(function() {
        that.filesAdded = false
      }, 2000)
    },
    success() {
      let that = this
      setTimeout(function() {
        that.success = false
      }, 2000)
    },
    error() {
      let that = this
      setTimeout(function() {
        that.error = false
      }, 2000)
    },
    removedFile() {
      let that = this
      setTimeout(function() {
        that.removedFile = false
      }, 2000)
    },
    sending() {
      let that = this
      setTimeout(function() {
        that.sending = false
      }, 2000)
    },
    successMultiple() {
      let that = this
      setTimeout(function() {
        that.successMultiple = false
      }, 2000)
    },
    sendingMultiple() {
      let that = this
      setTimeout(function() {
        that.sendingMultiple = false
      }, 2000)
    },
    queueComplete() {
      let that = this
      setTimeout(function() {
        that.queueComplete = false
      }, 2000)
    },
    progress() {
      let that = this
      setTimeout(function() {
        that.progress = false
      }, 2000)
    },
    isMounted() {
      let that = this
      setTimeout(function() {
        that.isMounted = false
      }, 2000)
    },
    dDrop() {
      let that = this
      setTimeout(function() {
        that.dDrop = false
      }, 2000)
    },
    dStarted() {
      let that = this
      setTimeout(function() {
        that.dStarted = false
      }, 2000)
    },
    dEnded() {
      let that = this
      setTimeout(function() {
        that.dEnded = false
      }, 2000)
    },
    dEntered() {
      let that = this
      setTimeout(function() {
        that.dEntered = false
      }, 2000)
    },
    dOver() {
      let that = this
      setTimeout(function() {
        that.dOver = false
      }, 2000)
    },
    dLeave() {
      let that = this
      setTimeout(function() {
        that.dLeave = false
      }, 2000)
    },
  },
  created() {
    console.log('CREATE OVERLAPING')
    this.timer = setTimeout(() => {
      this.toolbarItens.habilitador = true;
    }, 500)

  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}