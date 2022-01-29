import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import MonInfo from './MonInfo'

const Mon = ({ mon }) => {
    return (
            <Container>
            <Row>
            <MonInfo mon={mon} />
            </Row>
            </Container>
    )
}

Mon.propTypes = {
    mon: PropTypes.object.isRequired,
}

export default Mon
