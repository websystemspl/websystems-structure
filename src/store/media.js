import { reactive } from 'vue'

export const mediaStore = reactive({
  media: [],

  async fetchMedia(mediaEndpoint) {
    await fetch(mediaEndpoint, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((data) => {
        this.media = data;
      })
  }
})