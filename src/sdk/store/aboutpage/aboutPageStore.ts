import { defineStore } from "pinia";
import {
  publisetAboutUsClient,
  AboutUs,
} from "@/sdk/services/publisetAboutUsClient";

import ErrorState from "../error/errorState";
import axios from "axios";

export module aboutPageStore {
  export class AboutUsPageState {
    loading: boolean;
    aboutUs: AboutUs;
    error: ErrorState.ErrorStatesEnum;

    constructor(
      loading: boolean,
      aboutUs: AboutUs,
      error: ErrorState.ErrorStatesEnum
    ) {
      this.loading = loading;
      this.aboutUs = aboutUs;
      this.error = error;
    }
  }

  export const useAboutUsStore = defineStore("aboutUsStore", {
    state: () => ({
      loading: true as boolean,
      error: {} as ErrorState.ErrorStatesEnum,
      aboutUs: {} as AboutUs,
    }),
    getters: {
      state: (state) =>
        new AboutUsPageState(
          state.loading,
          state.aboutUs,
          state.error
        ),
      shouldShowError: (state) => state.loading == false && state.error != null,
      shouldShowContent: (state) => state.loading == false && state.error == null,
    },
    actions: {
      async fetchAboutUs() {
        return Promise.resolve(publisetAboutUsClient.getAboutUs())
          .then((item) => {
            console.log("📝 Fetched about us data successfuly 📝");
            this.aboutUs = item
          })
          .catch((error) => {
            if (axios.isAxiosError(error)) {
              console.log("💥 Axios Network Error: " + error.message + " 💥");
              this.error = ErrorState.ErrorStatesEnum.NetworkError;
            } else {
              console.log(
                "💥 An unexpected error occurred: " + error.message + " 💥"
              );
              this.error = ErrorState.ErrorStatesEnum.ServerError;
            }
          });
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
}

export default aboutPageStore;
