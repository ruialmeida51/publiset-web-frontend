import axios from "axios";
import { transformArrayResponse, type ArrayResponse } from "@/sdk/service";
import type ServiceResponse from "../model/remote/services/serviceResponse";
import Service from "../model/domain/services/services";

export module publisetServicesClient {
  const path = import.meta.env.VITE_API_URL + "/services";

  export async function getServices(): Promise<Service[]> {
    const request = await axios.get<ArrayResponse<ServiceResponse>>(path);
    const servicesResponse = transformArrayResponse(request.data);
    const services: Service[] = [];

    servicesResponse.forEach((response) => {
      services.push(new Service(response.service));
    });

    return services;
  }
}

export default publisetServicesClient;
