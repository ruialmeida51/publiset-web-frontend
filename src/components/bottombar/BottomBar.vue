<template>
    <div :class="['bottom-bar']">
        <div :class="['opening-hours']">
            <p>{{ openHoursMessage }}</p>
        </div>

        <div :class="['social-media']">
            <a :href="facebookLink" target="_blank">
                <img src="@/assets/icons/ic-facebook.png" alt="Facebook" />
            </a>
            <a :href="instagramLink" target="_blank">
                <img src="@/assets/icons/ic-instagram.png" alt="Instagram" />
            </a>
            <a :href="messengerLink" target="_blank">
                <img src="@/assets/icons/ic-messenger.png" alt="Messenger" />
            </a>
            <a :href="whatsAppLink" target="_blank">
                <img src="@/assets/icons/ic-whatsapp.png" alt="Whatsapp" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BottomBar',
  data() {
    return {
      facebookLink: 'https://facebook.com',
      instagramLink: 'https://facebook.com',
      messengerLink: 'https://facebook.com',
      whatsAppLink: 'https://facebook.com',
    };
  },
  setup() {
    const openHoursMessage = ref<string>();
    const openHoursMessageVerbose = 'Segunda a Sexta — 09h00 . 12h30 — 14h00 . 18h00';
    const openHoursMessageMobile = '09h00 . 12h30 — 14h00 . 18h00';

    function onWindowResize() {
      const w = window.innerWidth;
      if (w < 576) {
        openHoursMessage.value = openHoursMessageMobile;
      } else {
        openHoursMessage.value = openHoursMessageVerbose;
      }
    }
    return {
      openHoursMessage,
      onWindowResize,
    };
  },
  created() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  },

  unmounted() {
    window.removeEventListener('resize', this.onWindowResize);
  },
});
</script>

<style scoped>
/**
Bottom bar styling
*/
.bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    position: relative;
}

/**
Opening hours styling
 */
.opening-hours {
    margin-left: 10px;
}

.opening-hours p {
    font-weight: normal;
    font-size: 18px;
}

/**
Social media styling
 */
.social-media {
    vertical-align: middle;
}

.social-media img {
    width: 20px;
    height: 20px;
    fill: white;
    filter: invert(100%);
}

.social-media img {
    margin-right: 10px;
}

@media only screen and (max-width: 576px) {
  .opening-hours p {
    font-size: 14px;
}
}

@media only screen and (min-width: 2560px) and (max-width: 3840px) {
  .opening-hours p {
    font-size: 25px;
  }
}

@media only screen and (min-width: 3840px) {
  .opening-hours p {
    font-size: 40px;
  }
}

</style>
