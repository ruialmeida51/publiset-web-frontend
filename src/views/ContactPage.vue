<template>
  <div class="contact-us-wrapper">
    <NavigationBar />
    <div class="contact-us-page-wrapper page-content-horizontal-margins page-content-vertical-margins">
      <div class="contact-us-page">
        <div class="contact-form">
          <div class="nameInputDiv contact-input-layout">
            <label for="name">
              <input type="text" id="name" placeholder="Nome" />
              <span>Nome</span>
            </label>
          </div>
          <div class="emailInputDiv contact-input-layout">
            <label for="email">
              <input class="emailinput" type="email" placeholder="Email" required="true" />
              <span>Email</span>
            </label>
          </div>
          <div class="subjectInputDiv contact-input-layout">
            <label for="subject">
              <input type="text" placeholder="Assunto" required="true" />
              <span>Assunto</span>
            </label>
          </div>
          <div class="messageInputDiv contact-input-layout">
            <label for="textarea">
              <textarea id="message-textarea" ref="textarea" placeholder="Mensagem" required="true" />
              <span>Mensagem</span>
            </label>
          </div>
          <div class="submitInputDiv contact-input-layout">
            <button>enviar e-mail</button>
          </div>
        </div>
        <div class="contact-information">
          <div class="emailTitleDiv contact-information-layout">
            <img class="contact-information-icon" src="@/assets/icons/ic-mail.png" />
            <!--<h1>Email</h1>-->
            <h3>{{ email }}</h3>
          </div>
          <div class="phonetitle contact-information-layout">
            <img class="contact-information-icon" src="@/assets/icons/ic-phone-call.png" />
            <!--<h1>Telemóvel</h1>-->
            <h3>{{ telephone }}</h3>
          </div>
          <div class="addresstitle contact-information-layout">
            <img class="contact-information-icon" src="@/assets/icons/ic-address.png" />
            <!--<h1>Morada</h1>-->
            <h3>{{ address }}</h3>
          </div>
          <div class="openhourstitle contact-information-layout">
            <img class="contact-information-icon" src="@/assets/icons/ic-calendar.png" />
            <!--<h1>Horário</h1>-->
            <h3>{{ openHours }}</h3>
          </div>
        </div>
        <div class="map">
          <iframe class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.903990181407!2d-8.207913119634714!3d41.105123559452466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd249976e9bd574d%3A0x3ce237a2c72897e8!2sR.%20de%20Agrelos!5e0!3m2!1sen!2spt!4v1677798623721!5m2!1sen!2spt"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
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
  name: "ContactPage",
  components: { NavigationBar, BottomBar },
  data() {
    return {
      address: "Rua de Agrelos 421, 4625-556 São Lourenço do Douro, Portugal",
      telephone: "+351 910 929 174",
      email: "geral@publiset.pt",
      openHours: "Segunda à Sexta | 09h00 . 12h30 - 14h00 . 18h00",
    };
  },
});
</script>

<style scoped>
.contact-us-wrapper {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.contact-us-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.contact-us-page {
  display: grid;
  grid-template-columns: [col] 0.5fr [col] 0.5fr [col] 1fr;
  grid-template-rows: [row] auto [row] auto;
  grid-template-areas: "info info map" "form form map";
  column-gap: 100px;
  height: 100%;
  width: 100%;
  justify-content: end;
  align-items: center;
  align-content: center;
}

.contact-form {
  grid-area: form;
  display: grid;
  column-gap: 20px;
  row-gap: 10px;
  width: 100%;
  grid-template-columns: [col] 1fr [col] 1fr [col] 1fr;
  grid-template-rows: [row] auto [row] auto [row] auto [row] auto;
  grid-template-areas: "name email email" "subject subject subject" "message message message" "submit submit submit";
}

.contact-information {
  grid-area: info;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  margin-bottom: 20px;
}

.contact-information-layout {
  display: inline-flex;
  align-items: center;
  min-width: 100%;
}

.contact-information-icon {
  width: 32px;
  height: 32px;
  margin-right: 20px;
  fill: white;
  filter: invert(100%);
}

.map {
  grid-area: map;
  display: flex;
  height: 85%;
  width: 100%;
}

.google-map {
  height: 100%;
  width: 100%;
  border: 0;
  max-height: 500px;
}

.nameInputDiv {
  grid-area: name;
  margin-top: 10px;
}

.emailInputDiv {
  grid-area: email;
  margin-top: 10px;
}

.subjectInputDiv {
  grid-area: subject;
  margin-top: 10px;
}

.messageInputDiv {
  grid-area: message;
  margin-top: 20px;
}

.contact-input-layout {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.messageInputDiv textarea {
  min-width: 100%;
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  border: 0;
  padding: 0;
  padding-left: 5px;
  min-height: 80px;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  border-bottom: 1px solid grey;
  color: white;
  font-style: oblique;
  font-weight: oblique;
}

.messageInputDiv textarea:focus {
  border-bottom: 1px solid white;
  outline: none;
}

.contact-input-layout p {
  margin: 3px;
}

.submitInputDiv {
  grid-area: submit;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  margin-top: 5px;
  height: 40px;
}

.submitInputDiv button {
  background-color: black;
  border-color: rgb(220, 220, 220);
  color: white;
  height: 100%;
  width: 50%;
  cursor: pointer;
  padding: 0.6em 1.7em;
  border: 1px solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: bold;
}

.submitInputDiv button:hover {
  background-color: #2d2d2d;
}

.contact-form input {
  min-width: 100%;
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  border: 0;
  padding: 0;
  padding-left: 5px;
  min-height: 40px;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid grey;
  color: white;
  font-style: oblique;
  font-weight: oblique;
}

.contact-form input::placeholder {
  opacity: 0;
}

.contact-form textarea::placeholder {
  opacity: 0;
}

.contact-form input:focus {
  outline: none;
  border-bottom: 1px solid white;
}

h3 {
  font-weight: normal;
}

label {
  margin-bottom: 10px;
  position: relative;
  font-size: 16px;
}

span {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(8px);
  transition-duration: 300ms;
}

.subjectInputDiv label:focus-within>span,
.nameInputDiv label:focus-within>span,
.emailInputDiv label:focus-within>span,
input:not(:placeholder-shown)+span {
  color: grey;
  transform: translateY(-10px);
  font-size: 0.825em;
}

.messageInputDiv label:focus-within>span,
textarea:not(:placeholder-shown)+span {
  color: grey;
  transform: translateY(-20px);
  font-size: 0.825em;
}

input:-webkit-autofill {
  -webkit-background-clip: text;
  -webkit-text-fill-color: white;
}

@media only screen and (max-width: 1200px) {
  .contact-form {
    grid-area: form;
    display: grid;
    column-gap: 20px;
    row-gap: 5px;
    grid-template-columns: [col] 1fr [col] 1fr;
    grid-template-rows: [row] auto [row] auto [row] auto [row] auto [row] auto [row] auto [row] auto;
    grid-template-areas: "name name" "email email" "subject subject" "message message" "message message" "message message" "submit submit";
  }
}

@media only screen and (max-width: 800px) {
  .contact-us-page-wrapper {
    margin-left: 20px;
    margin-right: 20px;
  }

  .contact-us-page {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
    justify-content: space-evenly;
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
    row-gap: 20px;
  }

  .contact-information-layout {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-form {
    width: 100%;
  }

  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
