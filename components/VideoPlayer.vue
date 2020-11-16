<template>
  <div>
    <video ref="videoPlayer" class="video-js" />
  </div>
</template>

<script>
import videojsPlaylist from 'videojs-playlist'
import videojs from 'video.js'
videojs.registerPlugin('playlist', videojsPlaylist)
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer)
    this.player.muted(true)
    this.player.autoplay(true)
    this.player.controls(true)
    this.player.playlist(this.options.samplePlaylist)
    this.player.playlist.repeat(true)
    this.player.playlist.autoadvance(0)
  },
  methods: {
    next () {
      this.player.playlist.next()
    },
    prev () {
      this.player.playlist.previous()
    }
  }
}
</script>

<style>
video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.vjs-control-bar {
  display: none;
  visibility: hidden;
}
.vjs-error-display {
  display: none;
  visibility: hidden;
}
.vjs-modal-dialog {
  display: none;
  visibility: hidden;
}
.vjs-big-play-button {
  /* display: none;
  visibility: hidden; */
  z-index: 101;
}
.vjs-loading-spinner {
  display: none;
  visibility: hidden;
}
.vjs-text-track-display {
  display: none;
  visibility: hidden;
}
.vjs-poster {
  display: none;
  visibility: hidden;
}
</style>
