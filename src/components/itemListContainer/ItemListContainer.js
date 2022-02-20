import './ItemListCointainer.css'
import { Producto } from '../../ejemplos/producto'
import { Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { itemList } from '../itemList/itemList'
import { useParams } from 'react-router-dom'
import { MiContext } from '../../context/CartContext'


export const ItemListCointainer = () => {

    const contexto = useContext(MiContext)
    console.log(contexto.user);
    console.log(contexto.admin);

    const [productos, setProductos] = useState([])

    const { catId } = useParams()
    console.log(params.catId)

    console.log(stock.map((el) => {
        return {
            nombre: el.nombre,
            precio: el.precio,
        }
    })); //hace un mapeo y toma el nombre solmente del obj

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (catId) {
                    setProductos(res.filter((el) => el.categoria === catId));
                }
                else { setProductos(res) }
            })

            .catch((err) => {
                console.log(err)
            })

            .finally(() => {
                console.log("proceso finalizado")
            })
    }, [])

    return (<>
        <ItemList productos={productos} />
    </>
    )
}
