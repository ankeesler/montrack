import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import Values from './Values'

const MonInfo = ({ mon }) => {
    return (
            <Container>
            <Col>
            <h3>{mon.name}</h3>
            <img src={mon.imgSrc} alt={mon.name} />
            </Col>
            <Col>
            <Values title='IVs' values={mon.ivs} />
            </Col>
            </Container>
    )
}

MonInfo.propTypes = {
    mon: PropTypes.object.isRequired,
}

export default MonInfo
