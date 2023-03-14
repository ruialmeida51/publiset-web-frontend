import type Portfolio from "@/sdk/model/domain/portfolio/portfolio";
import ErrorStates from "@/sdk/model/store/error/errorState";
import type PortfolioPageStore from "@/sdk/model/store/portfolio/portfolioPageState";
import publisetPortfolioClient from "@/sdk/services/publisetPortfolioClient";
import axios from "axios";
import { catchAndLogError } from "@/utils/http/catchAndLogError";
import { defineStore } from "pinia";
import type { IdAndCategory } from "@/sdk/model/store/portfolio/portfolioPageState";

export const usePortfolioStore = defineStore("portfolioPageStore", {
  state: (): PortfolioPageStore => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    portfolio: {} as Portfolio,
    categories: [] as IdAndCategory[],
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
      this.portfolio = {} as Portfolio;
      this.categories = [] as IdAndCategory[];
    },
    async fetchPortfolio() {
      return Promise.resolve(publisetPortfolioClient.getPortfolio()).then(
        (item) => {
          this.portfolio = item;
          this.categories = [];
          item.categories.forEach((value: string, key: string) => {
            this.categories.push({ id: key, category: value });
          });
        }
      );
    },
    async fetchData() {
      Promise.all([this.fetchPortfolio()])
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

export default usePortfolioStore;
