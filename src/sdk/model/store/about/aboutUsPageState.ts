import type { AboutUs } from "../../domain/aboutUs/aboutUs";
import type ErrorStates from "../error/errorState";

export default class AboutUsPageState {
  loading: boolean;
  aboutUs: AboutUs;
  error: ErrorStates.ErrorStatesEnum;

  constructor(
    loading: boolean,
    aboutUs: AboutUs,
    error: ErrorStates.ErrorStatesEnum
  ) {
    this.loading = loading;
    this.aboutUs = aboutUs;
    this.error = error;
  }
}
