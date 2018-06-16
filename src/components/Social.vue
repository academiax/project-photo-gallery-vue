<template>
  <div class="footer-xr">

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

  </div>
</template>

<script>
export default {
  name: 'Social',
};
</script>

<style scoped>
  .footer-xr {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  .social-icons {
    width: 100%;
  }

  .social-icons ul {
    padding: 10px;
    margin: 0;
    float: right;
    left: 50%;
  }

  .social-icons li {
    float: left;
    background-color: #f5f9fa!important;
  }

  .social-icons li a {
    display: block!important;
    width: 40px!important;
    height: 40px!important;
    text-indent: -9999px!important;
  }

  .social-icons li a:hover {
    background-position: 0 -40px!important;
  }

  .social-icons li.github a {
    background: url(http://photogallery.xaviro.com//img/icons/github.png) no-repeat 0 0;
  }

  .social-icons li.github a:hover {
    background-color: #000000;
  }

  .social-icons li.linkedin a {
    background: url(http://photogallery.xaviro.com//img/icons/linkedin.png) no-repeat 0 0;
  }

  .social-icons li.linkedin a:hover {
    background-color: #40b0ff;
  }

  .social-icons li.xaviro a {
    background: url(http://photogallery.xaviro.com//img/icons/xaviro.png) no-repeat 0 0;
  }

  .social-icons li.xaviro a:hover {
    background-color: #fe8228;
  }
</style>
