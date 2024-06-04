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
  },

  async deleteMedia(mediaEndpoint, mediaId) {
    await fetch(`${mediaEndpoint}/${mediaId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then((data) => {
        this.media = this.media.filter(media => media.id !== mediaId);
      })
  }
})