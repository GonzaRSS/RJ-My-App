import { useEffect, useState } from "react"



export const itemCount = ({ max, min = 0, counter, setCounter }) => {

    const handleSumar = (e) => {
        e.stopPropagation()
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > max && setCounter(counter - 1)
    }

    return (

        <div onClick={click}>
            <button ClassName="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span ClassName="mx-3">{counter}</span>
            <button ClassName="btn btn-primary" onClick={handleSumar}>+</button>
        </div>
    )
}