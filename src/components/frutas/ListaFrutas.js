import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Fruta from "./Fruta";

export const Axios = axios.create({
  baseURL: "https://www.fruityvice.com/api/fruit/"
});

const ListaFrutas = () => {
    const [frutas, setFrutas] = useState({});

/**
 * @TODO:
 * Obtener las imagenes de las frutas desde la API,
 * ya que en la documentación aparece como obtener la imagen de cada fruta pero no funciona,
 * falta indagar mejor en la documentación la forma de obtener las imágenes,
 * al parecer ya no existe ese endpoint.
 */

//   const getFruitImage = async (fruitName) => {
//     console.log('fruitName:', fruitName);
//     const image = await Axios.get(`${fruitName}/image`);
//     console.log("image:", image);
//     // setFrutas(image);
//   };

  useEffect(() => {
    const getFruits = async () => {
        const { data } = await Axios.get("all");
        // console.log("data:", data);

        // for (let i = 0; i < data.length; i++) {
        //     const fruta = data[i];
        //     console.log('fruta:', fruta.name);
        //     // let imagen = await getFruitImage(fruta.name);
        //     // console.log('imagen:', imagen);
        // }

        setFrutas(data);
    };

    async function asyncCall() {
      await getFruits();
    }
    asyncCall();
  }, []);

  return (
    <Table responsive hover className="mt-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Familia</th>
          <th>Género</th>
          <th>Calorias</th>
          <th>Carbohidratos</th>
          <th>Grasa</th>
          <th>Proteina</th>
          <th>Azucar</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        { frutas.length > 0 ?
                frutas.map((fruta, index) =>
                    <Fruta
                        key={index}
                        fruta={fruta}
                        index={index}
                    />
                )
            :
                <></>
        }
      </tbody>
    </Table>
  );
};

export default ListaFrutas;