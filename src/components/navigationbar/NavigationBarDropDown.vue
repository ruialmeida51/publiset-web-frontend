<!-- eslint-disable vuejs-accessibility/no-access-key -->
<template>
    <div :class="['burger-menu-dropdown', { 'visible': isBurgerMenuOpen }]">
        <a>Quem somos</a>
        <a>Portfólio</a>
        <a>Contactos</a>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'NavigationBarDropDown',
  props: { toggled: Boolean },
  setup(props) {
    const { toggled: isBurgerMenuOpen } = toRefs(props);
    return {
      isBurgerMenuOpen,
    };
  },
});
</script>

<style scoped>
/**
Dropdown styling
 */
.burger-menu-dropdown {
    background-color: black;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: growDown 300ms ease-in-out forwards;
    margin-top: 10px;
    margin-left: 10px;
    transform-origin: top center;
    position: fixed;
    margin-top: 55px;
}

.burger-menu-dropdown:not(.visible) {
    display: none;
}

.burger-menu-dropdown.visible {
    display: table-column;
}

/* Links inside the dropdown */
.burger-menu-dropdown a {
    font-weight: regular;
    color: #d0d0d0;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 40px;
    cursor: pointer;
    height: 50px;
}

.burger-menu-dropdown a:hover {
    color: white;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: white;
    text-underline-offset: 15px;
}

@keyframes growDown {
    0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
}
</style>
