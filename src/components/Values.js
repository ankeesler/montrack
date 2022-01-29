import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Values = ({ title, values }) => {
    return (
            <Container>
            <Row>
            <h5>{title}</h5>
            </Row>
            <Row>
            {values.map((value, index) => (<Col key={index}>{value}</Col>))}
        </Row>
            </Container>
    )
}

Values.propTypes = {
    title: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
}

export default Values
