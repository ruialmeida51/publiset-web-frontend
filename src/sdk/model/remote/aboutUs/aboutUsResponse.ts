import type { ArrayResponse } from "@/sdk/service";
import type ImageResponse from "@/sdk/model/remote/images/imageResponse";

export class AboutUsResponse {
  title_one: string;
  description_one: string;
  title_two: string | null;
  description_two: string | null;
  images: ArrayResponse<ImageResponse>;

  constructor(
    title_one: string,
    description_one: string,
    title_two: string | null,
    description_two: string | null,
    images: ArrayResponse<ImageResponse>
  ) {
    this.title_one = title_one;
    this.description_one = description_one;
    this.title_two = title_two;
    this.description_two = description_two;
    this.images = images;
  }
}
