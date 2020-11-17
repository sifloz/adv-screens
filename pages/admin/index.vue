<template>
  <div>
    <vs-dialog v-model="dialog" blur prevent-close>
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>Vuesax</b>
        </h4>
      </template>

      <div class="con-form">
        <vs-input placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox>Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            Sign In
          </vs-button>

          <div class="new">
            New Here? <a href="#">Create New Account</a>
          </div>
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
</style>
