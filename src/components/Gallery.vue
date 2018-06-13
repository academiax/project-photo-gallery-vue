<template>

  <div>
    <h1>{{this.galleries[this.$route.params.galleryId].name}}</h1>
    <div
      v-for="(row, index) in this.galleries[this.$route.params.galleryId].code"
      :key="index"
    >
      <router-link
        v-for="(link, index) in row"
        :key="index"
        :to="{ path: link}"
        append
      >{{link}}
      </router-link>
    </div>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'Gallery',
  data() {
    return {
      galleries: {
        nps: {
          name: 'National Parks',
          code: [
            ['arch', 'deat', 'yose'],
            ['bryc', 'gran', 'josh'],
            ['lass', 'redw', 'crat'],
            ['cany', 'zion', 'capi'],
            ['mesa', 'olym', 'rain'],
            ['pinn', 'blac', 'sequ'],
          ],
          suffix: 'National Park',
        },

        oip: {
          name: 'Other Inspiring Places',
          code: [
            ['ante', 'hors', 'nava'],
            ['monu', 'natu', 'pink'],
            ['hoov', 'mexi', 'diam'],
          ],
          suffix: '',
        },
      }
    }
  }
}
</script>
