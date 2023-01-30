<template>
    <div class="landing-page">
        <div class="title-div">
            <h1 class="title">
                <pre>{{ landingPageTitle }}</pre>
            </h1>

            <ul class="services">
                <li v-for="service in services" :key="service">
                    {{ service }}
                </li>
            </ul>
        </div>

        <div class="catalog">
            <p>Catálogos</p>
            <button v-for="button in buttons" :key="button">
                {{ button }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BottomBar',
  data() {
    return {
      landingPageTitle: 'less is the\nnew more',
      services: [
        'Vinil, decoração de montras e viaturas',
        'Serigrafia, Estamparia e Sublimação, merchandise e têxteis',
        'Corte e gravação a laser, CNC',
        'Outdoors, luminosos e monoblocos',
        'Impressão digital de grande e pequeno formato',
        'Sinalética',
        'Impressão 3D',
        'Brindes personalizados',
        'Design, branding e gestão de redes socais.',
      ],
      instagramLink: 'https://facebook.com',
      messengerLink: 'https://facebook.com',
      whatsAppLink: 'https://facebook.com',
      buttons: ['Roly', 'Sol\'s', 'Work Wear', 'Stamina', 'Impacto'],
    };
  },
  setup() {
    return {

    };
  },
});
</script>

<style scoped>
/*
Landing page styling
*/
.landing-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: 60px;
    margin-top: 15%;
}

/*
Title & Services div styling
*/
.title-div {
    margin-bottom: 25px;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
}

/*
Services styling
*/
.services p {
    margin: 0;
    padding: 0;
}

.services ul {
  counter-reset: index;
  padding: 0;
  max-width: 300px;
}

/* List element */
.services li {
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
}

/* Element counter */
.services li::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 18px;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-color: white;
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services li:hover {
    background-color: #0d0d0d;
    transform: scale(1.02);
    animation: scaleAnimation 0.1s;
}

@keyframes scaleAnimation {
  0%   {transform: scale(1);}
  100% {transform: scale(1.02);}
}

/* Element separation */
.services li + li {
  border-top: 1px solid rgba(255,255,255,0.2);
}

.services {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
    padding: 0;
}

/*
Title styling
*/
.title pre {
    margin: 0;
    padding: 0;
}

.title {
    font-size: 100px;
    font-weight: bold;
    line-height: normal;
    height: fit-content;
    margin: 0;
    padding: 0;
}

/*
Button row styling
*/
.catalog {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

.catalog p {
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    margin-right: 60px;
    height: fit-content;
    align-self: center;
}

.catalog button {
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

.catalog button:hover {
    background-color: gainsboro;
}

/**
Mobile/Low Resolution CSS
*/
@media only screen and (max-width: 450px) {
    .landing-page {
        flex: 1;
        display: flex;
        align-items: initial;
        margin-left: 20px;
    }
    .services li {
        margin-right: 20px;
    }

    .title {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .catalog button {
        margin-top: 10px;
        font-size: 15px;
    }
}

@media only screen and (max-width: 768px) and (min-width: 450px) {
    .landing-page {
        flex: 1;
        display: flex;
        align-items: initial;
        margin-left: 20px;
        margin-top: 15%;
    }

    .services li {
        margin-right: 20px;
    }

    .title {
        font-size: 75px;
    }

    .catalog {
        margin-bottom: 120px;
    }

    .catalog button {
        margin-top: 10px;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px) {
    .landing-page {
        margin-left: 60px;
        margin-top: 5%;
    }

    .services li {
        margin-right: 60px;
    }

    .title {
        font-size: 100px;
    }
}

@media only screen and (min-width: 1280px) and (max-width: 1360px) {
    .landing-page {
        margin-left: 60px;
        margin-top: 15%;
    }

    .services li {
        margin-right: 60px;
    }

    .title {
        font-size: 100px;
    }
}

@media only screen and (min-width: 1360px) and (max-width: 1440px) {
    .landing-page {
        margin-left: 80px;
        margin-top: 10%;
    }

    .services li {
        margin-right: 80px;
    }

    .title {
        font-size: 125px;
    }
}

@media only screen and (min-width: 1440px) and (max-width: 2560px) {
    .landing-page {
        margin-left: 100px;
        margin-top: 15%;
    }

    .services li {
        margin-right: 100px;
    }

    .title {
        font-size: 125px;
    }
}

@media only screen and (min-width: 2560px) and (max-width: 3840px) {
    .landing-page {
        margin-left: 120px;
        margin-top: 25%;
    }

    .services li {
        margin-right: 120px;
        font-size: 25px;
    }

    .title {
        font-size: 175px;
    }
}

@media only screen and (min-width: 3840px) {
    .landing-page {
        margin-left: 120px;
        margin-top: 25%;
    }

    .services li {
        margin-right: 120px;
        font-size: 35px;
    }

    .title {
        font-size: 250px;
    }

    .catalog p {
        font-size: 44px;
    }

    .catalog button {
        width: 350px;
        height: 100px;
        font-size: 44px;
    }
}
</style>
