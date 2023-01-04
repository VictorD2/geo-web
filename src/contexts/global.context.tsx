import React, { useContext, createContext, useState } from "react";
import { IGlobalContext, IPoint } from "@interfaces/global.interface";
import { initialStateUser } from "@interfaces/user.interface";

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [horaInicio, setHoraInicio] = useState<string>("07:00");
  const [horaFin, setHoraFin] = useState<string>("23:58");
  const [loadData, setLoadData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [points, setPoints] = useState<IPoint[]>([]);
  const [user, setUser] = useState(initialStateUser);
  const [day, setDay] = useState<string>("Lunes");

  return (
    <GlobalContext.Provider
      value={{
        setHoraInicio,
        setLoadData,
        setLoading,
        horaInicio,
        setHoraFin,
        setPoints,
        loadData,
        loading,
        horaFin,
        setUser,
        points,
        setDay,
        user,
        day,
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
