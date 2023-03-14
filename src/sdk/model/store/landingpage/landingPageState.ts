import type Catalog from "../../domain/catalog/catalog";
import type Service from "../../domain/services/services";
import type ErrorStates from "../error/errorState";

export default interface LandingPageState {
  loading: boolean;
  services: Service[];
  catalogs: Catalog[];
  title: string;
  error: ErrorStates.ErrorStatesEnum;
}
