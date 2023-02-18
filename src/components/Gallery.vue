<template>
  <div>
    <Title :title="getGalleryById(id).name"></Title>
    <div class="uk-margin-large-bottom">
      <div class="uk-inline">
        <span class="uk-form-icon">
           <vk-icons-search class="uk-form-icon"></vk-icons-search>
        </span>
        <input
          class="uk-input"
          type="text"
          placeholder="Search"
          v-model="filter"
        />
      </div>
    </div>
    <vk-grid
      divided
      gutter="small"
      v-vk-height-match="{ target: ' .uk-card' }"
      class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center"
    >
      <router-link
        v-for="photosId in filtered()"
        :key="photosId"
        :to="{ path: photosId}"
        append
      >
        <Photo
          :img-url="getThumbUrl(photosId, 1)"
          :caption="replacedCaption(photosId)"
        />
      </router-link>
    </vk-grid>
  </div>
</template>

<script>/* eslint-disable */
import Vue from 'vue';
import Title from "./Title";
import Photo from "./Photo";
import { mapGetters } from 'vuex';

export default {
  name: 'Gallery',
  data() {
    return {
      filter: ''
    }
  },
  components: { Photo, Title },
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
    },
    caption(id) {
      return this.getPhotosById(id).name + ' ' + this.getGalleryById(this.id).suffix;
    },
    filtered() {
      return this.getGalleryById(this.id).order.filter(id => {
        return this.caption(id).toLowerCase().includes(this.filter.toLowerCase());
      });
    },
    replacedCaption(id) {
      const regExp = new RegExp(this.filter, 'i');
      return this.caption(id).replace(regExp, `<i>${this.caption(id).match(regExp)}</i>`);
    }

  }
}
</script>
