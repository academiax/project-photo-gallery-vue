<template>
  <div>
    <Quote></Quote>
    <div
      class="uk-background-cover uk-position-fixed uk-width uk-height-viewport background"
      :style="{backgroundImage: `url(${getHighResUrl(galleryIdBottom, 1)}` }"
    >
    </div>
      <div
        class="uk-background-cover uk-position-fixed uk-width uk-height-viewport background"
        :style="{backgroundImage: `url(${getHighResUrl(galleryIdTop, 1)}`, opacity: opacity }"
      >
    </div>
  </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Quote from './Quote';

export default {
  name: 'Home',
  components: { Quote },
  computed: {
    ...mapState({
      photos: state => state.photos.all,
    }),
    ...mapGetters('galleries', {
      getGalleryById: 'getGalleryById',
    }),
    ...mapGetters('resources', {
      getHighResUrl: 'getHighResUrl',
    }),
  },
  data() {
    return {
      interval: null,
      galleryIdBottom: 'arch',
      galleryIdTop: 'arch',
      opacity: 0,
    };
  },
  created() {
    this.interval = setInterval(() => {
      if (this.photos) {
        this.galleryIdBottom = this.galleryIdTop;
        this.opacity = 0;

        const galleryIdTop = this.photos[Math.floor(Math.random() * this.photos.length)].id;

        const bgImg = new Image();
        bgImg.onload = () => {
          this.opacity = 1;
          this.galleryIdTop = galleryIdTop;
        };
        bgImg.src = this.getHighResUrl(galleryIdTop, 1);
      }
    }, 5000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.background {
  top: 0;
  z-index: -1;
  transition: .5s opacity ease;
}
</style>
