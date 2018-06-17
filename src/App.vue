/* eslint-disable */
<template>
  <div id="app">
    <!-- sidenav-->
    <vk-offcanvas-content>
      <div class="content">
        <!-- topnav-->
        <vk-sticky
          animation="slide-top"
          show-on-up
        >
          <Nav
            @on-menu="isOpen = true"
            :links="links"
          />
        </vk-sticky>
        <!-- ngview -->
        <div class="relative uk-margin-small-bottom">
          <div class="container-fluid">
            <div class="row-fluid no-gutter">
              <transition
                name="router-anim"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <router-view :key="$route.path"></router-view>
              </transition>

            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <transition name="fade">
        <Footer
          v-show="$route.path !== '/' && !routeTransitioning"
          class="uk-margin-small footer"
        />
      </transition>
      <!-- social -->
      <Social></Social>
      <!-- sidenav complement -->
      <vk-offcanvas overlay mode="reveal" :show.sync="isOpen">
        <vk-offcanvas-close @click="isOpen = false"></vk-offcanvas-close>
        <!-- sidenav title -->
        <div class="uk-margin-large">
          <h3 class="uk-margin-remove-bottom">Xavier Reyes Ochoa</h3>
          <h6 class="uk-margin-remove-top">HDR Photography</h6>
        </div>
        <!-- routes -->
        <router-link
          class="uk-display-block"
          v-for="(link, index) in links"
          :key="index"
          :to="link.link"
        >
          <h4
            class="uk-padding-small"
          >{{link.display}}
          </h4>
        </router-link>
      </vk-offcanvas>
    </vk-offcanvas-content>
  </div>
</template>

<script>/* eslint-disable */
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Social from "./components/Social";

export default {
  name: 'App',
  components: {Social, Footer, Nav},
  methods: {
    menuClicked() {
      console.log('worked2')
    }
  },
  created() {
      this.$store.dispatch('photos/fetchAll')
  },
  data() {
    return {
      isOpen: false,
      routeTransitioning: false,
      links: [
        {link: '/nps', display: 'National Parks'},
        {link: '/oip', display: 'Other Inspiring Places'},
        {link: '/about', display: 'About'},
      ],
    }
  },
  watch: {
    $route(to, from) {
      this.isOpen = false;
      this.routeTransitioning = true;
      setTimeout(() => {
        this.routeTransitioning = false;
      }, 1000);
    }
  }
};
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  html, body {
    height: 100%;
  }

  .uk-offcanvas-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .content {
    flex: 1 0 auto;
  }

  .footer {
    position: relative;
    z-index: -10;
    flex-shrink: 0;
  }

  .animated {
    position: fixed;
    width: 100vw;
    z-index: -1 !important;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }

</style>
