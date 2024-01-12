import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Fruta = ({ fruta, index }) => {
    const addTocart = () => {
        Swal.fire('Fruta añadida al carrito con exito!');
    }

    return (
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
}

export default Fruta;