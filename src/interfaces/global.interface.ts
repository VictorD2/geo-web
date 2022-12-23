import { Dispatch } from "react";

export interface IGlobalContext {
  loadData: boolean;
  setLoadData: Dispatch<boolean>;
  file: File | undefined;
  setFile: Dispatch<File | undefined>;
  loading: boolean;
  setLoading: Dispatch<boolean>;
  submitData: () => Promise<void>;
  points: IPoint[];
  setPoints: Dispatch<IPoint[]>;
  day: string;
  setDay: Dispatch<string>;
  horaInicio: string;
  setHoraInicio: Dispatch<string>;
  horaFin: string;
  setHoraFin: Dispatch<string>;
}

export interface IGlobalResponse {
  error?: string;
  succes?: string;
  datos: any[];
}

export interface IData {
  data: IPoint[];
}

export interface IPoint {
  Ruta: number;
  RutaSimilar: number;
  dia: string;
  hora: number;
  index: number;
  latitud: number;
  longitud: number;
}
