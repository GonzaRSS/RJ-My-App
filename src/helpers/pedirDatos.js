import {stock} from "../data/stock"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    })
}
            
            //if (res === true) { resolve('promesa resuelta') }
            //else { reject('Promesa incumplida') }
          