<template>
  <div class="upload">
    <template>
        <vue-dropzone 
            v-bind="{id: (dOver || dEntered)?'dropzoneOver':'dropzone'}"
            @vdropzone-file-added="vfileAdded"
            @vdropzone-success="vsuccess" 
            @vdropzone-error="verror" 
            @vdropzone-removed-file="vremoved" 
            @vdropzone-sending="vsending" 
            @vdropzone-success-multiple="vsuccessMuliple" 
            @vdropzone-sending-multiple="vsendingMuliple" 
            @vdropzone-queue-complete="vqueueComplete" 
            @vdropzone-total-upload-progress="vprogress" 
            @vdropzone-mounted="vmounted" 
            @vdropzone-drop="vddrop" 
            @vdropzone-drag-start="vdstart" 
            @vdropzone-drag-end="vdend" 
            @vdropzone-drag-enter="vdenter" 
            @vdropzone-drag-over="vdover" 
            @vdropzone-drag-leave="vdleave" 
            :options="dropzoneOptions"
            >
        </vue-dropzone>
        <!-- <h3>Events</h3>
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
          </table> -->
</template>
   </div>
</template>

<script src="./upload.js"></script>
<style src="./upload.less" lang="less"></style>
<style src="./upload.css" lang="css"></style>
