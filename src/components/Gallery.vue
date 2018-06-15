<template>

  <div>
    <Title :title="galleries[this.$route.params.galleryId].name"></Title>
    <vk-grid
      divided
      gutter="small"
      v-vk-height-match="{ target: ' .uk-card' }"
      class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center"
    >
      <router-link
        v-for="(link, index) in this.galleries[this.$route.params.galleryId].code"
        :key="index"
        :to="{ path: link}"
        append
      >
        <Photo
          :img-url="'http://photogallery.xaviro.com/img/highres/' + link + '/1.jpg'"
          :caption="photos[link][0] + ' ' + galleries[$route.params.galleryId].suffix"
        />
      </router-link>
    </vk-grid>
  </div>
</template>

<script>/* eslint-disable */
import Vue from 'Vue';
import Title from "./Title";
import Photo from "./Photo";

export default {
  name: 'Gallery',
  components: {Photo, Title},
  methods: {
    loaded(link) {
      // use vue.set, vue.delete when adding properties to allow refreshing
      Vue.set(this.spinner, link, true);
    }
  },
  data() {
    return {
      spinner: {},
      galleries: {
        nps: {
          name: 'National Parks',
          code: [
            'arch',
            'deat',
            'yose',
            'bryc',
            'gran',
            'josh',
            'lass',
            'redw',
            'crat',
            'cany',
            'zion',
            'capi',
            'mesa',
            'olym',
            'rain',
            'pinn',
            'blac',
            'sequ'
          ],
          suffix: 'National Park',
        },

        oip: {
          name: 'Other Inspiring Places',
          code: [
            'ante', 'hors', 'nava',
            'monu', 'natu', 'pink',
            'hoov', 'mexi', 'diam'
          ],
          suffix: '',
        },
      },
      photos: {
        pinn: ['Pinnacles', ['', '', '', '', '', '']],
        josh: ['Joshua Tree', ['Joshua Tree and Boulders', 'BLM Grounds', 'BLM Grounds', 'Park Boulevard', 'Joshua Tree and Boulders', 'Joshua Tree and Boulders', 'Hidden Valley Campground', 'Hidden Valley', 'Hidden Valley', 'Barker Dam Trail', 'Barker Dam Trail', 'Barker Dam Trail', 'Indian Cove', 'Petroglyphs', 'Cholla Cactus Garden']],
        gran: ['Grand Canyon', ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']],
        ante: ['Antelope Canyon Navajo Tribal Park', ['', '', '', '', '', '']],
        mesa: ['Mesa Verde', ['Point Lookout', 'Balcony House', 'Navajo Canyon View', 'Cliff Palace', 'Sun Point View', 'Long House']],
        blac: ['Black Canyon of the Gunnison', ['', '', '', '', '', '']],
        monu: ['Monument Valley Navajo Tribal Park', ['', '', '', '', '', '']],
        arch: ['Arches', ['Delicate Arch', 'Three Gossips', 'The Organ', 'Sheep Rock', 'Tower of Babel', 'Balanced Rock', 'Garden of Eden', 'North and South Windows', 'Double Arch', 'Parade of Elephants', 'Sand Dune Arch', 'Park Ave', 'Landscape Arch', 'Wall near Navajo Arch', 'Double O Arch']],
        hors: ['Horseshoe Bend', ['']],
        cany: ['Canyonlands', ['Monument Basin', 'Shafer Canyon Overlook', 'Mesa Arch', 'Aztec Butte Grainery', 'Whale Rock', 'Upheaval Dome', 'Green River Overlook', 'Soda Springs Basin', 'Grand View Point Overlook', 'Superbowl Campground', 'Big Spring Canyon Overlook', 'Big Spring Canyon Overlook', 'Pothole Point', 'Elephant Hill Trail', 'Devils Kitchen']],
        natu: ['Natural Bridges National Monument', ['Sipapu Bridge', 'Owachomo Bridge']],
        nava: ['Navajo National Monument', ['Betatakin/Talastima Cliff Dwelling', 'Stormy Night']],
        capi: ['Capitol Reef', ['Navajo Butte', 'Behunin Cabin', 'Capitol Dome', 'Petroglyphs', 'The Castle', 'Scenic Drive', 'Scenic Drive', 'Scenic Drive', 'Chimney Rock']],
        bryc: ['Bryce Canyon', ['Inspiration Point', 'Fairview Point', 'Natural Bridge', 'Ponderosa Canyon', 'Raven', 'The Whale', 'Near Inspiration Point', 'Near Sunrise Point', 'Navajo Trail', 'Navajo Trail', 'Navajo Trail', 'Navajo Trail', 'Queen Trail', 'Navajo Trail', 'Near Sunset Point']],
        pink: ['Coral Pink Sand Dunes State Park', ['', '', '', '', '', '']],
        zion: ['Zion', ['View from Angel\'s Landing', 'Checkerboard Mesa', 'Canyon Overlook', 'Watchman', 'Altar of Sacrifice', 'Virgin River', 'Court of the Patriarchs', 'Weeping Rock', 'Sunset at Weeping Rock', 'Upper Emerald Pool', 'Middle Emerald Pool', 'Great White Throne', 'The Narrows', 'The Narrows', 'Temple of Sinawava']],
        hoov: ['Hoover Dam', ['', '', '', '']],
        deat: ['Death Valley', ['Near Grapevine', 'Dante\'s View', 'Twenty Mule Team Canyon', 'Zabriskie Point', 'Zabriskie Point', 'Harmony Borax Works', 'Mesquite Flat Sand Dunes', 'Devil\'s Golf Course', 'Badwater Basin', 'Badwater Basin', 'Artist\'s Pallette', 'Golden Canyon', 'Golden Canyon', 'Salt Creek', 'Ubehebe Crater', 'Milky Way from Emigrant', 'Mesquite Flat Sand Dunes', 'Panamint']],
        sequ: ['Sequoia', ['View from Moro Rock', 'Milk Ranch Peak', 'Moro Rock', 'Castle Rocks', 'Smoky Sun', 'Sierra Nevada']],
        yose: ['Yosemite', ['Glacier Point', 'Tunnel View', 'El Capitan', 'Vernal Fall', 'Olmsted Point', 'Tenaya Lake', 'Lembert Dome', 'Cathedral Lake', 'Cathedral Peak']],
        lass: ['Lassen Volcanic', ['Bumpass Hell', 'Sulphur Works', 'Lassen Peak', 'Glacier Rock', 'Chaos Crags and Jumbles', 'Cinder Cone', 'Fantastic Lava Beds', 'Painted Dunes', 'Cinder Cone']],
        redw: ['Redwood', ['High Bluff Overlook', 'Lady Bird Johnson Grove', 'Lady Bird Johnson Grove', 'Redwood Creek Overlook', 'Fern Canyon', 'Gold Bluffs Beach', 'Roosevelt Elk', 'Big Tree Wayside', 'High Bluff Overlook']],
        crat: ['Crater Lake', ['Wizard Island', 'Mount Thielsen', 'Devil\'s Backbone', 'The Watchman', 'Clearest Water', 'Vidae Falls', 'Pinnacles Overlook', 'Phantom Ship', 'Mount Scott']],
        mexi: ['Mexican Hat', ['']],
        diam: ['Diamon Lake', ['']],
        rain: ['Mount Rainier', ['', '', '', '', '', '']],
        olym: ['Olympic', ['', '', '', '', '', '']],
      }
    }
  }
}
</script>
