import { defineStore } from "pinia";
import {
  publisetServicesClient,
  Service,
} from "@/sdk/services/publisetServicesClient";
import {
  publisetCatalogClient,
  Catalog,
} from "@/sdk/services/publisetCatalogClient";

import ErrorState from "../error/errorState";
import axios from "axios";

export module landingPageStore {
  export class LandingPageState {
    loading: boolean;
    services: Service[];
    catalogs: Catalog[];
    title: string;
    error: ErrorState.ErrorStatesEnum;

    constructor(
      loading: boolean,
      services: Service[],
      catalogs: Catalog[],
      error: ErrorState.ErrorStatesEnum
    ) {
      this.title = "less is the\nnew more";
      this.loading = loading;
      this.services = services;
      this.catalogs = catalogs;
      this.error = error;
    }
  }

  export const useLandingPageStore = defineStore("landingPageStore", {
    state: () => ({
      loading: true as boolean,
      error: {} as ErrorState.ErrorStatesEnum,
      services: [] as Service[],
      catalogs: [] as Catalog[],
    }),
    getters: {
      state: (state) =>
        new LandingPageState(
          state.loading,
          state.services,
          state.catalogs,
          state.error
        ),
      shouldShowError: (state) => state.loading == false && state.error != null,
      shouldShowContent: (state) =>
        state.loading == false && state.error == null,
    },
    actions: {
      async fetchServices() {
        return Promise.resolve(publisetServicesClient.getServices())
          .then((items) => {
            console.log("📝 Fetched services successfuly 📝");
            this.services = items as Service[];
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
      async fetchCatalogs() {
        return Promise.resolve(publisetCatalogClient.getCatalogs())
          .then((items) => {
            console.log("📝 Fetched catalogs successfuly 📝");
            this.catalogs = items as Catalog[];
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
        Promise.all([this.fetchServices(), this.fetchCatalogs()])
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

export default landingPageStore;
