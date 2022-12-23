import { IData, IGlobalResponse, IPoint } from "@interfaces/global.interface";
import { sendDataService } from "@services/global.service";

class ClsGlobal {
  public static async sendData(formData: FormData): Promise<IPoint[]> {
    const { data } = await sendDataService(formData);
    const { datos } = data;
    console.log(datos);
    const array_datos: IData[] = [];
    for (let i = 0; i < datos.length; i++) {
      const element = datos[i];

      array_datos.push(JSON.parse(element));
    }
    const puntos: IPoint[] = [];
    for (let i = 0; i < array_datos.length; i++) {
      const element = array_datos[i];
      for (let j = 0; j < element.data.length; j++) {
        const element2 = element.data[j];
        puntos.push(element2);
      }
    }
    return puntos;
  }
}

export default ClsGlobal;
