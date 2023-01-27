<template>
  <NavigationBar/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationBar from './components/NavigationBar.vue';

@Options({
  components: {
    NavigationBar,
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Px-Grotesk, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}

@font-face {
  font-family: 'Px-Grotesk';
  src: url('~@/assets/fonts/pxgrotesk/PxGroteskPan-Thin.ttf') format('truetype');
  font-weight: thin;
  font-style: thin;
}

@font-face {
  font-family: 'Px-Grotesk';
  src: url('~@/assets/fonts/pxgrotesk/PxGroteskPan-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: bold;
}

@font-face {
  font-family: 'Px-Grotesk';
  src: url('~@/assets/fonts/pxgrotesk/PxGroteskPan-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

</style>
