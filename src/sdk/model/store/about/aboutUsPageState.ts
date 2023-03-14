import type { AboutUs } from "../../domain/aboutUs/aboutUs";
import type ErrorStates from "../error/errorState";

export default interface AboutUsPageState {
  loading: boolean;
  aboutUs: AboutUs;
  error: ErrorStates.ErrorStatesEnum;
}
