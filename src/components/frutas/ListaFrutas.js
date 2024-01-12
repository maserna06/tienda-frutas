import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import {Button} from "react-bootstrap";
import Swal from "sweetalert2";

export const Axios = axios.create({
  baseURL: "https://www.fruityvice.com/api/fruit/"
});

const ListaFrutas = () => {
    const [frutas, setFrutas] = useState({});

//   const getFruits = async () => {
//     const { data } = await Axios.get("all");
//     console.log("data:", data);
// 
//     for (let i = 0; i < data.length; i++) {
//         const fruta = data[i];
//         console.log('fruta:', fruta);
// 
//         let imagen = await getFruitImage(fruta.name);
//         console.log('imagen:', imagen);
//     }
// 
//     setFrutas(data);
//   };


//   const getFruitImage = async (fruitName) => {
//     console.log('fruitName:', fruitName);
//
//     const image = await Axios.get(`${fruitName}/image`);
//     console.log("image:", image);
//
//     // setFrutas(image);
//   };

    const addTocart = () => {
        Swal.fire('Fruta añadida al carrito con exito!')
    }

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
                <tr key={index}>
                    <td>{fruta.id}</td>
                    <td>
                        <Image src="holder.js/171x180" roundedCircle />
                    </td>
                    <td>{fruta.name}</td>
                    <td>{fruta.family}</td>
                    <td>{fruta.genus}</td>
                    <td>{fruta.nutritions.calories}</td>
                    <td>{fruta.nutritions.carbohydrates}</td>
                    <td>{fruta.nutritions.fat}</td>
                    <td>{fruta.nutritions.protein}</td>
                    <td>{fruta.nutritions.sugar}</td>
                    <td>
                        <Button variant="success" onClick={addTocart}>Comprar</Button>
                    </td>
                </tr>
            )
            :
            <></>
        }
      </tbody>
    </Table>
  );
};

export default ListaFrutas;