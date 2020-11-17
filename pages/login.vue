<template>
  <div class="container">
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="center content-inputs input-element">
            <vs-input v-model="email" icon-after label-placeholder="Correo electrónico" @change="() => setInputChange('email')">
              <template #icon>
                <i class="bx bx-user" />
              </template>
              <template v-if="errorMail" #message-danger>
                {{ errorMailMessage }}
              </template>
            </vs-input>
          </div>
          <div class="center content-inputs input-element">
            <vs-input v-model="password" type="password" icon-after label-placeholder="Contraseña" @change="() => setInputChange('password')">
              <template #icon>
                <i class="bx bx-lock-open-alt" />
              </template>
              <template v-if="errorPassword" #message-danger>
                {{ errorPasswordMessage }}
              </template>
            </vs-input>
          </div>
          <div class="center element">
            <vs-button
              block
              class="button-margin"
              :loading="processLogin"
              @click="login"
            >
              Acceso
            </vs-button>
          </div>
          <div class="center element">
            <vs-button
              block
              transparent
              to="/"
              animation-type="scale"
              class="button-margin"
            >
              <i class="bx bxs-home-smile" />
              <template #animate>
                Regresar al inicio
              </template>
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
    email: '',
    errorMail: false,
    errorMailMessage: '',
    password: '',
    errorPassword: false,
    errorPasswordMessage: '',
    processLogin: false
  }),
  methods: {
    login () {
      const validEmail = this.validateEmail(this.email)
      const validPassword = this.validatePassword(this.password)

      if (validEmail && validPassword) {
        this.processLogin = true
        setTimeout(() => {
          this.processLogin = false
          this.$router.push('/admin')
        }, 2000)
      } else {
        if (!validEmail) {
          this.errorMail = true
          this.errorMailMessage = this.email.length <= 0 ? 'Introduce un correo electrónico' : 'El correo electrónico no es válido'
        }

        if (!validPassword) {
          this.errorPassword = true
          this.errorPasswordMessage = 'Contraseña inválida (6 caracteres)'
        }
      }
    },
    validateEmail (email) {
      if (email.length > 0) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      } else {
        return false
      }
    },
    validatePassword (password) {
      return password.length >= 6
    },
    setInputChange (name) {
      if (name === 'email') {
        this.errorMail = false
      } else if (name === 'password') {
        this.errorPassword = false
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

.input-element {
  margin-bottom: 25px;
}

.element {
  margin: 15px 0;
}
</style>
