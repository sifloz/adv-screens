<template>
  <div class="container">
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="center content-inputs input-element">
            <vs-input v-model="email" icon-after label-placeholder="Correo electrónico">
              <template #icon>
                <i class="bx bx-user" />
              </template>
            </vs-input>
          </div>
          <div class="center content-inputs input-element">
            <vs-input v-model="password" type="password" icon-after label-placeholder="Contraseña">
              <template #icon>
                <i class="bx bx-lock-open-alt" />
              </template>
            </vs-input>
          </div>
          <div class="center element">
            <vs-button
              block
              :floating="email !== '' && password !== ''"
              to="/admin"
              class="button-margin"
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
    password: ''
  })
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
