<template>
  <div>
    <Title :title="name"></Title>
    <vk-grid>
      <div class="uk-width-expand@m"></div>
      <div class="uk-width-1-3@m">
        <vk-card type="secondary">
          <div slot="media-top">
            <Photo :img-url="aboutUrl" />
          </div>
          <div>
            <p class="uk-text-justify">
              This is an HDR photo gallery of US National Parks
              and other inspiring places. HDR photography is a technique
              that reveals hidden details by merging several photos
              taken at different exposures.
            </p>
            <p class="uk-text-justify">
              This project is made possible by the support
              of my traveling partner, Hilde. I will update
              the site whenever I get new material.
              Thanks for checking it out!
            </p>
            <p class="uk-text-left uk-margin-remove">Xavier</p>
          </div>
        </vk-card>
      </div>
      <div class="uk-width-expand@m"></div>
    </vk-grid>
  </div>
</template>

<script>
import Title from './Title';
import Photo from './Photo';
import { constants } from '../constants';

export default {
  name: 'About',
  components: { Photo, Title },
  computed: {
    aboutUrl() {
      return `${constants.BASE_URL}/about.jpg`;
    },
  },
  data() {
    return {
      name: 'About',
    };
  },
};
</script>
