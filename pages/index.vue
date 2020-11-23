<template>
  <div class="container">
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="center element">
            <vs-select
              v-model="value1"
              label-placeholder="Elige una zona"
              @change="setZone"
            >
              <template v-if="errorZone" #message-danger>
                Por favor elige una zona
              </template>
              <vs-option v-for="zone in zones" :key="zone.id" :label="zone.name" :value="zone.id">
                {{ zone.name }}
              </vs-option>
            </vs-select>
          </div>
          <div v-if="value1 !== ''" class="center element">
            <vs-input
              v-model="zoneCode"
              label-placeholder="Código de acceso"
              type="password"
              @keyup.enter="validateZone"
            >
              <template v-if="errorZoneCode" #message-danger>
                {{ zoneCode === '' ? 'Introduce el código de acceso' : 'El código de acceso es incorrecto' }}
              </template>
            </vs-input>
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
    zoneCode: '',
    errorZone: false,
    errorZoneCode: false,
    accesing: false,
    zones: [
      { id: 'torreon-coah', name: 'Torreón, Coah', code: 'trn012020', videos: [], frame: '' },
      { id: 'saltillo-coah', name: 'Saltillo, Coah', code: 'slt012020', videos: [], frame: '' }
      // { id: 'lerdo-dgo', name: 'Cd Lerdo, Dgo', code: '', videos: [], frame: '' },
      // { id: 'gomez-dgo', name: 'Gómez Palacio, Dgo', videos: [], frame: '' },
      // { id: 'monterrey-nl', name: 'Monterrey, NL', code: '', videos: [], frame: '' }
    ],
    zonesCopy: [],
    selectedZone: {}
  }),
  mounted () {
    // const value = this.$fire.firestore
    //   .collection('zones')
    //   .doc('zones')
    // console.log('VALUE: ', value)
    // try {
    //   const doc = value.data()
    //   this.zonesCopy = doc
    //   if (!doc) {
    //     alert('Document does not exist.')
    //     return
    //   }
    //   alert(doc.message)
    // } catch (e) {
    //   alert(e)
    // }
  },
  methods: {
    validateZone () {
      if (this.value1 === '') {
        this.errorZone = true
      } else if (this.zoneCode === '' || this.zoneCode !== this.selectedZone.code) {
        this.errorZoneCode = true
      } else {
        this.accesing = true
        this.errorZoneCode = false
        this.errorZone = false
        setTimeout(() => {
          // this.accesing = false
          this.$router.push(`/zone/${this.value1}`)
        }, 2000)
      }
    },
    setZone () {
      this.errorZone = false
      this.errorZoneCode = false
      const selectedZoneId = this.zones.findIndex(item => item.id === this.value1)
      this.selectedZone = this.zones[selectedZoneId]
    },
    inputFeatures () {
      return {
        autocomplete: 'off'
      }
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
  margin: 18px 0;
}
</style>
