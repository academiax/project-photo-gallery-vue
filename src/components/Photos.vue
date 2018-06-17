<template>

  <div>
    <Title :title="getPhotosById(id).name + ' ' + getGalleryById(galleryId).suffix"></Title>
    <vk-grid
      gutter="small"
      v-vk-height-match
      class="uk-text-center"
    >
      <div
        v-for="(caption, index) in getPhotosById(id).captions"
        :key="index"
        @click="openModal(index + 1)"
        :class="`clickable uk-width-1-${creativeGrid[index]} uk-width-1-3@m`"
      >
        <Photo
          :img-url="getThumbUrl(id,index + 1)"
        />
      </div>
    </vk-grid>

    <!-- modal -->
    <vk-modal-full :show.sync="show">
      <vk-modal-full-close
        large
      ></vk-modal-full-close>

      <FullScreenPhoto
        :img-url="getHighResUrl(id, selectedImageName)"
      />
      <vk-icon-link
        @click="nextImage"
        icon="chevron-right"
        class="uk-position-absolute next"
        ratio="4"
      ></vk-icon-link>
      <vk-icon-link
        @click="previousImage"
        icon="chevron-left"
        class="uk-position-absolute previous"
        ratio="4"
      ></vk-icon-link>

    </vk-modal-full>

  </div>
</template>

<script>/* eslint-disable */

import Title from "./Title";
import Photo from "./Photo";
import FullScreenPhoto from "./FullScreenPhoto";
import Button from "vuikit/src/library/button/elements/button";
import {mapGetters} from 'vuex'

export default {
  name: 'Photos',
  components: {Button, FullScreenPhoto, Photo, Title},
  computed: {
    id: function () {
      return this.$route.params.codeId;
    },
    galleryId: function () {
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
      getHighResUrl: 'getHighResUrl',
    })
  },
  methods: {
    openModal(name) {
      this.show = true;
      this.selectedImageName = name;
    },
    nextImage() {
      if (this.selectedImageName >= this.getPhotosById(this.id).captions.length) {
        this.selectedImageName = 1;
      } else {
        this.selectedImageName += 1;
      }
    },
    previousImage() {
      if (this.selectedImageName === 1) {
        this.selectedImageName = this.getPhotosById(this.id).captions.length;
      } else {
        this.selectedImageName -= 1;
      }
    }
  },
  data() {
    return {
      show: false,
      selectedImageName: null,
      creativeGrid: [
        '1',
        '3', '3', '3',
        '2', '2',
        '3', '3', '3',
        '2', '2',
        '4', '4', '4', '4',
        '3', '3', '3'
      ],
    }
  }
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }

  .next {
    right: 2%;
    color: white;
    bottom: 5%;
  }

  .previous {
    left: 2%;
    color: white;
    bottom: 5%;

  }

</style>
