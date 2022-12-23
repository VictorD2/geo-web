import React from "react";
import dynamic from "next/dynamic";
import { useGlobal } from "@contexts/global.context";
import AppButton from "@shared/Button/app_button";
import AppSelect from "@shared/Select/app_select.";
import AppInputTime from "@shared/InputTime/app_input_time";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const HomePage = () => {
  const {
    loadData,
    loading,
    setFile,
    submitData,
    setDay,
    day,
    horaFin,
    horaInicio,
    setHoraFin,
    setHoraInicio,
  } = useGlobal();

  const MapWithNoSSR = dynamic(() => import("./Mapa"), {
    ssr: false,
  });

  const handleChangeInputFile = (e: ChangeEvent) => {
    if (e.target.files && e.target.files.length !== 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <main className="w-full h-screen">
      <div className="w-full bg-primary min-h-[4rem] flex items-center">
        {loadData ? (
          <div className="flex px-10 pt-2 pb-4 gap-4 w-full items-center h-full">
            <AppSelect
              label="Día"
              labelColor="text-white"
              items={[
                "Lunes",
                "Martes",
                "Miercoles",
                "Jueves",
                "Viernes",
                "Sabado",
              ]}
              name="day"
              onChange={(e) => {
                console.log(e);
                setDay(e);
              }}
              width="lg:w-1/5 pb-6"
              selected={day}
            />
            <AppInputTime
              width="lg:w-1/5"
              label="Hora Inicio"
              labelColor="text-white"
              onChangeText={(e) => {
                setHoraInicio(e)
              }}
            />
            <AppInputTime
              width="lg:w-1/5"
              label="Hora Fin"
              labelColor="text-white"
              onChangeText={(e) => {
                setHoraFin(e)
              }}
            />
          </div>
        ) : (
          <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full flex items-center h-full px-4 gap-2">
            <input
              onChange={handleChangeInputFile}
              type="file"
              className="bg-white w-full"
            />
            <AppButton
              onClick={submitData}
              loading={loading}
              disabled={loading}
              text="Enviar"
              textColor="text-white font-bold"
              width="w-40"
              borderColor="border-white"
              remixicon="ri-send-plane-line"
            />
          </div>
        )}
      </div>
      <div id="map" className="w-full h-screen">
        <MapWithNoSSR />
      </div>
    </main>
  );
};

export default HomePage;
