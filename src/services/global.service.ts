import axios, { AxiosResponse } from "axios";
import { IGlobalResponse } from "@interfaces/global.interface";
import { API } from "@config/config";

const api = API + "/api/v1/archivo";

// Service Send Data
export const sendDataService = async (
  data: FormData
): Promise<AxiosResponse<IGlobalResponse, IGlobalResponse>> => {
  return axios.post(`${api}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
