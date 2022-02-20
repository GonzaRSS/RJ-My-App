
export const MainContent = () => {
const  title = "Soy un componente"


    return (
    <div>
        <h2> {title}</h2>
        <p>Soy el parrafo uno</p>
        <p>Soy el parrafo dos</p>
    </div>)
}
//export default mainContent


//otra opcion es pone en los parentesis de la array function -{title, text}-
//adentro de la etiquetas titulo, text o la funcion que cumpliran = h2 {title} o p{text}
//declarar que diran en el index html en app.js
// MainContent titulo="hola" text="texto genial"