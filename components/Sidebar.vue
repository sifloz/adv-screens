<template>
  <div class="hidden">
    <vs-sidebar
      v-model="section"
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
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default () {
        return 'home'
      }
    }
  },
  data: () => ({
    section: 'home'
  }),
  beforeMount () {
    this.section = this.active
  },
  watch: {
    section () {
      if (this.section === 'home') {
        this.$router.push('/admin')
      } else if (this.section === 'videos') {
        this.$router.push('/admin/videos')
      } else if (this.section === 'zones') {
        this.$router.push('/admin/zones')
      } else if (this.section === 'settings') {
        this.$router.push('/admin/settings')
      } else if (this.section === 'logout') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
