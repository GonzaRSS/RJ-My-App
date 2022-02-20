import { createContext, useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext'

export const CartWidget = () => {

const {cantidadCart, totalCart} = useContext (cart)

    return (
        <Link to="/cart" ClassName='cart-widget'>
            <BsFillCartFill />
            <span>{cantidadCart()}</span>
            <span>${totalCart()}</span>
        </Link>
    )
}