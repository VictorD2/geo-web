import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGlobal } from "@contexts/global.context";
import { getColor, getTime } from "@utils/helpers";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import React from "react";

const Mapa = () => {
  const { points, day, horaFin, horaInicio } = useGlobal();

  const converTime = (time: string) => {
    const array = time.split(":");
    return Number(array[0]) * 60 + Number(array[1]);
  };

  const getIcon = (numero: number) => {
    const markerHtmlStyles = `
    background-color: ${getColor(numero)};
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF;
    position: relative;
    display: block;
    height: 2rem;
    width: 2rem;
    left: -1rem;
    top: -1rem;
    `;
    const icon = Leaflet.divIcon({
      html: `<span style="${markerHtmlStyles}" />`,
      className: "my-custom-pin",
      popupAnchor: [0, -36],
      iconAnchor: [0, 24],
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
