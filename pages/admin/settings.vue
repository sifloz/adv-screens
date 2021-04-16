<template>
  <div>
    <Sidebar :active="'settings'" />
    <div class="container">
      <div ref="holder" class="sub-container">
        <div shadow class="card-settings">
          <h4 style="margin-bottom: 2rem;">
            Settings
          </h4>
          <div class="center content-inputs input-element">
            <vs-input
              v-model="email"
              icon-after
              label-placeholder="Email"
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
                label-placeholder="New password"
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
                label-placeholder="Repeat new password"
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
              Save changes
            </vs-button>
          </div>
          <div class="center button-container">
            <vs-button block :disabled="updating" transparent style="margin-left: 0px;" @click="updatePasswordHandler">
              {{ updatePassword ? 'Cancel' : 'Update password' }}
            </vs-button>
          </div>
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
            this.passwordErrorMessage = 'Enter the same password'
            if (!this.validateEmail(this.email)) {
              this.emailError = true
              this.emailErrorMessage = 'Email is not valid'
            }
          } else if (this.password !== this.passwordRepeat) {
            this.passwordError = true
            this.passwordErrorMessage = 'Passwords don\'t match'
            if (!this.validateEmail(this.email)) {
              this.emailError = true
              this.emailErrorMessage = 'Email is not valid'
            }
          } else if (!this.validateEmail(this.email)) {
            this.emailError = true
            this.emailErrorMessage = 'Email is not valid'
          } else {
            this.updating = true
            setTimeout(() => {
              this.updating = false
              this.openNotification()
            }, 400)
          }
        } else if (!this.validateEmail(this.email)) {
          this.emailError = true
          this.emailErrorMessage = 'Email is not valid'
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
        title: 'Account data updated',
        text: 'Account data & information was updated'
      })
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #f4f7f8;
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
.card-settings {
  border-radius: 1rem;
  padding: 3rem;
  background-color: #ffffff;
  -webkit-box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
  box-shadow: 0 5px 20px 0 rgba(0,0,0,0.05);
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
@media (max-width: 575.98px) {
  .card-settings {
    padding: 1rem;
  }
}
</style>
