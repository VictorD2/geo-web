import React, { useContext, createContext, useState } from "react";
import { IGlobalContext, IPoint } from "@interfaces/global.interface";
import ClsGlobal from "@class/ClsGlobal";
import { toast } from "react-toastify";
import { toastConfig } from "@config/config";
import { getErrorResponse } from "@src/utils/helpers";

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [loadData, setLoadData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [points, setPoints] = useState<IPoint[]>([]);
  const [file, setFile] = useState<File>();
  const [day, setDay] = useState<string>("Lunes");
  const [horaInicio, setHoraInicio] = useState<string>("07:00");
  const [horaFin, setHoraFin] = useState<string>("23:58");

  const submitData = async () => {
    if (!file) return;
    setLoading(true);
    const toastId = toast.loading("Por favor espere...");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await ClsGlobal.sendData(formData);
      setPoints(response);
      toast.update(toastId, toastConfig("Procesado correctamente", "success"));
      setLoadData(true);
    } catch (error) {
      toast.update(toastId, toastConfig(getErrorResponse(error), "warning"));
    }
    setLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        loadData,
        setLoadData,
        file,
        setFile,
        loading,
        setLoading,
        submitData,
        points,
        setPoints,
        day,
        setDay,
        horaInicio,
        setHoraInicio,
        horaFin,
        setHoraFin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error(
      "useGlobal debe estar dentro del proveedor usuario context"
    );
  return context;
}
