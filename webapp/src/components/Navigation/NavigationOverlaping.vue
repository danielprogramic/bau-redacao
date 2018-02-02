<template>
  <div class="navigation_overlaping">
    <!-- <div style="margin-left:200px;background-color:yellow">
          {{toolbarItens}}
        </div> -->
    <v-navigation-drawer class="secondary elevation-2 bordercard" v-bind:style="styleObjectOverlaping" v-bind:class="{'mg': !toolbarItens.habilitador }" temporary fixed :right="toolbarItens.exibicao" v-model="toolbarItens.habilitador">
      <v-toolbar class="toolbarTitle" flat height="64">
        <v-icon style="color: #0A1F30" large>{{toolbarItens.icon }}</v-icon>
        <div class="toolbaRightLbl">{{toolbarItens.titulo}}</div>
        <v-spacer></v-spacer>
        <v-btn @click.native="close()" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <template v-for="(item, index) in getItens">
              <!-- LISTA COM COLLAPSE -->
              <v-list  two-line  v-bind:key="item.title">
              <v-list-group  v-if="item.collapse"  v-bind:key="item.title" v-bind:class="{'navigation_overlaping-activeCorporation': item.collapse }" >
                <v-list-tile   slot="item" @click="">
                  <v-list-tile-content>
                    <v-list-tile-title v-bind:class="{'navigation_overlaping-color-black': item.collapse }"  >{{ item.perfilAtv }}</v-list-tile-title>
                    <v-list-tile-title v-bind:class="{'navigation_overlaping-color-blue': item.collapse }"  >{{ item.empresa }}</v-list-tile-title>
                    <v-list-tile-title v-bind:class="{'navigation_overlaping-color-black': item.collapse }"  >{{ item.cnpj }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon v-bind:class="{'navigation_overlaping-color-blue': item.collapse }" >arrow_drop_down</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile v-for="subItem in item.collapse" v-bind:key="subItem.title" @click="">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon class="navigation_overlaping-color" >{{ subItem.action }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
              </v-list>
                <!-- LISTA NORMAL -->
                <v-list-tile v-if="!item.collapse && !item.image && !item.upload"  avatar ripple @click="toggle(index)" :key="item.title">
                  <v-list-tile-avatar>
                    <v-icon class="navigation_overlaping-color" medium>{{ item.icon }}</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
               <!-- LISTA NORMAL -->
               <div  v-if="item.image" :key="item.title">
               <v-card >
                <v-card-media height="800px" src="/static/menu.jpg" >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
               </div>
                 <!-- UPLOAD ARQUIVOS-->
       <div  v-if="item.upload" :key="item.title">
        <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-file-added="vfileAdded" @vdropzone-success="vsuccess" @vdropzone-error="verror" @vdropzone-removed-file="vremoved" @vdropzone-sending="vsending" @vdropzone-success-multiple="vsuccessMuliple" @vdropzone-sending-multiple="vsendingMuliple" @vdropzone-queue-complete="vqueueComplete" @vdropzone-total-upload-progress="vprogress" @vdropzone-mounted="vmounted" @vdropzone-drop="vddrop" @vdropzone-drag-start="vdstart" @vdropzone-drag-end="vdend" @vdropzone-drag-enter="vdenter" @vdropzone-drag-over="vdover" @vdropzone-drag-leave="vdleave" :options="dropzoneOptions">
        </vue-dropzone>
      <h3>Events</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="{ 'event-active' : isMounted }">
              <td>1</td>
              <td>vdropzone-mounted()</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : isMounted }"></i>
              </td>
            </tr>
            <tr class="" :class="{ 'event-active' : fileAdded }">
              <td>2</td>
              <td>vdropzone-file-added(
                <code>file</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : fileAdded }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : filesAdded }">
              <td>3</td>
              <td>vdropzone-files-added(
                <code>file</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : filesAdded }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : success }">
              <td>4</td>
              <td>vdropzone-success(
                <code>file, response</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : success }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : error }">
              <td>5</td>
              <td>vdropzone-error(
                <code>file</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : error }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : removedFile }">
              <td>6</td>
              <td>vdropzone-removed-file(
                <code>file, error, xhr</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : removedFile }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : sending }">
              <td>7</td>
              <td>vdropzone-sending(
                <code>file, xhr, formData</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : sending }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : successMultiple }">
              <td>8</td>
              <td>vdropzone-success-multiple(
                <code>files, response</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : successMultiple }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : sendingMultiple }">
              <td>9</td>
              <td>vdropzone-sending-multiple(
                <code>files, xhr, formData</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : sendingMultiple }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : queueComplete }">
              <td>10</td>
              <td>vdropzone-queue-complete(
                <code>file, xhr, formData</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : queueComplete }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : progress }">
              <td>11</td>
              <td>vdropzone-total-upload-progress(
                <code>totaluploadprogress, totalBytes, totalBytesSent</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : progress }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : dDrop }">
              <td>12</td>
              <td>vdropzone-drag-drop(
                <code>event</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : dDrop }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : dStarted }">
              <td>13</td>
              <td>vdropzone-drag-start(
                <code>event</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : dStarted }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : dEnded }">
              <td>14</td>
              <td>vdropzone-drag-end(
                <code>event</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : dEnded }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : dEntered }">
              <td>15</td>
              <td>vdropzone-drag-enter(
                <code>event</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : dEntered }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : dOver }">
              <td>16</td>
              <td>vdropzone-drag-over(
                <code>event</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : dOver }"></i>
              </td>
            </tr>
            <tr :class="{ 'event-active' : dLeave }">
              <td>17</td>
              <td>vdropzone-drag-leave(
                <code>event</code>)</td>
              <td>
                <i class="fa fa-circle" :class="{ 'active' : dLeave }"></i>
              </td>
            </tr>
          </tbody>
        </table>
               </div>
                <div class="navigation_overlaping-divider" v-if="index + 1 < getItens.length" :key="item.title"></div>
</template>
            <center>
              <div class="navigation_overlaping-divider"></div>
            </center>   
          <v-list-tile 
          style="float:right;" 
          @click="onLogout()"
          >
              <v-list-tile-avatar>
                <v-icon style="color: #0A1F30;" >exit_to_app</v-icon>
              <v-list-tile-content style="width:150px;">
                <v-list-tile-title>Sair</v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script src="./navigationOverlaping.js">

</script>

<style src="./navigationoverlaping.less" lang="less" scoped>

</style>
