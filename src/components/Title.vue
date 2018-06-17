<template>
  <h1 class="uk-margin-large-bottom uk-margin-large-top">
    <a
      class="uk-margin-small-right"
      v-if="$route.params.codeId"
      @click="$router.go(-1)"
    >
      <vk-icon
        icon="chevron-left"
        ratio="2"
      >
      </vk-icon>
    </a>
    {{title}}
  </h1>
</template>

<script>
export default {
  name: 'Title',
  components: {},
  props: ['title'],
};
</script>
