<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="navigation">
        <div class="burger-menu" :class="{ open: toggled }" @click="onMenuClick">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div :class="['publiset-logo']" @click="onPublisetLogoClick">
            <img src="@/assets/publiset-logo.svg" alt="Publiset Logo" />
        </div>

        <div :class="['contact-us']" @click="onContactUsClick">
            <p>Fale Connosco</p>
        </div>
    </div>

    <NavigationBarDropDown v-model:toggled="toggled" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavigationBarDropDown from './NavigationBarDropDown.vue';

export default defineComponent({
  name: 'NavigationBar',
  props: {},
  components: { NavigationBarDropDown },
  setup() {
    const toggled = ref<boolean>();
    function onMenuClick() {
      toggled.value = !toggled.value;
    }

    function onContactUsClick() {
      alert('Something to fix later.');
    }

    function onPublisetLogoClick() {
      alert('Something to fix later.');
    }

    return {
      toggled,
      onMenuClick,
      onContactUsClick,
      onPublisetLogoClick,
    };
  },
});
</script>

<style scoped>
/**
Navigation bar styling
*/
.navigation {
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: space-between;
    margin-top: 8px;
}

/**
Publiset logo styling
*/
.publiset-logo {
    margin: auto;
    position: relative;
    width: 310px;
    height: 40px;
    cursor: pointer;
    overflow: hidden;
}

/**
Contact us styling
*/
.contact-us {
    position: relative;
    float: right;
    cursor: pointer;
    line-height: 0px;
    margin-right: 10px;
    font-weight: normal;
    font-size: 18px;
}

/**
Burger menu styling
*/
.burger-menu {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
}

.burger-menu span {
    background-color: white;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms
}

.burger-menu span:nth-child(1) {
    top: 0px;
    left: 0px;
}

.burger-menu span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
}

.burger-menu span:nth-child(3) {
    bottom: 0px;
    left: 0px;
}

.burger-menu:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
}

.burger-menu:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
}

.burger-menu:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
}

.burger-menu.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
}

.burger-menu.open span:nth-child(2) {
    opacity: 0;
}

.burger-menu.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
}

/**
Mobile/Low Resolution CSS
*/
@media only screen and (max-width: 576px) {

    /**
    Publiset logo styling
    */
    .publiset-logo {
        margin: 0;
        margin-right: 10px;
        margin-left: 10px;
        min-height: 30px;
        min-width: 155px;
        float: right;
    }

    /**
    Contact us styling
    */
    .contact-us {
        display: none;
    }

    /**
    Burger menu styling
    */
    .burger-menu {
        width: 35px;
        height: 30px;
        margin: 10px 10px;
        cursor: pointer;
    }
}
</style>
