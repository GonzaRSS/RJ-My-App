import { Button, Card } from "react-bootstrap"

export const Producto = (title, content) => {
    return (
        <>
           

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://media.revistagq.com/photos/5ca5f975b73808e4ff819508/1:1/w_800,h_800,c_limit/zapatillas_basicas_para_hombre_moda_tendencias_2831.jpg" />
                <Card.Body>
                    <Card.Title>${title}</Card.Title>
                    <Card.Text>
                        ${content}
                    </Card.Text>
                    <Button variant="success">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

// <button type="button" class="btn btn-primary">Primary</button>
//<button className="btn btn-danger mx-5">Danger</button>
//<Button variant="success" size="lg">Boton bootstrap</Button>S