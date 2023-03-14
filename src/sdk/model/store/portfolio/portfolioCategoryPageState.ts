import type PortfolioCategory from "../../domain/portfolio/portfolioCategory";
import type { ErrorStates } from "../error/errorState";

export default interface PortfolioCategoryPageStore {
  loading: boolean;
  error: ErrorStates.ErrorStatesEnum;
  portfolio: PortfolioCategory;
}
