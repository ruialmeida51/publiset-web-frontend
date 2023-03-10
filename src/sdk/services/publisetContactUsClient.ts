import axios from "axios";
import { transformResponse, type Response } from "@/sdk/service";

export class ContactUs {
  email: string;
  phone: string;
  address: string;
  openHours: string;

  constructor(email: string, phone: string, address: string, openHours: string) {
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.openHours = openHours;
  }
}

export module publisetContactUsClient {
  const path = import.meta.env.VITE_SERVER_URL + "/contact-us";

  export async function getContactUs(): Promise<ContactUs> {
    const request = await axios.get<Response<ContactUs>>(path);
    return transformResponse(request.data);
  }
}

export default publisetContactUsClient;
