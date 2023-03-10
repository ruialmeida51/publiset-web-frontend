import axios from "axios";
import { transformArrayResponse, type ArrayResponse } from "@/sdk/service";

export class Service {
  service: string;

  constructor(service: string) {
    this.service = service;
  }
}

export module publisetServicesClient {
  const path = import.meta.env.VITE_SERVER_URL + "/services";

  export async function getServices(): Promise<Service[]> {
    const request = await axios.get<ArrayResponse<Service>>(path);
    const transformedServices = transformArrayResponse(request.data);
    const services: Service[] = [];

    transformedServices.forEach((item) => {
      services.push(new Service(item.service));
    });

    return services;
  }
}

export default publisetServicesClient;
