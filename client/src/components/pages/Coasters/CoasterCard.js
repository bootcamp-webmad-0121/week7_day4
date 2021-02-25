import { Card, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const CoasterCard = ({ title, imageUrl, _id }) => {

    return (
        <Col md={4} className="coaster-card">
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <h3>{title}</h3>
                    <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm btn-block">Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CoasterCard