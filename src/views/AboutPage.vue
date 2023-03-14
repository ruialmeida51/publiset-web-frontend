<template>
  <div class="about-us-wrapper">
    <NavigationBar />
    <div class="fullscreen-loading-wrapper" v-show="store.loading">
      <fullscren-loading
        class="fullscreen-overlay"
        :active="store.loading"
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
        :errorState="store.error.valueOf()"
      />
    </transition>

    <transition name="fade" mode="out-in">
      <div
        class="about-us-page page-content-horizontal-margins page-content-vertical-margins"
        v-show="store.shouldShowContent"
      >
        <div class="about-us-text">
          <h1>{{ store.aboutUs.title_one }}</h1>
          <p>{{ store.aboutUs.description_one }}</p>
          <h1>{{ store.aboutUs.title_two }}</h1>
          <p>{{ store.aboutUs.description_two }}</p>
        </div>

        <div class="about-us-images">
          <img
            v-for="(image, index) in store.aboutUs.images"
            :key="image.formats.thumbnail.url"
            :class="`about-us-image${index + 1}`"
            :src="`${createImageUrl(image.formats.thumbnail.url)}`"
          />
        </div>
      </div>
    </transition>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useAboutUsStore from "@/sdk/store/aboutpage/aboutPageStore";
import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";
import ErrorComponent from "@/components/error/ErrorComponent.vue";

export default defineComponent({
  name: "AboutPage",
  components: { NavigationBar, BottomBar, ErrorComponent },
  setup() {
    const store = useAboutUsStore();

    return { store };
  },
  data() {
    return {
      loader: "dots",
      backgroundColor: "#000",
      dotsColor: "#fff",
      baseUrl: "" as string,
    };
  },
  methods: {
    createImageUrl(imageUrl: string): string {
      return import.meta.env.VITE_SERVER_URL + imageUrl;
    },
  },
  unmounted() {
    this.store.resetState();
  },
  mounted() {
    this.store.fetchData();
  },
});
</script>

<style scoped>
.about-us-wrapper {
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

.about-us-page {
  display: grid;
  grid-gap: 10px;
  height: 100%;
  grid-template-columns: [col] 1fr [col] 1fr;
  grid-template-rows: [row] auto;
  grid-template-areas: "text image";
  column-gap: 50px;
  align-items: center;
}

.about-us-text {
  height: auto;
  display: flex;
  align-items: flex-start;
  grid-area: text;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.about-us-text h1 {
  font-weight: bold;
  text-align: justify;
  font-size: 30px;
}

.about-us-text p {
  text-align: justify;
  font-weight: normal;
  font-size: 18px;
  word-wrap: break-word;
  white-space: pre-line;
  margin-top: 20px;
  margin-bottom: 20px;
}

.about-us-images {
  grid-area: image;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: [col] 1fr [col] 1fr;
  grid-template-rows: [row] auto [row] auto [row] auto [row] auto;
  grid-template-areas:
    "firstimage firstimage"
    "firstimage firstimage"
    "secondimage thirdimage"
    "secondimage fourthimage";
  max-width: 100%;
  max-height: 100%;
}

.about-us-image1 {
  grid-area: firstimage;
  height: 250px;
}

.about-us-image2 {
  grid-area: secondimage;
  height: 260px;
}

.about-us-image3 {
  grid-area: thirdimage;
  height: 125px;
}

.about-us-image4 {
  grid-area: fourthimage;
  height: 125px;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1024px) {
  .about-us-page {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    height: auto;
    justify-content: space-evenly;
    margin-left: 80px;
    margin-right: 80px;
  }

  .about-us-text h1 {
    font-weight: bold;
    text-align: justify;
    font-size: 25px;
  }

  .about-us-text p {
    text-align: justify;
    font-weight: normal;
    font-size: 16px;
  }

  .about-us-images {
    margin: 0;
    padding: 0;
    min-width: 100%;
  }

  .about-us-image1 {
    grid-area: firstimage;
    height: 200px;
  }

  .about-us-image2 {
    grid-area: secondimage;
    height: 210px;
  }

  .about-us-image3 {
    grid-area: thirdimage;
    height: 100px;
  }

  .about-us-image4 {
    grid-area: fourthimage;
    height: 100px;
  }
}

@media only screen and (max-width: 900px) {
  .about-us-page {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    height: auto;
    justify-content: space-evenly;
    margin-left: 60px;
    margin-right: 60px;
  }

  .about-us-text h1 {
    font-weight: bold;
    text-align: justify;
    font-size: 25px;
  }

  .about-us-text p {
    text-align: justify;
    font-weight: normal;
    font-size: 16px;
  }
}

@media only screen and (max-width: 576px) {
  .about-us-page {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    height: auto;
    justify-content: space-evenly;
    margin-left: 20px;
    margin-right: 20px;
  }

  .about-us-text h1 {
    font-weight: bold;
    text-align: justify;
    font-size: 20px;
  }

  .about-us-text p {
    text-align: justify;
    font-weight: normal;
    font-size: 14px;
  }

  .about-us-image {
    margin: 0;
    padding: 0;
  }
}
</style>
