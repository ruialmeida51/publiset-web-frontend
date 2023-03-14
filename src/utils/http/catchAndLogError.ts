import ErrorStates from "@/sdk/model/store/error/errorState";
import type { AxiosStatic } from "axios";

export function catchAndLogError(
  error: any,
  axios: AxiosStatic
): ErrorStates.ErrorStatesEnum {
  if (axios.isAxiosError(error)) {
    console.log("💥 Axios Network Error: " + error.message + " 💥");
    return ErrorStates.ErrorStatesEnum.NetworkError;
  } else {
    console.log("💥 An unexpected error occurred: " + error.message + " 💥");
    return ErrorStates.ErrorStatesEnum.ServerError;
  }
}
