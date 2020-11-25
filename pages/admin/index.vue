<template>
  <div>
    <vs-dialog v-model="video.dialog" blur prevent-close>
      <template #header>
        <h4 class="not-margin">
          Nombre del vídeo.mp4
        </h4>
      </template>

      <div class="center grid">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <div class="video-container">
              <div class="embed-responsive embed-responsive-16by9">
                <video shadow muted autoplay loop height="100%">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                  Tu navegador de internet no soporta la etiqueta vídeo.
                </video>
              </div>
            </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <div class="video-info-container">
              <div class="content-inputs">
                <vs-input
                  v-model="video.name"
                  block
                  label-placeholder="Nombre del vídeo"
                />
              </div>
              <vs-select
                v-model="video.zones"
                label="Visibilidad en zonas"
                block
                filter
                multiple
                placeholder="Buscar"
              >
                <vs-option label="Torreón, Coah." value="1">
                  Torreón, Coah.
                </vs-option>
                <vs-option label="Cd Lerdo, Dgo." value="2">
                  Cd Lerdo, Dgo.
                </vs-option>
                <vs-option label="Gómez Palacio, Dgo." value="3">
                  Gómez Palacio, Dgo.
                </vs-option>
                <vs-option label="Monterrey, NL." value="4">
                  Monterrey, NL.
                </vs-option>
              </vs-select>
            </div>
          </vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div style="display: flex; width: 100%; align-items: center;">
          <vs-button
            icon
            danger
            border
            style="min-width: 41px;"
            @click="video.deleteAction=true"
          >
            <i class="bx bx-trash" />
          </vs-button>
          <vs-button
            block
            :loading="video.saving"
            @click="saveVideoHandler"
          >
            Guardar cambios
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="video.deleteAction" width="330px">
      <template #header>
        <h4 class="not-margin">
          Eliminar vídeo
        </h4>
      </template>
      <p style="text-align: center;">
        ¿Estás seguro de que quieres eliminar este vídeo?<br>Una vez eliminado no podrás recuperarlo<br><br>
      </p>
      <template #footer>
        <div class="center grid">
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                block
                dark
                transparent
                @click="video.deleteAction = false"
              >
                Cancelar
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                block
                danger
                :loading="video.deleting"
                @click="deleteVideoHandler"
              >
                Eliminar
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog width="300px" not-center v-model="zone.dialog">
      <template #header>
        <h4 class="not-margin" style="margin-bottom: 1rem;">
          Información de la zona
        </h4>
      </template>
      <div class="con-content" style="margin-bottom: 1rem;">
        <vs-input v-model="zone.name" block label-placeholder="Nombre de la zona"></vs-input>
      </div>
      <template #footer>
        <div class="con-footer">
          <div style="margin-right: auto;">
            <vs-button
              icon
              danger
              border
              style="min-width: 41px;"
              @click="zone.deleteAction=true"
            >
              <i class="bx bx-trash" />
            </vs-button>
          </div>
          <div style="display: flex; align-items: center;">
          <vs-button @click="zone.dialog=false" dark transparent>
            Cancelar
          </vs-button>
          <vs-button
            :loading="zone.saving"
            @click="saveZoneHandler"
          >
            Guardar
          </vs-button>
          </div>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="zone.deleteAction" width="330px">
      <template #header>
        <h4 class="not-margin">
          Eliminar zona
        </h4>
      </template>
      <p style="text-align: center;">
        ¿Estás seguro de que quieres eliminar esta zona?<br>Una vez eliminada, ya no tendrás acceso a ella ni podrás recuperarla<br><br>
      </p>
      <template #footer>
        <div class="center grid">
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                block
                dark
                transparent
                @click="zone.deleteAction = false"
              >
                Cancelar
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                block
                danger
                :loading="zone.deleting"
                @click="deleteZoneHandler"
              >
                Eliminar
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
      </template>
    </vs-dialog>
    <Sidebar :active="'home'" />
    <div class="container">
      <div ref="holder" class="sub-container">
        <div class="center-grid">
          <vs-row style="margin-bottom: 1rem;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
                <h4>
                  Vídeos recientes
                </h4>
                <div style="display: flex; align-items: center;">
                  <vs-button
                    shadow
                    style="margin-right: 8px;"
                    to="/admin/videos"
                  >
                    Ver todos
                  </vs-button>
                  <div class="center con-pagination">
                    <!-- <vs-pagination v-model="page" only-arrows :length="10" /> -->
                    <div class="vs-pagination-content vs-component--primary" style="--vs-color:;">
                      <button
                        class="vs-pagination__arrow prev"
                        @click="showPrev('videosCarousel')"
                      >
                        <i class="vs-icon-arrow" />
                      </button>
                      <button
                        class="vs-pagination__arrow next"
                        @click="showNext('videosCarousel')"
                      >
                        <i class="vs-icon-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1366 ? '3' : '2'">
              <!-- <vs-card type="4" @click="video.dialog=!video.dialog">
                <template #title>
                  <h3>Pot with a plant</h3>
                </template>
                <template #img>
                  <img src="https://vuesax.com/foto2.jpg" alt="">
                </template>
                <template #text>
                  <p />
                  <div style="display:block; width: 100%" />
                </template>
                <template #interactions>
                  <vs-button class="btn-chat" shadow primary>
                    <span class="span">
                      0:30
                    </span>
                  </vs-button>
                </template>
              </vs-card> -->
              <!-- <vs-card type="4" @click="video.dialog=!video.dialog">
                <template #img>
                  <div class="upload-text-container">
                    <i class="bx bx-plus" />
                    <p>
                      Subir vídeo(s)
                    </p>
                  </div>
                  <img src="~/assets/images/square.png" alt="">
                </template>
                <template #text>
                  <p />
                  <div style="display:block; width: 100%" />
                </template>
              </vs-card> -->
            </vs-col>
              <!-- <vs-col
                v-for="_video in videos"
                :key="_video.id"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1366 ? '3' : '2'"
              >
                <vs-card type="4" @click="video.dialog=!video.dialog">
                  <template #title>
                    <h3 class="video-title">{{ _video.name }}</h3>
                  </template>
                  <template #img>
                    <img :src="_video.thumbnail" alt="">
                  </template>
                  <template #text>
                    <p />
                  </template>
                  <template #interactions>
                    <vs-button class="btn-chat" shadow primary>
                      <span class="span">
                        {{ _video.duration }}
                      </span>
                    </vs-button>
                  </template>
                </vs-card>
              </vs-col> -->
          </vs-row>
        </div>
        <div style="margin-bottom: 2rem;">
            <VueSlickCarousel ref="videosCarousel" v-bind="settings">
              <div class="video-container">
                <div  class="vs-card-content type-4">
                      <div class="vs-card">
                        <div class="vs-card__img">
                          <div class="upload-text-container">
                            <i class="bx bx-plus" />
                            <p>
                              Subir vídeo(s)
                            </p>
                          </div>
                        <img src="~/assets/images/square.png" alt="">
                        </div>
                        <div class="vs-card__text">
                          <p />
                          <div style="display: block; width: 100%;" />
                        </div>
                      </div>
                </div>
              </div>
              <div
                v-for="(_video, _id) in videos"
                :key="_id"
                class="video-container"
              >
                <div class="vs-card-content type-4" @click="video.dialog=!video.dialog">
                  <div class="vs-card">
                    <div class="vs-card__img">
                      <img :src="_video.thumbnail" alt="">
                      <div class="vs-card__interactions">
                        <button class="vs-button btn-chat vs-button--null vs-button--size-null vs-button--primary vs-button--shadow">
                          <div class="vs-button__content">
                            <span class="span">
                              {{ _video.duration }}
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  <div class="vs-card__text">
                    <div class="vs-card__title">
                      <h3 class="video-title">{{ _video.name }}</h3>
                    </div>
                    <p />
                  </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
        </div>
        <div class="center-grid">
          <vs-row style="margin-bottom: 1rem;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
                <h4>
                  Zonas
                </h4>
                <div style="display: flex; align-items: center;">
                  <vs-button
                    shadow
                    style="margin-right: 8px;"
                    to="/admin/zones"
                  >
                    Ver todas
                  </vs-button>
                  <div class="center con-pagination">
                    <!-- <vs-pagination v-model="zonePage" only-arrows :length="10" /> -->
                    <div class="vs-pagination-content vs-component--primary" style="--vs-color:;">
                      <button
                        class="vs-pagination__arrow prev"
                        @click="showPrev('zonesCarousel')"
                      >
                        <i class="vs-icon-arrow" />
                      </button>
                      <button
                        class="vs-pagination__arrow next"
                        @click="showNext('zonesCarousel')"
                      >
                        <i class="vs-icon-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </vs-col>
          </vs-row>
          <!-- <vs-row>
            <vs-col
              v-for="_zone in zones"
              :key="_zone.id"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1200 ? '4' : '3'"
            >
              <vs-button
                block
                gradient
                size="xl"
                style="padding: 35px; min-height: 142px;"
                @click="zone.dialog=!zone.dialog"
              >
                {{ _zone.name }}
              </vs-button>
            </vs-col>
          </vs-row> -->
        </div>
          <VueSlickCarousel ref="zonesCarousel" v-bind="settings">
            <div
              class="zone-container"
            >
              <vs-button
                block
                dark
                shadow
                size="xl"
                style="padding: 35px; min-height: 142px;"
                class="add-zone"
                @click="zone.dialog=!zone.dialog"
              >
                <i class="bx bx-plus" /> Nueva zona
              </vs-button>
            </div>
              <div
                v-for="_zone in zones"
                :key="_zone.id"
                class="zone-container"
              >
                  <vs-button
                    block
                    gradient
                    size="xl"
                    style="padding: 35px; min-height: 142px;"
                    :to="`admin/zones/${_zone.id}`"
                  >
                    {{ _zone.name }}
                  </vs-button>
              </div>
          </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Sidebar from '~/components/Sidebar.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: { Sidebar, VueSlickCarousel },
  data: () => ({
    active: 'home',
    created: false,
    page: 1,
    zonePage: 1,
    settings: {
      arrows: false,
      slidesToShow: 6,
      adaptiveHeight: false,
      infinite: false,
      speed: 400,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
          }
        }
      ]
    },
    video: {
      id: 1,
      name: 'Mi video de ejemplo',
      zones: ['1', '2'],
      deleteAction: false,
      deleting: false,
      saving: false,
      dialog: false
    },
    videos: [
      {
        id: 1,
        name: 'Roosevelt-Feels-Right',
        duration: '30000',
        type: 'video/mp4',
        thumbnail: 'https://vuesax.com/foto2.jpg',
        source: 'https://drive.google.com/uc?export=download&id=1nUp1y5Vuh-hCoIXz6LRUMjNef4hITdnR'
      },
      {
        id: 2,
        name: 'Marina-IDont-Wanna-Live-In-A-Mens Worl',
        duration: '45000',
        type: 'video/mp4',
        thumbnail: 'https://vuesax.com/foto13.png',
        source: 'https://drive.google.com/uc?export=download&id=1Ow4CY58HtlKBK3ySKaY3julAStNxHuLJ'
      },
      {
        id: 3,
        name: 'LImperatrice-Mathara',
        duration: '38000',
        type: 'video/mp4',
        thumbnail: 'https://vuesax.com/foto1.png',
        source: 'https://drive.google.com/uc?export=download&id=1nRY2qPHyMfMenO4ZKozjXlwjd3Nbh8MW'
      },
      {
        id: 4,
        name: 'Miami-Horror-Sometimes',
        duration: '52000',
        type: 'video/mp4',
        thumbnail: 'https://vuesax.com/foto3.png',
        source: 'https://drive.google.com/uc?export=download&id=1nUp1y5Vuh-hCoIXz6LRUMjNef4hITdnR'
      },
      {
        id: 5,
        name: 'SHes a thease- WHY',
        duration: '19000',
        type: 'video/mp4',
        thumbnail: 'https://vuesax.com/foto2.jpg',
        source: 'https://drive.google.com/uc?export=download&id=1Ow4CY58HtlKBK3ySKaY3julAStNxHuLJ'
      },
      {
        id: 6,
        name: 'Metronomy-La-dolce vita',
        duration: '45000',
        type: 'video/mp4',
        thumbnail: 'https://vuesax.com/foto13.png',
        source: 'https://drive.google.com/uc?export=download&id=1nRY2qPHyMfMenO4ZKozjXlwjd3Nbh8MW'
      }
    ],
    zone: {
      name: 'Torreón Coah',
      deleteAction: false,
      deleting: false,
      saving: false,
      dialog: false
    },
    zones: [
      {
        id: 1,
        name: 'Torreón, Coah.'
      },
      {
        id: 2,
        name: 'Cd Lerdo, Dgo.'
      },
      {
        id: 3,
        name: 'Gómez Palacio, Dgo.'
      },
      {
        id: 4,
        name: 'Monterrey, NL.'
      },
      {
        id: 5,
        name: 'Saltillo, Coah.'
      }
    ],
    window: {
      width: 0,
      height: 0
    },
    windowWidth: 0
  }),
  mounted () {
    const loading = this.$vs.loading({
      target: this.$refs.holder,
      color: 'primary'
    })
    setTimeout(() => {
      loading.close()
    }, 600)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeMount () {
    this.created = true
  },
  // created () {
  //   window.addEventListener('resize', this.handleResize)
  //   this.handleResize()
  // },
  // destroyed () {
  //   window.removeEventListener('resize', this.handleResize)
  // },
  methods: {
    showNext (list) {
      this.$refs[list].next()
    },
    showPrev (list) {
      this.$refs[list].prev()
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    saveVideoHandler () {
      this.video.saving = true
      setTimeout(() => {
        this.video.saving = false
        this.$vs.notification({
          icon: "<i class='bx bx-check-circle'></i>",
          border: 'success',
          duration: 4000,
          title: 'Guardar cambios',
          text: 'Se actualizó la información del vídeo'
        })
      }, 400)
    },
    deleteVideoHandler () {
      this.video.deleting = true
      setTimeout(() => {
        this.video.deleting = false
        this.video.deleteAction = false
        this.video.dialog = false
        this.$vs.notification({
          icon: "<i class='bx bx-trash'></i>",
          border: 'success',
          duration: 4000,
          title: 'Eliminar vídeo',
          text: 'El vídeo ha sido eliminado'
        })
      }, 400)
    },
    saveZoneHandler () {
      this.zone.saving = true
      setTimeout(() => {
        this.zone.saving = false
        this.$vs.notification({
          icon: "<i class='bx bx-check-circle'></i>",
          border: 'success',
          duration: 4000,
          title: 'Guardar cambios',
          text: 'Se actualizó la información de la zona'
        })
      }, 400)
    },
    deleteZoneHandler () {
      this.zone.deleting = true
      setTimeout(() => {
        this.zone.deleting = false
        this.zone.deleteAction = false
        this.zone.dialog = false
        this.$vs.notification({
          icon: "<i class='bx bx-trash'></i>",
          border: 'success',
          duration: 4000,
          title: 'Eliminar zona',
          text: 'La zona ha sido eliminado'
        })
      }, 400)
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
  padding: 40px 20px 40px 70px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.vs-col {
  padding: 0 1%;
}
a, a:hover, a:visited, a:active, a:focus {
  color: #000000;
  text-decoration: none;
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: 14px;
}
.embed-responsive-16by9::before {
  padding-top: 56.25%;
}
.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  background-color: #000000;
}
.video-container {
  height: 35vh;
  padding: 0;
  margin-bottom: 1rem;
}
.video-info-container {
  padding-top: 1.2rem;
}
.content-inputs {
  margin-bottom: 2rem;
}
.con-footer {
  display: flex;
  align-items: center;
  widows: 100%;
}
.upload-text-container {
  background-color: #ffffff;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  z-index: 1;
}
.bx-plus {
  font-size: 4rem;
  margin-bottom: 1rem;
}
.upload-text-container:hover .bx-plus {
  -webkit-animation: tada 1.5s ease;
  animation: tada 1.5s ease;
}
.video-title {
  display: inline-block;
  width: 180px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.vs-card:hover .video-title {
  white-space: normal;
  text-overflow: unset;
  overflow: unset !important;
}
.video-container {
  padding: 0.3rem 1rem 0 3% !important;
  outline: none;
}
.zone-container {
  padding: 0 1rem 0 1% !important;
  outline: none;
}
.zone-container button {
  height: 100px;
}
.add-zone .bx-plus {
  font-size: 2rem;
  margin-bottom: 0;
  margin-right: 0.2rem;
  margin-left: -10px;
}
.add-zone:hover .bx-plus {
  -webkit-animation: tada 1.5s ease;
  animation: tada 1.5s ease;
}
</style>
