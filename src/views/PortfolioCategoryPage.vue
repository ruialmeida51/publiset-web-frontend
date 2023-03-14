<template>
  <div class="portfolio-category-wrapper">
    <NavigationBar />
    <transition name="fade" mode="out-in">
      <div class="portfolio-category-page-wrapper">
        <div class="fullscreen-loading-wrapper" v-show="store.loading">
          <fullscren-loading class="fullscreen-overlay" :active="store.loading" :is-full-page="false" :loader="loader"
            :background-color="backgroundColor" :opacity="1" :color="dotsColor" />
        </div>

        <transition name="fade" mode="out-in">
          <ErrorComponent class="error-component" v-show="store.shouldShowError" :errorState="store.error.valueOf()" />
        </transition>

        <div class="portfolio-category-page-content page-content-horizontal-margins page-content-vertical-margins"
          v-show="store.shouldShowContent">
          <h1> {{ store.portfolio.category_name }} </h1>
          <p @click="onGoBackClick()"> {{ goBack }} </p>


          <img v-for="(image, index) in store.portfolio.images" :key="image.formats.thumbnail.url"
            :class="`about-us-image${index + 1}`" :src="`${createImageUrl(image.formats.thumbnail?.url)}`" />
        </div>
      </div>
    </transition>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";
import ErrorComponent from "@/components/error/ErrorComponent.vue";
import usePortfolioCategoryStore from "@/sdk/store/portfoliopage/portfolioCategoryPageStore";
import routes from "@/router/routerCostants";

export default defineComponent({
  name: "PortfolioCategoryPage",
  components: { NavigationBar, BottomBar, ErrorComponent },
  setup() {
    const store = usePortfolioCategoryStore();
    return { store };
  },
  data() {
    return {
      loader: "dots",
      backgroundColor: "#000",
      dotsColor: "#fff",
      goBack: "< voltar",
    };
  },
  methods: {
    createImageUrl(imageUrl: string): string {
      return import.meta.env.VITE_SERVER_URL + imageUrl;
    },
    onGoBackClick() {
      this.$router.push({ name: routes.portfolioPageRoute.routeName });
    },
  },
  beforeUnmount() {
    this.store.resetState();
  },
  mounted() {
    this.store.fetchData(this.$route.params.id.toString());
  },
});
</script>

<style scoped>
.portfolio-category-wrapper {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.portfolio-category-page-wrapper {
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
  text-align: center;
}

.fullscreen-loading-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 0;
}

.portfolio-page-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}

.portfolio-category-page-content p {
  font-size: 18px;
  margin-bottom: 50px;
  cursor: pointer;
}

.portfolio-category-page-content h1 {
  font-weight: bold;
  font-size: 40px;
}
</style>
