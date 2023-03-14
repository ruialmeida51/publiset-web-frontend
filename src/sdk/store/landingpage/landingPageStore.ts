import { defineStore } from "pinia";
import { publisetServicesClient } from "@/sdk/services/publisetServicesClient";
import { publisetCatalogClient } from "@/sdk/services/publisetCatalogClient";
import { catchAndLogError } from "@/utils/http/catchAndLogError";
import axios from "axios";
import ErrorStates from "@/sdk/model/store/error/errorState";
import type LandingPageState from "@/sdk/model/store/landingpage/landingPageState";
import type Catalog from "@/sdk/model/domain/catalog/catalog";
import type Service from "@/sdk/model/domain/services/services";

export const useLandingPageStore = defineStore("landingPageStore", {
  state: (): LandingPageState => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    services: [] as Service[],
    catalogs: [] as Catalog[],
    title: "less is the\nnew more",
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
      this.services = [] as Service[];
      this.catalogs = [] as Catalog[];
    },
    async fetchServices() {
      return Promise.resolve(publisetServicesClient.getServices()).then(
        (items) => {
          console.log("📝 Fetched services successfuly 📝");
          this.services = items as Service[];
        }
      );
    },
    async fetchCatalogs() {
      return Promise.resolve(publisetCatalogClient.getCatalogs()).then(
        (items) => {
          console.log("📝 Fetched catalogs successfuly 📝");
          this.catalogs = items as Catalog[];
        }
      );
    },
    async fetchData() {
      Promise.all([this.fetchServices(), this.fetchCatalogs()])
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

export default useLandingPageStore;
