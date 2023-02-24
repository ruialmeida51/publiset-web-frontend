<template>
  <NavigationBar />
  <div class="about-us-page">
    <h1 class="title">
      <pre>About us</pre>
    </h1>
  </div>
  <BottomBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";

export default defineComponent({
  name: "AboutPage",
  components: { NavigationBar, BottomBar },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
