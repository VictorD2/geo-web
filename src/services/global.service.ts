import axios, { AxiosResponse } from "axios";
import { IGlobalResponse } from "@interfaces/global.interface";
import { API } from "@config/config";

const api = API + "/api/v1/archivo";

// Service Send Data
export const sendDataService = async (): Promise<
  AxiosResponse<IGlobalResponse, IGlobalResponse>
> => {
  const token = localStorage.getItem("token");
  return axios.post(
    `${api}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
