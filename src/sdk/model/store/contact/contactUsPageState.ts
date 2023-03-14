import type ContactUs from "../../domain/contactUs/contactUs";
import type ErrorStates from "../error/errorState";

export default interface ContactUsPageState {
  loading: boolean;
  contactUs: ContactUs;
  error: ErrorStates.ErrorStatesEnum;
}
