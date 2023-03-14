import type Image from "@/sdk/model/domain/image";

export default class PortfolioCategory {
  category_name: string;
  images: Image[];

  constructor(category_name: string, images: Image[]) {
    this.category_name = category_name;
    this.images = images;
  }
}
