import { defineStore } from "pinia";
import { publisetAboutUsClient } from "@/sdk/services/publisetAboutUsClient";

import axios from "axios";
import type { AboutUs } from "@/sdk/model/domain/aboutUs/aboutUs";
import { catchAndLogError } from "@/utils/http/catchAndLogError";
import ErrorStates from "@/sdk/model/store/error/errorState";
import type AboutUsPageState from "@/sdk/model/store/about/aboutUsPageState";

export const useAboutUsStore = defineStore("aboutUsStore", {
  state: (): AboutUsPageState => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    aboutUs: {} as AboutUs,
  }),
  getters: {
    shouldShowError: (state) =>
      state.loading == false && state.error != ErrorStates.ErrorStatesEnum.None,
    shouldShowContent: (state) =>
      state.loading == false && state.error == ErrorStates.ErrorStatesEnum.None,
  },
  actions: {
    resetState() {
      this.loading = true;
      this.error = ErrorStates.ErrorStatesEnum.None;
      this.aboutUs = {} as AboutUs;
    },
    async fetchAboutUs() {
      return Promise.resolve(publisetAboutUsClient.getAboutUs()).then(
        (item) => {
          console.log("📝 Fetched about us data successfuly 📝");
          this.aboutUs = item;
        }
      );
    },
    async fetchData() {
      Promise.all([this.fetchAboutUs()])
        .then((result) => {
          return new Promise((resolve) =>
            setTimeout(() => resolve(result), 500)
          );
        })
        .catch((error) => {
          this.error = catchAndLogError(error, axios);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});

export default useAboutUsStore;
