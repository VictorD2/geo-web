/* eslint-disable no-unused-vars */
export const getErrorResponse = (error: any): string => {
  let errorMessage: string = error.message;
  if (error.response) {
    if (error.response.data) {
      if (error.response.data.message)
        errorMessage = error.response.data.message;
    }
  }
  return errorMessage;
};

export const getTime = (time: number) => {
  const hora = Math.floor(time / 60);
  const minutos = time - hora * 60;
  let horaStr = `${hora}`;
  let minutoStr = `${minutos}`;
  if (`${hora}`.length === 1) {
    horaStr = `0${hora}`;
  }
  if (`${minutos}`.length === 1) {
    minutoStr = `0${minutos}`;
  }
  return `${horaStr}:${minutoStr}`;
};

export const getColor = (numero: number) => {
  const colors = [
    "#334155",
    "#b91c1c",
    "#c2410c",
    "#a16207",
    "#15803d",
    "#0e7490",
    "#0369a1",
    "#1d4ed8",
    "#6d28d9",
    "#be123c",
    "#b78b57",
    "#94475b",
    "#21aff9",
    "#52368f",
    "#921cac",
    "#1bfb66",
    "#d96a6f",
    "#60e002",
    "#1c5a48",
    "#2f6302",
    "#e10b33",
  ];
  return colors[numero];
};
