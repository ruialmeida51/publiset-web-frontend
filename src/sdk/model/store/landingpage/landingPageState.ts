import type Catalog from "../../domain/catalog/catalog";
import type Service from "../../domain/services/services";
import type ErrorStates from "../error/errorState";

export default class LandingPageState {
  loading: boolean;
  services: Service[];
  catalogs: Catalog[];
  title: string;
  error: ErrorStates.ErrorStatesEnum;

  constructor(
    loading: boolean,
    services: Service[],
    catalogs: Catalog[],
    error: ErrorStates.ErrorStatesEnum
  ) {
    this.title = "less is the\nnew more";
    this.loading = loading;
    this.services = services;
    this.catalogs = catalogs;
    this.error = error;
  }
}
