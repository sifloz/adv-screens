<template>
  <div>
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
    <Sidebar :active="'spots'" />
    <div class="container">
      <div ref="holder" class="sub-container">
        <div class="center-grid">
          <vs-row class="row-special">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
                <h4>
                  Spots <small>(2 spots)</small>
                </h4>
                <div style="display: flex; align-items: center;">
                  <vs-select v-model="period" placeholder="Filtrar" class="select-video">
                    <vs-option label="A - Z" value="ascendant">
                      A - Z
                    </vs-option>
                    <vs-option disabled label="Z - A" value="descendant">
                      Z - A
                    </vs-option>
                  </vs-select>
                  <vs-input placeholder="Search spots" class="search-input" />
                  <div class="center con-pagination">
                    <!-- <vs-pagination v-model="page" only-arrows :length="10" /> -->
                    <div class="vs-pagination-content vs-component--primary" style="--vs-color:;">
                      <button
                        class="vs-pagination__arrow prev"
                        :disabled="true"
                        @click="showPrev('zonesCarousel')"
                      >
                        <i class="vs-icon-arrow" />
                      </button>
                      <button
                        class="vs-pagination__arrow next"
                        :disabled="true"
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
          <vs-row class="select-mobile-row">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
               <vs-input block placeholder="Search spots" class="search-input-mobile" />
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-select v-model="period" block placeholder="Filtrar" class="select-video-mobile">
                <vs-option label="Most recent" value="recent">
                  Most recent
                </vs-option>
                <vs-option label="Older" value="older">
                  Older
                </vs-option>
                <vs-option label="A - Z" value="ascendant">
                  A - Z
                </vs-option>
                <vs-option disabled label="Z - A" value="descendant">
                  Z - A
                </vs-option>
              </vs-select>
            </vs-col>
          </vs-row>
        </div>
        <div class="center grid">
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="windowWidthSize">
              <div
                class="zone-container"
              >
                <vs-button
                  block
                  dark
                  shadow
                  size="xl"
                  style="min-height: 100px;"
                  class="add-zone"
                >
                  <i class="bx bx-plus" /> New spot
                </vs-button>
              </div>
            </vs-col>
            <vs-col
              v-for="_zone in zones"
              :key="_zone.id"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              :w="windowWidthSize"
            >
              <div class="zone-container">
                <vs-button
                  block
                  gradient
                  size="xl"
                  style="min-height: 100px;"
                  @click="zone.dialog=!zone.dialog"
                >
                  {{ _zone.name }}
                </vs-button>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: { Sidebar },
  data: () => ({
    period: 'ascendant',
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 6,
      adaptiveHeight: false,
      infinite: false,
      speed: 400,
      rows: 2,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            variableWidth: false
          }
        }
      ]
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
    zone: {
      name: 'Torreón Coah',
      deleteAction: false,
      deleting: false,
      saving: false,
      dialog: false
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
  methods: {
    showNext (list) {
      this.$refs[list].next()
    },
    showPrev (list) {
      this.$refs[list].prev()
    },
    handleResize () {
      this.windowWidth = window.innerWidth
    },
    saveZoneHandler () {
      this.zone.saving = true
      setTimeout(() => {
        this.zone.saving = false
        this.$vs.notification({
          icon: "<i class='bx bx-check-circle'></i>",
          border: 'success',
          duration: 4000,
          title: 'Save changes',
          text: 'Spot information was updated'
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
          title: 'Delete spot',
          text: 'Spot was deleted'
        })
      }, 400)
    }
  },
  computed: {
    windowWidthSize () {
      let w = 3
      if (this.windowWidth >= 1367) {
        w = 3
      } else if (this.windowWidth >= 922 && this.windowWidth < 1367) {
        w = 3
      } else if (this.windowWidth >= 768 && this.windowWidth < 922) {
        w = 4
      } else if (this.windowWidth >= 576 && this.windowWidth < 768) {
        w = 6
      } else {
        w = 12
      }
      return w
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
.zone-container {
  /*padding: 0 1rem 0 1% !important;*/
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

.slick-dots, .slick-dots-custom {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
}
.slick-dots, .slick-dots-custom button {
  opacity: 0 !important;
}
.slick-dots li button:before {
  font-size: 12px;
}
.con-footer {
  display: flex;
  align-items: center;
  widows: 100%;
}
@media (min-width: 1367px) {
  .video-container {
    height: 28vh;
  }
}
.select-video {
  margin-right: 8px;
}
.select-video-mobile {
  visibility: hidden;
}
.select-mobile-row {
  display: none;
  margin-bottom: 1rem;
  visibility: hidden;
}
.row-special {
  margin-bottom: 1rem;
}
.search-input {
  margin-right: 8px;
}
@media (max-width: 575.98px) {
  .select-video {
    visibility: hidden;
    display: none;
  }
  .select-mobile-row {
    display: flex;
    visibility: visible;
  }
  .select-video-mobile {
    visibility: visible;
  }
  .row-special {
    margin-bottom: 0.5rem;
  }
  .search-input {
    visibility: hidden;
    display: none;
  }
}
</style>
