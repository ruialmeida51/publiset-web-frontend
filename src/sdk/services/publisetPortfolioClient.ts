import axios from "axios";
import { transformArrayResponse, type ArrayResponse } from "@/sdk/service";
import type PortfolioResponse from "../model/remote/portfolio/portfolioResponse";
import Portfolio from "../model/domain/portfolio/portfolio";

export module publisetContactUsClient {
  const path = import.meta.env.VITE_API_URL + "/portfolios";

  export async function getPortfolio(): Promise<Portfolio> {
    const request = await axios.get<ArrayResponse<PortfolioResponse>>(path);
    const portfolioResponse = transformArrayResponse(request.data);
    const categories = [] as string[];

    portfolioResponse.forEach((category) => categories.push(category.category_name));

    return new Portfolio(categories);
  }
}

export default publisetContactUsClient;
