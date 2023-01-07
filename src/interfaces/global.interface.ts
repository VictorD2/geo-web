import { Dispatch } from "react";
import { IUser } from "@interfaces/user.interface";

export interface IGlobalContext {
  setShowTinyModal: Dispatch<boolean>;
  setPointsTiny: Dispatch<IPoint[]>;
  setHoraInicio: Dispatch<string>;
  setLoadData: Dispatch<boolean>;
  setPoints: Dispatch<IPoint[]>;
  setLoading: Dispatch<boolean>;
  setHoraFin: Dispatch<string>;
  setDay: Dispatch<string>;
  setUser: Dispatch<IUser>;
  showTinyModal: boolean;
  pointsTiny: IPoint[];
  horaInicio: string;
  loadData: boolean;
  loading: boolean;
  points: IPoint[];
  horaFin: string;
  day: string;
  user: IUser;
}

export interface IGlobalResponse {
  succes?: string;
  error?: string;
  datos: any[];
}

export interface IData {
  data: IPoint[];
}

export interface IPoint {
  RutaSimilar: number;
  longitud: number;
  latitud: number;
  index: number;
  Ruta: number;
  hora: number;
  dia: string;
}
