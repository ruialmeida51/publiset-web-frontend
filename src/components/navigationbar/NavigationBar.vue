<template>
  <div class="navigation">
    <div class="burger-menu" :class="{ open: toggled }" @click="onMenuClick">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div :class="['publiset-logo']" @click="onPublisetLogoClick">
      <img src="@/assets/icons/publiset-logo.svg" alt="Publiset Logo" />
    </div>

    <div :class="['contact-us']" @click="onContactUsClick">
      <p>Fale Connosco</p>
    </div>
  </div>

  <NavigationBarDropDown @closeDropDown="closeDropdownMenu" :toggled="toggled" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBarDropDown from "./NavigationBarDropDown.vue";
import routes from "@/router/routerCostants";

export default defineComponent({
  name: "NavigationBar",
  components: { NavigationBarDropDown },
  data() {
    return {
      toggled: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll, { passive: true });
  },
  unmounted() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.toggled = false;
    },
    onContactUsClick() {
      this.$router.push({ name: routes.contactUsPageRoute.routeName });
    },

    onPublisetLogoClick() {
      this.$router.push({ name: routes.landingPageRoute.routeName });
    },

    closeDropdownMenu() {
      this.$data.toggled = false;
    },
    onMenuClick() {
      this.$data.toggled = !this.$data.toggled || false;
    },
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
  position: absolute;
  left: 0;
  right: 0;
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
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 4px;
  transition-duration: 500ms;
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
@media only screen and (max-width: 800px) {

  /**
    Contact us styling
    */
  .contact-us {
    display: none;
  }

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
    position: relative;
  }
}

@media only screen and (max-width: 576px) {
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
