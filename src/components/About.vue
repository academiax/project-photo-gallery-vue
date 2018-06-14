<template>
  <div>
    <Title :title="name"></Title>
    <div class="container">
      <div class="jumbotron">
        <p class="text-justify">{{ subtitle }}</p>
        <p class="text-justify">{{ subtitle2 }}</p>
        <p class="text-left">{{ subtitle3}}</p>
        <img id="about-img" class="img-responsive img" src="img/about.jpg" alt="">
        <p class="text-center"><sub>{{ subtitle4 }}{{ link }}</sub></p>
      </div>
    </div>
    <!-- Footer -->
    <footer class="text-center">
      <small>
        <span>Developed and designed by&nbsp;</span>Xavi Ro. &copy; 2015<span
        class="min-footer">. All rights reserved.</span>
      </small>
    </footer>
  </div>
</template>

<script>/* eslint-disable */
import Title from "./Title";
export default {
  name: 'About',
  components: {Title},
  data() {
    return {
      name: 'About',
      subtitle: 'This is an HDR photo gallery of US National Parks and other inspiring places. HDR\n' +
      '          photography is a technique that reveals hidden details by merging several photos taken at different\n' +
      '          exposures.',
      subtitle2: 'This project is made possible by the support of my traveling partner, Hilde. I will\n' +
      '          update\n' +
      '          the site whenever I get new material. Thanks for checking it out!',
      subtitle3: 'Xavier',
      subtitle4: 'Also, feel free to ask any question about our 16 national parks trip, use and cite\n' +
      '          the\n' +
      '          images for non comercial purposes, request high resolution images, give comments, or report bugs in a message\n' +
      '          at',
      link: '<a href="http://www.xaviro.com">my portfolio site.</a>'


    }
  }
}
</script>
