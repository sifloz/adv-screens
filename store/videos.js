export const state = () => ({
  list: []
})

export const mutations = {
  SET_VIDEOS (list, videos) {
    list.videos = videos
  }
}

export const actions = {
  fetchVideos () {
    setTimeout(() => {
      this.context.commit('SET_VIDEOS', [])
    }, 1000)
  }
}
