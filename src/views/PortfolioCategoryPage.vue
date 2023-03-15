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
          <h1>{{ store.portfolio.category_name }}</h1>
          <p @click="onGoBackClick()">{{ goBack }}</p>

          <div class="portfolio-category-grid" :style="{
            gridTemplateColumns: `repeat(${store.portfolio.images?.length}, 175px)`,
          }">
            <img v-for="(image, index) in store.portfolio.images" :key="image.formats.thumbnail.url"
              :class="`portfolio-image${index + 1}`" v-lazy="{
                src: `${createImageUrl(image.formats.thumbnail.url)}`,
                loading: errorlazy.loading,
                error: errorlazy.error,
              }" />
          </div>
        </div>
      </div>
    </transition>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

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
    const errorlazy = reactive({
      loading: "/src/assets/pictures/img-placeholder.png",
      error: "/src/assets/pictures/img-error.png",
    });

    return { store, errorlazy };
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
  margin-bottom: 25px;
  cursor: pointer;
}

.portfolio-category-page-content h1 {
  font-weight: bold;
  font-size: 40px;
}

.portfolio-category-grid {
  display: grid;
  grid-template-rows: [row] 1fr [row] 1fr;
  row-gap: 10px;
  column-gap: 10px;
  height: 100%;
  overflow-x: auto;
}

.portfolio-category-grid img {
  display: flex;
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-width: 175px;
  min-height: 200px;
}

@media only screen and (max-width: 1070px) {
  .portfolio-category-page-content {
    margin-left: 45px;
    margin-right: 45px;
  }
}

@media only screen and (max-width: 980px) {
  .portfolio-category-page-content {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media only screen and (max-width: 715px) {
  .portfolio-category-page-content h1 {
    font-size: 30px;
  }

  .portfolio-category-page-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    justify-content: space-evenly;
  }

  .portfolio-category-grid {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .portfolio-category-grid img {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-width: 150px;
    max-height: 350px;
  }
}
</style>
