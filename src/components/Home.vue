<template>
  <div>
    <Quote></Quote>
    <div
      class="uk-background-cover uk-position-fixed uk-width uk-height-viewport background"
      :style="{backgroundImage: 'url(http://photogallery.xaviro.com/img/highres/arch/1.jpg)'}"
    >
    </div>
  </div>

</template>

<script>
import Quote from './Quote';

export default {
  name: 'Home',
  components: { Quote },
};
</script>

<style scoped>
.background {
  top: 0;
  z-index: -1;
}
</style>
