<template>
  <div>
    <Sidebar :active="'spots'" />
    <div class="container">
      <div ref="holder" class="sub-container">
        <div class="center-grid">
          <vs-row class="row-special">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center;">
                <vs-button
                  dark
                  flat
                  icon
                  to="/admin/spots"
                >
                  <i class='bx bx-arrow-back'></i>
                </vs-button>
                <!-- <h4 style="margin-left: 12px;">
                  Torreón Coah
                </h4> -->
              </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="5">
              <div class="zone-settings-container">
                <div class="element">
                  <!-- <vs-input v-model="zone.name" block label-placeholder="Nombre de la zona">
                    <template #message-danger>
                      Por favor introduce un nombre para la zona
                    </template>
                  </vs-input> -->
                  <h4>Torreón Coah</h4>
                  <vs-tooltip right>
                    <vs-button
                      icon
                      dark
                      shadow
                      size="small"
                    >
                      <i class='bx bx-edit' />
                    </vs-button>
                    <template #tooltip>
                      Edit
                    </template>
                  </vs-tooltip>
                </div>
                <div class="element-alt" style="margin-bottom: 1rem;">
                  <vs-select block label-placeholder="Choose a playlist" v-model="playlist">
                    <vs-option label="Vuesax" value="1">
                      Vuesax
                    </vs-option>
                    <vs-option label="Vue" value="2">
                      Vue
                    </vs-option>
                    <vs-option label="Javascript" value="3">
                      Javascript
                    </vs-option>
                    <vs-option disabled label="Sass" value="4">
                      Sass
                    </vs-option>
                    <vs-option label="Typescript" value="5">
                      Typescript
                    </vs-option>
                    <vs-option label="Webpack" value="6">
                      Webpack
                    </vs-option>
                    <vs-option label="Nodejs" value="7">
                      Nodejs
                    </vs-option>
                  </vs-select>
                </div>
                <label style="display: block; margin-bottom: 0.5rem; font-size: 12px;">Playlist frame</label>
                <div style="display: flex; align-items: center; justify-content: center; width: 100%; margin-bottom: 1.5rem;">
                  <vs-card type="2">
                    <template #img>
                      <img src="https://vuesax.com/foto6.png" alt="">
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class='bx bx-trash'></i>
                      </vs-button>
                    </template>
                  </vs-card>
                  <!-- <vs-card type="2">
                    <template #title>
                      <h3>Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img src="https://vuesax.com/foto6.png" alt="">
                    </template>
                    <template #text>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class='bx bx-heart'></i>
                      </vs-button>
                      <vs-button class="btn-chat" shadow primary>
                        <i class='bx bx-chat' ></i>
                        <span class="span">
                          54
                        </span>
                      </vs-button>
                    </template>
                  </vs-card> -->
                </div>
                <div class="element-alt">
                  <vs-button
                    border
                    block
                  >
                    <i class="bx bx-plus" style="margin-right: 4px;" />
                    New playlist
                  </vs-button>
                </div>
              </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="7">
              <div class="playlist-header">
                <div style="display: flex; align-items: center;">
                  <div style="margin-right: auto;">
                    <label style="font-size: 12px">Playlist (18 videos)</label>
                    <h4>Mi lista de reproducción favorita</h4>
                  </div>
                  <div style="display: flex;">
                    <vs-tooltip bottom>
                      <vs-button
                        icon
                        primary
                        shadow
                        size="small"
                      >
                        <i class='bx bx-edit' />
                      </vs-button>
                      <template #tooltip>
                        Edit
                      </template>
                    </vs-tooltip>
                    <vs-tooltip bottom>
                      <vs-button
                        icon
                        danger
                        transparent
                        size="small"
                      >
                        <i class='bx bx-trash' />
                      </vs-button>
                      <template #tooltip>
                        Delete
                      </template>
                    </vs-tooltip>
                  </div>
                </div>
              </div>
              <div class="hello">
                <!-- <ul>
                  <li>
                    <div class="center-grid">
                      <vs-row>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
                          <div style="display: flex; align-items:center; justify-content: center; width: 100%; height: 80px; background-color: #0000ff; color: #ffffff;">
                            Vídeo aquí
                          </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
                          <div style="display: flex; align-items: center; height: 80px; width: 100%; background: #00ff00; color: #ffffff;">
                            Descripción y nombre del vídeo
                          </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
                          <div style="display: flex; align-items: center; width: 100%; height: 80px; background: #ff0000; color: #ffffff;">
                            Opciones
                          </div>
                        </vs-col>
                      </vs-row>
                    </div>
                  </li>
                </ul> -->
                <draggable
                  class="list-group"
                  tag="ul"
                  v-model="list"
                  v-bind="dragOptions"
                  style="padding-inline-start: 0px !important;"
                  @start="isDragging = true"
                  @end="isDragging = false"
                >
                  <transition-group type="transition" name="flip-list">
                    <li
                      class="list-group-item"
                      v-for="(_video, _id) in zone.playlists[selectedPlaylistIndex].videos"
                      :key="_id"
                    >
                      <div class="center-grid">
                      <vs-row style="margin-bottom: 5px;">
                         <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="1">
                          <div style="display: flex; align-items:center; justify-content: center; width: 100%; height: 80px; background-color: #0000ff; color: #ffffff;">
                            <i
                              :class="
                                _video.fixed ? 'bx bx-anchor' : 'bx bx-menu'
                              "
                              @click="_video.fixed = !_video.fixed"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
                          <div style="display: flex; align-items:center; justify-content: center; width: 100%; height: 80px; background-color: #0000ff; color: #ffffff;">
                            Video image
                          </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="5">
                          <div style="display: flex; align-items: center; height: 80px; width: 100%; background: #00ff00; color: #ffffff;">
                            {{ _video.name }}
                          </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
                          <div style="display: flex; align-items: center; width: 100%; height: 80px; background: #ff0000; color: #ffffff;">
                            Options
                          </div>
                        </vs-col>
                      </vs-row>
                    </div>
                    </li>
                  </transition-group>
                </draggable>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: { draggable, Sidebar },
  data: () => ({
    playlist: '1',
    selectedPlaylistIndex: 0,
    zone: {
      name: 'Torreón, Coah',
      playlists: [
        {
          id: 0,
          name: 'Mi primer playlist',
          videos: [
            {
              id: 1,
              name: 'Mi primer vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 1
            },
            {
              id: 2,
              name: 'Mi segundo vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 2
            },
            {
              id: 3,
              name: 'Mi tercer vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 3
            },
            {
              id: 4,
              name: 'Mi cuarto vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 4
            },
            {
              id: 5,
              name: 'Mi quinto vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 5
            },
            {
              id: 6,
              name: 'Mi sexto vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 6
            },
            {
              id: 7,
              name: 'Mi septimo vídeo.mp4',
              duration: 3000,
              thumbnail: '',
              source: '',
              order: 7
            }
          ]
        }
      ]
    }
  }),
  mounted () {
    const loading = this.$vs.loading({
      target: this.$refs.holder,
      color: 'primary'
    })
    setTimeout(() => {
      loading.close()
    }, 600)
  },
  methods: {
    sort () {
      this.zone.playlists[this.selectedPlaylistIndex].videos = this.zone.playlists[this.selectedPlaylistIndex].videos.sort((a, b) => a.order - b.order)
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>
<style scoped>
.container {
  background-color: #f4f7f8;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.sub-container {
  padding: 32px 20px 40px 70px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.vs-col {
  padding: 0 1%;
}
.row-special {
  margin-bottom: 1rem;
}
.element {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}
.element-alt {
  margin-bottom: 1rem;
}
.zone-settings-container {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem 2rem 2rem 2rem;
  -webkit-box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
  box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
}
.playlist-header {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem 2rem 2rem 2rem;
  -webkit-box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
  box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding-inline-start: unset !important;
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
  padding-inline-start: 0px !important;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.hello {
  max-height: calc(100vh - 232px);
  overflow-y: scroll;
}
.hello .sortable-drag {
  opacity: 0;
}
</style>
