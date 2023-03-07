<template>
  <div class="portfolio-page-wrapper">
    <NavigationBar />
    <div class="portfolio-page page-content-horizontal-margins page-content-vertical-margins">
      <h1 class="title">
        <p>🚧 Portfólio em construção 🚧</p>
      </h1>
    </div>
    <BottomBar />
  </div>
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

<style scoped>
.portfolio-page-wrapper {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.portfolio-page {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.portfolio-page p {
  text-align: center;
}
</style>
