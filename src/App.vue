/* eslint-disable */
<template>
  <div id="app">


    <!-- Navbar -->
    <header class="navbar navbar-static-top nav-xr" id="top" role="banner">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">Xavier Reyes Ochoa <span style="font-size:12px">HDR Photography</span></a>
        </div>
        <nav id="bs-navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/nps">National Parks</router-link></li>
            <li><router-link to="/oip">Other Inspiring Places</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

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
export default {
  name: 'App',
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
