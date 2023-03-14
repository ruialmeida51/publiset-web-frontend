import { defineStore } from "pinia";
import { publisetServicesClient } from "@/sdk/services/publisetServicesClient";
import { publisetCatalogClient } from "@/sdk/services/publisetCatalogClient";
import { catchAndLogError } from "@/utils/http/catchAndLogError";
import axios from "axios";
import ErrorStates from "@/sdk/model/store/error/errorState";
import LandingPageState from "@/sdk/model/store/landingpage/landingPageState";
import type Catalog from "@/sdk/model/domain/catalog/catalog";
import type Service from "@/sdk/model/domain/services/services";

export const useLandingPageStore = defineStore("landingPageStore", {
  state: () => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    services: [] as Service[],
    catalogs: [] as Catalog[],
  }),
  getters: {
    state: (state) => new LandingPageState(state.loading, state.services, state.catalogs, state.error),
    shouldShowError: (state) => state.loading == false && state.error != ErrorStates.ErrorStatesEnum.None,
    shouldShowContent: (state) => state.loading == false && state.error == ErrorStates.ErrorStatesEnum.None,
  },
  actions: {
    async fetchServices() {
      return Promise.resolve(publisetServicesClient.getServices())
        .then((items) => {
          console.log("📝 Fetched services successfuly 📝");
          this.services = items as Service[];
        })
        .catch((error) => (this.error = catchAndLogError(error, axios)));
    },
    async fetchCatalogs() {
      return Promise.resolve(publisetCatalogClient.getCatalogs())
        .then((items) => {
          console.log("📝 Fetched catalogs successfuly 📝");
          this.catalogs = items as Catalog[];
        })
        .catch((error) => (this.error = catchAndLogError(error, axios)));
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

export default useLandingPageStore;
