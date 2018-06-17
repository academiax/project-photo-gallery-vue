<template>
  <vk-card
    padding="small"
    type="secondary"
    hover
  >
    <div slot="media-top">
      <img
        class="uk-width"
        @load="onLoad"
        :src="imgUrl"
      />
      <vk-spinner
        class="uk-position-absolute uk-position-center"
        v-if="!loaded"
      >
      </vk-spinner>
    </div>
    <div
      slot="footer"
      v-if="caption"
    >
      <span>{{caption}}</span>
    </div>
  </vk-card>
</template>

<script>
export default {
  name: 'photo',
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    caption: String,
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    onLoad() {
      this.loaded = true;
    },
  },
};
</script>

<style scoped>
  img {
    min-height: 50px;
  }
</style>
