<template>
  <div>
    <Title :title="getGalleryById(id).name"></Title>
    <vk-grid
      divided
      gutter="small"
      v-vk-height-match="{ target: ' .uk-card' }"
      class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center"
    >
      <router-link
        v-for="(photosId, index) in getGalleryById(id).order"
        :key="index"
        :to="{ path: photosId}"
        append
      >
        <Photo
          :img-url="getThumbUrl(photosId, 1)"
          :caption="getPhotosById(photosId).name + ' ' + getGalleryById(id).suffix"
        />
      </router-link>
    </vk-grid>
  </div>
</template>

<script>/* eslint-disable */
import Vue from 'Vue';
import Title from "./Title";
import Photo from "./Photo";
import {mapGetters} from 'vuex';

export default {
  name: 'Gallery',
  components: {Photo, Title},
  computed: {
    id: function () {
      return this.$route.params.galleryId;
    },
    ...mapGetters('galleries', {
      getGalleryById: 'getGalleryById',
    }),
    ...mapGetters('photos', {
      getPhotosById: 'getPhotosById',
    }),
    ...mapGetters('resources', {
      getThumbUrl: 'getThumbUrl',
    })
  },
  methods: {
    loaded(link) {
      // use vue.set, vue.delete when adding properties to allow refreshing
      Vue.set(this.spinner, link, true);
    }
  }
}
</script>
