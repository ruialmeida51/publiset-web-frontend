import type ErrorStates from "@/sdk/store/error/errorState";
import type ContactUs from "../../domain/contactUs/contactUs";

export default class ContactUsPageState {
  loading: boolean;
  contactUs: ContactUs;
  error: ErrorStates.ErrorStatesEnum;

  constructor(
    loading: boolean,
    contactUs: ContactUs,
    error: ErrorStates.ErrorStatesEnum
  ) {
    this.loading = loading;
    this.contactUs = contactUs;
    this.error = error;
  }
}
