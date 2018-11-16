<template>
  <v-app light id="inspire">
    <v-slide-y-transition mode="out-in">
      <router-view class="view"></router-view>
    </v-slide-y-transition>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    data: () => ({}),
    components: {
      'footer-component': Footer,
    },
  }
</script>
