import PropTypes from 'prop-types'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import Values from './Values'

const MonInfo = ({ mon }) => {
    const imgStyle = {
        height: 'auto',
        width: 'auto',
        maxWidth: '100px',
        maxHeight: '100px',
    }
    return (
            <Row>

            <Col className="text-center">
            <h3 style={{textAlign: 'center'}}>{mon.name}</h3>
            <Image src={mon.imgSrc} alt={mon.name} style={imgStyle} />
            </Col>

            <Col>
            <Values title='IVs' values={mon.ivs} />
            </Col>
            <Col>
            <Values title='EVs' values={mon.evs} />
            </Col>

            </Row>
    )
}

MonInfo.propTypes = {
    mon: PropTypes.object.isRequired,
}

export default MonInfo
