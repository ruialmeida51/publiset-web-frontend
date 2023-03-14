<template>
  <div class="portfolio-page-wrapper">
    <NavigationBar />
    <transition name="fade" mode="out-in">
      <div class="portfolio-page-wrapper">
        <div class="fullscreen-loading-wrapper" v-show="store.state.loading">
          <fullscren-loading
            class="fullscreen-overlay"
            :active="store.state.loading"
            :is-full-page="false"
            :loader="loader"
            :background-color="backgroundColor"
            :opacity="1"
            :color="dotsColor"
          />
        </div>

        <transition name="fade" mode="out-in">
          <ErrorComponent
            class="error-component"
            v-show="store.shouldShowError"
            :errorState="store.state.error.valueOf()"
          />
        </transition>

        <transition name="fade" mode="out-in">
          <div
            class="portfolio-page-content page-content-horizontal-margins page-content-vertical-margins"
            :style="{ 'grid-template-rows': store.numOfItems / 2 }"
            v-show="store.shouldShowContent"
          >
            <p
              v-for="(category, index) in store.state.portfolio.categories"
              :key="index"
              :style="{ 'grid-row': calculateRow(index) }"
            >
              {{ category }}
            </p>
          </div>
        </transition>
      </div>
    </transition>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import usePortfolioStore from "@/sdk/store/portfoliopage/portfolioPageStore";
import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";
import ErrorComponent from "@/components/error/ErrorComponent.vue";

export default defineComponent({
  name: "PortfolioPage",
  components: { NavigationBar, BottomBar, ErrorComponent },
  setup() {
    const store = usePortfolioStore();

    return { store };
  },
  data() {
    return {
      loader: "dots",
      backgroundColor: "#000",
      dotsColor: "#fff",
    };
  },
  methods: {
    createRowMap(): string[] {
      let list = [];

      for (let i = 0; i < this.store.numOfItems; i += 2) {
        list.push(
          //dis don't work
          this.store.portfolio.categories[i],
          this.store.portfolio.categories[i + 1]
        );
      }

      console.log("list of lists" + list);
      return list;
    },
    calculateRow(index: number): number {
      return 1;
    },
  },
  mounted() {
    this.store.fetchData().then((_) => {
      this.createRowMap();
    });
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

.error-component {
  display: flex;
  height: 100%;
  justify-content: center;
}

.fullscreen-loading-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 0;
}

.portfolio-page-content {
  display: grid;
  grid-template-columns: [col] 1fr [col] 1fr;
  grid-template-rows: auto;
  column-gap: 40px;
  justify-content: end;
  align-items: center;
  align-content: center;
}
</style>
