import axios from "axios";
import { transformResponse, type Response } from "@/sdk/service";
import type ContactUsResponse from "../model/remote/contactUs/contactUsResponse";
import ContactUs from "../model/domain/contactUs/contactUs";

export module publisetContactUsClient {
  const path = import.meta.env.VITE_API_URL + "/contact";

  export async function getContactUs(): Promise<ContactUs> {
    const request = await axios.get<Response<ContactUsResponse>>(path);
    const contactUsResponse = transformResponse(request.data);
    return new ContactUs(
      contactUsResponse.email,
      contactUsResponse.phone_number,
      contactUsResponse.address,
      contactUsResponse.open_hours
    );
  }
}

export default publisetContactUsClient;
