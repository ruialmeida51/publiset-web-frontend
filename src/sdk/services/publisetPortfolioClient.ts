import axios from "axios";
import { transformArrayResponse, transformArrayResponseWithIds, transformResponse, type ArrayResponse, type Response } from "@/sdk/service";
import type PortfolioResponse from "../model/remote/portfolio/portfolioResponse";
import Portfolio from "../model/domain/portfolio/portfolio";
import PortfolioCategory from "../model/domain/portfolio/portfolioCategory";
import type PortfolioResponseWithImages from "../model/remote/portfolio/portfolioResponseWithImage";
import Image from "@/sdk/model/domain/image"

export module publisetContactUsClient {
  const path = import.meta.env.VITE_API_URL + "/portfolios";

  export async function getPortfolio(): Promise<Portfolio> {
    const request = await axios.get<ArrayResponse<PortfolioResponse>>(path);
    const portfolioResponse = transformArrayResponseWithIds(request.data);
    const categories = new Map<string, string>();

    portfolioResponse.forEach((category: PortfolioResponse, id: string) => {
      categories.set(id, category.category_name);
    });

    return new Portfolio(categories);
  }

  export async function getPortfolioCategoryById(id: string): Promise<PortfolioCategory> {
    const requestUrl = `${path}/${id}?populate=*`;
    console.log(requestUrl);
    const request = await axios.get<Response<PortfolioResponseWithImages>>(requestUrl);
    const portfolioResponse = transformResponse(request.data);
    const imageResponse = transformArrayResponse(portfolioResponse.media);

    return new PortfolioCategory(
      portfolioResponse.category_name,
      imageResponse.map((imageResponse) => new Image(imageResponse.formats))
    );
  }
}

export default publisetContactUsClient;
