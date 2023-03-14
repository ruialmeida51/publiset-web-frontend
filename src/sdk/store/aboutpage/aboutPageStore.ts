import { defineStore } from "pinia";
import { publisetAboutUsClient } from "@/sdk/services/publisetAboutUsClient";

import axios from "axios";
import type { AboutUs } from "@/sdk/model/domain/aboutUs/aboutUs";
import { catchAndLogError } from "@/utils/http/catchAndLogError";
import ErrorStates from "@/sdk/model/store/error/errorState";
import AboutUsPageState from "@/sdk/model/store/about/aboutUsPageState";

export const useAboutUsStore = defineStore("aboutUsStore", {
  state: () => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    aboutUs: {} as AboutUs,
  }),
  getters: {
    state: (state) => new AboutUsPageState(state.loading, state.aboutUs, state.error),
    shouldShowError: (state) => state.loading == false && state.error != ErrorStates.ErrorStatesEnum.None,
    shouldShowContent: (state) => state.loading == false && state.error == ErrorStates.ErrorStatesEnum.None,
  },
  actions: {
    async fetchAboutUs() {
      return Promise.resolve(publisetAboutUsClient.getAboutUs())
        .then((item) => {
          console.log("📝 Fetched about us data successfuly 📝");
          this.aboutUs = item;
        })
        .catch((error) => (this.error = catchAndLogError(error, axios)));
    },
    async fetchData() {
      Promise.all([this.fetchAboutUs()])
        .then((result) => {
          return new Promise((resolve) =>
            setTimeout(() => resolve(result), 1000)
          );
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
});

export default useAboutUsStore;
