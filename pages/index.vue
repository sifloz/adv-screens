<template>
  <div class="container">
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="center element">
            <!-- <vs-select
              v-model="value1"
              label-placeholder="Choose a spot"
              @change="setZone"
            >
              <template v-if="errorZone" #message-danger>
                Please choose a spot
              </template>
              <vs-option v-for="zone in zones" :key="zone.id" :label="zone.name" :value="zone.id">
                {{ zone.name }}
              </vs-option>
            </vs-select> -->
            <vs-input
              v-model="spotCode.value"
              label-placeholder="Enter a spot's code"
              max-length="6"
              @keyup.enter="validateSpot"
            >
              <template v-if="spotCode.error" #message-danger>
                {{ spotCode.message }}
              </template>
            </vs-input>
          </div>
          <div v-if="spotCode.valid" class="center element">
            <vs-input
              v-model="spotPassword.value"
              label-placeholder="Access code"
              type="password"
              @keyup.enter="validateSpotPassword"
            >
              <template v-if="spotPassword.error" #message-danger>
                {{ spotPassword.message }}
              </template>
            </vs-input>
          </div>
          <div class="center element">
            <vs-button
              block
              class="button-margin"
              :loading="accesing"
              @click="!spotCode.valid ? validateSpot : validateSpotPassword"
            >
              {{ spotCode.valid ? 'Continue' : 'Access' }} <i class="bx bx-right-arrow-alt " />
            </vs-button>
          </div>
          <div class="center element">
            <vs-button
              block
              transparent
              to="/login"
              class="button-margin"
            >
              Control panel
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
    spotCode: {
      value: '',
      valid: false,
      error: false,
      message: ''
    },
    spotPassword: {
      value: '',
      valid: false,
      error: false,
      message: ''
    },
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
    validateSpot () {
      if (this.spotCode.value === '' || this.spotCode.value === null || this.spotCode.value.length <= 0) {
        this.spotCode.valid = false
        this.spotCode.error = true
        this.spotCode.message = 'Enter a 6-digit spot code'
      } else if (this.spotCode.value.length < 6) {
        this.spotCode.valid = false
        this.spotCode.error = true
        this.spotCode.message = 'Spot code must have 6 digits'
      } else if (this.spotCode.value.length > 6) {
        this.spotCode.valid = false
        this.spotCode.error = true
        this.spotCode.message = 'Spot code must have 6 digits'
      } else {
        this.spotCode.error = false
        this.spotCode.message = ''
        this.errorZoneCode = false
        this.errorZone = false
        this.accesing = true
        setTimeout(() => {
          this.accesing = false
          this.spotCode.valid = true
        }, 600)
        // setTimeout(() => {
        //   // this.accesing = false
        //   this.$router.push(`/spots/${this.value1}`)
        // }, 2000)
      }
    },
    validateSpotPassword () {
      if (this.spotPassword.value === '') {
        this.spotPassword.valid = false
        this.spotPassword.error = true
        this.spotPassword.message = 'Enter the spot\'s password'
      } else if (this.spotPassword.value.length < 6) {
        this.spotPassword.valid = false
        this.spotPassword.error = true
        this.spotPassword.message = 'Spot\'s password is not valid'
      } else {
        this.spotPassword.valid = true
        this.spotPassword.error = false
        this.spotPassword.message = 'Spot\'s password is not valid'
        this.accesing = true
        setTimeout(() => {
          // this.accesing = false
          this.$router.push('/spots/saltillo-coah')
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

.button-icon {
  margin-top: 0.15rem !important;
}
</style>
