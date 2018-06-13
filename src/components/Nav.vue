<template>
  <vk-navbar>
    <vk-navbar-nav>
      <vk-navbar-item>
        Xavier Reyes Ochoa <span style="font-size:12px">HDR Photography</span>
      </vk-navbar-item>
    </vk-navbar-nav>
    <!-- required for spacing -->
    <vk-navbar-nav slot="center"></vk-navbar-nav>
    <vk-navbar-nav slot="right">
      <vk-navbar-item>
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.link">{{link.display}}
        </router-link>
      </vk-navbar-item>
    </vk-navbar-nav>
  </vk-navbar>
</template>

<script>
export default {
  name: 'Nav',
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
