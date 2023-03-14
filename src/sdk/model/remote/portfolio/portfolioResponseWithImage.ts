import type { ArrayResponse } from "@/sdk/service";
import type ImageResponse from "../images/imageResponse";

export default class PortfolioResponseWithImages {
  category_name: string;
  images: ArrayResponse<ImageResponse>;

  constructor(category_name: string, images: ArrayResponse<ImageResponse>) {
    this.category_name = category_name;
    this.images = images;
  }
}
