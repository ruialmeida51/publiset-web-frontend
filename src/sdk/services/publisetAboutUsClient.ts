import axios from "axios";
import { transformResponse, type Response } from "@/sdk/service";

export class AboutUs {
  title_one: string;
  description_one: string;
  title_two: string|null;
  description_two: string|null;

  constructor(title_one: string, description_one: string, title_two: string|null, description_two: string|null) {
    this.title_one = title_one;
    this.description_one = description_one;
    this.title_two = title_two;
    this.description_two = description_two;
  }
}

export module publisetAboutUsClient {
  const path = import.meta.env.VITE_SERVER_URL + "/about-us";

  export async function getAboutUs(): Promise<AboutUs> {
    const request = await axios.get<Response<AboutUs>>(path);
    return transformResponse(request.data);
  }
}

export default publisetAboutUsClient;
