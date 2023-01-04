import axios, { AxiosResponse } from "axios";
import { ILoginResponse } from "@interfaces/auth.interface";
import { API2 } from "@config/config";
import { ILogin } from "@interfaces/auth.interface";

const api = API2 + "/api/v1/auth/signin";

export const loginService = async (
  login: ILogin
): Promise<AxiosResponse<ILoginResponse, ILoginResponse>> => {
  return axios.post(`${api}`, login);
};
