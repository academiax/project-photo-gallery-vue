<template>
  <div class="uk-position-fixed uk-width uk-padding-small quote">
    <cite>“The mountains are calling and I must go.”</cite>
    <br>
    <q>John Muir</q>
  </div>
</template>

<script>
export default {
  name: 'Quote',
};
</script>

<style scoped>
  .quote {
    z-index: 100;
    background: rgba(0,0,0,0.75);
    color: white;
  }
</style>
