import { loginService } from "@services/auth.service";
import { ILogin } from "@interfaces/auth.interface";
import { IUser } from "@interfaces/user.interface";

class ClsAuth {
  public static async login(loginValues: ILogin): Promise<IUser> {
    const res = await loginService(loginValues);
    const { data } = res;
    const { token, user } = data;
    localStorage.setItem("token", token);
    return user;
  }
  public static logout() {
    localStorage.removeItem("token");
  }
}

export default ClsAuth;
