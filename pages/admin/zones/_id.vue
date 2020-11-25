<template>
  <div>
    <Sidebar :active="'zones'" />
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
                  to="/admin/zones"
                >
                  <i class='bx bx-arrow-back'></i>
                </vs-button>
                <h4 style="margin-left: 12px;">
                  Torreón Coah
                </h4>
              </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="5">
              <div class="zone-settings-container">
                <div class="element">
                  <vs-input v-model="zone.name" block label-placeholder="Nombre de la zona">
                    <template #message-danger>
                      Por favor introduce un nombre para la zona
                    </template>
                  </vs-input>
                </div>
                <div class="element-alt">
                  <vs-select block label-placeholder="Elige una playlist" v-model="playlist">
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
                <div class="element-alt" style="margin-bottom: 1rem;">
                  <vs-button
                    border
                    block
                  >
                    <i class="bx bx-plus" style="margin-right: 4px;" />
                    Crear una lista de reproducción
                  </vs-button>
                </div>
                <label style="display: block; margin-bottom: 0.5rem; font-size: 12px;">Marco de lista de reproducción</label>
                <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
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
              </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="7">
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
    playlist: '1',
    zone: {
      name: 'Torreón, Coah'
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
.row-special {
  margin-bottom: 1.5rem;
}
.element {
  margin-bottom: 2rem;
}
.element-alt {
  margin-bottom: 1rem;
}
.zone-settings-container {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2.8rem 2rem 2rem 2rem;
  -webkit-box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
  box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
}
</style>
