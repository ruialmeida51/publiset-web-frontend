<template>
  <div class="landing-page-wrapper">
    <NavigationBar />
    <div class="fullscreen-loading-wrapper" v-show="store.loading">
      <fullscren-loading class="fullscreen-overlay" :active="store.loading" :is-full-page="false" :loader="loader"
        :background-color="backgroundColor" :opacity="1" :color="dotsColor" />
    </div>

    <transition name="fade" mode="out-in">
      <ErrorComponent class="error-component" v-show="store.shouldShowError" :errorState="store.error" />
    </transition>

    <transition name="fade" mode="out-in">
      <div class="landing-page page-content-horizontal-margins" v-show="store.shouldShowContent">
        <div class="title-div">
          <h1 class="title">
            <pre>{{ store.title }}</pre>
          </h1>
        </div>

        <div class="services-div">
          <ul class="services">
            <li v-for="service in store.services" :key="service.service">
              {{ service.service }}
            </li>
          </ul>
        </div>

        <div class="catalog-div">
          <p>Catálogos</p>
          <button v-for="button in store.catalogs" :key="button.name" @click="goToHyperlink(button.redirectUrl)">
            {{ button.name }}
          </button>
        </div>
      </div>
    </transition>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLandingPageStore from "@/sdk/store/landingpage/landingPageStore";

import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";
import ErrorComponent from "@/components/error/ErrorComponent.vue";

export default defineComponent({
  name: "LandingPage",
  components: { NavigationBar, BottomBar, ErrorComponent },
  setup() {
    const store = useLandingPageStore();
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
    goToHyperlink(url: string) {
      window.open(url, "_blank");
    },
  },
  beforeUnmount() {
    this.store.resetState();
  },
  mounted() {
    this.store.fetchData();
  },
});
</script>

<style scoped>
/*
Landing page styling
*/
.landing-page-wrapper {
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

.landing-page {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: [col] auto [col] 1fr;
  grid-template-rows: [row] auto [row] auto;
  grid-template-areas: "left right" "content content";
  row-gap: 110px;
  height: 100%;
}

.title {
  font-size: 200px;
  line-height: 0.75em;
}

.title-div {
  grid-area: left;
  align-items: end;
  display: inline-flex;
  margin-top: 10%;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}

.services-div {
  margin-left: 20%;
  grid-area: right;
  align-items: end;
  display: inline-flex;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}

.catalog-div {
  grid-area: content;
  align-items: start;
  display: inline-flex;
  align-content: flex-start;
}

/*
Button row styling
*/
.catalog-div {
  display: inline-flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.catalog-div p {
  font-weight: normal;
  font-size: 22px;
  text-transform: uppercase;
  margin-right: 60px;
  height: fit-content;
  align-self: center;
}

.catalog-div button {
  background-color: white;
  align-self: center;
  width: 205px;
  height: 51px;
  margin-right: 25px;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  border: 0;
}

.catalog-div button:hover {
  background-color: gainsboro;
}

/*
Services styling
*/

/* Element counter */
.services-div ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.services-div li {
  font-size: 18px;
  font-weight: normal;
}

.fullscreen-loading-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 0;
}

@media only screen and (max-width: 1600px) {
  .title {
    font-size: 150px;
    line-height: 1em;
  }
}

@media only screen and (max-width: 1460px) {
  .title {
    font-size: 150px;
    line-height: 1em;
  }

  .landing-page {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: [col] auto [col] 1fr;
    grid-template-rows: [row] auto [row] auto;
    grid-template-areas: "left right" "content content";
    row-gap: 65px;
  }

  .title-div {
    grid-area: left;
    align-items: end;
    display: inline-flex;
    margin-top: 65px;
    margin-bottom: 65px;
  }

  .catalog-div {
    display: inline-flex;
    flex-wrap: wrap;
    align-content: space-between;
  }

  .catalog-div p {
    margin-right: 30px;
  }
}

@media only screen and (max-width: 1400px) {
  .title {
    font-size: 150px;
  }

  .title-div {
    grid-area: left;
    display: inline-flex;
    margin-top: 65px;
  }
}

@media only screen and (max-width: 1300px) {
  .title {
    font-size: 125px;
    line-height: 0.75em;
    margin-bottom: 30px;
  }

  .landing-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    height: auto;
    row-gap: 40px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .catalog-div button {
    margin-top: 10px;
  }

  .services-div {
    grid-area: right;
    align-items: center;
    display: inline-flex;
    margin: 0;
  }
}

@media only screen and (max-width: 900px) {
  .title {
    font-size: 100px;
    line-height: 0.75em;
    margin-bottom: 30px;
  }

  .landing-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    height: auto;
    margin-left: 50px;
    margin-right: 50px;
  }

  .catalog-div button {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 560px) {
  .title {
    font-size: 80px;
    line-height: 0.75em;
  }

  .landing-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
  }

  .catalog-div {
    align-items: start;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }

  .catalog-div p {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }

  .catalog-div button {
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }
}

@media only screen and (max-width: 410px) {
  .title {
    font-size: 60px;
    line-height: 0.75em;
  }

  .landing-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    height: auto;
    row-gap: 16px;
  }

  .services-div li {
    font-size: 15px;
  }

  .catalog-div button {
    margin-top: 10px;
  }
}
</style>
