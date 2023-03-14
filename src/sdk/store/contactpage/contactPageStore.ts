import { defineStore } from "pinia";
import { publisetContactUsClient } from "@/sdk/services/publisetContactUsClient";
import { catchAndLogError } from "@/utils/http/catchAndLogError";

import type ContactUs from "@/sdk/model/domain/contactUs/contactUs";

import axios from "axios";
import type ContactUsPageState from "@/sdk/model/store/contact/contactUsPageState";
import ErrorStates from "@/sdk/model/store/error/errorState";

export const useContactUsStore = defineStore("contactUsStore", {
  state: (): ContactUsPageState => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    contactUs: {} as ContactUs,
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
      this.contactUs = {} as ContactUs;
    },
    async fetchContactUs() {
      return Promise.resolve(publisetContactUsClient.getContactUs()).then(
        (item) => {
          console.log("📝 Fetched contact us data successfuly 📝");
          this.contactUs = item;
        }
      );
    },
    async fetchData() {
      Promise.all([this.fetchContactUs()])
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

export default useContactUsStore;
