<template>
  <div class="network-error">
    <h1>{{ errorInformation.code }}</h1>
    <h2>Lamentamos o incómodo</h2>
    <h4>{{ errorInformation.whatHappend }}</h4>
  </div>
</template>

<script lang="ts">
import ErrorStates from "@/sdk/model/store/error/errorState";
import { defineComponent, ref, toRefs, watch } from "vue";

class ErrorInformation {
  code: string;
  whatHappend: string;

  constructor(code: string, whatHappened: string) {
    this.code = code;
    this.whatHappend = whatHappened;
  }
}

export default defineComponent({
  name: "ErrorComponent",
  props: {
    errorState: Number,
  },
  setup(props) {
    const { errorState: currentErrorState } = toRefs(props);
    const errorInformation = ref<ErrorInformation>(
      new ErrorInformation("", "")
    );

    watch(
      currentErrorState,
      (newErrorState) => {
        evaluateError(newErrorState);
      },
      { immediate: true }
    );

    function evaluateError(errorState: Number | undefined) {
      if (errorState == ErrorStates.ErrorStatesEnum.NetworkError.valueOf()) {
        errorInformation.value = new ErrorInformation(
          "400",
          "Ocorreu um erro a tentar obter as informações necessárias. Por favor, tente novamente."
        );
      } else if (
        errorState == ErrorStates.ErrorStatesEnum.ServerError.valueOf()
      ) {
        errorInformation.value = new ErrorInformation(
          "500",
          "Ocorreu um erro a contactar o servidor. Por favor, volte mais tarde, iremos tentar resolver o problema o mais breve possível."
        );
      }
    }

    return {
      currentErrorState,
      errorInformation,
      evaluateError,
    };
  },
});
</script>

<style scoped>
.network-error {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  align-items: center;
  width: 100%;
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 0.8;
}

h2,
h3 {
  font-weight: 300;
  color: white;
}

h1 {
  font-weight: 700;
  color: white;
  font-size: 8em;
}

h2 {
  margin: 20px 0;
}

h3 {
  font-size: 2.5em;
}

h4 {
  display: inline-block;
  margin: 0 15px;
  font-weight: oblique;
}
</style>
