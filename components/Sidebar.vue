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
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="playlists">
        <template #icon>
          <i class="bx bx-library" />
        </template>
        Playlists
      </vs-sidebar-item>
      <vs-sidebar-item id="videos">
        <template #icon>
          <i class="bx bx-movie-play" />
        </template>
        Videos
      </vs-sidebar-item>
      <vs-sidebar-item id="spots" style="margin-bottom: auto;">
        <template #icon>
          <i class="bx bx-current-location" />
        </template>
        Spots
      </vs-sidebar-item>
      <vs-sidebar-item id="settings">
        <template #icon>
          <i class="bx bx-cog" />
        </template>
        Settings
      </vs-sidebar-item>
      <vs-sidebar-item id="logout">
        <template #icon>
          <i class="bx bx-log-out" />
        </template>
        Log out
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
  watch: {
    section () {
      if (this.section === 'home') {
        this.$router.push('/admin')
      } else if (this.section === 'videos') {
        this.$router.push('/admin/videos')
      } else if (this.section === 'playlists') {
        this.$router.push('/admin/playlists')
      } else if (this.section === 'spots') {
        if (this.$route.params && this.$route.params.id) {
          this.$router.push(`/admin/spots/${this.$route.params.id}`)
        } else {
          this.$router.push('/admin/spots')
        }
      } else if (this.section === 'settings') {
        this.$router.push('/admin/settings')
      } else if (this.section === 'logout') {
        this.$router.push('/')
      }
    }
  },
  beforeMount () {
    this.section = this.active
  }
}
</script>

<style scoped>

</style>
