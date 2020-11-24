<template>
  <div>
    <div class="hidden">
      <vs-sidebar
        v-model="active"
        absolute
        :open.sync="activeSidebar"
      >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <!-- <vs-sidebar-item id="home">
          <template #icon>
            <i class="bx bxs-home-smile" />
          </template>
          Regresar al inicio
        </vs-sidebar-item> -->
          <div style="display: flex; margin-top: 1.6rem; padding-left: 1rem;">
            <div class="center">
              <h4>{{ currentZone.name }}</h4>
            </div>
          </div>
          <div style="display: flex; margin-top: 1rem;">
              <template>
                <div class="center">
                  <vs-table v-model="selectedPlaylist" style="min-width: 260px;">
                    <template #thead>
                      <vs-tr>
                        <vs-th>
                          Listas de reproducción
                        </vs-th>
                      </vs-tr>
                    </template>
                    <template #tbody>
                      <vs-tr
                        :key="i"
                        v-for="(tr, i) in currentZone.playlists"
                        :data="tr"
                        :is-selected="selectedPlaylist == tr"
                      >
                        <vs-td :style="selectedPlaylist == tr ? 'display: flex; align-items: center; font-weight: 700;' : 'display: flex; align-items: center;'">
                          <i v-if="selectedPlaylist == tr" class="bx bx-play-circle" style="margin-top: 2px; margin-right: 5px; font-size: 1.5rem;" />
                          {{ tr.name }}
                        </vs-td>
                        <!-- <template #expand>
                          <div class="con-content">
                            <div>
                              <vs-avatar>
                                <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                              </vs-avatar>
                              <p>
                                {{ item.name }}
                              </p>
                            </div>
                            <div>
                              <vs-button flat icon>
                                <i class='bx bx-lock-open-alt' ></i>
                              </vs-button>
                              <vs-button flat icon>
                                Send Email
                              </vs-button>
                              <vs-button border danger>
                                Remove User
                              </vs-button>
                            </div>
                          </div>
                        </template> -->
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </template>
          </div>
        <template #footer>
          <NuxtLink to="/">
            <vs-sidebar-item>
              <template #icon>
                <i class="bx bxs-home-smile" />
              </template>
              Regresar al inicio
            </vs-sidebar-item>
          </NuxtLink>
          <vs-row justify="space-between">
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="" style="background-color: #ffffff;">
            </vs-avatar>
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="" style="background-color: #ffffff;">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
    <div class="container">
      <div class="center grid sub-container">
        <div class="frame-container">
          <div class="video-container">
            <div ref="videoContainer" class="embed-responsive embed-responsive-16by9">
              <!-- <video src="https://s3-us-west-2.amazonaws.com/iungo.files/landing/microsites/DPE-presentacion.mp4" style="border-radius: 0 0 20px;">
                Tu navegador no implementa el elemento <code>video</code>.
              </video> -->
              <VideoPlayer v-if="ready" :options="videoOptions" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-container">
        <vs-button
          dark
          shadow
          circle
          size="xl"
          @click="activeSidebar = !activeSidebar"
        >
          <i class="bx bx-menu" />
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue'
export default {
  components: { VideoPlayer },
  data: () => ({
    active: '',
    activeSidebar: false,
    loading: true,
    selectedPlaylist: null,
    ready: true,
    videoOptions: {
      autoplay: true,
      controls: true,
      samplePlaylist: [
        {
          sources: [
            {
              src: 'https://drive.google.com/uc?export=download&id=1nUp1y5Vuh-hCoIXz6LRUMjNef4hITdnR',
              type: 'video/mp4'
            }
          ]
        },
        {
          sources: [
            {
              src: 'https://drive.google.com/uc?export=download&id=1Ow4CY58HtlKBK3ySKaY3julAStNxHuLJ',
              type: 'video/mp4'
            }
          ]
        },
        {
          sources: [
            {
              src: 'https://drive.google.com/uc?export=download&id=1nRY2qPHyMfMenO4ZKozjXlwjd3Nbh8MW',
              type: 'video/mp4'
            }
          ]
        }
      ]
    },
    currentZone: {}
  }),
  // computed: {
  //   zone () {
  //     const zone = this.$store.getters.getZone(this.$route.params.id)
  //     this.currentZone = zone
  //     this.videoOptions.samplePlaylist = zone.playlists[0]
  //     return zone
  //   }
  // },
  beforeMount () {
    this.currentZone = this.$store.getters.getZone(this.$route.params.id)
    this.videoOptions.samplePlaylist = this.currentZone.playlists[0].videos
    this.selectedPlaylist = this.currentZone.playlists[0]
  },
  mounted () {
    console.log('CONTEXT: ', this.$route.params)
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  watch: {
    selectedPlaylist () {
      if (this.selectedPlaylist && this.selectedPlaylist.id) {
        const playlistId = this.selectedPlaylist.id
        const playlistIndex = this.currentZone.playlists.findIndex(item => Number(item.id) === Number(playlistId))
        if (playlistIndex >= 0) {
          this.ready = false
          this.videoOptions.samplePlaylist = this.currentZone.playlists[playlistIndex].videos

          const loading = this.$vs.loading({
            target: this.$refs.videoContainer,
            background: '#000000',
            color: '#ffffff'
          })
          setTimeout(() => {
            this.ready = true
            loading.close()
          }, 2000)
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  /*text-align: center;*/
  overflow: hidden;
}
.sub-container {
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.frame-container {
  background-image: url('~assets/images/bg.png');
  background-size: cover;
  /* background-color: #ffcc00; */
  width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.video-container {
  background-color: transparent;
  border: 0;
  width: 66.67%;
  height: 66.67%;
  max-width: 66.67%;
  max-height: 66.67%;
}
.embed-responsive {
  background-color: #000000;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: 0 0 20px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  pointer-events: none;
}
.embed-responsive-16by9::before {
  padding-top: 56.25%;
}
.embed-responsive::before {
  /*display: block;*/
  content: "";
}
.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
video, video:hover, video:focus, video:active {
  outline: 0;
}
.button-container {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 99;
  opacity: 0.1;
}
.button-container:hover {
  opacity: 1;
}
.button-container .bx-menu {
  font-size: 1.8rem !important;
}
.vs-sidebar__footer a, .vs-sidebar__footer a:hover, .vs-sidebar__footer a:visited, .vs-sidebar__footer a:active {
  text-decoration: none;
  color: inherit;
}
.vs-sidebar__item__icon a, .vs-sidebar__item__icon a:hover, .vs-sidebar__item__icon a:visited, .vs-sidebar__item__icon a:active {
  text-decoration: none;
  color: inherit;
}
.vs-sidebar-content.absolute {
  height: 50%;
}
.vs-sidebar-content {
  top: unset;
  bottom: 0px !important;
}
.vs-table table {
  min-width: 260px !important;
}
</style>
