<template>
  <div class="portfolio-page-wrapper">
    <NavigationBar />
    <transition name="fade" mode="out-in">
      <div class="portfolio-page-wrapper">
        <div class="fullscreen-loading-wrapper" v-show="store.state.loading">
          <fullscren-loading class="fullscreen-overlay" :active="store.state.loading" :is-full-page="false"
            :loader="loader" :background-color="backgroundColor" :opacity="1" :color="dotsColor" />
        </div>

        <transition name="fade" mode="out-in">
          <ErrorComponent class="error-component" v-show="store.shouldShowError"
            :errorState="store.state.error.valueOf()" />
        </transition>

        <transition name="fade" mode="out-in">
          <div class="portfolio-page-content page-content-horizontal-margins page-content-vertical-margins"
            v-show="store.shouldShowContent">
            <div class="category-grid" :style="{ gridTemplateRows: `repeat(${numOfRows}, 60px)` }">
              <div class="category-row" v-for="categoryName in store.state.portfolio.categories">
                <p> {{ categoryName }} </p>
              </div>
            </div>
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
import { debounce } from "ts-debounce";


export default defineComponent({
  name: "PortfolioPage",
  components: { NavigationBar, BottomBar, ErrorComponent },
  setup() {
    const store = usePortfolioStore();
    const calculateCategoryGridNumOfRows = (): number => {
      console.log(`📏 Calculating number of rows for category grid. 📏`)
      if (window.innerWidth > 715) {
        return store.portfolio.categories?.length / 2 || 0
      } else {
        return store.portfolio.categories?.length || 0
      }
    };

    const debouncedCalculateCategoryGridNumOfRows = debounce(calculateCategoryGridNumOfRows, 200, { isImmediate: true });

    return { store, debouncedCalculateCategoryGridNumOfRows };
  },
  data() {
    return {
      loader: "dots",
      backgroundColor: "#000",
      dotsColor: "#fff",
      numOfRows: 0,
    };
  },
  methods: {
    onResize() {
      this.calculateCategoryGridNumOfRows()
    },
    calculateCategoryGridNumOfRows() {
      this.debouncedCalculateCategoryGridNumOfRows().then((numOfRows) => {
        console.log(`📏 Applying number of rows to grid. Quantity:${numOfRows} 📏`)
        this.numOfRows = numOfRows;
      });
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.store.fetchData().then(() => { this.calculateCategoryGridNumOfRows() })
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
  height: 100%
}

.category-grid {
  display: grid;
  grid-template-columns: [col] 1fr [col] 1fr;
  column-gap: 40px;
  row-gap: 20px;
  align-content: end;
  height: 100%;
}

.category-row p {
  font-weight: bold;
  font-size: 40px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  border-color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1em;
}

.category-row p:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1070px) {
  .portfolio-page-content {
    margin-left: 45px;
    margin-right: 45px;
  }

  .category-grid {
    grid-template-columns: [col] 1fr [col] 1fr;
  }
}

@media only screen and (max-width: 980px) {
  .portfolio-page-content {
    margin-left: 20px;
    margin-right: 20px;
  }

  .category-grid {
    grid-template-columns: [col] 1fr [col] 1fr;
  }

  .category-row p {
    font-size: 30px;
  }
}

@media only screen and (max-width: 715px) {
  .category-grid {
    grid-template-columns: [col] 1fr;
    align-content: start;
  }
}
</style>
