<template>
    <vk-navbar class="uk-box-shadow-large">
      <vk-navbar-nav>
        <vk-navbar-item>
          <h3 class="uk-margin-remove">Xavier Reyes Ochoa</h3>
          <span class="uk-margin-right"></span>
          <h6 class="uk-margin-remove">HDR Photography</h6>
        </vk-navbar-item>
      </vk-navbar-nav>
      <!-- required for spacing -->
      <vk-navbar-nav slot="center"></vk-navbar-nav>
      <vk-navbar-nav slot="right">
        <vk-navbar-item>
          <router-link
            class="uk-margin-right"
            v-for="(link, index) in links"
            :key="index"
            :to="link.link">{{link.display}}
          </router-link>
        </vk-navbar-item>
      </vk-navbar-nav>
    </vk-navbar>
</template>

<script>
import VkCard from 'vuikit/src/library/card/components/card';

export default {
  name: 'Nav',
  components: { VkCard },
  data() {
    return {
      links: [
        { link: '/nps', display: 'National Parks' },
        { link: '/oip', display: 'Other Inspiring Places' },
        { link: '/about', display: 'About' },
      ],
    };
  },
};
</script>
