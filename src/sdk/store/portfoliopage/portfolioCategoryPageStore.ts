import ErrorStates from "@/sdk/model/store/error/errorState";
import publisetPortfolioClient from "@/sdk/services/publisetPortfolioClient";
import axios from "axios";
import { catchAndLogError } from "@/utils/http/catchAndLogError";
import { defineStore } from "pinia";
import type PortfolioCategory from "@/sdk/model/domain/portfolio/portfolioCategory";
import type PortfolioCategoryPageStore from "@/sdk/model/store/portfolio/portfolioCategoryPageState";

export const usePortfolioCategoryStore = defineStore(
  "portfolioCategoryPageStore",
  {
    state: (): PortfolioCategoryPageStore => ({
      loading: true as boolean,
      error: ErrorStates.ErrorStatesEnum.None as ErrorStates.ErrorStatesEnum,
      portfolio: {} as PortfolioCategory,
    }),
    getters: {
      shouldShowError: (state) =>
        state.loading == false &&
        state.error != ErrorStates.ErrorStatesEnum.None,
      shouldShowContent: (state) =>
        state.loading == false &&
        state.error == ErrorStates.ErrorStatesEnum.None,
    },
    actions: {
      resetState() {
        this.loading = true;
        this.error = ErrorStates.ErrorStatesEnum.None;
        this.portfolio = {} as PortfolioCategory;
      },
      async fetchPortfolioCategory(id: string) {
        return Promise.resolve(
          publisetPortfolioClient.getPortfolioCategoryById(id)
        ).then((item) => {
          this.portfolio = item;
        });
      },
      async fetchData(id: string) {
        Promise.all([this.fetchPortfolioCategory(id)])
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
  }
);

export default usePortfolioCategoryStore;
