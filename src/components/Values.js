import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Value from './Value'

const Values = ({ title, values }) => {
    const details = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']
    return (
            <Container>
            <Row>
            <h5>{title}</h5>
            </Row>
            <Row>
            {values.map((value, index) => (<Col key={index}><Value text={String(value)} detail={details[index]} /></Col>))}
        </Row>
            </Container>
    )
}

Values.propTypes = {
    title: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
}

export default Values
