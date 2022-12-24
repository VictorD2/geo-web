/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobal } from "@contexts/global.context";
import { IPoint } from "@interfaces/global.interface";
import AppTable from "@shared/Table/app_table";
import { getColor, getTime } from "@src/utils/helpers";
import React, { useEffect, useState } from "react";

const LegendModal = () => {
  const { points, day } = useGlobal();
  const [pointGroup, setPointGroup] = useState<IPoint[][]>([]);
  const [frecuency, setFrecuency] = useState<number[]>([]);

  const groupPoints = (puntos: IPoint[]) => {
    let rutaSimilar = 0;
    const rutas = [];
    const frecuencias = [];
    const max = Math.max(...puntos.map((item) => item.RutaSimilar));
    while (rutaSimilar <= max) {
      const puntosSimilares = puntos.filter(
        (item) => item.RutaSimilar === rutaSimilar
      );
      const frecuencia = new Set(puntosSimilares.map((item) => item.Ruta));
      if (frecuencia.size !== 0) frecuencias.push(frecuencia.size);
      let ruta = Math.max(...puntosSimilares.map((item) => item.Ruta));
      const rutaPatron = puntosSimilares.filter((item) => item.Ruta === ruta);
      rutas.push(rutaPatron);
      rutaSimilar += 1;
    }
    setFrecuency(frecuencias);
    setPointGroup(rutas);
  };

  const TABLE_LABELS = [
    { field: "", label: "#", orderBy: false, type: "number" },
    {
      field: "puntoInicio",
      label: "Punto Inicio",
      orderBy: false,
      type: "string",
    },
    {
      field: "puntoFinal",
      label: "Punto Final",
      orderBy: false,
      type: "string",
    },
    { field: "hora", label: "Hora", orderBy: false, type: "string" },
    { field: "ruta", label: "Ruta", orderBy: false, type: "string" },
    { field: "rutaSimilar", label: "Ruta Similar", orderBy: false, type: "string" },
    {
      field: "frecuencia",
      label: "Frecuencia",
      orderBy: false,
      type: "string",
    },
    { field: "color", label: "Color", orderBy: false, type: "string" },
  ];

  const columns = (
    <tr>
      {TABLE_LABELS.map((item) => {
        return (
          <th
            key={item.label}
            className={`px-3 py-3 border-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
          >
            <div className="w-full h-full flex gap-1 items-center justify-start">
              {item.label}
            </div>
          </th>
        );
      })}
    </tr>
  );

  const rows = pointGroup
    .filter((itemR) => itemR.length !== 0)
    .map((item, i) => {
      return (
        <tr
          key={i + "RutaSimilar"}
          className={`${
            i % 2 === 0
              ? "bg-gray-50 hover:bg-gray-100"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {i}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {`${item[0].latitud} , ${item[0].longitud}`}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {`${item[item.length - 1].latitud} , ${
              item[item.length - 1].longitud
            }`}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {`${getTime(item[0].hora)} - ${getTime(
              item[item.length - 1].hora
            )}`}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {item[item.length - 1].Ruta}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {item[item.length - 1].RutaSimilar}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10">
            {frecuency[i]}
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-10`}
            style={{ background: getColor(item[0].RutaSimilar) }}
          ></td>
        </tr>
      );
    });

  useEffect(() => {
    groupPoints(points.filter((item) => item.dia === day));
  }, [points]);

  return (
    <div className="min-h-[20rem]">
      <AppTable columns={columns} count={rows.length} loading rows={rows} />
    </div>
  );
};

export default LegendModal;
