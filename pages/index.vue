<template>
  <div class="container">
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="center element">
            <vs-select
              v-model="value1"
              filter
              label-placeholder="Elige una zona"
              @change="setZone"
            >
              <template v-if="errorZone" #message-danger>
                Por favor elige una zona
              </template>
              <vs-option label="Torreón, Coah" value="torreon-coah">
                Torreón, Coah
              </vs-option>
              <vs-option label="Cd Lerdo, Dgo" value="lerdo-dgo">
                Cd Lerdo, Dgo
              </vs-option>
              <vs-option label="Gómez Palacio, Dgo" value="gomez-palacio-dgo">
                Gómez Palacio, Dgo
              </vs-option>
              <vs-option label="Monterrey, NL" value="monterrey-nl">
                Monterrey, NL
              </vs-option>
            </vs-select>
          </div>
          <div class="center element">
            <vs-button
              block
              class="button-margin"
              :loading="accesing"
              @click="validateZone"
            >
              Acceso
            </vs-button>
          </div>
          <div class="center element">
            <vs-button
              block
              transparent
              to="/login"
              class="button-margin"
            >
              Panel de control
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value1: '',
    errorZone: false,
    accesing: false
  }),
  methods: {
    validateZone () {
      if (this.value1 === '') {
        this.errorZone = true
      } else {
        this.accesing = true
        setTimeout(() => {
          // this.accesing = false
          this.$router.push(`/zone/${this.value1}`)
        }, 2000)
      }
    },
    setZone () {
      this.errorZone = false
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.button-margin {
  margin: 0;
}

.element {
  margin: 15px 0;
}
</style>
