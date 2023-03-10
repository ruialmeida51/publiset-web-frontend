import axios from "axios";
import { transformArrayResponse, type ArrayResponse } from "@/sdk/service";

export class Catalog {
  name: string;
  redirectUrl: string;

  constructor(name: string, redirectUrl: string) {
    this.name = name;
    this.redirectUrl = redirectUrl;
  }
}

export module publisetCatalogClient {
  const path = import.meta.env.VITE_SERVER_URL + "/catalogs";

  export async function getCatalogs(): Promise<Catalog[]> {
    const request = await axios.get<ArrayResponse<Catalog>>(path);
    const transformedCatalogs = transformArrayResponse(request.data);
    const catalogs: Catalog[] = [];

    transformedCatalogs.forEach((item) => {
      catalogs.push(new Catalog(item.name, item.redirectUrl));
    });

    return catalogs;
  }
}

export default publisetCatalogClient;
