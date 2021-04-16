<template>
  <div>
    <div class="hidden">
      <vs-sidebar
        v-model="active"
        absolute
        :open.sync="activeSidebar"
      >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <!-- <vs-sidebar-item id="home">
          <template #icon>
            <i class="bx bxs-home-smile" />
          </template>
          Regresar al inicio
        </vs-sidebar-item> -->
        <template #footer>
          <NuxtLink to="/">
            <vs-sidebar-item>
              <template #icon>
                <i class="bx bxs-home-smile" />
              </template>
              Regresar al inicio
            </vs-sidebar-item>
          </NuxtLink>
          <vs-row justify="space-between">
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="" style="background-color: #ffffff;">
            </vs-avatar>
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="" style="background-color: #ffffff;">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
    <div class="container">
      <div class="center grid sub-container">
        <div class="frame-container">
          <div class="video-container">
            <div class="embed-responsive embed-responsive-16by9">
              <video src="https://s3-us-west-2.amazonaws.com/iungo.files/landing/microsites/DPE-presentacion.mp4" style="border-radius: 0 0 20px;">
                Tu navegador no implementa el elemento <code>video</code>.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container">
        <vs-button
          dark
          shadow
          circle
          size="xl"
          @click="activeSidebar = !activeSidebar"
        >
          <i class="bx bx-menu" />
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: '',
    activeSidebar: false,
    playlist: [
      {
        id: 1,
        source: 'https://s3-us-west-2.amazonaws.com/iungo.files/landing/microsites/DNA-presentacion.mp4',
        type: 'video/mp4'
      },
      {
        id: 2,
        source: 'https://s3-us-west-2.amazonaws.com/iungo.files/landing/microsites/DPE-presentacion.mp4',
        type: 'video/mp4'
      },
      {
        id: 3,
        source: 'https://s3-us-west-2.amazonaws.com/iungo.files/landing/microsites/DES/promocional.mp4',
        type: 'video/mp4'
      }
    ]
  })
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  /*text-align: center;*/
  overflow: hidden;
}
.sub-container {
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.frame-container {
  background-image: url('~assets/images/bg.png');
  background-size: cover;
  /* background-color: #ffcc00; */
  width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.video-container {
  background-color: transparent;
  border: 0;
  width: 80%;
  height: 80%;
  max-width: 80%;
  max-height: 80%;
}
.embed-responsive {
  background-color: #000000;
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: 0 0 20px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
}
.embed-responsive-16by9::before {
  padding-top: 56.25%;
}
.embed-responsive::before {
  display: block;
  content: "";
}
.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
video, video:hover, video:focus, video:active {
  outline: 0;
}
.button-container {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 99;
  opacity: 0.1;
}
.button-container:hover {
  opacity: 1;
}
.button-container .bx-menu {
  font-size: 1.8rem !important;
}
.vs-sidebar__footer a, .vs-sidebar__footer a:hover, .vs-sidebar__footer a:visited, .vs-sidebar__footer a:active {
  text-decoration: none;
  color: inherit;
}
.vs-sidebar__item__icon a, .vs-sidebar__item__icon a:hover, .vs-sidebar__item__icon a:visited, .vs-sidebar__item__icon a:active {
  text-decoration: none;
  color: inherit;
}
.vs-sidebar-content.absolute {
  height: 50%;
}
.vs-sidebar-content {
  top: unset;
  bottom: 0px !important;
}
</style>
