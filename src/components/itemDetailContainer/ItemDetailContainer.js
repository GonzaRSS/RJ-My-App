import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import { itemDetail } from "../itemDetail/itemDetail";

export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()
    console.log(itemId);

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((el)=>el.id === Number(itemId)))
            })

            .finally(() => {
                setLoading(false)
            })
    })
    return (
        <div className="container my-5">
            {loading ?
                <h2>Cargando...</h2>
                : <itemDetail {...item} />}
        </div>
    )
}