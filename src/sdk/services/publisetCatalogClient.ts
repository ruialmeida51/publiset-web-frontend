import axios from "axios";
import { transformArrayResponse, type ArrayResponse } from "@/sdk/service";
import type CatalogResponse from "../model/remote/catalog/catalogResponse";
import Catalog from "../model/domain/catalog/catalog";

export module publisetCatalogClient {
  const path = import.meta.env.VITE_API_URL + "/catalogs";

  export async function getCatalogs(): Promise<Catalog[]> {
    const request = await axios.get<ArrayResponse<CatalogResponse>>(path);
    const catalogResponse = transformArrayResponse(request.data);
    const catalogs: Catalog[] = [];

    catalogResponse.forEach((response) => {
      catalogs.push(new Catalog(response.name, response.redirectUrl));
    });

    return catalogs;
  }
}

export default publisetCatalogClient;
