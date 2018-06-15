<template>
  <div class="uk-background-cover uk-width-1-1@l">
    <div
      class="uk-background-cover uk-width-1-1@l animate-opacity"
      :style="style"
      v-vk-height-viewport
    >
    </div>
    <vk-spinner
      ratio="1.5"
      class="uk-position-absolute uk-position-center"
      v-if="!style.opacity"
    >
    </vk-spinner>
  </div>
</template>

<script>
export default {
  name: 'FullScreenPhoto',
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      style: {
        background: 'none',
        opacity: 0,
      },
    };
  },
  watch: {
    imgUrl(newImgUrl, prevImgUrl) {
      this.style = {
        background: 'none',
        opacity: 0,
      };
      if (newImgUrl !== prevImgUrl) {
        const bgImg = new Image();
        bgImg.onload = () => {
          this.style = {
            background: `url(${this.imgUrl})`,
            opacity: 1,
          };
        };
        bgImg.src = this.imgUrl;
      }
    },
  },

};
</script>

<style scoped>
  .animate-opacity {
    transition: .5s opacity ease;
  }
</style>
