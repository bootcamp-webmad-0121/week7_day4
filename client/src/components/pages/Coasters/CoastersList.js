import CoasterCard from './CoasterCard'

import { Row } from 'react-bootstrap'

const CoastersList = ({ coasters }) => {
    return (
        <Row>
            {coasters?.map(elm => <CoasterCard key={elm._id} {...elm} />)}
        </Row>
    )
}

export default CoastersList