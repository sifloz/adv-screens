<template>
  <div>
    <Sidebar :active="'settings'" />
    <div class="container">
      <div ref="holder" class="sub-container">
        <h4 style="margin-bottom: 2rem;">
          Ajustes
        </h4>
        <div class="center content-inputs input-element">
          <vs-input
            v-model="email"
            icon-after
            label-placeholder="Correo electrónico"
          >
            <template #icon>
              <i class="bx bx-user" />
            </template>
            <template v-if="emailError" #message-danger>
              {{ emailErrorMessage }}
            </template>
          </vs-input>
        </div>
        <template v-if="updatePassword">
          <div class="center content-inputs input-element">
            <vs-input
              v-model="password"
              icon-after
              label-placeholder="Nueva contraseña"
              type="password"
              :visiblePassword="hasVisiblePassword"
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template v-if="password !== '' || password.length > 0" #icon>
                <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                <i v-else class='bx bx-hide'></i>
              </template>
              <template v-if="passwordError" #message-danger>
                {{ passwordErrorMessage }}
              </template>
            </vs-input>
          </div>
          <div class="center content-inputs input-element">
            <vs-input
              v-model="passwordRepeat"
              icon-after
              label-placeholder="Repetir nueva contraseña"
              type="password"
              :visiblePassword="hasVisiblePassword"
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template v-if="passwordRepeat !== '' || passwordRepeat.length > 0" #icon>
                <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                <i v-else class='bx bx-hide'></i>
              </template>
              <template v-if="passwordError" #message-danger>
                {{ passwordErrorMessage }}
              </template>
            </vs-input>
          </div>
        </template>
        <div class="center button-container">
          <vs-button
            block
            :loading="updating"
            style="margin-left: 0px;"
            @click="saveChangesHandler"
          >
            Guardar cambios
          </vs-button>
        </div>
        <div class="center button-container">
          <vs-button block :disabled="updating" transparent style="margin-left: 0px;" @click="updatePasswordHandler">
            {{ updatePassword ? 'Cancelar' : 'Actualizar contraseña' }}
          </vs-button>
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
    email: '',
    hasVisiblePassword: false,
    password: '',
    passwordRepeat: '',
    updatePassword: false,
    emailError: false,
    emailErrorMessage: '',
    passwordError: false,
    passwordErrorMessage: '',
    updating: false
  }),
  methods: {
    updatePasswordHandler () {
      this.updatePassword = !this.updatePassword
      this.password = ''
      this.passwordRepeat = ''
      this.passwordError = false
      this.passwordErrorMessage = ''
    },
    saveChangesHandler () {
      if (!this.updating) {
        this.emailError = false
        this.emailErrorMessage = ''
        this.passwordError = false
        this.passwordErrorMessage = ''

        if (this.updatePassword === true) {
          if (this.password === '' || this.passwordRepeat === '') {
            this.passwordError = true
            this.passwordErrorMessage = 'Introduce la misma contraseña'
            if (!this.validateEmail(this.email)) {
              this.emailError = true
              this.emailErrorMessage = 'Correo electrónico inválido'
            }
          } else if (this.password !== this.passwordRepeat) {
            this.passwordError = true
            this.passwordErrorMessage = 'Las contraseñas no coinciden'
            if (!this.validateEmail(this.email)) {
              this.emailError = true
              this.emailErrorMessage = 'Correo electrónico inválido'
            }
          } else if (!this.validateEmail(this.email)) {
            this.emailError = true
            this.emailErrorMessage = 'Correo electrónico inválido'
          } else {
            this.updating = true
            setTimeout(() => {
              this.updating = false
              this.openNotification()
            }, 400)
          }
        } else if (!this.validateEmail(this.email)) {
          this.emailError = true
          this.emailErrorMessage = 'Correo electrónico inválido'
        } else {
          this.updating = true
          setTimeout(() => {
            this.updating = false
            this.openNotification()
          }, 400)
        }
      }
    },
    validateEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    openNotification () {
      this.$vs.notification({
        border: 'success',
        duration: 4000,
        title: 'Actualización de datos',
        text: 'Se ha actualizado la información de la cuenta'
      })
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
.sub-container {
  padding: 40px 20px 40px 70px;
  /*width: 100%;*/
  height: 100%;
  overflow-y: scroll;
  justify-content: center;
}
.vs-col {
  padding: 0 1%;
}
.input-element {
  margin-bottom: 25px;
}
.button-container {
  margin-bottom: 0.85rem;
}
.element {
  margin: 15px 0;
}
</style>
