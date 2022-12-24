import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useGlobal } from "@contexts/global.context";
import { getColor, getTime } from "@src/utils/helpers";

const Mapa = () => {
  const { points, day, horaFin, horaInicio } = useGlobal();

  const converTime = (time: string) => {
    const array = time.split(":");
    return Number(array[0]) * 60 + Number(array[1]);
  };

  const getIcon = (numero: number) => {
    const markerHtmlStyles = `
    background-color: ${getColor(numero)};
    width: 2rem;
    height: 2rem;
    display: block;
    left: -1rem;
    top: -1rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`;
    const icon = Leaflet.divIcon({
      className: "my-custom-pin",
      iconAnchor: [0, 24],
      popupAnchor: [0, -36],
      html: `<span style="${markerHtmlStyles}" />`,
    });
    return icon;
  };

  return (
    <MapContainer
      center={[-8.122857, -79.034422]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points
        .filter((item) => item.dia === day)
        .filter(
          (item) =>
            item.hora >= converTime(horaInicio) &&
            item.hora <= converTime(horaFin)
        )
        .map((item) => {
          return (
            <Marker
              icon={getIcon(item.RutaSimilar)}
              key={item.index}
              position={[item.latitud, item.longitud]}
            >
              <Popup>{`Hora: ${getTime(item.hora)} Ruta: ${
                item.Ruta
              } Ruta Similar: ${item.RutaSimilar}`}</Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default Mapa;
