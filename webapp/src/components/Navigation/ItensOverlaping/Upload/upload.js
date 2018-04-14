import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
export default {
  name: 'upload',
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      ok: true,
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
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        // maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value"
        },
        addRemoveLinks: true,
        // maxFiles: 2,
        // acceptedFiles: '.jpg,.jpeg,.png',
        addRemoveLinks: true,
        previewTemplate: this.templatePreview(),
        dictDefaultMessage: `
           <img style="float: none; width: 140px; margin: 0 auto;" 
           src="/static/uploadocs.png"></br>
           <div class="dropzoneText">Arraste e solte seus arquivos em qualquer lugar ou</div>
           <button style="padding: 6px 20px 20px 15px" class='btn bluedetail' type='button'>
             <i style="color:#fff;" class="material-icons">
               file_upload
             </i>
             <div style="color:#fff;">
               Carregue seu arquivo
             </div>
           </button>`,
        autoProcessQueue: true,
        accept(file, done) {
          console.log(file);
          done();
        },
      },
    }
  },
  methods: {
    templatePreview() {
      return `
             <div class="dz-preview dz-file-preview">
           <div class="dz-image" style="width: 130px;height: 100px;">
             <img data-dz-thumbnail />
           </div>
           <div class="dz-details">
             <div class="dz-size"><span data-dz-size></span></div>
             <div class="dz-filename"><span data-dz-name></span></div>
           </div>
           <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
           <div class="dz-error-message"><span data-dz-errormessage></span></div>
           <div class=\"dz-success-mark\">
             \n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      
             <title>Check</title>
             \n      
             <defs></defs>
             \n      
             <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>
             \n    </svg>\n  
           </div>
           \n  
           <div class=\"dz-error-mark\">
             \n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      
             <title>Error</title>
             \n      
             <defs></defs>
             \n      
             <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">
                 \n        
                 <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>
                 \n      
             </g>
             \n    </svg>\n  
           </div>
         </div>
         `;
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
}