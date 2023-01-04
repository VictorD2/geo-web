/* eslint-disable react-hooks/exhaustive-deps */
import { MapIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { initialStateUser } from "@interfaces/user.interface";
import AppInputTime from "@shared/InputTime/app_input_time";
import LegendModal from "@components/Home/LegendModal";
import { useGlobal } from "@contexts/global.context";
import AppButton from "@shared/Button/app_button";
import AppSelect from "@shared/Select/app_select";
import AppModal from "@shared/Modal/app_modal";
import ClsAuth from "@class/ClsAuth";
import ClsGlobal from "@class/ClsGlobal";

const HomePage = () => {
  const {
    setHoraInicio,
    setLoadData,
    setHoraFin,
    horaInicio,
    setPoints,
    loadData,
    horaFin,
    setUser,
    setDay,
    user,
    day,
  } = useGlobal();
  const router = useRouter();

  const [showLegend, setShowLegend] = useState<boolean>(false);

  const MapWithNoSSR = dynamic(() => import("./Mapa"), {
    ssr: false,
  });

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const getData = async () => {
    setLoadData(false);
    const res = await ClsGlobal.sendData();
    setPoints(res);
    setLoadData(true);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <main className="w-full h-screen">
      <div className={classNames("w-full bg-primary flex items-center ")}>
        <div className="flex lg:flex-row md:flex-row flex-col px-10 pt-2 pb-4 lg:gap-4 md:gap-4 gap-0 w-full items-center h-full shadow-2xl shadow-white">
          <AppSelect
            width="lg:w-1/5 md:w-1/5 w-full lg:pb-6 md:pb-6 pb-3"
            labelColor="text-white"
            label="Día"
            name="day"
            items={[
              "Lunes",
              "Martes",
              "Miercoles",
              "Jueves",
              "Viernes",
              "Sabado",
            ]}
            onChange={(e) => {
              setDay(e);
            }}
            selected={day}
          />
          <AppInputTime
            width="lg:w-1/5 md:w-1/5 w-full"
            labelColor="text-white"
            label="Hora Inicio"
            value={horaInicio}
            onChangeText={(e) => {
              setHoraInicio(e);
            }}
          />
          <AppInputTime
            width="lg:w-1/5 md:w-1/5 w-full"
            labelColor="text-white"
            label="Hora Fin"
            value={horaFin}
            onChangeText={(e) => {
              setHoraFin(e);
            }}
          />

          <AppButton
            width="lg:w-1/5 md:w-1/5 w-full mt-5"
            textColor="text-white font-bold"
            remixicon="ri-map-2-line"
            bgColor="bg-secondary"
            text="Ver Leyenda"
            onClick={() => {
              setShowLegend(true);
            }}
          />
          <AppButton
            width="lg:w-1/5 md:w-1/5 w-full mt-5"
            textColor="text-white font-bold"
            remixicon="ri-logout-box-r-line"
            bgColor="bg-primary"
            text="Salir"
            onClick={() => {
              ClsAuth.logout();
              setPoints([]);
              setUser(initialStateUser);
              router.push("/");
            }}
          />
        </div>
      </div>
      {loadData && (
        <div id="map" className={classNames("h-[calc(100vh-5rem)]", "w-full")}>
          <MapWithNoSSR />
        </div>
      )}
      {!loadData && (
        <div
          className={classNames("h-[calc(100vh-5rem)]", "w-full bg-primary")}
        >
          <div className="w-full h-full app-row justify-center items-center p-6 bg-primary">
            <div className="relative rounded-full bg-primary animate-spin h-56 w-56 border-8 border-b-secondary border-t-secondary border-l-primary border-r-primary" />
            <div className="absolute uppercase text-white">Cargando Información</div>
          </div>
        </div>
      )}
      <AppModal
        headerBgColor="bg-primary"
        width="lg:w-10/12 w-full"
        headerText={`Leyenda de ${user.name}`}
        IconHeader={MapIcon}
        open={showLegend}
        overflowClosed
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
