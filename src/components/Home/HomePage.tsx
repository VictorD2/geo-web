import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MapIcon } from "@heroicons/react/24/outline";
import { useGlobal } from "@contexts/global.context";
import AppButton from "@shared/Button/app_button";
import AppSelect from "@shared/Select/app_select.";
import AppInputTime from "@shared/InputTime/app_input_time";
import AppModal from "@shared/Modal/app_modal";
import LegendModal from "./LegendModal";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const HomePage = () => {
  const {
    loadData,
    loading,
    setFile,
    submitData,
    setDay,
    day,
    setHoraFin,
    setHoraInicio,
    horaFin,
    horaInicio,
  } = useGlobal();

  const [showLegend, setShowLegend] = useState<boolean>(false);

  const MapWithNoSSR = dynamic(() => import("./Mapa"), {
    ssr: false,
  });

  const handleChangeInputFile = (e: ChangeEvent) => {
    if (e.target.files && e.target.files.length !== 0) {
      setFile(e.target.files[0]);
    }
  };

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <main className="w-full h-screen">
      <div
        className={classNames(
          "w-full bg-primary  flex items-center",
          loadData ? "lg:h-32 md:h-32 h-96" : "h-20"
        )}
      >
        {loadData ? (
          <div className="flex lg:flex-row md:flex-row flex-col px-10 pt-2 pb-4 lg:gap-4 md:gap-4 gap-0 w-full items-center h-full">
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
              width="lg:w-1/5 md:w-1/5 w-full lg:pb-6 md:pb-6 pb-3"
              selected={day}
            />
            <AppInputTime
              width="lg:w-1/5 md:w-1/5 w-full"
              label="Hora Inicio"
              labelColor="text-white"
              value={horaInicio}
              onChangeText={(e) => {
                setHoraInicio(e);
              }}
            />
            <AppInputTime
              width="lg:w-1/5 md:w-1/5 w-full"
              label="Hora Fin"
              labelColor="text-white"
              value={horaFin}
              onChangeText={(e) => {
                setHoraFin(e);
              }}
            />

            <AppButton
              text="Ver Leyenda"
              width="lg:w-1/5 md:w-1/5 w-full mt-5"
              textColor="text-white font-bold"
              remixicon="ri-map-2-line"
              bgColor="bg-secondary"
              onClick={() => {
                setShowLegend(true);
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
      <div
        id="map"
        className={classNames(
          loadData
            ? "lg:h-[calc(100vh-8rem)] md:h-[calc(100vh-8rem)] h-[calc(100vh-8rem)]"
            : "h-[calc(100vh-5rem)]",
          "w-full"
        )}
      >
        <MapWithNoSSR />
      </div>
      <AppModal
        width="lg:w-10/12 w-full"
        overflowClosed
        headerBgColor="bg-primary"
        headerText="Leyenda"
        IconHeader={MapIcon}
        open={showLegend}
        onClose={() => {
          setShowLegend(false);
        }}
      >
        <LegendModal />
      </AppModal>
    </main>
  );
};

export default HomePage;
