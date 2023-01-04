export interface IUser {
  username: string;
  lastname: string;
  status: boolean;
  rol_id: number;
  code: string;
  name: string;
  id: number;
  rol: {
    id: number;
    name: string;
  };
}

export const initialStateUser: IUser = {
  id: -1,
  name: "",
  username: "",
  lastname: "",
  code: "",
  rol: {
    id: -1,
    name: "",
  },
  rol_id: -1,
  status: false,
};
