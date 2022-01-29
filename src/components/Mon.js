import PropTypes from 'prop-types'

const Mon = ({ mon }) => {
  return (
          <h3>{mon.name}</h3>
  )
}

Mon.propTypes = {
    mon: PropTypes.object.isRequired,
}

export default Mon
