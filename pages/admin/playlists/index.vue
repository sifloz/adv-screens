<template>
  <div>
    <Sidebar :active="'playlists'" />
    <div class="container">
      <div ref="holder" class="sub-container">
        <div class="center-grid">
          <vs-row class="row-special">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
                <h4>
                  Playlists <small>(14 playlists)</small>
                </h4>
                <div style="display: flex; align-items: center; margin-top: 0.5rem;">
                  <vs-select v-model="zone" placeholder="Zona" class="select-video">
                    <vs-option label="All spots" value="all">
                      All spots
                    </vs-option>
                  </vs-select>
                  <vs-select v-model="period" placeholder="Filter" class="select-video">
                    <vs-option label="Most recent" value="recent">
                      Most recent
                    </vs-option>
                    <vs-option label="Older" value="older">
                      Older
                    </vs-option>
                    <vs-option label="A - Z" value="ascendant">
                      A - Z
                    </vs-option>
                    <vs-option label="Z - A" value="descendant">
                      Z - A
                    </vs-option>
                  </vs-select>
                  <vs-select v-model="display" placeholder="Status" class="select-video">
                    <vs-option label="All playlists" value="all">
                      All playlists
                    </vs-option>
                    <vs-option label="Published" value="published">
                      Published
                    </vs-option>
                    <vs-option label="Not published" value="unpublished">
                      Not published
                    </vs-option>
                  </vs-select>
                  <vs-input placeholder="Search playlists" icon-after class="search-input">
                    <template #icon>
                      <i class='bx bx-search'></i>
                    </template>
                  </vs-input>
                </div>
              </div>
            </vs-col>
          </vs-row>
          <vs-row class="select-mobile-row">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
               <vs-input block placeholder="Search playlists" class="search-input-mobile" />
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-select v-model="zone" block placeholder="Zona" class="select-video-mobile">
                <vs-option label="All spots" value="all">
                  All spots
                </vs-option>
              </vs-select>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-select v-model="period" block placeholder="Filter" class="select-video-mobile">
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
              <vs-select v-model="display" placeholder="Status" class="select-video">
                <vs-option label="All playlists" value="all">
                  All playlists
                </vs-option>
                <vs-option label="Published" value="published">
                  Published
                </vs-option>
                <vs-option label="Not published" value="unpublished">
                  Not published
                </vs-option>
              </vs-select>
            </vs-col>
          </vs-row>
        </div>
        <div>
          <VueSlickCarousel ref="videosCarousel" v-bind="settings">
            <div class="video-container">
              <!-- <div  class="vs-card-content type-4">
                <div class="vs-card">
                  <div class="vs-card__img">
                    <div class="upload-text-container">
                      <i class="bx bx-plus" />
                      <p>
                        Create a new playlist
                      </p>
                    </div>
                    <img src="~/assets/images/square.png" alt="">
                  </div>
                  <div class="vs-card__text">
                    <p />
                    <div style="display: block; width: 100%;" />
                  </div>
                </div>
              </div> -->

              <div class="vs-card-content type-3">
                <div class="vs-card card-upload" style="max-height: 200px !important;">
                  <div class="vs-card__img" style="width: 100%; max-height: 200px !important;">
                    <div class="upload-text-container">
                      <i class="bx bx-plus" />
                      <p>
                        Create a new playlist
                      </p>
                    </div>
                    <img src="~/assets/images/square.png" alt="">
                  </div>
                  <div class="vs-card__text" />
                </div>
              </div>

            </div>
            <div
              v-for="(_video, _id) in videos"
              :key="_id"
              class="video-container"
            >
              <!-- <div class="vs-card-content type-4">
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
              </div> -->
              <div class="vs-card-content type-3">
                <div class="vs-card card-playlist">
                  <div class="vs-card__img" style="width: 100%;">
                    <img class="img-special" src="https://vuesax.com/foto1.png" alt="">
                    <div class="vs-card__interactions">
                      <!-- <button class="vs-button vs-button--null vs-button--size-null vs-button--icon vs-button--danger vs-button--default">
                        <div class="vs-button__content">
                          <i class="bx bx-heart"></i>
                        </div>
                      </button> -->
                      <button class="vs-button btn-chat vs-button--null vs-button--size-null vs-button--primary vs-button--shadow">
                        <div class="vs-button__content">
                          <i class="bx bx-movie-play"></i>
                          <span class="span">
                            13
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="vs-card__text">
                    <div class="vs-card__title">
                      <h3>Live a life of madness</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Sidebar from '~/components/Sidebar.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { Sidebar, VueSlickCarousel },
  data: () => ({
    period: 'recent',
    zone: 'all',
    display: 'all',
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 6,
      adaptiveHeight: false,
      infinite: false,
      speed: 400,
      rows: 3,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 3
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
      }
    ]
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
    showNext (list) {
      this.$refs[list].next()
    },
    showPrev (list) {
      this.$refs[list].prev()
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
.video-container {
  /*height: 35vh;*/
  padding: 0;
  margin-bottom: 1rem;
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
.img-special {
  min-width: 128px;
  max-width: 128px;
}
.card-playlist {
  max-height: 160px !important;
}
.card-upload {
  max-height: 160px !important;
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
