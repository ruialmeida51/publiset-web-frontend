import Image from "@/sdk/model/domain/image";

export class AboutUs {
  title_one: string;
  description_one: string;
  title_two: string | null;
  description_two: string | null;
  images: Image[];

  constructor(
    title_one: string,
    description_one: string,
    title_two: string | null,
    description_two: string | null,
    images: Image[]
  ) {
    this.title_one = title_one;
    this.description_one = description_one;
    this.title_two = title_two;
    this.description_two = description_two;
    this.images = images;
  }
}
