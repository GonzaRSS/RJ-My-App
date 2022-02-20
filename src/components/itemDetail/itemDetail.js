import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { itemCount } from "../itemCount/itemCount"
import { Link } from "react-router-dom"


export const itemDetail = ({ id, nombre, img, desc, stock, categoria }) => {

    const [cantidad, setCantidad] = useState(0)

    const { cart, agregarAlCarrito, isInCart } = useContext(CartContext)
    console.log(cart)

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            agregarAlCarrito(addItem)
        }
    }

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>

            {
                isInCart(id)
                    ? <Link to="/cart" ClassName="btn btn success my-3">
                        Terminar la compra</Link>
                    :
                    <>
                        <itemCount max={stock} counter={cantidad} setCounter={setCantidad} />


                        <button ClassName="btn btn-success" onclick={handleAgregar}>
                            Agregar al carrito</button>
                    </>


            }

        </div>
    )
}