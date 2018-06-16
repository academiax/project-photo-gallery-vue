/* eslint-disable */
<template>
  <div id="app">


    <vk-offcanvas-content>

      <vk-sticky animation="slide-top" show-on-up>
        <Nav
          @on-menu="isOpen = true"
          :links="links"
        />
      </vk-sticky>


      <!--NGVIEW-->
      <div class="relative">
        <div class="container-fluid">
          <div class="row-fluid no-gutter">
            <router-view></router-view>
          </div>
        </div>
      </div>


      <vk-offcanvas overlay mode="reveal" :show.sync="isOpen">
        <vk-offcanvas-close @click="isOpen = false"></vk-offcanvas-close>

        <div class="uk-margin-large">
          <h3 class="uk-margin-remove-bottom">Xavier Reyes Ochoa</h3>
          <h6 class="uk-margin-remove-top">HDR Photography</h6>
        </div>

        <h4
          class="uk-margin-small"
          v-for="(link, index) in links"
          @click="isOpen = false"
          :key="index"
        >
          <router-link :to="link.link">{{link.display}}</router-link>
        </h4>

      </vk-offcanvas>

    </vk-offcanvas-content>

    <!-- Footer -->
    <!--    <div class="footer-xr">

          <div class="social-icons">

            <ul>
              <li class="linkedin" style="background-color: #f0f0f0">
                <a href="https://www.linkedin.com/pub/xavier-alejandro-reyes-ochoa/82/184/b89" target="_blank">LinkedIN</a>
              </li>
              <li class="xaviro" style="background-color: #f0f0f0">
                <a href="http://www.xaviro.com" target="_blank">Portfolio</a>
              </li>
              <li class="github" style="background-color: #f0f0f0">
                <a href="https://github.com/xrochoa" target="_blank">Facebook</a>
              </li>
            </ul>

          </div>

        </div>-->

  </div>
</template>

<script>/* eslint-disable */
import Nav from "./components/Nav";

export default {
  name: 'App',
  components: {Nav},
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
