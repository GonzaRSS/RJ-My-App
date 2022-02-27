import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Producto = (id, nombre, desc, precio, img, stock) => {
    return (
        <>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>${nombre}</Card.Title>
                    <Card.Text>
                        ${desc}
                    </Card.Text>
                    <Card.Text>
                        ${precio}
                    </Card.Text>
                    <Card.Text>
                        ${stock}
                    </Card.Text>
                    <Link to={`/detail/${id}`}>
                        <Button variant="primary">Ver más</Button>
                    </Link>

                </Card.Body>
            </Card>
        </>
    )
}
