import { defineStore } from "pinia";
import { publisetContactUsClient, ContactUs } from "@/sdk/services/publisetContactUsClient";

import ErrorState from "../error/errorState";
import axios from "axios";

export module contactUsPageStore {
  export class ContactUsPageState {
    loading: boolean;
    contactUs: ContactUs;
    error: ErrorState.ErrorStatesEnum;

    constructor(
      loading: boolean,
      contactUs: ContactUs,
      error: ErrorState.ErrorStatesEnum
    ) {
      this.loading = loading;
      this.contactUs = contactUs;
      this.error = error;
    }
  }

  export const useContactUsStore = defineStore("contactUsStore", {
    state: () => ({
      loading: true as boolean,
      error: {} as ErrorState.ErrorStatesEnum,
      contactUs: {} as ContactUs,
    }),
    getters: {
      state: (state) =>
        new ContactUsPageState(
          state.loading,
          state.contactUs,
          state.error
        ),
      shouldShowError: (state) => state.loading == false && state.error != null,
      shouldShowContent: (state) => state.loading == false && state.error == null,
    },
    actions: {
      async fetchContactUs() {
        return Promise.resolve(publisetContactUsClient.getContactUs())
          .then((item) => {
            console.log("📝 Fetched contact us data successfuly 📝");
            this.contactUs = item
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
        Promise.all([this.fetchContactUs()])
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

export default contactUsPageStore;
