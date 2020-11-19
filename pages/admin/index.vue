<template>
  <div>
    <vs-dialog v-model="dialog" blur prevent-close>
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
                <video shadow muted autoplay height="100%">
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
                style="margin-bottom: 1.2rem;"
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
              >
                Guardar cambios
              </vs-button>
            </div>
          </vs-col>
        </vs-row>
      </div>

      <!-- <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            Sign In
          </vs-button>

          <div class="new">
            New Here? <a href="#">Create New Account</a>
          </div>
        </div>
      </template> -->
    </vs-dialog>
    <vs-dialog v-model="video.deleteAction" width="330px">
      <template #header>
        <h4 class="not-margin">
          Eliminar vídeo
        </h4>
      </template>
      <p style="text-align: center;">
        ¿Estás seguro de que quieres eliminar este vídeo?<br/>Una vez eliminado no podrás recuperarlo<br/><br/>
      </p>
      <template #footer>
        <div class="center grid">
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                block
                dark
                transparent
              >
                Cancelar
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                block
                danger
              >
                Eliminar
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
      </template>
    </vs-dialog>
    <template>
      <div class="hidden">
        <vs-sidebar
          v-model="active"
          absolute
          hover-expand
          reduce
          open
        >
          <template #logo>
            <div style="display: block; height: 28px;" />
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class="bx bx-home-smile" />
            </template>
            Inicio
          </vs-sidebar-item>
          <vs-sidebar-item id="videos">
            <template #icon>
              <i class="bx bx-movie-play" />
            </template>
            Vídeos
          </vs-sidebar-item>
          <vs-sidebar-item id="zones" style="margin-bottom: auto;">
            <template #icon>
              <i class="bx bx-current-location" />
            </template>
            Zonas
          </vs-sidebar-item>
          <vs-sidebar-item id="settings">
            <template #icon>
              <i class="bx bx-cog" />
            </template>
            Ajustes
          </vs-sidebar-item>
          <vs-sidebar-item id="logout">
            <template #icon>
              <i class="bx bx-log-out" />
            </template>
            Cerrar sesión
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between" style="height: 32px;">
              <!-- <vs-avatar badge-color="danger" badge-position="top-right">
                <i class="bx bx-bell" />

                <template #badge>
                  28
                </template>
              </vs-avatar>

              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar> -->
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
    <div class="container">
      <div class="sub-container" ref="holder">
        <div class="center-grid" style="margin-bottom: 2rem;">
          <vs-row style="margin-bottom: 1rem;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
                <h4>
                  Vídeos recientes
                </h4>
                <div style="display: flex; align-items: center;">
                  <NuxtLink to="/admin/videos" style="margin-right: 6px; text-decoration: none;">
                    Ver todos
                  </NuxtLink>
                  <div class="center con-pagination">
                    <vs-pagination only-arrows v-model="page" :length="10" />
                  </div>
                </div>
              </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1366 ? '3' : '2'">
              <vs-card type="4" @click="dialog=!dialog">
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
              </vs-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1366 ? '3' : '2'">
              <vs-card type="4" @click="dialog=!dialog">
                <template #title>
                  <h3>Pot with a plant</h3>
                </template>
                <template #img>
                  <img src="https://vuesax.com/foto2.jpg" alt="">
                </template>
                <template #text>
                  <p/>
                </template>
                <template #interactions>
                  <vs-button class="btn-chat" shadow primary>
                    <span class="span">
                      0:45
                    </span>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1366 ? '3' : '2'">
              <vs-card type="4" @click="dialog=!dialog">
                <template #title>
                  <h3>Pot with a plant</h3>
                </template>
                <template #img>
                  <img src="https://vuesax.com/foto2.jpg" alt="">
                </template>
                <template #text>
                  <p/>
                </template>
                <template #interactions>
                  <vs-button class="btn-chat" shadow primary>
                    <span class="span">
                      0:50
                    </span>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1366 ? '3' : '2'">
              <vs-card type="4" @click="dialog=!dialog">
                <template #title>
                  <h3>Pot with a plant</h3>
                </template>
                <template #img>
                  <img src="https://vuesax.com/foto2.jpg" alt="">
                </template>
                <template #text>
                  <p/>
                </template>
                <template #interactions>
                  <vs-button class="btn-chat" shadow primary>
                    <span class="span">
                      0:25
                    </span>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
          </vs-row>
        </div>

        <div class="center-grid">
          <vs-row style="margin-bottom: 1rem;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
                <h4>
                  Zonas
                </h4>
                <div style="display: flex; align-items: center;">
                  <NuxtLink to="/admin/zones" style="margin-right: 6px; text-decoration: none;">
                    Ver todas
                  </NuxtLink>
                  <div class="center con-pagination">
                    <vs-pagination only-arrows v-model="page" :length="10" />
                  </div>
                </div>
              </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1200 ? '4' : '3'">
              <vs-button
                block
                gradient
                size="xl"
                style="padding: 35px; min-height: 112px;"
              >
                Torreón, Coah.
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1200 ? '4' : '3'">
              <vs-button
                block
                gradient
                warn
                size="xl"
                style="padding: 35px; min-height: 112px;"
              >
                Torreón, Coah.
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1200 ? '4' : '3'">
              <vs-button
                block
                gradient
                size="xl"
                style="padding: 35px; min-height: 112px;"
              >
                Torreón, Coah.
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" :w="window.width <= 576 ? '12' : window.width > 576 && window.width <= 768 ? '6' : window.width > 768 && window.width <= 1200 ? '4' : '3'">
              <vs-button
                block
                gradient
                warn
                size="xl"
                style="padding: 35px; min-height: 112px;"
              >
                Torreón, Coah.
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    page: 1,
    video: {
      id: 1,
      name: 'Mi video de ejemplo',
      zones: ['1', '2'],
      deleteAction: false
    },
    dialog: false,
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
    }, 3000)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  // created () {
  //   window.addEventListener('resize', this.handleResize)
  //   this.handleResize()
  // },
  // destroyed () {
  //   window.removeEventListener('resize', this.handleResize)
  // },
  methods: {
    handleResize () {
      console.log('RESIZING')
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
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
</style>
