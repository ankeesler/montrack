import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'

import MonInfo from './MonInfo'

const Mon = ({ mon }) => {
    return (
            <Container className="m-1 p-1 border border-secondary rounded">
            <MonInfo mon={mon} />
            </Container>
    )
}

Mon.propTypes = {
    mon: PropTypes.object.isRequired,
}

export default Mon
