<template>
  <div class="about-us-wrapper">
    <NavigationBar />
    <div class="about-us-page page-content-horizontal-margins page-content-vertical-margins">
      <div class="about-us-text">
        <h1>{{ whoAreWeTitle }}</h1>
        <p>{{ whoAreWeText }}</p>
        <h1>{{ whatWeDoTitle }}</h1>
        <p>{{ whatWeDoText }}</p>
      </div>

      <div class="about-us-images">
        <img class="about-us-image1" src="@/assets/pictures/publiset-building.png" />
        <img class="about-us-image2" src="@/assets/pictures/publiset-building.png" />
        <img class="about-us-image3" src="@/assets/pictures/publiset-building.png" />
        <img class="about-us-image4" src="@/assets/pictures/publiset-building.png" />
      </div>
    </div>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";

export default defineComponent({
  name: "AboutPage",
  components: { NavigationBar, BottomBar },
  data() {
    return {
      whatWeDoTitle: "O que fazemos",
      whatWeDoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada " +
        " consequat metus ut rhoncus. Curabitur fermentum orci sapien, vestibulum ornare magna sollicitudin " +
        " pellentesque. Ut ornare id enim non vulputate. Suspendisse potenti. Aenean eu turpis vitae turpis " +
        " consectetur placerat. Fusce venenatis viverra metus. Fusce posuere id justo in dictum. Pellentesque " +
        " consequat lectus vitae leo suscipit aliquet. Integer in lectus a tellus porttitor accumsan id id ligula. " +
        " Fusce nec ligula condimentum, rhoncus enim ac, laoreet leo.",
      whoAreWeTitle: "Quem somos",
      whoAreWeText:
        "Com início de atividade em 1994, a Publiset " +
        " é hoje reconhecida como uma empresa de referência no setor das artes gráficas. " +
        " Em 2020 a nova gerência sentiu a necessidade de apostar no desenvolvimento tecnológico, " +
        " aliando as novas técnicas, materiais e métodos de produção. Esta aposta na modernização " +
        " permite responder às exigências e expectativas dos clientes nos mais diversos setores. " +
        " É unanimemente reconhecido o impulso nestes últimos anos, mantendo sempre o compromisso " +
        " entre tradição, modernidade e qualidade.",
    };
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
