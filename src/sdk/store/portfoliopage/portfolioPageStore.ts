import type Portfolio from "@/sdk/model/domain/portfolio/portfolio";
import ErrorStates from "@/sdk/model/store/error/errorState";
import PortfolioPageStore from "@/sdk/model/store/portfolio/portfolioPageState";
import publisetPortfolioClient from "@/sdk/services/publisetPortfolioClient";
import axios from "axios";
import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolioPageStore", {
  state: () => ({
    loading: true as boolean,
    error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
    portfolio: {} as Portfolio,
  }),
  getters: {
    state: (state) => new PortfolioPageStore(state.loading, state.error, state.portfolio),
    shouldShowError: (state) => state.loading == false && state.error != ErrorStates.ErrorStatesEnum.None,
    shouldShowContent: (state) => state.loading == false && state.error == ErrorStates.ErrorStatesEnum.None,
    numOfItems: (state) => state.portfolio.categories?.length,
  },
  actions: {
    async fetchPortfolio() {
      return Promise.resolve(publisetPortfolioClient.getPortfolio())
        .then((item) => {
          console.log("📝 Fetched portfolio data successfuly 📝");
          this.portfolio = item;
        })
        .catch((error) => (this.error = catchAndLogError(error, axios)));
    },
    async fetchData() {
      Promise.all([this.fetchPortfolio()])
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

export default usePortfolioStore;
function catchAndLogError(error: any, axios: any): ErrorStates.ErrorStatesEnum {
  throw new Error("Function not implemented.");
}

