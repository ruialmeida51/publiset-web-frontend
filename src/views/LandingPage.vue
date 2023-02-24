<template>
  <NavigationBar />
  <div class="landing-page">
    <div class="title-div">
      <h1 class="title">
        <pre>{{ landingPageTitle }}</pre>
      </h1>
    </div>

    <div class="services-div">
      <ul class="services">
        <li v-for="service in services" :key="service">
          {{ service }}
        </li>
      </ul>
    </div>

    <div class="catalog-div">
      <p>Catálogos</p>
      <button v-for="button in buttons" :key="button">
        {{ button }}
      </button>
    </div>
  </div>

  <BottomBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/navigationbar/NavigationBar.vue";
import BottomBar from "@/components/bottombar/BottomBar.vue";

export default defineComponent({
  name: "LandingPage",
  components: { NavigationBar, BottomBar },
  data() {
    return {
      landingPageTitle: "less is the\nnew more",
      services: [
        "Vinil, decoração de montras e viaturas",
        "Serigrafia, Estamparia e Sublimação, merchandise e têxteis",
        "Corte e gravação a laser, CNC",
        "Outdoors, luminosos e monoblocos",
        "Impressão digital de grande e pequeno formato",
        "Sinalética",
        "Impressão 3D",
        "Brindes personalizados",
        "Design, branding e gestão de redes socais.",
      ],
      instagramLink: "https://facebook.com",
      messengerLink: "https://facebook.com",
      whatsAppLink: "https://facebook.com",
      buttons: ["Roly", "Sol's", "Work Wear", "Stamina", "Impacto"],
    };
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
/*
Landing page styling
*/
.landing-page {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: [col] auto [col] 1fr;
  grid-template-rows: [row] auto [row] auto;
  grid-template-areas: "left right" "content content";
  row-gap: 110px;
  height: 100%;
  margin-left: 110px;
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
  margin: 0;
  padding: 0;
}

.services-div li {
  font-size: 18px;
  font-weight: regular;
}

@media only screen and (max-width: 1600px) {
  .title {
    font-size: 150px;
    line-height: 0.75em;
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 1460px) {
  .title {
    font-size: 150px;
    line-height: 0.75em;
    margin-bottom: 30px;
  }

  .landing-page {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: [col] auto;
    grid-template-rows: [row] auto [row] auto [row] auto;
    grid-template-areas: "left" "right" "content";
    margin-left: 65px;
  }

  .title-div {
    grid-area: left;
    align-items: end;
    display: inline-flex;
    margin-top: 65px;
  }

  .services-div {
    grid-area: right;
    align-items: center;
    display: inline-flex;
    margin: 0;
  }

  .catalog-div {
    grid-area: content;
    align-items: start;
    display: inline-flex;
    align-content: flex-start;
  }

  .catalog-div p {
    margin-right: 30px;
  }
}

@media only screen and (max-width: 900px) {
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
    margin-left: 30px;
    height: auto;
  }

  .catalog-div button {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 630px) {
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
    margin-left: 30px;
    height: auto;
  }

  .catalog-div button {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 520px) {
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
    margin-left: 30px;
    height: auto;
  }

  .catalog-div button {
    margin-top: 10px;
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
    margin-left: 15px;
    height: auto;
  }

  .services-div li {
    font-size: 15px;
  }

  .catalog-div button {
    margin-top: 10px;
  }
}
</style>
