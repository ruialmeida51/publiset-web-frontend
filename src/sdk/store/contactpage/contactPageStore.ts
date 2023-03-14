import { defineStore } from "pinia";
import { publisetContactUsClient } from "@/sdk/services/publisetContactUsClient";
import { catchAndLogError } from "@/utils/http/catchAndLogError";

import type ContactUs from "@/sdk/model/domain/contactUs/contactUs";

import axios from "axios";
import ContactUsPageState from "@/sdk/model/store/contact/contactUsPageState";
import ErrorStates from "@/sdk/model/store/error/errorState";

export const useContactUsStore = defineStore("contactUsStore", {
  state: () => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    contactUs: {} as ContactUs,
  }),
  getters: {
    state: (state) => new ContactUsPageState(state.loading, state.contactUs, state.error),
    shouldShowError: (state) => state.loading == false && state.error != ErrorStates.ErrorStatesEnum.None,
    shouldShowContent: (state) => state.loading == false && state.error == ErrorStates.ErrorStatesEnum.None,
  },
  actions: {
    async fetchContactUs() {
      return Promise.resolve(publisetContactUsClient.getContactUs())
        .then((item) => {
          console.log("📝 Fetched contact us data successfuly 📝");
          this.contactUs = item;
        })
        .catch((error) => (this.error = catchAndLogError(error, axios)));
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

export default useContactUsStore;
