<template>
  <v-footer light>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="mr-5 text-xs-right subheading font-weight-black">
            <v-icon class="black--text">code</v-icon>
            con
            <v-icon class="red--text">favorite</v-icon>
            por marces
            <a href="https://github.com/marcesdan">
              <img src="assets/github.png" alt="GitHub" height="22">
            </a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>
<style>
  .theme--light.v-footer {
    background: #fafafa;
  }
</style>