import type Portfolio from "../../domain/portfolio/portfolio";
import type { ErrorStates } from "../error/errorState";

export interface IdAndCategory {
  id: string;
  category: string;
}

export default interface PortfolioPageStore {
  loading: boolean;
  error: ErrorStates.ErrorStatesEnum;
  portfolio: Portfolio;
  categories: IdAndCategory[]
}
