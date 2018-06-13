/* eslint-disable */
<template>
  <div id="app">

    <Nav/>

    <!--NGVIEW-->
    <div class="relative">
      <div class="container-fluid">
        <div class="row-fluid no-gutter">
          <router-view></router-view>
        </div>
      </div>
    </div>

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
