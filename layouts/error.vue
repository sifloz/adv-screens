<template>
  <div class="container">
    <div class="center grid">
      <template v-if="error.statusCode === 404">
        <h1>
          404
        </h1>
        <h3>
          The page you were looking for was not found
        </h3>
      </template>
      <template v-else>
        <h1>
          500
        </h1>
        <h3>
          An unexpected error occurred, please try again later
        </h3>
      </template>
      <vs-row style="justify-content: center;">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" style="display: flex; justify-content: center;">
          <vs-button
            block
            floating
            to="/"
          >
            Back to home
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
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
h3 {
  margin-bottom: 2rem;
}
</style>
