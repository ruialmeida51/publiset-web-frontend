<template>
  <NavigationBar />
  <div class="portfolio-page">
    <h1 class="title">
      <pre>Portfolio</pre>
    </h1>
  </div>
  <BottomBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";

export default defineComponent({
  name: "PortfolioPage",
  components: { NavigationBar, BottomBar },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
