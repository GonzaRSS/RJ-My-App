import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"




export const ItemDetail = ({ id, nombre, img, desc, stock, precio, categoria }) => {

    const [cantidad, setCantidad] = useState(0)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)


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
            <h5>${precio}</h5>

            {
                isInCart(id)
                    ? <Link to="/cart" ClassName="btn btn success my-3">
                        Terminar la compra</Link>
                    :
                    <>
                        <itemCount
                            max={stock}
                            counter={cantidad}
                            setCounter={setCantidad} />


                        <button
                            ClassName="btn btn-success"
                            onclick={handleAgregar}
                            disabled={cantidad === 0}>

                            Agregar al carrito

                        </button>
                    </>
            }
        </div>
    )
}