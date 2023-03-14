import axios from "axios";
import {
  transformArrayResponse,
  transformResponse,
  type Response,
} from "@/sdk/service";

import { AboutUs } from "../model/domain/aboutUs/aboutUs";
import Image from "../model/domain/image";
import type { AboutUsResponse } from "../model/remote/aboutUs/aboutUsResponse";

export module publisetAboutUsClient {
  const path = import.meta.env.VITE_API_URL + "/about-us?populate=*";

  export async function getAboutUs(): Promise<AboutUs> {
    const request = await axios.get<Response<AboutUsResponse>>(path);
    const aboutUsRemoteResponse = transformResponse(request.data);
    const imageResponse = transformArrayResponse(aboutUsRemoteResponse.images);

    const aboutUs = new AboutUs(
      aboutUsRemoteResponse.title_one,
      aboutUsRemoteResponse.description_one,
      aboutUsRemoteResponse.title_two,
      aboutUsRemoteResponse.description_two,
      imageResponse.map((imageResponse) => new Image(imageResponse.formats))
    );

    return aboutUs;
  }
}

export default publisetAboutUsClient;
