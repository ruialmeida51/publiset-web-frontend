import type Portfolio from "../../domain/portfolio/portfolio";
import type { ErrorStates } from "../error/errorState";

export default class PortfolioPageStore {
  loading: boolean;
  error: ErrorStates.ErrorStatesEnum;
  portfolio: Portfolio;

  constructor(
    loading: boolean,
    error: ErrorStates.ErrorStatesEnum,
    portfolio: Portfolio
  ) {
    this.loading = loading;
    this.error = error;
    this.portfolio = portfolio;
  }
}
