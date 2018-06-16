/* eslint-disable */
<template>
  <div id="app">
    <!-- sidenav-->
    <vk-offcanvas-content>
      <!-- topnav-->
      <vk-sticky animation="slide-top" show-on-up>
        <Nav
          @on-menu="isOpen = true"
          :links="links"
        />
      </vk-sticky>
      <!-- ngview -->
      <div class="relative uk-margin-small-bottom">
        <div class="container-fluid">
          <div class="row-fluid no-gutter">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <!-- footer -->
      <Footer
        v-if="$route.path !== '/'"
        class="uk-margin-large"></Footer>
      <!-- sidenav complement -->
      <vk-offcanvas overlay mode="reveal" :show.sync="isOpen">
        <vk-offcanvas-close @click="isOpen = false"></vk-offcanvas-close>
        <!-- sidenav title -->
        <div class="uk-margin-large">
          <h3 class="uk-margin-remove-bottom">Xavier Reyes Ochoa</h3>
          <h6 class="uk-margin-remove-top">HDR Photography</h6>
        </div>
        <!-- routes -->
        <h4
          class="uk-padding-small"
          v-for="(link, index) in links"
          @click="isOpen = false"
          :key="index"
        >
          <router-link :to="link.link" class="uk-padding-small">{{link.display}}</router-link>
        </h4>
      </vk-offcanvas>
    </vk-offcanvas-content>
  </div>
</template>

<script>/* eslint-disable */
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {Footer, Nav},
  methods: {
    menuClicked() {
      console.log('worked2')
    }
  },
  data() {
    return {
      isOpen: false,
      links: [
        {link: '/nps', display: 'National Parks'},
        {link: '/oip', display: 'Other Inspiring Places'},
        {link: '/about', display: 'About'},
      ],
    }
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
